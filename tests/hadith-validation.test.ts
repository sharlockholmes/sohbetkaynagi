import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import { hadithCollections } from "@/data/hadith-collections";
import {
  HADITH_PRIMARY_CATALOG_AUDIT_STATUS,
  HADITH_PRIMARY_CATALOG_BASELINE_RECORD_COUNT,
  HADITH_PRIMARY_CATALOG_BASELINE_SHA256,
  HADITH_PRIMARY_CATALOG_LEGACY_SNAPSHOT_SHA256,
  HADITH_PRIMARY_CATALOG_STATUS,
  HADITH_PRIMARY_CATALOG_VERSION,
  HADITH_PRIMARY_REFERENCE_VERIFICATION_STATUS,
  PRIMARY_HADITH_V1_IDS,
  hadithPrimaryCatalogRelease,
} from "@/data/hadith-catalog-version";
import { hadithReferences } from "@/data/hadith-references";
import {
  QURAN_CATALOG_BASELINE_SHA256,
  quranCatalogRelease,
} from "@/data/quran-catalog-version";
import { topics } from "@/data/topics-v12";
import { verseReferenceById } from "@/data/verse-references";
import type { HadithReference } from "@/domain/hadith-types";
import { validateContent } from "@/lib/content-validation";
import {
  collectHadithContentErrors,
  hadithReferenceSchema,
  validateHadithContent,
} from "@/lib/hadith-validation";
import {
  assertHadithPrimaryV1Audit,
  auditHadithPrimaryV1,
  fingerprintHadithPrimaryV1Baseline,
} from "@/lib/hadith-primary-v1-audit";
import {
  getPrimaryHadithV1References,
  getSecondaryHadithReferences,
  isPrimaryHadithV1,
} from "@/lib/hadith-primary-v1";
import {
  buildQuranV1AuditSnapshot,
  serializeQuranV1AuditSnapshot,
} from "@/lib/quran-v1-audit";

const fixture: HadithReference = {
  id: "validation-fixture-only",
  topicId: "sabir",
  relationType: "direct",
  relevanceReason: "Yalnız şema testi; dinî içerik değildir.",
  arabicText: null,
  arabicTextType: null,
  narrator: null,
  collectionId: null,
  bookName: null,
  chapterName: null,
  primaryLocator: { scheme: "legacy", value: "validation-only" },
  alternateLocators: [],
  hadithNumber: null,
  alternateNumbering: [],
  sourceReference: null,
  grading: "unknown",
  gradingSource: null,
  translationTr: null,
  translationStatus: "missing",
  translationMethod: null,
  translationReviewedBy: null,
  translationVerifiedAt: null,
  translationNotes: null,
  verificationStatus: "draft",
  verifiedAt: null,
  reviewerNote: "Yalnız şema testi; dinî içerik değildir.",
  provenance: null,
  verificationProviders: [],
};

const primaryHadithReferences = getPrimaryHadithV1References(hadithReferences);

function issues(value: unknown) {
  const result = hadithReferenceSchema.safeParse(value);
  return result.success ? [] : result.error.issues;
}

describe("hadis pilot veri altyapısı", () => {
  it("beş aslî koleksiyon ve tam 50 pilot kayıt içerir", () => {
    expect(hadithCollections).toHaveLength(5);
    expect(hadithCollections.map((collection) => collection.id).sort()).toEqual([
      "jami-at-tirmidhi",
      "musnad-ahmad",
      "sahih-al-bukhari",
      "sahih-muslim",
      "sunan-abi-dawud",
    ]);
    expect(hadithReferences).toHaveLength(50);
    expect(primaryHadithReferences).toHaveLength(50);
    expect(getSecondaryHadithReferences(hadithReferences)).toHaveLength(0);
    expect(
      hadithCollections.filter((collection) => collection.priority === "secondary"),
    ).toHaveLength(2);
    expect(
      hadithCollections.filter((collection) => collection.priority === "additional"),
    ).toHaveLength(1);
    expect(hadithCollections.find((collection) => collection.id === "musnad-ahmad")).toMatchObject({
      canonicalName: "Musnad Ahmad",
      priority: "additional",
      usagePolicy: "original_source",
    });
  });

  it("boş hadis listesi de validation'dan geçebilir", () => {
    expect(
      validateHadithContent({
        topics,
        hadithCollections: [],
        hadithReferences: [],
      }),
    ).toBe(true);
  });

  it("frozen primary baseline'da canonical 1–50 konularının her biri için tam bir kayıt tutar", () => {
    const canonicalTopicIds = topics.map((topic) => topic.id);
    const counts = new Map<string, number>();
    primaryHadithReferences.forEach((reference) => {
      counts.set(reference.topicId, (counts.get(reference.topicId) ?? 0) + 1);
    });

    expect(Array.from(counts.keys()).sort()).toEqual(
      Array.from(canonicalTopicIds).sort(),
    );
    canonicalTopicIds.forEach((topicId) =>
      expect(counts.get(topicId)).toBe(1),
    );
    expect(primaryHadithReferences.map((reference) => reference.topicId)).toEqual(
      canonicalTopicIds,
    );
  });

  it("pilot kayıtların yayın öncesi durumlarını eksiksiz korur", () => {
    const statusCounts = {
      sourceLocated: primaryHadithReferences.filter(
        (reference) => reference.verificationStatus === "source_located",
      ).length,
      referenceVerified: primaryHadithReferences.filter(
        (reference) => reference.verificationStatus === "reference_verified",
      ).length,
      fullyVerified: primaryHadithReferences.filter(
        (reference) => reference.verificationStatus === "fully_verified",
      ).length,
    };

    expect(statusCounts).toEqual({
      sourceLocated: 0,
      referenceVerified: 50,
      fullyVerified: 0,
    });
    primaryHadithReferences.forEach((reference) => {
      expect(reference.relationType).toBe("direct");
    });
    expect(
      primaryHadithReferences.filter(
        (reference) => reference.translationStatus === "ai_draft",
      ),
    ).toHaveLength(20);
    expect(
      primaryHadithReferences.filter(
        (reference) => reference.translationStatus === "missing",
      ),
    ).toHaveLength(30);
    expect(
      primaryHadithReferences.filter(
        (reference) => reference.translationStatus === "human_reviewed",
      ),
    ).toHaveLength(0);
    expect(
      primaryHadithReferences.filter(
        (reference) => reference.translationStatus === "verified",
      ),
    ).toHaveLength(0);
  });

  it("50 kaydı reference_verified seviyesinde eksiksiz tutar", () => {
    const references = primaryHadithReferences.filter(
      (reference) => reference.verificationStatus === "reference_verified",
    );

    expect(references).toHaveLength(50);
    references.forEach((reference) => {
      expect(reference.verificationStatus).toBe("reference_verified");
      expect(reference.arabicText).toBeTruthy();
      expect(reference.arabicTextType).toMatch(/^(full_matn|excerpt)$/);
      expect(reference.narrator).toBeTruthy();
      expect(reference.sourceReference).toBeTruthy();
      expect(["sahih", "hasen", "hasan_sahih"]).toContain(
        reference.grading,
      );
      expect(reference.gradingSource).toBeTruthy();
      expect(reference.provenance).toBeTruthy();
      expect(reference.verificationProviders.length).toBeGreaterThan(0);
    });
  });

  it("20 kaydı AI çalışma tercümesi, kalan 30 kaydı missing tutar", () => {
    const drafts = primaryHadithReferences.filter(
      (reference) => reference.translationStatus === "ai_draft",
    );
    const missing = primaryHadithReferences.filter(
      (reference) => reference.translationStatus === "missing",
    );

    expect(drafts).toHaveLength(20);
    drafts.forEach((reference) => {
      expect(reference.translationTr).toBeTruthy();
      expect(reference.translationMethod).toBe("ai_from_verified_arabic");
      expect(reference.translationReviewedBy).toBeNull();
      expect(reference.translationVerifiedAt).toBeNull();
    });
    expect(missing).toHaveLength(30);
    missing.forEach((reference) => {
      expect(reference.translationTr).toBeNull();
      expect(reference.translationMethod).toBeNull();
      expect(reference.translationReviewedBy).toBeNull();
      expect(reference.translationVerifiedAt).toBeNull();
      expect(reference.translationNotes).toBeNull();
    });
  });

  it("11–20 grubunu reference_verified, tam matnlı ve ai_draft tutar", () => {
    const expected = [
      [
        "ahiret-ve-hesap-bilinci",
        "sahih-al-bukhari",
        "6536",
        "Book 81, Hadith 125",
      ],
      ["guzel-ahlak", "sahih-al-bukhari", "3559", "Book 61, Hadith 68"],
      [
        "dogruluk-ve-durustluk",
        "sahih-al-bukhari",
        "6094",
        "Book 78, Hadith 121",
      ],
      [
        "giybet-ve-dili-korumak",
        "sahih-muslim",
        "2589",
        "Book 45, Hadith 91",
      ],
      [
        "ofkeye-hakim-olmak",
        "sahih-al-bukhari",
        "6114",
        "Book 78, Hadith 141",
      ],
      [
        "affetmek-ve-bagislamak",
        "sahih-muslim",
        "2588",
        "Book 45, Hadith 90",
      ],
      ["merhamet", "sahih-al-bukhari", "7376", "Book 97, Hadith 6"],
      [
        "kibir-ve-buyuklenme",
        "sahih-muslim",
        "91a",
        "Book 1, Hadith 171",
      ],
      [
        "haset-ve-kiskanclik",
        "sahih-al-bukhari",
        "6065",
        "Book 78, Hadith 95",
      ],
      [
        "emanet-ve-sorumluluk",
        "sahih-al-bukhari",
        "7138",
        "Book 93, Hadith 2",
      ],
    ] as const;
    const topicIds = new Set<string>(expected.map(([topicId]) => topicId));
    const verified = primaryHadithReferences.filter((reference) =>
      topicIds.has(reference.topicId),
    );

    expect(verified).toHaveLength(10);
    expect(
      verified.map((reference) => [
        reference.topicId,
        reference.collectionId,
        reference.primaryLocator.value,
        reference.alternateLocators[0]?.value,
      ]),
    ).toEqual(expected);
    verified.forEach((reference) => {
      expect(reference.relationType).toBe("direct");
      expect(reference.verificationStatus).toBe("reference_verified");
      expect(reference.arabicText).toBeTruthy();
      expect(reference.arabicTextType).toBe("full_matn");
      expect(reference.narrator).toBeTruthy();
      expect(reference.sourceReference).toBeTruthy();
      expect(reference.grading).toBe("sahih");
      expect(reference.gradingSource).toBeTruthy();
      expect(reference.translationStatus).toBe("ai_draft");
      expect(reference.translationTr).toBeTruthy();
      expect(reference.translationMethod).toBe("ai_from_verified_arabic");
      expect(reference.translationReviewedBy).toBeNull();
      expect(reference.translationVerifiedAt).toBeNull();
      expect(reference.verifiedAt).toBe("2026-08-31");
      expect(reference.provenance).toContain("Source work:");
      expect(reference.verificationProviders).toHaveLength(2);
      expect(
        reference.verificationProviders.map((provider) => provider.id),
      ).toEqual(["sunnah-com", "dorar"]);
    });
  });

  it("topic 11–20 için oluşturulan on AI çalışma tercümesini birebir korur", () => {
    const byId = new Map(
      primaryHadithReferences.map((reference) => [reference.id, reference]),
    );
    const expected = new Map([
      [
        "ahiret-hesap-bukhari-6536",
        "Kim hesaba ayrıntılı biçimde çekilirse azap görür. Âişe, ‘Yüce Allah, “Kolay bir hesaba çekilecek.” buyurmuyor mu?’ diye sordu. O, ‘Bu, yalnızca sunulmadır.’ buyurdu.",
      ],
      [
        "guzel-ahlak-bukhari-3559",
        "Peygamber çirkin sözlü değildi; çirkin söz söyleyen biri de değildi. Şöyle buyururdu: ‘Sizin en hayırlılarınız, ahlâkı en güzel olanlarınızdır.’",
      ],
      [
        "dogruluk-bukhari-6094",
        "Şüphesiz doğruluk iyilik ve erdeme götürür; iyilik ve erdem de cennete götürür. Kişi doğru söyleye söyleye sonunda sıddîk olur. Yalan ise günaha ve kötülüğe götürür; günah ve kötülük de ateşe götürür. Kişi yalan söyleye söyleye sonunda Allah katında yalancı yazılır.",
      ],
      [
        "giybet-muslim-2589",
        "‘Gıybetin ne olduğunu biliyor musunuz?’ diye sordu. Onlar, ‘Allah ve Resûlü daha iyi bilir.’ dediler. O, ‘Kardeşini hoşlanmadığı bir şeyle anmandır.’ buyurdu. ‘Söylediğim şey kardeşimde varsa ne dersiniz?’ denildi. O, ‘Söylediğin şey onda varsa onun gıybetini etmiş olursun; onda yoksa ona bühtan etmiş olursun.’ buyurdu.",
      ],
      [
        "ofke-bukhari-6114",
        "Güçlü kimse, insanları güreşte yere seren değildir. Asıl güçlü, öfke anında kendisine hâkim olan kimsedir.",
      ],
      [
        "affetmek-muslim-2588",
        "Sadaka malı eksiltmez. Allah, affeden bir kulun izzetini artırır. Kim Allah için tevazu gösterirse Allah onu yükseltir.",
      ],
      [
        "merhamet-bukhari-7376",
        "İnsanlara merhamet etmeyene Allah merhamet etmez.",
      ],
      [
        "kibir-muslim-91a",
        "Kalbinde zerre ağırlığınca kibir bulunan kimse cennete girmez. Bir adam, ‘Kişi elbisesinin güzel, ayakkabısının da güzel olmasını sever.’ dedi. O, ‘Şüphesiz Allah güzeldir, güzelliği sever. Kibir, hakkı reddetmek ve insanları küçümsemektir.’ buyurdu.",
      ],
      [
        "haset-bukhari-6065",
        "Birbirinize buğzetmeyin, birbirinize haset etmeyin ve birbirinize sırt çevirmeyin. Ey Allah’ın kulları, kardeş olun. Bir Müslümanın kardeşiyle üç günden fazla küs kalması helâl değildir.",
      ],
      [
        "emanet-sorumluluk-bukhari-7138",
        "Dikkat edin! Hepiniz birer gözeticisiniz ve hepiniz sorumluluğunuz altındakilerden sorgulanacaksınız. İnsanların başındaki yönetici bir gözeticidir ve sorumluluğu altındakilerden sorgulanacaktır. Erkek, aile halkının gözeticisidir ve sorumluluğu altındakilerden sorgulanacaktır. Kadın, kocasının ev halkının ve çocuğunun gözeticisidir ve onlardan sorumludur. Bir kimsenin hizmetçisi, efendisinin malının gözeticisidir ve ondan sorumludur. Dikkat edin! Hepiniz birer gözeticisiniz ve hepiniz sorumluluğunuz altındakilerden sorgulanacaksınız.",
      ],
    ]);

    expected.forEach((translation, id) => {
      expect(byId.get(id)).toMatchObject({
        translationTr: translation,
        translationStatus: "ai_draft",
        translationMethod: "ai_from_verified_arabic",
        translationReviewedBy: null,
        translationVerifiedAt: null,
        translationNotes: null,
        verificationStatus: "reference_verified",
      });
    });
  });

  it("21–30 grubunu doğrulanmış tam matn, kaynak ve grading ile tutar", () => {
    const expected = [
      ["yardimlasma-ve-comertlik", "sahih-muslim", "2699a", "Book 48, Hadith 48"],
      ["ailede-sevgi-huzur-ve-merhamet", "sahih-muslim", "1468b", "Book 17, Hadith 81"],
      ["cocuk-terbiyesi-ve-ebeveyn-sorumlulugu", "sunan-abi-dawud", "495", "Book 2, Hadith 105"],
      ["sila-i-rahim-ve-akrabalik-baglari", "sahih-al-bukhari", "5991", "Book 78, Hadith 22"],
      ["komsuluk", "sahih-al-bukhari", "6016", "Book 78, Hadith 47"],
      ["haber-ve-iletisim-ahlaki", "sahih-al-bukhari", "6475", "Book 81, Hadith 64"],
      ["genclik-ve-dogru-durus", "sahih-al-bukhari", "660", "Book 10, Hadith 54"],
      ["umit-ve-umitsizlige-kapilmamak", "sahih-muslim", "2877a", "Book 53, Hadith 98"],
      ["israf-ve-olculu-yasamak", "jami-at-tirmidhi", "2380", "Book 36, Hadith 77"],
      ["adalet", "sahih-muslim", "1827", "Book 33, Hadith 21"],
    ] as const;
    const topicIds = new Set<string>(expected.map(([topicId]) => topicId));
    const candidates = primaryHadithReferences.filter((reference) =>
      topicIds.has(reference.topicId),
    );

    expect(candidates).toHaveLength(10);
    expect(
      candidates.map((reference) => [
        reference.topicId,
        reference.collectionId,
        reference.primaryLocator.value,
        reference.alternateLocators[0]?.value,
      ]),
    ).toEqual(expected);
    candidates.forEach((reference) => {
      expect(reference.relationType).toBe("direct");
      expect(reference.verificationStatus).toBe("reference_verified");
      expect(reference.arabicText).toBeTruthy();
      expect(reference.arabicTextType).toBe("full_matn");
      expect(reference.narrator).toBeTruthy();
      expect(reference.sourceReference).toBeTruthy();
      expect(["sahih", "hasen", "hasan_sahih"]).toContain(
        reference.grading,
      );
      expect(reference.gradingSource).toBeTruthy();
      expect(reference.translationStatus).toBe("missing");
      expect(reference.translationTr).toBeNull();
      expect(reference.verifiedAt).toBe("2026-08-31");
      expect(reference.verificationProviders).toHaveLength(2);
      expect(
        reference.verificationProviders.map((provider) => provider.id),
      ).toEqual(["sunnah-com", "dorar"]);
      expect(reference.provenance).toContain("Source work:");
    });
  });

  it("31–40 grubunu tam locator setiyle reference_verified tutar", () => {
    const expected = [
      ["kuranla-yasamak-ve-ogut-almak", "sahih-al-bukhari", "5027", "Book 66, Hadith 49", "Osman b. Affân"],
      ["ilim-ogrenmek-ve-bilginin-degeri", "sahih-al-bukhari", "71", "Book 3, Hadith 13", "Muâviye b. Ebû Süfyân"],
      ["vakit-ve-omru-degerlendirmek", "sahih-al-bukhari", "6412", "Book 81, Hadith 1", "Abdullah b. Abbâs"],
      ["gayret-ve-emegin-degeri", "sahih-muslim", "2664", "Book 46, Hadith 52", "Ebû Hüreyre"],
      ["vefa-ve-sozunde-durmak", "sahih-al-bukhari", "34", "Book 2, Hadith 27", "Abdullah b. Amr b. Âs"],
      ["mahremiyet-ve-ozel-hayata-saygi", "sahih-al-bukhari", "6241", "Book 79, Hadith 15", "Sehl b. Sa‘d"],
      ["suizan-ve-zanlardan-sakinmak", "sahih-al-bukhari", "6064", "Book 78, Hadith 94", "Ebû Hüreyre"],
      ["iftira-ve-asilsiz-soz", "sahih-al-bukhari", "2654", "Book 52, Hadith 18", "Ebû Bekre"],
      ["alay-kucumseme-ve-kotu-lakap", "sahih-muslim", "2564a", "Book 45, Hadith 40", "Ebû Hüreyre"],
      ["dostluk-ve-arkadas-secimi", "sahih-al-bukhari", "5534", "Book 72, Hadith 59", "Ebû Mûsâ el-Eş‘arî"],
    ] as const;
    const topicIds = new Set<string>(expected.map(([topicId]) => topicId));
    const candidates = primaryHadithReferences.filter((reference) =>
      topicIds.has(reference.topicId),
    );

    expect(candidates).toHaveLength(10);
    expect(
      candidates.map((reference) => [
        reference.topicId,
        reference.collectionId,
        reference.primaryLocator.value,
        reference.alternateLocators[0]?.value,
        reference.narrator,
      ]),
    ).toEqual(expected);
    candidates.forEach((reference) => {
      expect(reference.relationType).toBe("direct");
      expect(reference.verificationStatus).toBe("reference_verified");
      expect(reference.arabicText).toBeTruthy();
      expect(reference.arabicTextType).toBe("full_matn");
      expect(reference.sourceReference).toBeTruthy();
      expect(reference.grading).toBe("sahih");
      expect(reference.gradingSource).toMatch(/^(Buhârî|Müslim) \/ Sahih/);
      expect(reference.gradingNote).toBeUndefined();
      expect(reference.translationStatus).toBe("missing");
      expect(reference.translationTr).toBeNull();
      expect(reference.verifiedAt).toBe("2026-09-01");
      expect(reference.verificationProviders).toHaveLength(2);
      expect(
        reference.verificationProviders.map((provider) => provider.id),
      ).toEqual(["sunnah-com", "dorar"]);
      expect(reference.provenance).toContain("Source work:");
    });
  });

  it("31–40 matnlarında rivayet unsurlarını korur ve takip notlarını dışarıda bırakır", () => {
    const byId = new Map(
      hadithReferences.map((reference) => [reference.id, reference]),
    );

    expect(byId.get("kuranla-yasamak-bukhari-5027")?.arabicText).toBe(
      "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    );
    expect(byId.get("kuranla-yasamak-bukhari-5027")?.arabicText).not.toContain(
      "أَبُو عَبْدِ الرَّحْمَنِ",
    );
    expect(byId.get("vakit-bukhari-6412")?.arabicText).not.toContain(
      "عَبَّاسٌ الْعَنْبَرِيُّ",
    );
    expect(byId.get("vakit-bukhari-6412")?.arabicText).not.toContain("مِثْلَهُ");
    expect(byId.get("vefa-bukhari-34")?.arabicText).not.toContain("تَابَعَهُ");

    const falseSpeech = byId.get("iftira-bukhari-2654")?.arabicText;
    expect(falseSpeech).toContain("فَمَا زَالَ يُكَرِّرُهَا");
    expect(falseSpeech).toContain("حَتَّى قُلْنَا لَيْتَهُ سَكَتَ");
    expect(falseSpeech).not.toContain("وَقَالَ إِسْمَاعِيلُ");

    const contempt = byId.get("alay-kucumseme-muslim-2564a")?.arabicText;
    expect(contempt).toContain("لاَ يَحْقِرُهُ");
    expect(contempt).toContain("بِحَسْبِ امْرِئٍ مِنَ الشَّرِّ");
    expect(contempt).toContain("وَيُشِيرُ إِلَى صَدْرِهِ ثَلاَثَ مَرَّاتٍ");
  });

  it("topic 1–30 reference verisini translation alanlarından bağımsız korur", () => {
    const fingerprint = fingerprintHadithPrimaryV1Baseline(
      primaryHadithReferences.slice(0, 30),
    );

    expect(fingerprint).toBe(
      "2e0bf3812025c9e0c4b2e38f7b2dc280fcc8e7c91365bf4c6570cff80e69ae6d",
    );
  });

  it("topic 1–40 reference verisini translation alanlarından bağımsız korur", () => {
    const fingerprint = fingerprintHadithPrimaryV1Baseline(
      primaryHadithReferences.slice(0, 40),
    );

    expect(fingerprint).toBe(
      "a8a50f2932464740bbf47214f6a50984217f1378b447b460ba67d73f1b0be0f5",
    );
  });

  it("Primary Hadith V1 sürümünü audit-clean frozen baseline olarak kaydeder", () => {
    expect(HADITH_PRIMARY_CATALOG_VERSION).toBe("1.0");
    expect(HADITH_PRIMARY_CATALOG_STATUS).toBe("frozen");
    expect(HADITH_PRIMARY_CATALOG_AUDIT_STATUS).toBe("audit_clean");
    expect(HADITH_PRIMARY_REFERENCE_VERIFICATION_STATUS).toBe(
      "reference_verified",
    );
    expect(HADITH_PRIMARY_CATALOG_BASELINE_RECORD_COUNT).toBe(50);
    expect(HADITH_PRIMARY_CATALOG_BASELINE_SHA256).toBe(
      "7c8e4c2140b474790116a02cb84ffb2c06c6bf7a05f2c1a464e884da664615bf",
    );
    expect(HADITH_PRIMARY_CATALOG_LEGACY_SNAPSHOT_SHA256).toBe(
      "71173c600ee4fad98efba5fd84f799d9118984a7a611274cd20a91537c84435c",
    );
    expect(hadithPrimaryCatalogRelease).toEqual({
      version: "1.0",
      status: "frozen",
      baselineRecordCount: 50,
      baselineFingerprint:
        "7c8e4c2140b474790116a02cb84ffb2c06c6bf7a05f2c1a464e884da664615bf",
      fingerprintScope: "reference_only",
      legacySnapshotFingerprint:
        "71173c600ee4fad98efba5fd84f799d9118984a7a611274cd20a91537c84435c",
      auditStatus: "audit_clean",
      auditResult: {
        pass: 24,
        passWithNote: 26,
        review: 0,
      },
      referenceVerificationStatus: "reference_verified",
      frozenAt: "2026-09-01",
    });
  });

  it("immutable primary ID baseline'ını 50 topic için deterministic denetler", () => {
    expect(PRIMARY_HADITH_V1_IDS).toHaveLength(50);
    expect(new Set(PRIMARY_HADITH_V1_IDS)).toHaveLength(50);

    const result = assertHadithPrimaryV1Audit({
      references: hadithReferences,
      canonicalTopicIds: topics.map((topic) => topic.id),
      frozenPrimaryIds: PRIMARY_HADITH_V1_IDS,
      expectedFingerprint: HADITH_PRIMARY_CATALOG_BASELINE_SHA256,
      expectedRecordCount: HADITH_PRIMARY_CATALOG_BASELINE_RECORD_COUNT,
    });

    expect(result.fingerprint).toBe(HADITH_PRIMARY_CATALOG_BASELINE_SHA256);
    expect(result.summary).toMatchObject({
      frozenPrimaryIds: 50,
      frozenPrimaryRecords: 50,
      canonicalTopicCoverage: 50,
      direct: 50,
      referenceVerified: 50,
      fullyVerified: 0,
      arabicPopulated: 50,
      fullMatn: 48,
      excerpt: 2,
      grading: {
        sahih: 47,
        hasen: 2,
        hasanSahih: 1,
      },
      translation: {
        aiDraft: 20,
        missing: 30,
        humanReviewed: 0,
        verified: 0,
      },
      publicReady: 0,
    });
  });

  it("translation workflow değişikliklerini primary reference fingerprint'ine katmaz", () => {
    const translationChanged = primaryHadithReferences.map((reference) => ({
      ...reference,
      translationTr: (reference.translationTr ?? "") + " TEST_ONLY",
      translationNotes: "TEST_ONLY",
    }));

    expect(fingerprintHadithPrimaryV1Baseline(translationChanged)).toBe(
      HADITH_PRIMARY_CATALOG_BASELINE_SHA256,
    );
  });

  it("frozen primary kayıt değişikliğini fingerprint hatası olarak yakalar", () => {
    const changedReferences = hadithReferences.map((reference, index) =>
      index === 0
        ? {
            ...reference,
            reviewerNote: (reference.reviewerNote ?? "") + " ",
          }
        : reference,
    );
    const result = auditHadithPrimaryV1({
      references: changedReferences,
      canonicalTopicIds: topics.map((topic) => topic.id),
      frozenPrimaryIds: PRIMARY_HADITH_V1_IDS,
      expectedFingerprint: HADITH_PRIMARY_CATALOG_BASELINE_SHA256,
      expectedRecordCount: HADITH_PRIMARY_CATALOG_BASELINE_RECORD_COUNT,
    });

    expect(result.fingerprint).not.toBe(
      HADITH_PRIMARY_CATALOG_BASELINE_SHA256,
    );
    expect(result.errors).toEqual([
      expect.stringContaining("Primary fingerprint"),
    ]);
    expect(() =>
      assertHadithPrimaryV1Audit({
        references: changedReferences,
        canonicalTopicIds: topics.map((topic) => topic.id),
        frozenPrimaryIds: PRIMARY_HADITH_V1_IDS,
        expectedFingerprint: HADITH_PRIMARY_CATALOG_BASELINE_SHA256,
        expectedRecordCount: HADITH_PRIMARY_CATALOG_BASELINE_RECORD_COUNT,
      }),
    ).toThrow("Primary Hadith V1 audit başarısız");
  });

  it("gelecekteki secondary kayıtları Primary Hadith V1 fingerprint'ine katmaz", () => {
    const futureSecondary: HadithReference = {
      ...fixture,
      id: "future-secondary-fixture",
      topicId: "sabir",
      collectionId: "sahih-muslim",
      primaryLocator: {
        scheme: "collection_global",
        value: "future-secondary-fixture-only",
      },
    };
    const expandedCatalog = [...hadithReferences, futureSecondary];
    const result = assertHadithPrimaryV1Audit({
      references: expandedCatalog,
      canonicalTopicIds: topics.map((topic) => topic.id),
      frozenPrimaryIds: PRIMARY_HADITH_V1_IDS,
      expectedFingerprint: HADITH_PRIMARY_CATALOG_BASELINE_SHA256,
      expectedRecordCount: HADITH_PRIMARY_CATALOG_BASELINE_RECORD_COUNT,
    });

    expect(result.fingerprint).toBe(HADITH_PRIMARY_CATALOG_BASELINE_SHA256);
    expect(result.summary.frozenPrimaryRecords).toBe(50);
    expect(getPrimaryHadithV1References(expandedCatalog)).toHaveLength(50);
    expect(getSecondaryHadithReferences(expandedCatalog)).toEqual([
      futureSecondary,
    ]);
    expect(isPrimaryHadithV1(futureSecondary.id)).toBe(false);
    expect(validateHadithContent({
      topics,
      hadithCollections,
      hadithReferences: expandedCatalog,
    })).toBe(true);
  });

  it("41–50 grubunu nihai locator setiyle reference_verified tutar", () => {
    const expected = [
      ["insanlarin-arasini-duzeltmek", "sahih-al-bukhari", "2692", "Book 53, Hadith 3", "Ümmü Külsûm bint Ukbe"],
      ["kotuluge-iyilikle-karsilik-vermek", "sahih-muslim", "2558a", "Book 45, Hadith 25", "Ebû Hüreyre"],
      ["iyilik-ve-ihsan", "sahih-muslim", "1955a", "Book 34, Hadith 84", "Şeddâd b. Evs"],
      ["yetimlere-karsi-sorumluluk", "sahih-al-bukhari", "6005", "Book 78, Hadith 36", "Sehl b. Sa‘d"],
      ["riya-ve-gosteristen-sakinmak", "sahih-al-bukhari", "6499", "Book 81, Hadith 88", "Cündeb"],
      ["iffet-ve-haya", "sahih-al-bukhari", "6117", "Book 78, Hadith 144", "İmrân b. Husayn"],
      ["insan-onuru-ve-sayginligi", "sahih-al-bukhari", "1739", "Book 25, Hadith 217", "Abdullah b. Abbâs"],
      ["yumusak-soz-ve-guzel-konusmak", "sahih-al-bukhari", "2989", "Book 56, Hadith 198", "Ebû Hüreyre"],
      ["haksizlik-ve-zulumden-sakinmak", "sahih-muslim", "2577a", "Book 45, Hadith 70", "Ebû Zer"],
      ["nefis-muhasebesi-ve-kendini-duzeltmek", "jami-at-tirmidhi", "2406", "Book 36, Hadith 104", "Ukbe b. Âmir"],
    ] as const;
    const topicIds = new Set<string>(expected.map(([topicId]) => topicId));
    const candidates = primaryHadithReferences.filter((reference) =>
      topicIds.has(reference.topicId),
    );

    expect(candidates).toHaveLength(10);
    expect(
      candidates.map((reference) => [
        reference.topicId,
        reference.collectionId,
        reference.primaryLocator.value,
        reference.alternateLocators[0]?.value ?? null,
        reference.narrator,
      ]),
    ).toEqual(expected);
    candidates.forEach((reference) => {
      expect(reference.relationType).toBe("direct");
      expect(reference.verificationStatus).toBe("reference_verified");
      expect(reference.arabicText).toBeTruthy();
      expect(reference.arabicTextType).toBe("full_matn");
      expect(reference.sourceReference).toBeTruthy();
      expect(["sahih", "hasen"]).toContain(reference.grading);
      expect(reference.gradingSource).toBeTruthy();
      expect(reference.translationStatus).toBe("missing");
      expect(reference.translationTr).toBeNull();
      expect(reference.verifiedAt).toBe("2026-09-01");
      expect(reference.verificationProviders).toHaveLength(2);
      expect(reference.provenance).toContain("Source work");
    });
  });

  it("topic 42 ana kaydını Muslim 2558a ile değiştirir ve Ahmad metadata'sını korur", () => {
    const topicReference = hadithReferences.find(
      (reference) =>
        reference.topicId === "kotuluge-iyilikle-karsilik-vermek",
    );

    expect(topicReference).toMatchObject({
      id: "kotuluge-iyilikle-karsilik-vermek-muslim-2558a",
      collectionId: "sahih-muslim",
      primaryLocator: { scheme: "collection_global", value: "2558a" },
      verificationStatus: "reference_verified",
      grading: "sahih",
    });
    expect(
      hadithReferences.some(
        (reference) => reference.primaryLocator.value === "17452",
      ),
    ).toBe(false);
    expect(
      hadithCollections.find((collection) => collection.id === "musnad-ahmad"),
    ).toBeTruthy();
  });

  it("41–50 matn ayrımlarını ve grading kaynaklarını korur", () => {
    const byId = new Map(
      hadithReferences.map((reference) => [reference.id, reference]),
    );
    const modesty = byId.get("iffet-ve-haya-bukhari-6117");
    const dignity = byId.get("insan-onuru-ve-sayginligi-bukhari-1739");
    const oppression = byId.get("haksizlik-ve-zulumden-sakinmak-muslim-2577a");
    const selfAccount = byId.get("nefis-muhasebesi-tirmidhi-2406");

    expect(modesty?.arabicText).toBe("الْحَيَاءُ لاَ يَأْتِي إِلاَّ بِخَيْرٍ");
    expect(modesty?.arabicText).not.toContain("بُشَيْرُ بْنُ كَعْبٍ");
    expect(dignity?.narrator).toBe("Abdullah b. Abbâs");
    expect(dignity?.provenance).toContain("Ikrime narrates from Abdullah ibn Abbas");
    expect(dignity?.arabicText).not.toContain("قَالَ ابْنُ عَبَّاسٍ");
    expect(oppression?.arabicText).not.toContain("قَالَ سَعِيدٌ");
    expect(selfAccount).toMatchObject({
      grading: "hasen",
      gradingSource: "Tirmizî / Jami at-Tirmidhi 2406",
    });
    expect(selfAccount?.gradingNote).toContain("هَذَا حَدِيثٌ حَسَنٌ");
    expect(selfAccount?.gradingNote).toContain("zayıf değerlendirmiştir");
    expect(selfAccount?.arabicText).not.toContain("قَالَ أَبُو عِيسَى");
    expect(selfAccount?.arabicText).not.toContain("هَذَا حَدِيثٌ حَسَنٌ");
  });

  it("grading toplamını 47 sahih, 2 hasen ve 1 hasan_sahih olarak tutar", () => {
    expect(primaryHadithReferences.filter((reference) => reference.grading === "sahih")).toHaveLength(47);
    expect(primaryHadithReferences.filter((reference) => reference.grading === "hasen")).toHaveLength(2);
    expect(primaryHadithReferences.filter((reference) => reference.grading === "hasan_sahih")).toHaveLength(1);
  });

  it("Ebû Dâvûd 495 grading kapsamını Nevevî’nin isnad hükmüyle sınırlar", () => {
    const reference = hadithReferences.find(
      (item) => item.id === "cocuk-terbiyesi-abu-dawud-495",
    );

    expect(reference).toMatchObject({
      grading: "hasen",
      gradingSource: "Nevevî / Hulâsatü'l-Ahkâm 1/252",
      verificationStatus: "reference_verified",
      arabicTextType: "full_matn",
    });
    expect(reference?.gradingNote).toContain("İsnadı hasendir");
    expect(reference?.gradingNote).toContain("إسناده حسن");
    expect(reference?.arabicText).not.toContain("قَالَ أَبُو دَاوُدَ");
  });

  it("Tirmizî 2380 grading hükmünü Prophetic matndan ayrı tutar", () => {
    const reference = hadithReferences.find(
      (item) => item.id === "israf-tirmidhi-2380",
    );

    expect(reference).toMatchObject({
      grading: "hasan_sahih",
      gradingSource: "Tirmizî / Jami at-Tirmidhi 2380",
      verificationStatus: "reference_verified",
      arabicTextType: "full_matn",
    });
    expect(reference?.gradingNote).toContain("hasen sahihtir");
    expect(reference?.gradingNote).toContain("هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ");
    expect(reference?.arabicText).not.toContain("قَالَ أَبُو عِيسَى");
    expect(reference?.arabicText).not.toContain(
      "هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ",
    );
  });

  it("5991 ve 6016 aktarım notlarını Prophetic matna karıştırmaz", () => {
    const kinship = hadithReferences.find(
      (item) => item.id === "sila-i-rahim-bukhari-5991",
    );
    const neighbour = hadithReferences.find(
      (item) => item.id === "komsuluk-bukhari-6016",
    );

    expect(kinship?.arabicText).not.toContain("لَمْ يَرْفَعْهُ");
    expect(neighbour?.arabicText).not.toContain("تَابَعَهُ");
    expect(neighbour?.arabicText).not.toContain("وَقَالَ حُمَيْدُ");
    expect(neighbour?.arabicText?.match(/وَاللَّهِ لاَ يُؤْمِنُ/g)).toHaveLength(
      3,
    );
  });

  it("yedi yeni AI çalışma tercümesini birebir korur", () => {
    const byId = new Map(
      hadithReferences.map((reference) => [reference.id, reference]),
    );
    const expected = new Map([
      [
        "tevekkul-bukhari-6472",
        "Ümmetimden yetmiş bin kişi hesaba çekilmeden cennete girer. Onlar, kendilerine rukye yapılmasını istemeyen, uğursuzluk saymayan ve Rablerine tevekkül eden kimselerdir.",
      ],
      [
        "dua-bukhari-6340",
        "Sizden birinin duasına, acele edip ‘Dua ettim fakat bana karşılık verilmedi.’ demediği sürece karşılık verilir.",
      ],
      [
        "sukur-muslim-2734a",
        "Şüphesiz Allah, kulun bir yemek yiyip bundan dolayı Allah’a hamdetmesinden veya bir içecek içip bundan dolayı Allah’a hamdetmesinden razı olur.",
      ],
      [
        "olum-ve-hayatin-geciciligi-bukhari-6416",
        "Dünyada bir garip veya bir yolcu gibi ol.",
      ],
      [
        "kul-hakki-bukhari-2449",
        "Kim birine onun onuru veya başka bir hususta haksızlık etmişse, dinar ve dirhemin bulunmayacağı gün gelmeden bugün ondan helallik alsın. İyi bir ameli varsa, yaptığı haksızlık ölçüsünde bu amelinden alınır. İyilikleri yoksa, haksızlığa uğrayanın günahlarından alınarak ona yüklenir.",
      ],
      [
        "tovbe-ve-pismanlik-bukhari-6309",
        "Allah, kulunun tövbesine, sizden birinin ıssız bir yerde kaybettiği devesini bulduğunda duyduğu sevinçten daha çok sevinir.",
      ],
      [
        "namazin-onemi-ve-manevi-etkisi-bukhari-528",
        "Ne dersiniz? Birinizin kapısında bir nehir olsa ve o kişi her gün orada beş defa yıkansa, bu onun kirinden bir şey bırakır mı? Onlar, ‘Kirinden hiçbir şey bırakmaz.’ dediler. O da, ‘İşte beş vakit namaz da böyledir; Allah onlarla günahları siler.’ buyurdu.",
      ],
    ]);

    expected.forEach((translation, id) => {
      expect(byId.get(id)?.translationTr).toBe(translation);
      expect(byId.get(id)?.translationStatus).toBe("ai_draft");
      expect(byId.get(id)?.translationMethod).toBe(
        "ai_from_verified_arabic",
      );
    });
  });

  it("translation audit kararındaki üç AI taslağını birebir korur", () => {
    const byId = new Map(
      hadithReferences.map((reference) => [reference.id, reference]),
    );

    expect(byId.get("sabir-bukhari-1469")?.translationTr).toBe(
      "Kim sabretmeye çalışırsa Allah ona sabır verir. Hiç kimseye sabırdan daha hayırlı ve daha geniş bir bağış verilmemiştir.",
    );
    expect(
      byId.get("anne-babaya-iyilik-bukhari-5971")?.translationTr,
    ).toBe(
      "Bir adam Allah Resûlü’ne gelerek, ‘Ey Allah’ın Resûlü! İyi muamele ve güzel refakatime en çok kim hak sahibidir?’ diye sordu. O, ‘Annen.’ buyurdu. Adam, ‘Sonra kim?’ dedi. O, ‘Annen.’ buyurdu. Adam, ‘Sonra kim?’ dedi. O, ‘Annen.’ buyurdu. Adam, ‘Sonra kim?’ dedi. O da, ‘Sonra baban.’ buyurdu.",
    );
    expect(byId.get("kardeslik-bukhari-13")?.translationTr).toBe(
      "Hiçbiriniz, kendisi için sevdiğini kardeşi için de sevmedikçe iman etmiş olmaz.",
    );
  });

  it("Sabır kaydını tam hadis yerine doğrulanmış excerpt olarak işaretler", () => {
    const reference = hadithReferences.find(
      (item) => item.id === "sabir-bukhari-1469",
    );
    expect(reference).toMatchObject({
      verificationStatus: "reference_verified",
      arabicTextType: "excerpt",
      sourceReference: "Sahih al-Bukhari 1469",
      grading: "sahih",
      gradingSource: "Buhârî / Sahih al-Bukhari 1469",
      translationStatus: "ai_draft",
      translationMethod: "ai_from_verified_arabic",
      translationReviewedBy: null,
      translationVerifiedAt: null,
    });
    expect(reference?.translationNotes).toContain("hadisin tamamına değil");
  });

  it("Ölüm kaydının excerpt tercüme sınırını açıkça korur", () => {
    const reference = hadithReferences.find(
      (item) => item.id === "olum-ve-hayatin-geciciligi-bukhari-6416",
    );

    expect(reference).toMatchObject({
      arabicTextType: "excerpt",
      translationStatus: "ai_draft",
      translationMethod: "ai_from_verified_arabic",
      translationReviewedBy: null,
      translationVerifiedAt: null,
    });
    expect(reference?.translationNotes).toBe(
      "Bu tercüme hadisin tamamına değil, Hz. Peygamber’e ait ve topic ile ilgili doğrulanmış matn bölümüne aittir.",
    );
  });

  it("Diyanet B5971 ve B13 alternate locator kayıtlarını korur", () => {
    const parent = hadithReferences.find(
      (item) => item.id === "anne-babaya-iyilik-bukhari-5971",
    );
    const brotherhood = hadithReferences.find(
      (item) => item.id === "kardeslik-bukhari-13",
    );

    expect(parent?.alternateLocators).toContainEqual({
      scheme: "diyanet_hadislerle_islam",
      value: "B5971",
      providerId: "diyanet-hadislerle-islam",
      note: "Buhârî, Edeb, 2",
    });
    expect(brotherhood?.alternateLocators).toContainEqual({
      scheme: "diyanet_hadislerle_islam",
      value: "B13",
      providerId: "diyanet-hadislerle-islam",
      note: "Buhârî, Îmân, 7",
    });
  });

  it("iki excerpt ve kırk sekiz full_matn kaydı tutar", () => {
    expect(
      primaryHadithReferences.filter(
        (reference) => reference.arabicTextType === "excerpt",
      ).map((reference) => reference.id).sort(),
    ).toEqual(
      ["olum-ve-hayatin-geciciligi-bukhari-6416", "sabir-bukhari-1469"].sort(),
    );
    expect(
      primaryHadithReferences.filter(
        (reference) => reference.arabicTextType === "full_matn",
      ),
    ).toHaveLength(48);
  });

  it("Şükür kaydında aynı rivayetin farklı locator şemalarını ayırır", () => {
    const reference = hadithReferences.find(
      (item) => item.id === "sukur-muslim-2734a",
    );

    expect(reference?.primaryLocator).toEqual({
      scheme: "collection_global",
      value: "2734a",
    });
    expect(reference?.alternateLocators).toContainEqual({
      scheme: "diyanet_hadislerle_islam",
      value: "M6932",
      providerId: "diyanet-hadislerle-islam",
      note: "Müslim, Zikir, 89",
    });
  });

  it("pilot hadis kataloglarını validation'dan geçirir", () => {
    expect(
      validateHadithContent({
        topics,
        hadithCollections,
        hadithReferences,
      }),
    ).toBe(true);
  });
});

describe("HadithReference doğrulama kuralları", () => {
  it("primary rolünü yalnız frozen ID üyeliğinden türetir", () => {
    const primary = primaryHadithReferences[0];
    const hypotheticalSecondary = {
      ...fixture,
      id: "role-fixture-secondary",
      relationType: primary.relationType,
    } satisfies HadithReference;

    expect(isPrimaryHadithV1(primary.id)).toBe(true);
    expect(isPrimaryHadithV1(hypotheticalSecondary.id)).toBe(false);
    expect(hypotheticalSecondary.relationType).toBe(primary.relationType);
  });

  it("aynı topic altında farklı kaynak locator'lı hypothetical secondary kaydı kabul eder", () => {
    const hypotheticalSecondary = {
      ...fixture,
      id: "same-topic-secondary-fixture",
      topicId: primaryHadithReferences[0].topicId,
      collectionId: "sahih-muslim",
      primaryLocator: {
        scheme: "collection_global",
        value: "secondary-validation-fixture-only",
      },
    } satisfies HadithReference;

    expect(
      validateHadithContent({
        topics,
        hadithCollections,
        hadithReferences: [...hadithReferences, hypotheticalSecondary],
      }),
    ).toBe(true);
  });

  it("farklı ID altındaki aynı collection + primary locator kaydını reddeder", () => {
    const original = hadithReferences.find(
      (reference) => reference.id === "kardeslik-bukhari-13",
    );
    expect(original).toBeTruthy();
    if (!original) throw new Error("Duplicate fixture için kaynak kayıt bulunamadı.");

    const duplicateFixture = {
      ...original,
      id: "duplicate-bukhari-13-fixture",
      primaryLocator: {
        ...original.primaryLocator,
        value: "  13  ",
      },
    } satisfies HadithReference;
    const errors = collectHadithContentErrors({
      topics,
      hadithCollections,
      hadithReferences: [...hadithReferences, duplicateFixture],
    });

    expect(errors).toContain(
      "Duplicate hadith source locator: sahih-al-bukhari / collection_global / 13 (kardeslik-bukhari-13 / duplicate-bukhari-13-fixture)",
    );
  });

  it("aynı locator değerini farklı collection altında duplicate saymaz", () => {
    const bukhariFixture = {
      ...fixture,
      id: "collection-sensitive-bukhari-fixture",
      collectionId: "sahih-al-bukhari",
      primaryLocator: { scheme: "collection_global", value: "13" },
    } satisfies HadithReference;
    const muslimFixture = {
      ...fixture,
      id: "collection-sensitive-muslim-fixture",
      collectionId: "sahih-muslim",
      primaryLocator: { scheme: "collection_global", value: "13" },
    } satisfies HadithReference;
    const errors = collectHadithContentErrors({
      topics,
      hadithCollections,
      hadithReferences: [bukhariFixture, muslimFixture],
    });

    expect(
      errors.filter((error) =>
        error.startsWith("Duplicate hadith source locator:"),
      ),
    ).toEqual([]);
  });

  it("geçersiz relationType değerini reddeder", () => {
    expect(
      hadithReferenceSchema.safeParse({
        ...fixture,
        relationType: "unsupported",
      }).success,
    ).toBe(false);
  });

  it("bulunmayan canonical topicId değerini reddeder", () => {
    const errors = collectHadithContentErrors({
      topics,
      hadithCollections,
      hadithReferences: [{ ...fixture, topicId: "olmayan-topic" }],
    });

    expect(errors.join(" ")).toContain("bulunmayan canonical topicId");
  });

  it("grading varken gradingSource eksikliğini reddeder", () => {
    expect(
      issues({ ...fixture, grading: "sahih", gradingSource: null }).some(
        (issue) => issue.path.join(".") === "gradingSource",
      ),
    ).toBe(true);
  });

  it("hasan_sahih grading değerini kaynakla kabul eder", () => {
    expect(
      hadithReferenceSchema.safeParse({
        ...fixture,
        grading: "hasan_sahih",
        gradingSource: "VALIDATION_FIXTURE_ONLY",
      }).success,
    ).toBe(true);
    expect(
      issues({ ...fixture, grading: "hasan_sahih", gradingSource: null }).some(
        (issue) => issue.path.join(".") === "gradingSource",
      ),
    ).toBe(true);
  });

  it("geçersiz grading değerini reddeder", () => {
    expect(
      hadithReferenceSchema.safeParse({
        ...fixture,
        grading: "unsupported",
      }).success,
    ).toBe(false);
  });

  it("reference_verified kayıtta sourceReference eksikliğini reddeder", () => {
    expect(
      issues({
        ...fixture,
        verificationStatus: "reference_verified",
        collectionId: "validation-collection-only",
        arabicText: "VALIDATION_FIXTURE_ONLY_NOT_HADITH_CONTENT",
        arabicTextType: "full_matn",
        sourceReference: null,
      }).some((issue) => issue.path.join(".") === "sourceReference"),
    ).toBe(true);
  });

  it("verified translation için translationTr eksikliğini reddeder", () => {
    expect(
      issues({
        ...fixture,
        translationStatus: "verified",
        translationTr: null,
      }).some((issue) => issue.path.join(".") === "translationTr"),
    ).toBe(true);
  });

  it("ai_draft tercümeyi yalnız doğrulanmış Arapçadan üretim yöntemiyle kabul eder", () => {
    expect(
      issues({
        ...fixture,
        translationStatus: "ai_draft",
        translationTr: "VALIDATION_FIXTURE_ONLY_NOT_A_TRANSLATION",
        translationMethod: null,
      }).some((issue) => issue.path.join(".") === "translationMethod"),
    ).toBe(true);

    expect(
      hadithReferenceSchema.safeParse({
        ...fixture,
        translationStatus: "ai_draft",
        translationTr: "VALIDATION_FIXTURE_ONLY_NOT_A_TRANSLATION",
        translationMethod: "ai_from_verified_arabic",
      }).success,
    ).toBe(true);
  });

  it("aynı scheme+value locator tekrarını reddeder", () => {
    expect(
      issues({
        ...fixture,
        alternateLocators: [
          { scheme: "legacy", value: "validation-only" },
        ],
      }).some((issue) => issue.path.join(".") === "alternateLocators.0"),
    ).toBe(true);
  });

  it("source_located kaydı Arapça metin olmadan kabul eder", () => {
    const sourceLocatedFixture = {
      ...fixture,
      verificationStatus: "source_located",
      collectionId: "sahih-al-bukhari",
      provenance: "VALIDATION_FIXTURE_ONLY",
    };
    expect(sourceLocatedFixture.arabicText).toBeNull();
    expect(
      hadithReferenceSchema.safeParse(sourceLocatedFixture).success,
    ).toBe(true);
  });

  it("fully_verified kayıtta doğrulanmış tercüme ve tarih arar", () => {
    const fullyVerifiedWithoutFinalTranslation = {
      ...fixture,
      verificationStatus: "fully_verified",
      collectionId: "sahih-al-bukhari",
      sourceReference: "VALIDATION_FIXTURE_ONLY",
      arabicText: "VALIDATION_FIXTURE_ONLY_NOT_HADITH_CONTENT",
      arabicTextType: "full_matn",
      provenance: "VALIDATION_FIXTURE_ONLY",
    };
    const result = issues(fullyVerifiedWithoutFinalTranslation);

    expect(
      result.some((issue) => issue.path.join(".") === "translationStatus"),
    ).toBe(true);
    expect(result.some((issue) => issue.path.join(".") === "verifiedAt")).toBe(
      true,
    );
  });

  it("Arapça metin varsa full_matn veya excerpt ayrımını zorunlu tutar", () => {
    expect(
      issues({
        ...fixture,
        arabicText: "VALIDATION_FIXTURE_ONLY_NOT_HADITH_CONTENT",
        arabicTextType: null,
      }).some((issue) => issue.path.join(".") === "arabicTextType"),
    ).toBe(true);
  });
});

describe("Kur’an V1 regression koruması", () => {
  it("hadis validation eklenince mevcut Kur’an validation akışını bozmaz", () => {
    expect(validateContent()).toBe(true);
  });

  it("frozen sürüm metadata ve baseline fingerprint değerini korur", () => {
    const snapshot = buildQuranV1AuditSnapshot(topics, verseReferenceById);
    const fingerprint = createHash("sha256")
      .update(serializeQuranV1AuditSnapshot(snapshot))
      .digest("hex");

    expect(quranCatalogRelease).toMatchObject({
      version: "1.0",
      status: "frozen",
      baselineSha256: QURAN_CATALOG_BASELINE_SHA256,
    });
    expect(fingerprint).toBe(QURAN_CATALOG_BASELINE_SHA256);
  });
});
