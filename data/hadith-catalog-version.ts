import type { HadithPrimaryCatalogRelease } from "@/domain/catalog-version-types";

export const HADITH_PRIMARY_CATALOG_VERSION = "1.0" as const;
export const HADITH_PRIMARY_CATALOG_STATUS = "frozen" as const;
export const HADITH_PRIMARY_CATALOG_AUDIT_STATUS = "audit_clean" as const;
export const HADITH_PRIMARY_REFERENCE_VERIFICATION_STATUS =
  "reference_verified" as const;
export const HADITH_PRIMARY_CATALOG_BASELINE_RECORD_COUNT = 50 as const;
// V1.0 reference-only baseline: mutable translation workflow alanlarını kapsamaz.
export const HADITH_PRIMARY_CATALOG_BASELINE_SHA256 =
  "7c8e4c2140b474790116a02cb84ffb2c06c6bf7a05f2c1a464e884da664615bf" as const;
// İlk freeze anındaki tarihsel, translation alanlarını da içeren tam snapshot.
export const HADITH_PRIMARY_CATALOG_LEGACY_SNAPSHOT_SHA256 =
  "71173c600ee4fad98efba5fd84f799d9118984a7a611274cd20a91537c84435c" as const;

// Canonical topic sırası 1 → 50. Bu kimlik listesi source of truth değildir;
// büyüyen katalog içinde frozen Primary Hadith V1 kayıtlarını seçen regresyon kilididir.
export const PRIMARY_HADITH_V1_IDS = Object.freeze([
  "sabir-bukhari-1469",
  "tevekkul-bukhari-6472",
  "anne-babaya-iyilik-bukhari-5971",
  "dua-bukhari-6340",
  "sukur-muslim-2734a",
  "olum-ve-hayatin-geciciligi-bukhari-6416",
  "kul-hakki-bukhari-2449",
  "tovbe-ve-pismanlik-bukhari-6309",
  "kardeslik-bukhari-13",
  "namazin-onemi-ve-manevi-etkisi-bukhari-528",
  "ahiret-hesap-bukhari-6536",
  "guzel-ahlak-bukhari-3559",
  "dogruluk-bukhari-6094",
  "giybet-muslim-2589",
  "ofke-bukhari-6114",
  "affetmek-muslim-2588",
  "merhamet-bukhari-7376",
  "kibir-muslim-91a",
  "haset-bukhari-6065",
  "emanet-sorumluluk-bukhari-7138",
  "yardimlasma-muslim-2699a",
  "aile-huzuru-muslim-1468b",
  "cocuk-terbiyesi-abu-dawud-495",
  "sila-i-rahim-bukhari-5991",
  "komsuluk-bukhari-6016",
  "haber-iletisim-bukhari-6475",
  "genclik-bukhari-660",
  "umit-muslim-2877a",
  "israf-tirmidhi-2380",
  "adalet-muslim-1827",
  "kuranla-yasamak-bukhari-5027",
  "ilim-bukhari-71",
  "vakit-bukhari-6412",
  "gayret-muslim-2664",
  "vefa-bukhari-34",
  "mahremiyet-bukhari-6241",
  "suizan-bukhari-6064",
  "iftira-bukhari-2654",
  "alay-kucumseme-muslim-2564a",
  "dostluk-bukhari-5534",
  "insanlarin-arasini-duzeltmek-bukhari-2692",
  "kotuluge-iyilikle-karsilik-vermek-muslim-2558a",
  "iyilik-ve-ihsan-muslim-1955a",
  "yetimlere-karsi-sorumluluk-bukhari-6005",
  "riya-ve-gosteristen-sakinmak-bukhari-6499",
  "iffet-ve-haya-bukhari-6117",
  "insan-onuru-ve-sayginligi-bukhari-1739",
  "yumusak-soz-ve-guzel-konusmak-bukhari-2989",
  "haksizlik-ve-zulumden-sakinmak-muslim-2577a",
  "nefis-muhasebesi-tirmidhi-2406",
] as const);

export const hadithPrimaryCatalogRelease = {
  version: HADITH_PRIMARY_CATALOG_VERSION,
  status: HADITH_PRIMARY_CATALOG_STATUS,
  baselineRecordCount: HADITH_PRIMARY_CATALOG_BASELINE_RECORD_COUNT,
  baselineFingerprint: HADITH_PRIMARY_CATALOG_BASELINE_SHA256,
  fingerprintScope: "reference_only",
  legacySnapshotFingerprint: HADITH_PRIMARY_CATALOG_LEGACY_SNAPSHOT_SHA256,
  auditStatus: HADITH_PRIMARY_CATALOG_AUDIT_STATUS,
  auditResult: {
    pass: 24,
    passWithNote: 26,
    review: 0,
  },
  referenceVerificationStatus:
    HADITH_PRIMARY_REFERENCE_VERIFICATION_STATUS,
  frozenAt: "2026-09-01",
} satisfies HadithPrimaryCatalogRelease;

// frozen katalog statüsüdür; HadithReference.verificationStatus değildir.
// Typed HadithReference verisi source of truth olmaya devam eder.
