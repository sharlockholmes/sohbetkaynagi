import {
  HADITH_PRIMARY_CATALOG_BASELINE_RECORD_COUNT,
  HADITH_PRIMARY_CATALOG_BASELINE_SHA256,
  PRIMARY_HADITH_V1_IDS,
} from "@/data/hadith-catalog-version";
import { hadithReferences } from "@/data/hadith-references";
import { topics } from "@/data/topics-v12";
import { assertHadithPrimaryV1Audit } from "@/lib/hadith-primary-v1-audit";

try {
  const result = assertHadithPrimaryV1Audit({
    references: hadithReferences,
    canonicalTopicIds: topics.map((topic) => topic.id),
    frozenPrimaryIds: PRIMARY_HADITH_V1_IDS,
    expectedFingerprint: HADITH_PRIMARY_CATALOG_BASELINE_SHA256,
    expectedRecordCount: HADITH_PRIMARY_CATALOG_BASELINE_RECORD_COUNT,
  });

  console.log(
    [
      "Primary Hadith V1 frozen baseline audit başarılı.",
      "Kayıt/topic: " +
        result.summary.frozenPrimaryRecords +
        "/" +
        result.summary.canonicalTopicCoverage,
      "reference_verified: " + result.summary.referenceVerified,
      "Arabic: " +
        result.summary.arabicPopulated +
        " (full_matn " +
        result.summary.fullMatn +
        ", excerpt " +
        result.summary.excerpt +
        ")",
      "Grading: sahih " +
        result.summary.grading.sahih +
        ", hasen " +
        result.summary.grading.hasen +
        ", hasan_sahih " +
        result.summary.grading.hasanSahih,
      "Translation: ai_draft " +
        result.summary.translation.aiDraft +
        ", missing " +
        result.summary.translation.missing,
      "fully_verified/publicReady: " +
        result.summary.fullyVerified +
        "/" +
        result.summary.publicReady,
      "Reference-only SHA-256: " + result.fingerprint,
    ].join("\n"),
  );
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
