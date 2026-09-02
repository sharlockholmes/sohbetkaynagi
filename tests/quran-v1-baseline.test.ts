import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import storedAuditDocument from "@/docs/quran-v1-master-audit.json";
import { topics } from "@/data/topics-v12";
import { verseReferenceById } from "@/data/verse-references";
import {
  buildQuranV1AuditSnapshot,
  serializeQuranV1AuditSnapshot,
} from "@/lib/quran-v1-audit";

const QURAN_V1_BASELINE_FINGERPRINT = "04d62dd229173c9aebceef09c0c72c3a12f31cb522bb86fb9a7d88604f4a382e";

function fingerprint(snapshot: ReturnType<typeof buildQuranV1AuditSnapshot>) {
  return createHash("sha256").update(serializeQuranV1AuditSnapshot(snapshot)).digest("hex");
}

describe("Kur’an V1 sabit audit baseline", () => {
  const snapshot = buildQuranV1AuditSnapshot(topics, verseReferenceById);

  it("50 approved konu ve 135 ayet ilişkisini temel bütünlük kurallarıyla korur", () => {
    expect(snapshot.summary).toMatchObject({
      canonicalTopicCount: 50,
      approvedTopicCount: 50,
      totalReferenceCount: 135,
    });
    expect(snapshot.topics.every((topic) => topic.directVerses.length + topic.relatedVerses.length > 0)).toBe(true);

    for (const topic of snapshot.topics) {
      const keys = [...topic.directVerses, ...topic.relatedVerses].map(
        (verse) => `${verse.surahNumber}:${verse.ayahStart}:${verse.ayahEnd ?? verse.ayahStart}`,
      );
      expect(new Set(keys).size).toBe(keys.length);
    }

    const references = snapshot.topics.flatMap((topic) => [
      ...topic.directVerses,
      ...topic.relatedVerses,
    ]);
    expect(references.filter((reference) => reference.verified).every((reference) => Boolean(reference.provenance?.trim()))).toBe(true);
  });

  it("normalize edilmiş snapshot ve fingerprint değişikliğini yakalar", () => {
    const currentFingerprint = fingerprint(snapshot);
    const reorderedSnapshot = buildQuranV1AuditSnapshot([...topics].reverse(), verseReferenceById);

    expect(reorderedSnapshot).toEqual(snapshot);
    expect(snapshot).toEqual(storedAuditDocument.snapshot);
    expect(currentFingerprint).toBe(storedAuditDocument.fingerprint);
    expect(currentFingerprint).toBe(QURAN_V1_BASELINE_FINGERPRINT);
  });
});
