import { describe, expect, it } from "vitest";
import { hadithCollections } from "@/data/hadith-collections";
import { hadithReferences } from "@/data/hadith-references";
import { topics } from "@/data/topics-v12";
import {
  buildHadithVerificationReport,
  buildHadithVerificationReports,
} from "@/lib/hadith-verification-report";

describe("HadithVerificationReport", () => {
  it("50 raporu mevcut source-of-truth kayıtlarından türetir", () => {
    const reports = buildHadithVerificationReports(
      hadithReferences,
      hadithCollections,
      topics,
    );

    expect(reports).toHaveLength(50);
    expect(reports.filter((report) => report.publicReady)).toHaveLength(0);
    expect(
      reports.filter(
        (report) => report.verificationStatus === "reference_verified",
      ),
    ).toHaveLength(50);
    expect(
      reports.filter(
        (report) => report.verificationStatus === "source_located",
      ),
    ).toHaveLength(0);
    expect(
      reports.filter((report) => report.translationStatus === "ai_draft"),
    ).toHaveLength(20);
    expect(
      reports.filter((report) => report.translationStatus === "missing"),
    ).toHaveLength(30);
  });

  it("kaynak eseri teknik provider ile karıştırmaz", () => {
    const report = buildHadithVerificationReports(
      hadithReferences,
      hadithCollections,
      topics,
    )[0];

    expect(report.sourceWork.title).toBe("Sahih al-Bukhari");
    expect(report.verificationProviders.map((provider) => provider.name)).toContain(
      "Sunnah.com",
    );
    expect(report.verificationProviders.map((provider) => provider.name)).not.toContain(
      report.sourceWork.title,
    );
  });

  it("excerpt bilgisini ve AI çalışma tercümesi metadatasını rapora taşır", () => {
    const reports = buildHadithVerificationReports(
      hadithReferences,
      hadithCollections,
      topics,
    );
    const patience = reports.find(
      (report) => report.referenceId === "sabir-bukhari-1469",
    );
    const mortality = reports.find(
      (report) =>
        report.referenceId === "olum-ve-hayatin-geciciligi-bukhari-6416",
    );

    expect(patience?.arabicTextType).toBe("excerpt");
    expect(mortality?.arabicTextType).toBe("excerpt");
    expect(patience?.translationStatus).toBe("ai_draft");
    expect(patience?.translationMethod).toBe("ai_from_verified_arabic");
    expect(patience?.translationReviewedBy).toBeNull();
    expect(patience?.translationVerifiedAt).toBeNull();
    expect(patience?.translationNotes).toContain("hadisin tamamına değil");
    expect(mortality?.translationStatus).toBe("ai_draft");
    expect(mortality?.translationMethod).toBe("ai_from_verified_arabic");
    expect(mortality?.translationReviewedBy).toBeNull();
    expect(mortality?.translationVerifiedAt).toBeNull();
    expect(mortality?.translationNotes).toContain("Hz. Peygamber’e ait");
    expect(patience?.publicReady).toBe(false);
    expect(mortality?.publicReady).toBe(false);
  });

  it("20 çalışma tercümesini ikinci bir source-of-truth oluşturmadan yansıtır", () => {
    const reports = buildHadithVerificationReports(
      hadithReferences,
      hadithCollections,
      topics,
    );
    expect(
      reports
        .filter((report) => report.translationStatus === "ai_draft")
        .map((report) => report.referenceId),
    ).toHaveLength(20);
    reports
      .filter((report) => report.translationStatus === "ai_draft")
      .forEach((report) => {
        expect(report.translationMethod).toBe("ai_from_verified_arabic");
        expect(report.translationReviewedBy).toBeNull();
        expect(report.translationVerifiedAt).toBeNull();
        expect(report.publicReady).toBe(false);
      });
  });

  it("11–20 grubunu ai_draft ve publicReady=false olarak yansıtır", () => {
    const topicIds = new Set(topics.slice(10, 20).map((topic) => topic.id));
    const reports = buildHadithVerificationReports(
      hadithReferences,
      hadithCollections,
      topics,
    ).filter((report) => topicIds.has(report.topic.id));

    expect(reports).toHaveLength(10);
    reports.forEach((report) => {
      expect(report.verificationStatus).toBe("reference_verified");
      expect(report.translationStatus).toBe("ai_draft");
      expect(report.translationMethod).toBe("ai_from_verified_arabic");
      expect(report.translationReviewedBy).toBeNull();
      expect(report.translationVerifiedAt).toBeNull();
      expect(report.translationNotes).toBeNull();
      expect(report.publicReady).toBe(false);
    });
  });

  it("21–30 reference_verified grubunu missing ve publicReady=false yansıtır", () => {
    const topicIds = new Set(topics.slice(20, 30).map((topic) => topic.id));
    const reports = buildHadithVerificationReports(
      hadithReferences,
      hadithCollections,
      topics,
    ).filter((report) => topicIds.has(report.topic.id));

    expect(reports).toHaveLength(10);
    reports.forEach((report) => {
      expect(report.verificationStatus).toBe("reference_verified");
      expect(report.translationStatus).toBe("missing");
      expect(report.translationMethod).toBeNull();
      expect(report.publicReady).toBe(false);
    });
  });

  it("31–40 reference_verified grubunu missing ve publicReady=false yansıtır", () => {
    const topicIds = new Set(topics.slice(30, 40).map((topic) => topic.id));
    const reports = buildHadithVerificationReports(
      hadithReferences,
      hadithCollections,
      topics,
    ).filter((report) => topicIds.has(report.topic.id));

    expect(reports).toHaveLength(10);
    reports.forEach((report) => {
      expect(report.verificationStatus).toBe("reference_verified");
      expect(report.translationStatus).toBe("missing");
      expect(report.translationMethod).toBeNull();
      expect(report.publicReady).toBe(false);
    });
  });

  it("41–50 reference_verified grubunu missing ve publicReady=false yansıtır", () => {
    const topicIds = new Set(topics.slice(40, 50).map((topic) => topic.id));
    const reports = buildHadithVerificationReports(
      hadithReferences,
      hadithCollections,
      topics,
    ).filter((report) => topicIds.has(report.topic.id));

    expect(reports).toHaveLength(10);
    reports.forEach((report) => {
      expect(report.verificationStatus).toBe("reference_verified");
      expect(report.translationStatus).toBe("missing");
      expect(report.translationMethod).toBeNull();
      expect(report.publicReady).toBe(false);
    });
  });

  it("grading hükmünün kapsam notunu ikinci source-of-truth oluşturmadan taşır", () => {
    const reports = buildHadithVerificationReports(
      hadithReferences,
      hadithCollections,
      topics,
    );
    const abuDawud = reports.find(
      (report) => report.referenceId === "cocuk-terbiyesi-abu-dawud-495",
    );
    const tirmidhi = reports.find(
      (report) => report.referenceId === "israf-tirmidhi-2380",
    );

    expect(abuDawud?.gradingNote).toContain("İsnadı hasendir");
    expect(tirmidhi?.gradingNote).toContain("hasen sahihtir");
    expect(abuDawud?.publicReady).toBe(false);
    expect(tirmidhi?.publicReady).toBe(false);
  });

  it("publicReady değerini yalnız fully_verified ve verified tercümede açar", () => {
    const reference = {
      ...hadithReferences[0],
      verificationStatus: "fully_verified" as const,
      translationStatus: "verified" as const,
      translationTr: "VALIDATION_FIXTURE_ONLY_NOT_A_TRANSLATION",
      translationMethod: "human_from_verified_arabic" as const,
      translationReviewedBy: "VALIDATION_FIXTURE_ONLY",
      translationVerifiedAt: "2099-01-01",
    };
    const collection = hadithCollections.find(
      (item) => item.id === reference.collectionId,
    );
    const topic = topics.find((item) => item.id === reference.topicId);

    if (!collection || !topic) {
      throw new Error("Rapor test fixture bağımlılıkları bulunamadı.");
    }

    expect(
      buildHadithVerificationReport(reference, collection, topic).publicReady,
    ).toBe(true);
  });
});
