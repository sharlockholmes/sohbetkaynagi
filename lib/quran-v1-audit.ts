import type { Topic, VerseReference } from "@/domain/content-types";

export const QURAN_V1_AUDIT_SCHEMA_VERSION = 1;

const QURAN_V1_CANONICAL_TOPIC_ORDER = [
  "sabir",
  "tevekkul",
  "anne-babaya-iyilik",
  "dua",
  "sukur",
  "olum-ve-hayatin-geciciligi",
  "kul-hakki",
  "tovbe-ve-pismanlik",
  "kardeslik",
  "namazin-onemi-ve-manevi-etkisi",
  "ahiret-ve-hesap-bilinci",
  "guzel-ahlak",
  "dogruluk-ve-durustluk",
  "giybet-ve-dili-korumak",
  "ofkeye-hakim-olmak",
  "affetmek-ve-bagislamak",
  "merhamet",
  "kibir-ve-buyuklenme",
  "haset-ve-kiskanclik",
  "emanet-ve-sorumluluk",
  "yardimlasma-ve-comertlik",
  "ailede-sevgi-huzur-ve-merhamet",
  "cocuk-terbiyesi-ve-ebeveyn-sorumlulugu",
  "sila-i-rahim-ve-akrabalik-baglari",
  "komsuluk",
  "haber-ve-iletisim-ahlaki",
  "genclik-ve-dogru-durus",
  "umit-ve-umitsizlige-kapilmamak",
  "israf-ve-olculu-yasamak",
  "adalet",
  "kuranla-yasamak-ve-ogut-almak",
  "ilim-ogrenmek-ve-bilginin-degeri",
  "vakit-ve-omru-degerlendirmek",
  "gayret-ve-emegin-degeri",
  "vefa-ve-sozunde-durmak",
  "mahremiyet-ve-ozel-hayata-saygi",
  "suizan-ve-zanlardan-sakinmak",
  "iftira-ve-asilsiz-soz",
  "alay-kucumseme-ve-kotu-lakap",
  "dostluk-ve-arkadas-secimi",
  "insanlarin-arasini-duzeltmek",
  "kotuluge-iyilikle-karsilik-vermek",
  "iyilik-ve-ihsan",
  "yetimlere-karsi-sorumluluk",
  "riya-ve-gosteristen-sakinmak",
  "iffet-ve-haya",
  "insan-onuru-ve-sayginligi",
  "yumusak-soz-ve-guzel-konusmak",
  "haksizlik-ve-zulumden-sakinmak",
  "nefis-muhasebesi-ve-kendini-duzeltmek",
] as const;

const canonicalOrderById = new Map<string, number>(
  QURAN_V1_CANONICAL_TOPIC_ORDER.map((id, index) => [id, index + 1]),
);

export type QuranV1AuditVerse = {
  id: string;
  reference: string;
  surahNameTr: string;
  surahNumber: number;
  ayahStart: number;
  ayahEnd?: number;
  relationType: "direct" | "related";
  relevanceReason: string;
  verified: boolean;
  provenance: string | null;
};

export type QuranV1AuditTopic = {
  canonicalOrder: number;
  id: string;
  slug: string;
  title: string;
  reviewStatus: Topic["reviewStatus"];
  directVerses: QuranV1AuditVerse[];
  relatedVerses: QuranV1AuditVerse[];
};

export type QuranV1AuditSnapshot = {
  schemaVersion: number;
  scope: "Quran V1 canonical audit baseline";
  sourceOfTruth: "Typed data layer (data/topics-v12.ts and data/verse-references.ts)";
  summary: {
    canonicalTopicCount: number;
    approvedTopicCount: number;
    directReferenceCount: number;
    relatedReferenceCount: number;
    totalReferenceCount: number;
    uniqueVerseRangeCount: number;
  };
  topics: QuranV1AuditTopic[];
};

function compareText(left: string, right: string) {
  return left.localeCompare(right, "tr", { sensitivity: "variant" });
}

function compareVerses(left: QuranV1AuditVerse, right: QuranV1AuditVerse) {
  return (
    left.surahNumber - right.surahNumber ||
    left.ayahStart - right.ayahStart ||
    (left.ayahEnd ?? left.ayahStart) - (right.ayahEnd ?? right.ayahStart) ||
    compareText(left.id, right.id)
  );
}

function formatReference(reference: VerseReference) {
  const ayah = reference.ayahEnd
    ? `${reference.ayahStart}–${reference.ayahEnd}`
    : String(reference.ayahStart);
  return `${reference.surahNameTr} ${reference.surahNumber}:${ayah}`;
}

function normalizeVerse(reference: VerseReference): QuranV1AuditVerse {
  return {
    id: reference.id,
    reference: formatReference(reference),
    surahNameTr: reference.surahNameTr,
    surahNumber: reference.surahNumber,
    ayahStart: reference.ayahStart,
    ...(reference.ayahEnd === undefined ? {} : { ayahEnd: reference.ayahEnd }),
    relationType: reference.relationType,
    relevanceReason: reference.relevanceReason,
    verified: reference.verified,
    provenance: reference.provenance,
  };
}

function resolveReferences(ids: string[], referenceById: ReadonlyMap<string, VerseReference>) {
  return ids
    .map((id) => {
      const reference = referenceById.get(id);
      if (!reference) throw new Error(`Audit snapshot için ayet referansı bulunamadı: ${id}`);
      return normalizeVerse(reference);
    })
    .sort(compareVerses);
}

export function buildQuranV1AuditSnapshot(
  topics: readonly Topic[],
  referenceById: ReadonlyMap<string, VerseReference>,
): QuranV1AuditSnapshot {
  const normalizedTopics = topics
    .map((topic): QuranV1AuditTopic => {
      const canonicalOrder = canonicalOrderById.get(topic.id);
      if (!canonicalOrder) throw new Error(`Audit sırası için canonical topic bulunamadı: ${topic.id}`);

      return {
        canonicalOrder,
        id: topic.id,
        slug: topic.slug,
        title: topic.title,
        reviewStatus: topic.reviewStatus,
        directVerses: resolveReferences(topic.directVerses, referenceById),
        relatedVerses: resolveReferences(topic.relatedVerses, referenceById),
      };
    })
    .sort((left, right) => compareText(left.id, right.id) || compareText(left.slug, right.slug));

  const allReferences = normalizedTopics.flatMap((topic) => [
    ...topic.directVerses,
    ...topic.relatedVerses,
  ]);
  const uniqueVerseRanges = new Set(
    allReferences.map(
      (reference) =>
        `${reference.surahNumber}:${reference.ayahStart}:${reference.ayahEnd ?? reference.ayahStart}`,
    ),
  );

  return {
    schemaVersion: QURAN_V1_AUDIT_SCHEMA_VERSION,
    scope: "Quran V1 canonical audit baseline",
    sourceOfTruth: "Typed data layer (data/topics-v12.ts and data/verse-references.ts)",
    summary: {
      canonicalTopicCount: normalizedTopics.length,
      approvedTopicCount: normalizedTopics.filter((topic) => topic.reviewStatus === "approved").length,
      directReferenceCount: normalizedTopics.reduce(
        (total, topic) => total + topic.directVerses.length,
        0,
      ),
      relatedReferenceCount: normalizedTopics.reduce(
        (total, topic) => total + topic.relatedVerses.length,
        0,
      ),
      totalReferenceCount: allReferences.length,
      uniqueVerseRangeCount: uniqueVerseRanges.size,
    },
    topics: normalizedTopics,
  };
}

export function serializeQuranV1AuditSnapshot(snapshot: QuranV1AuditSnapshot) {
  return JSON.stringify(snapshot);
}

function renderVerseList(verses: QuranV1AuditVerse[]) {
  if (verses.length === 0) return "- Yok";

  return verses
    .map(
      (verse) =>
        `- **${verse.reference}** — ${verse.relevanceReason}\n  - Doğrulandı: ${verse.verified ? "Evet" : "Hayır"}\n  - Provenance: ${verse.provenance ?? "Yok"}`,
    )
    .join("\n");
}

export function renderQuranV1AuditMarkdown(snapshot: QuranV1AuditSnapshot, fingerprint: string) {
  const orderedTopics = [...snapshot.topics].sort(
    (left, right) => left.canonicalOrder - right.canonicalOrder,
  );
  const topicSections = orderedTopics
    .map(
      (topic) => `## ${topic.canonicalOrder}. ${topic.title}

- Canonical ID: \`${topic.id}\`
- Slug: \`${topic.slug}\`
- Review status: \`${topic.reviewStatus}\`

### Direct

${renderVerseList(topic.directVerses)}

### Related

${renderVerseList(topic.relatedVerses)}`,
    )
    .join("\n\n");

  return `# Kur’an V1 Master Audit Baseline

Bu dosya typed veri katmanından deterministik olarak üretilmiş bir denetim snapshot’ıdır. Source of truth değildir; kaynak veri \`data/topics-v12.ts\` ve \`data/verse-references.ts\` dosyalarıdır.

## Otomatik özet

- Canonical topic: ${snapshot.summary.canonicalTopicCount}
- Approved topic: ${snapshot.summary.approvedTopicCount}
- Direct referans: ${snapshot.summary.directReferenceCount}
- Related referans: ${snapshot.summary.relatedReferenceCount}
- Toplam ayet ilişkisi: ${snapshot.summary.totalReferenceCount}
- Benzersiz ayet/range: ${snapshot.summary.uniqueVerseRangeCount}
- SHA-256 fingerprint: \`${fingerprint}\`

${topicSections}
`;
}
