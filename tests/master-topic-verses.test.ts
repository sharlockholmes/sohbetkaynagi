import { describe, expect, it } from "vitest";
import { topics } from "@/data/topics-v12";
import { verseReferenceById, verseReferences } from "@/data/verse-references";
import { searchTopics } from "@/lib/topic-search-v12";

const MASTER_PROVENANCE = "GÜL STUDIOS Kur’an konu doğrulaması";
const APPROVED_REVIEWER_NOTE = "GÜL STUDIOS Kur’an konu doğrulaması tamamlandı.";

const expectedTopics1To10 = [
  { slug: "sabir", direct: ["sabir-2-153", "sabir-2-155-157", "sabir-39-10", "sabir-3-200"], related: [] },
  { slug: "tevekkul", direct: ["tevekkul-3-159", "tevekkul-8-2", "tevekkul-65-2-3"], related: [] },
  { slug: "anne-babaya-iyilik", direct: ["anne-babaya-17-23-24", "anne-babaya-31-14-15", "anne-babaya-29-8", "anne-babaya-6-151"], related: [] },
  { slug: "dua", direct: ["dua-2-186", "dua-40-60", "dua-7-55-56"], related: [] },
  { slug: "sukur", direct: ["sukur-2-152", "sukur-14-7-8", "sukur-31-12", "sukur-16-114", "sukur-27-40"], related: [] },
  { slug: "olum-ve-hayatin-geciciligi", direct: ["olum-3-185", "olum-21-34-35", "olum-57-20"], related: [] },
  { slug: "kul-hakki", direct: ["kul-hakki-2-188", "kul-hakki-4-29", "kul-hakki-49-11-12"], related: [] },
  { slug: "tovbe-ve-pismanlik", direct: ["tovbe-39-53", "tovbe-66-8", "tovbe-25-70-71"], related: [] },
  { slug: "kardeslik", direct: ["kardeslik-49-10", "kardeslik-3-103"], related: ["kardeslik-59-9"] },
  { slug: "namazin-onemi-ve-manevi-etkisi", direct: ["namaz-29-45", "namaz-20-14", "namaz-23-1-2", "namaz-23-9"], related: ["namaz-2-45-46"] },
] as const;

const expectedTopics11To20 = [
  { slug: "ahiret-ve-hesap-bilinci", direct: ["ahiret-2-281", "ahiret-99-7-8", "ahiret-101-6-11"], related: [] },
  { slug: "guzel-ahlak", direct: ["guzel-ahlak-68-4", "guzel-ahlak-16-90"], related: ["guzel-ahlak-17-53"] },
  { slug: "dogruluk-ve-durustluk", direct: ["dogruluk-9-119", "dogruluk-33-70-71"], related: [] },
  { slug: "giybet-ve-dili-korumak", direct: ["giybet-49-12"], related: ["giybet-17-53"] },
  { slug: "ofkeye-hakim-olmak", direct: ["ofke-3-134"], related: [] },
  { slug: "affetmek-ve-bagislamak", direct: ["affetmek-3-134", "affetmek-24-22", "affetmek-42-40", "affetmek-42-43"], related: [] },
  { slug: "merhamet", direct: ["merhamet-90-17", "merhamet-3-159", "merhamet-48-29"], related: ["merhamet-21-107"] },
  { slug: "kibir-ve-buyuklenme", direct: ["kibir-31-18", "kibir-16-23", "kibir-7-146"], related: [] },
  { slug: "haset-ve-kiskanclik", direct: ["haset-113-5", "haset-4-54", "haset-2-109"], related: [] },
  { slug: "emanet-ve-sorumluluk", direct: ["emanet-4-58", "emanet-23-8", "emanet-8-27"], related: [] },
] as const;

const expectedTopics21To30 = [
  { slug: "yardimlasma-ve-comertlik", direct: ["yardimlasma-5-2", "yardimlasma-2-177", "yardimlasma-3-92"], related: [] },
  { slug: "ailede-sevgi-huzur-ve-merhamet", direct: ["aile-30-21"], related: ["aile-25-74"] },
  { slug: "cocuk-terbiyesi-ve-ebeveyn-sorumlulugu", direct: ["cocuk-66-6", "cocuk-31-13", "cocuk-31-16-19"], related: ["cocuk-25-74"] },
  { slug: "sila-i-rahim-ve-akrabalik-baglari", direct: ["sila-17-26", "sila-30-38", "sila-4-36"], related: [] },
  { slug: "komsuluk", direct: ["komsuluk-4-36"], related: [] },
  { slug: "haber-ve-iletisim-ahlaki", direct: ["haber-49-6", "haber-49-11-12", "haber-17-36", "haber-33-70-71"], related: [] },
  { slug: "genclik-ve-dogru-durus", direct: ["genclik-18-13-16"], related: [] },
  { slug: "umit-ve-umitsizlige-kapilmamak", direct: ["umit-39-53", "umit-12-87"], related: [] },
  { slug: "israf-ve-olculu-yasamak", direct: ["israf-7-31", "israf-25-67"], related: [] },
  { slug: "adalet", direct: ["adalet-4-135", "adalet-5-8", "adalet-16-90"], related: [] },
] as const;

const expectedTopics31To40 = [
  { slug: "kuranla-yasamak-ve-ogut-almak", direct: ["kuranla-38-29", "kuranla-17-9", "kuranla-39-23"], related: [] },
  { slug: "ilim-ogrenmek-ve-bilginin-degeri", direct: ["ilim-39-9", "ilim-20-114", "ilim-58-11"], related: [] },
  { slug: "vakit-ve-omru-degerlendirmek", direct: ["vakit-103-1-3"], related: [] },
  { slug: "gayret-ve-emegin-degeri", direct: ["gayret-9-105", "gayret-53-39-41"], related: [] },
  { slug: "vefa-ve-sozunde-durmak", direct: ["vefa-17-34", "vefa-16-91"], related: [] },
  { slug: "mahremiyet-ve-ozel-hayata-saygi", direct: ["mahremiyet-24-27-28", "mahremiyet-24-58-59", "mahremiyet-49-12"], related: [] },
  { slug: "suizan-ve-zanlardan-sakinmak", direct: ["suizan-49-12", "suizan-24-12"], related: [] },
  { slug: "iftira-ve-asilsiz-soz", direct: ["iftira-24-4", "iftira-24-11-16", "iftira-33-58"], related: [] },
  { slug: "alay-kucumseme-ve-kotu-lakap", direct: ["alay-49-11"], related: [] },
  { slug: "dostluk-ve-arkadas-secimi", direct: ["dostluk-25-27-29", "dostluk-43-67"], related: [] },
] as const;

const expectedTopics41To50 = [
  { slug: "insanlarin-arasini-duzeltmek", direct: ["arayi-duzeltmek-49-9-10", "arayi-duzeltmek-4-114"], related: [] },
  { slug: "kotuluge-iyilikle-karsilik-vermek", direct: ["kotuluge-iyilik-41-34-35"], related: [] },
  { slug: "iyilik-ve-ihsan", direct: ["iyilik-ihsan-16-90", "iyilik-ihsan-2-195"], related: [] },
  { slug: "yetimlere-karsi-sorumluluk", direct: ["yetim-4-2", "yetim-4-10", "yetim-93-9"], related: [] },
  { slug: "riya-ve-gosteristen-sakinmak", direct: ["riya-107-4-7", "riya-2-264"], related: [] },
  { slug: "iffet-ve-haya", direct: ["iffet-24-30-31", "iffet-23-5-7", "iffet-33-35"], related: ["iffet-12-23-24", "iffet-28-25"] },
  { slug: "insan-onuru-ve-sayginligi", direct: ["insan-onuru-17-70"], related: ["insan-onuru-49-13"] },
  { slug: "yumusak-soz-ve-guzel-konusmak", direct: ["yumusak-soz-17-53", "yumusak-soz-20-44", "yumusak-soz-2-83"], related: [] },
  { slug: "haksizlik-ve-zulumden-sakinmak", direct: ["zulum-42-42", "zulum-16-90"], related: ["zulum-11-113"] },
  { slug: "nefis-muhasebesi-ve-kendini-duzeltmek", direct: ["nefis-muhasebesi-59-18-19"], related: [] },
] as const;

function referencedIds(expected: readonly { direct: readonly string[]; related: readonly string[] }[]) {
  return expected.flatMap((item) => [...item.direct, ...item.related]);
}

describe("canonical konu master ayet verisi", () => {
  it("50 konunun tamamını approved durumda tutar", () => {
    expect(topics).toHaveLength(50);

    for (const topic of topics) {
      expect(topic.reviewStatus).toBe("approved");
      expect(topic.reviewedAt).toBe("2026-08-31");
      expect(topic.reviewerNote).toBe(APPROVED_REVIEWER_NOTE);
    }

    expect(topics.filter((topic) => topic.reviewStatus === "draft")).toHaveLength(0);
  });

  it("1–10 master setini değiştirmeden korur", () => {
    for (const expected of expectedTopics1To10) {
      const topic = topics.find((item) => item.slug === expected.slug);
      expect(topic?.directVerses).toEqual([...expected.direct]);
      expect(topic?.relatedVerses).toEqual([...expected.related]);
    }

    const ids = referencedIds(expectedTopics1To10);
    expect(ids).toHaveLength(36);
    expect(ids.filter((id) => verseReferenceById.get(id)?.relationType === "direct")).toHaveLength(34);
    expect(ids.filter((id) => verseReferenceById.get(id)?.relationType === "related")).toHaveLength(2);
  });

  it("11–20 konularını tam 25 direct ve 3 related master ilişkisine bağlar", () => {
    for (const expected of expectedTopics11To20) {
      const topic = topics.find((item) => item.slug === expected.slug);
      expect(topic).toBeDefined();
      expect(topic?.directVerses).toEqual([...expected.direct]);
      expect(topic?.relatedVerses).toEqual([...expected.related]);
      expect(new Set([...(topic?.directVerses ?? []), ...(topic?.relatedVerses ?? [])]).size).toBe(
        (topic?.directVerses.length ?? 0) + (topic?.relatedVerses.length ?? 0),
      );
    }

    const ids = referencedIds(expectedTopics11To20);
    const references = ids.map((id) => verseReferenceById.get(id));
    expect(ids).toHaveLength(28);
    expect(references.every(Boolean)).toBe(true);
    expect(references.filter((item) => item?.relationType === "direct")).toHaveLength(25);
    expect(references.filter((item) => item?.relationType === "related")).toHaveLength(3);
  });

  it("21–30 konularını tam 23 direct ve 2 related master ilişkisine bağlar", () => {
    for (const expected of expectedTopics21To30) {
      const topic = topics.find((item) => item.slug === expected.slug);
      expect(topic).toBeDefined();
      expect(topic?.directVerses).toEqual([...expected.direct]);
      expect(topic?.relatedVerses).toEqual([...expected.related]);
      expect(new Set([...(topic?.directVerses ?? []), ...(topic?.relatedVerses ?? [])]).size).toBe(
        (topic?.directVerses.length ?? 0) + (topic?.relatedVerses.length ?? 0),
      );
    }

    const ids = referencedIds(expectedTopics21To30);
    const references = ids.map((id) => verseReferenceById.get(id));
    expect(ids).toHaveLength(25);
    expect(references.every(Boolean)).toBe(true);
    expect(references.filter((item) => item?.relationType === "direct")).toHaveLength(23);
    expect(references.filter((item) => item?.relationType === "related")).toHaveLength(2);
  });

  it("31–40 konularını tam 22 direct ve sıfır related master ilişkisine bağlar", () => {
    for (const expected of expectedTopics31To40) {
      const topic = topics.find((item) => item.slug === expected.slug);
      expect(topic).toBeDefined();
      expect(topic?.directVerses).toEqual([...expected.direct]);
      expect(topic?.relatedVerses).toEqual([]);
      expect(new Set(topic?.directVerses ?? []).size).toBe(topic?.directVerses.length);
    }

    const ids = referencedIds(expectedTopics31To40);
    const references = ids.map((id) => verseReferenceById.get(id));
    expect(ids).toHaveLength(22);
    expect(references.every(Boolean)).toBe(true);
    expect(references.every((item) => item?.relationType === "direct")).toBe(true);
  });

  it("41–50 konularını tam 20 direct ve 4 related master ilişkisine bağlar", () => {
    for (const expected of expectedTopics41To50) {
      const topic = topics.find((item) => item.slug === expected.slug);
      expect(topic).toBeDefined();
      expect(topic?.directVerses).toEqual([...expected.direct]);
      expect(topic?.relatedVerses).toEqual([...expected.related]);
      expect(new Set([...(topic?.directVerses ?? []), ...(topic?.relatedVerses ?? [])]).size).toBe(
        (topic?.directVerses.length ?? 0) + (topic?.relatedVerses.length ?? 0),
      );
    }

    const ids = referencedIds(expectedTopics41To50);
    const references = ids.map((id) => verseReferenceById.get(id));
    expect(ids).toHaveLength(24);
    expect(references.every(Boolean)).toBe(true);
    expect(references.filter((item) => item?.relationType === "direct")).toHaveLength(20);
    expect(references.filter((item) => item?.relationType === "related")).toHaveLength(4);
  });

  it("41–50 özel direct/related sınıflamalarını aynen korur", () => {
    const iffet = topics.find((topic) => topic.slug === "iffet-ve-haya");
    expect(iffet?.directVerses).toEqual(["iffet-24-30-31", "iffet-23-5-7", "iffet-33-35"]);
    expect(iffet?.relatedVerses).toEqual(["iffet-12-23-24", "iffet-28-25"]);
    expect(verseReferenceById.get("iffet-12-23-24")?.relationType).toBe("related");
    expect(verseReferenceById.get("iffet-28-25")?.relationType).toBe("related");

    const onur = topics.find((topic) => topic.slug === "insan-onuru-ve-sayginligi");
    expect(onur?.directVerses).toEqual(["insan-onuru-17-70"]);
    expect(onur?.relatedVerses).toEqual(["insan-onuru-49-13"]);

    const zulum = topics.find((topic) => topic.slug === "haksizlik-ve-zulumden-sakinmak");
    expect(zulum?.directVerses).toEqual(["zulum-42-42", "zulum-16-90"]);
    expect(zulum?.relatedVerses).toEqual(["zulum-11-113"]);

    const nefis = topics.find((topic) => topic.slug === "nefis-muhasebesi-ve-kendini-duzeltmek");
    expect(nefis?.directVerses).toEqual(["nefis-muhasebesi-59-18-19"]);
    expect(nefis?.relatedVerses).toEqual([]);
  });

  it("31–40 semantik sınırlarını ve dar master setlerini korur", () => {
    const asrTopics = topics.filter((topic) => [...topic.directVerses, ...topic.relatedVerses].includes("vakit-103-1-3"));
    expect(asrTopics.map((topic) => topic.slug)).toEqual(["vakit-ve-omru-degerlendirmek"]);

    const gayret = topics.find((topic) => topic.slug === "gayret-ve-emegin-degeri");
    expect(gayret?.directVerses).toEqual(["gayret-9-105", "gayret-53-39-41"]);

    const mahremiyet = topics.find((topic) => topic.slug === "mahremiyet-ve-ozel-hayata-saygi");
    expect(mahremiyet?.directVerses).toHaveLength(3);

    const alay = topics.find((topic) => topic.slug === "alay-kucumseme-ve-kotu-lakap");
    expect(alay?.directVerses).toEqual(["alay-49-11"]);
    expect(alay?.relatedVerses).toEqual([]);
  });

  it("Lokmân referanslarını ayırır, Gençlik ve Komşuluk setlerini dar tutar", () => {
    expect(verseReferenceById.get("cocuk-31-13")).toMatchObject({ surahNumber: 31, ayahStart: 13, ayahEnd: undefined });
    expect(verseReferenceById.get("cocuk-31-16-19")).toMatchObject({ surahNumber: 31, ayahStart: 16, ayahEnd: 19 });

    const genclik = topics.find((topic) => topic.slug === "genclik-ve-dogru-durus");
    expect(genclik?.directVerses).toEqual(["genclik-18-13-16"]);
    expect(genclik?.relatedVerses).toEqual([]);
    expect([...genclik!.directVerses, ...genclik!.relatedVerses].some((id) => id.includes("103-1-3"))).toBe(false);

    const komsuluk = topics.find((topic) => topic.slug === "komsuluk");
    expect(komsuluk?.directVerses).toEqual(["komsuluk-4-36"]);
    expect(komsuluk?.relatedVerses).toEqual([]);
  });

  it("11. konunun eski master dışı ilişkilerini kaldırır ve Zilzâl ilişkisini normalize eder", () => {
    const oldExtraIds = ["ahiret-2-4", "ahiret-29-64", "ahiret-87-16-17", "ahiret-57-20"];
    expect(oldExtraIds.every((id) => !verseReferenceById.has(id))).toBe(true);
    expect(verseReferenceById.get("ahiret-99-7-8")?.relationType).toBe("direct");
  });

  it("kritik aralıkları ve Şûrâ tek ayetlerini doğru tutar", () => {
    expect(verseReferenceById.get("ahiret-99-7-8")).toMatchObject({ surahNumber: 99, ayahStart: 7, ayahEnd: 8, relationType: "direct" });
    expect(verseReferenceById.get("ahiret-101-6-11")).toMatchObject({ surahNumber: 101, ayahStart: 6, ayahEnd: 11, relationType: "direct" });
    expect(verseReferenceById.get("dogruluk-33-70-71")).toMatchObject({ surahNumber: 33, ayahStart: 70, ayahEnd: 71, relationType: "direct" });
    expect(verseReferenceById.get("affetmek-42-40")).toMatchObject({ surahNumber: 42, ayahStart: 40, ayahEnd: undefined, relationType: "direct" });
    expect(verseReferenceById.get("affetmek-42-43")).toMatchObject({ surahNumber: 42, ayahStart: 43, ayahEnd: undefined, relationType: "direct" });
  });

  it("global katalog sanity kontrollerini ve 135 ilişki toplamını korur", () => {
    expect(new Set(topics.map((topic) => topic.id)).size).toBe(50);
    expect(new Set(topics.map((topic) => topic.slug)).size).toBe(50);
    expect(topics.every((topic) => topic.title.trim() && topic.summary.trim())).toBe(true);
    expect(topics.every((topic) => topic.directVerses.length + topic.relatedVerses.length > 0)).toBe(true);
    expect(topics.every((topic) => searchTopics(topic.title, 50).some((result) => result.topic.slug === topic.slug))).toBe(true);
    expect(verseReferences).toHaveLength(135);
    expect(new Set(verseReferences.map((reference) => reference.id)).size).toBe(135);
    expect(verseReferences.every((reference) => reference.verified && reference.provenance === MASTER_PROVENANCE)).toBe(true);
  });
});
