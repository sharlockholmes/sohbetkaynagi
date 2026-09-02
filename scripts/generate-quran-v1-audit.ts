import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { topics } from "@/data/topics-v12";
import { verseReferenceById } from "@/data/verse-references";
import {
  buildQuranV1AuditSnapshot,
  renderQuranV1AuditMarkdown,
  serializeQuranV1AuditSnapshot,
} from "@/lib/quran-v1-audit";

async function main() {
  const snapshot = buildQuranV1AuditSnapshot(topics, verseReferenceById);
  const serializedSnapshot = serializeQuranV1AuditSnapshot(snapshot);
  const fingerprint = createHash("sha256").update(serializedSnapshot).digest("hex");
  const document = { fingerprint, snapshot };
  const docsDirectory = path.resolve("docs");

  await mkdir(docsDirectory, { recursive: true });
  await Promise.all([
    writeFile(
      path.join(docsDirectory, "quran-v1-master-audit.json"),
      `${JSON.stringify(document, null, 2)}\n`,
      "utf8",
    ),
    writeFile(
      path.join(docsDirectory, "quran-v1-master-audit.md"),
      renderQuranV1AuditMarkdown(snapshot, fingerprint),
      "utf8",
    ),
  ]);

  console.log(
    `Kur’an V1 audit snapshot üretildi: ${snapshot.summary.canonicalTopicCount} konu, ${snapshot.summary.totalReferenceCount} ilişki, fingerprint ${fingerprint}`,
  );
}

void main();
