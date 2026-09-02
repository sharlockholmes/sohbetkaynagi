import type { QuranCatalogRelease } from "@/domain/catalog-version-types";

export const QURAN_CATALOG_VERSION = "1.0" as const;
export const QURAN_CATALOG_STATUS = "frozen" as const;
export const QURAN_CATALOG_BASELINE_SHA256 =
  "04d62dd229173c9aebceef09c0c72c3a12f31cb522bb86fb9a7d88604f4a382e" as const;

export const quranCatalogRelease = {
  version: QURAN_CATALOG_VERSION,
  status: QURAN_CATALOG_STATUS,
  baselineSha256: QURAN_CATALOG_BASELINE_SHA256,
  frozenAt: "2026-08-31",
} satisfies QuranCatalogRelease;

// Bu metadata release/freeze kaydıdır. Kur’an source of truth typed içerik katmanıdır.
