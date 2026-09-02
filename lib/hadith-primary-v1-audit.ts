import { createHash } from "node:crypto";

import type { HadithReference } from "@/domain/hadith-types";

export type HadithPrimaryV1AuditSummary = {
  frozenPrimaryIds: number;
  frozenPrimaryRecords: number;
  canonicalTopicCoverage: number;
  direct: number;
  referenceVerified: number;
  fullyVerified: number;
  arabicPopulated: number;
  fullMatn: number;
  excerpt: number;
  grading: {
    sahih: number;
    hasen: number;
    hasanSahih: number;
  };
  translation: {
    aiDraft: number;
    missing: number;
    humanReviewed: number;
    verified: number;
  };
  publicReady: number;
};

export type HadithPrimaryV1AuditResult = {
  fingerprint: string;
  expectedFingerprint: string;
  summary: HadithPrimaryV1AuditSummary;
  errors: string[];
};

export type HadithPrimaryV1AuditInput = {
  references: readonly HadithReference[];
  canonicalTopicIds: readonly string[];
  frozenPrimaryIds: readonly string[];
  expectedFingerprint: string;
  expectedRecordCount: number;
};

const EXPECTED_EXCERPT_IDS = new Set([
  "sabir-bukhari-1469",
  "olum-ve-hayatin-geciciligi-bukhari-6416",
]);

function countBy<T>(
  values: readonly T[],
  predicate: (value: T) => boolean,
) {
  return values.filter(predicate).length;
}

export function serializeHadithPrimaryV1Baseline(
  references: readonly HadithReference[],
) {
  return JSON.stringify(
    references.map((reference) => ({
      id: reference.id,
      topicId: reference.topicId,
      relationType: reference.relationType,
      relevanceReason: reference.relevanceReason,
      arabicText: reference.arabicText,
      arabicTextType: reference.arabicTextType,
      narrator: reference.narrator,
      collectionId: reference.collectionId,
      bookName: reference.bookName,
      chapterName: reference.chapterName,
      primaryLocator: reference.primaryLocator,
      alternateLocators: reference.alternateLocators,
      hadithNumber: reference.hadithNumber,
      alternateNumbering: reference.alternateNumbering,
      sourceReference: reference.sourceReference,
      grading: reference.grading,
      gradingSource: reference.gradingSource,
      gradingNote: reference.gradingNote,
      verificationStatus: reference.verificationStatus,
      verifiedAt: reference.verifiedAt,
      reviewerNote: reference.reviewerNote,
      provenance: reference.provenance,
      verificationProviders: reference.verificationProviders,
    })),
  );
}

// Tarihsel tam snapshot fingerprint'ini yeniden üretmek gerektiğinde kullanılır.
// Reference baseline denetimi bu serializer'ı kullanmaz; translation alanları
// çalışma akışında değişebilir.
export function serializeHadithPrimaryV1LegacySnapshot(
  references: readonly HadithReference[],
) {
  return JSON.stringify(references);
}

export function fingerprintHadithPrimaryV1Baseline(
  references: readonly HadithReference[],
) {
  return createHash("sha256")
    .update(serializeHadithPrimaryV1Baseline(references))
    .digest("hex");
}

export function auditHadithPrimaryV1({
  references,
  canonicalTopicIds,
  frozenPrimaryIds,
  expectedFingerprint,
  expectedRecordCount,
}: HadithPrimaryV1AuditInput): HadithPrimaryV1AuditResult {
  const errors: string[] = [];
  const duplicateFrozenIds = frozenPrimaryIds.filter(
    (id, index) => frozenPrimaryIds.indexOf(id) !== index,
  );

  if (frozenPrimaryIds.length !== expectedRecordCount) {
    errors.push(
      "Frozen primary ID sayısı " +
        frozenPrimaryIds.length +
        "; beklenen " +
        expectedRecordCount +
        ".",
    );
  }
  if (duplicateFrozenIds.length > 0) {
    errors.push(
      "Frozen primary ID listesinde duplicate var: " +
        Array.from(new Set(duplicateFrozenIds)).join(", ") +
        ".",
    );
  }

  const referencesById = new Map<string, HadithReference[]>();
  for (const reference of references) {
    const matches = referencesById.get(reference.id) ?? [];
    matches.push(reference);
    referencesById.set(reference.id, matches);
  }

  const frozenReferences: HadithReference[] = [];
  for (const id of frozenPrimaryIds) {
    const matches = referencesById.get(id) ?? [];
    if (matches.length !== 1) {
      errors.push(
        id +
          ": katalogda tam 1 kayıt yerine " +
          matches.length +
          " kayıt bulundu.",
      );
      continue;
    }
    frozenReferences.push(matches[0]);
  }

  if (frozenReferences.length !== expectedRecordCount) {
    errors.push(
      "Frozen primary kayıt sayısı " +
        frozenReferences.length +
        "; beklenen " +
        expectedRecordCount +
        ".",
    );
  }

  const canonicalTopicIdSet = new Set(canonicalTopicIds);
  const topicCounts = new Map<string, number>();
  for (const reference of frozenReferences) {
    topicCounts.set(
      reference.topicId,
      (topicCounts.get(reference.topicId) ?? 0) + 1,
    );
    if (!canonicalTopicIdSet.has(reference.topicId)) {
      errors.push(
        reference.id +
          ": frozen baseline bilinmeyen topicId " +
          reference.topicId +
          " kullanıyor.",
      );
    }
  }
  for (const topicId of canonicalTopicIds) {
    const count = topicCounts.get(topicId) ?? 0;
    if (count !== 1) {
      errors.push(
        topicId +
          ": frozen baseline içinde tam 1 primary kayıt yerine " +
          count +
          " kayıt var.",
      );
    }
  }

  const excerptReferences = frozenReferences.filter(
    (reference) => reference.arabicTextType === "excerpt",
  );
  const actualExcerptIds = new Set(
    excerptReferences.map((reference) => reference.id),
  );
  if (
    actualExcerptIds.size !== EXPECTED_EXCERPT_IDS.size ||
    Array.from(EXPECTED_EXCERPT_IDS).some((id) => !actualExcerptIds.has(id))
  ) {
    errors.push(
      "Excerpt kayıtları yalnız Sabır/Buhârî 1469 ve Ölüm/Buhârî 6416 değildir.",
    );
  }

  const summary: HadithPrimaryV1AuditSummary = {
    frozenPrimaryIds: frozenPrimaryIds.length,
    frozenPrimaryRecords: frozenReferences.length,
    canonicalTopicCoverage: new Set(
      frozenReferences
        .map((reference) => reference.topicId)
        .filter((topicId) => canonicalTopicIdSet.has(topicId)),
    ).size,
    direct: countBy(
      frozenReferences,
      (reference) => reference.relationType === "direct",
    ),
    referenceVerified: countBy(
      frozenReferences,
      (reference) => reference.verificationStatus === "reference_verified",
    ),
    fullyVerified: countBy(
      frozenReferences,
      (reference) => reference.verificationStatus === "fully_verified",
    ),
    arabicPopulated: countBy(
      frozenReferences,
      (reference) => Boolean(reference.arabicText),
    ),
    fullMatn: countBy(
      frozenReferences,
      (reference) => reference.arabicTextType === "full_matn",
    ),
    excerpt: excerptReferences.length,
    grading: {
      sahih: countBy(
        frozenReferences,
        (reference) => reference.grading === "sahih",
      ),
      hasen: countBy(
        frozenReferences,
        (reference) => reference.grading === "hasen",
      ),
      hasanSahih: countBy(
        frozenReferences,
        (reference) => reference.grading === "hasan_sahih",
      ),
    },
    translation: {
      aiDraft: countBy(
        frozenReferences,
        (reference) => reference.translationStatus === "ai_draft",
      ),
      missing: countBy(
        frozenReferences,
        (reference) => reference.translationStatus === "missing",
      ),
      humanReviewed: countBy(
        frozenReferences,
        (reference) => reference.translationStatus === "human_reviewed",
      ),
      verified: countBy(
        frozenReferences,
        (reference) => reference.translationStatus === "verified",
      ),
    },
    publicReady: countBy(
      frozenReferences,
      (reference) =>
        reference.verificationStatus === "fully_verified" &&
        reference.translationStatus === "verified",
    ),
  };

  const expectedCounts: Array<
    [label: string, actual: number, expected: number]
  > = [
    ["canonical topic coverage", summary.canonicalTopicCoverage, 50],
    ["relationType=direct", summary.direct, 50],
    ["reference_verified", summary.referenceVerified, 50],
    ["fully_verified", summary.fullyVerified, 0],
    ["Arabic populated", summary.arabicPopulated, 50],
    ["full_matn", summary.fullMatn, 48],
    ["excerpt", summary.excerpt, 2],
    ["grading=sahih", summary.grading.sahih, 47],
    ["grading=hasen", summary.grading.hasen, 2],
    ["grading=hasan_sahih", summary.grading.hasanSahih, 1],
    ["publicReady", summary.publicReady, 0],
  ];
  for (const [label, actual, expected] of expectedCounts) {
    if (actual !== expected) {
      errors.push(label + ": " + actual + "; beklenen " + expected + ".");
    }
  }

  const fingerprint = fingerprintHadithPrimaryV1Baseline(frozenReferences);
  if (fingerprint !== expectedFingerprint) {
    errors.push(
      "Primary fingerprint " +
        fingerprint +
        "; beklenen " +
        expectedFingerprint +
        ".",
    );
  }

  return {
    fingerprint,
    expectedFingerprint,
    summary,
    errors,
  };
}

export function assertHadithPrimaryV1Audit(
  input: HadithPrimaryV1AuditInput,
) {
  const result = auditHadithPrimaryV1(input);
  if (result.errors.length > 0) {
    throw new Error(
      "Primary Hadith V1 audit başarısız:\n- " +
        result.errors.join("\n- "),
    );
  }
  return result;
}
