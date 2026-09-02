import { z } from "zod";
import type { Topic } from "@/domain/content-types";
import type {
  HadithCollection,
  HadithReference,
} from "@/domain/hadith-types";

const nonEmpty = z.string().trim().min(1);
const nullableText = nonEmpty.nullable();
const providerId = z
  .string()
  .trim()
  .regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "providerId küçük harfli slug biçiminde olmalıdır.",
  );

export const hadithLocatorSchema = z.object({
  scheme: z.enum([
    "collection_global",
    "in_book",
    "diyanet_hadislerle_islam",
    "legacy",
    "other",
  ]),
  value: nonEmpty,
  providerId: providerId.optional(),
  note: nonEmpty.optional(),
});

export const hadithVerificationProviderSchema = z.object({
  id: providerId,
  name: nonEmpty,
  url: z.url(),
  role: z.enum([
    "text_and_locator_verification",
    "cross_check",
    "locator_cross_check",
  ]),
});

export const hadithCollectionSchema = z.object({
  id: nonEmpty,
  canonicalName: nonEmpty,
  arabicName: nullableText,
  author: nonEmpty,
  category: z.enum(["canonical_collection", "thematic_compilation"]),
  priority: z.enum(["primary", "secondary", "additional", "topic_index"]),
  theologicalFit: nonEmpty,
  usagePolicy: z.enum(["original_source", "topic_discovery_only"]),
  notes: nonEmpty,
});

export const hadithReferenceSchema = z
  .object({
    id: nonEmpty,
    topicId: nonEmpty,
    relationType: z.enum(["direct", "related"]),
    relevanceReason: nonEmpty,
    arabicText: nullableText,
    arabicTextType: z.enum(["full_matn", "excerpt"]).nullable(),
    narrator: nullableText,
    collectionId: nullableText,
    bookName: nullableText,
    chapterName: nullableText,
    primaryLocator: hadithLocatorSchema,
    alternateLocators: z.array(hadithLocatorSchema),
    hadithNumber: nullableText,
    alternateNumbering: z.array(nonEmpty),
    sourceReference: nullableText,
    grading: z.enum([
      "sahih",
      "hasen",
      "hasan_sahih",
      "daif",
      "mixed",
      "not_applicable",
      "unknown",
    ]),
    gradingSource: nullableText,
    gradingNote: nullableText.optional(),
    translationTr: nullableText,
    translationStatus: z.enum([
      "missing",
      "ai_draft",
      "human_reviewed",
      "verified",
    ]),
    translationMethod: z
      .enum(["ai_from_verified_arabic", "human_from_verified_arabic"])
      .nullable(),
    translationReviewedBy: nullableText,
    translationVerifiedAt: nullableText,
    translationNotes: nullableText,
    verificationStatus: z.enum([
      "draft",
      "source_located",
      "reference_verified",
      "fully_verified",
    ]),
    verifiedAt: nullableText,
    reviewerNote: nonEmpty,
    provenance: nullableText,
    verificationProviders: z.array(hadithVerificationProviderSchema),
  })
  .superRefine((value, context) => {
    if (value.arabicText && !value.arabicTextType) {
      context.addIssue({
        code: "custom",
        path: ["arabicTextType"],
        message: "Arapça metin varsa full_matn veya excerpt türü zorunludur.",
      });
    }
    if (!value.arabicText && value.arabicTextType) {
      context.addIssue({
        code: "custom",
        path: ["arabicTextType"],
        message: "Arapça metin yokken arabicTextType kullanılamaz.",
      });
    }

    const locatorKeys = new Set<string>();
    [value.primaryLocator, ...value.alternateLocators].forEach(
      (locator, index) => {
        const key = `${locator.scheme}:${locator.value.trim().toLocaleLowerCase("tr-TR")}`;
        if (locatorKeys.has(key)) {
          context.addIssue({
            code: "custom",
            path:
              index === 0
                ? ["primaryLocator"]
                : ["alternateLocators", index - 1],
            message: `Aynı locator scheme+value bir kayıtta tekrarlanamaz: ${locator.scheme}=${locator.value}`,
          });
        }
        locatorKeys.add(key);
      },
    );

    const providerKeys = new Set<string>();
    value.verificationProviders.forEach((provider, index) => {
      const key = `${provider.id}:${provider.role}`;
      if (providerKeys.has(key)) {
        context.addIssue({
          code: "custom",
          path: ["verificationProviders", index],
          message: `Aynı provider ve rol bir kayıtta tekrarlanamaz: ${key}`,
        });
      }
      providerKeys.add(key);
    });

    if (
      value.verificationStatus === "source_located" ||
      value.verificationStatus === "reference_verified" ||
      value.verificationStatus === "fully_verified"
    ) {
      if (!value.collectionId) {
        context.addIssue({
          code: "custom",
          path: ["collectionId"],
          message: "source_located ve üzeri için collectionId zorunludur.",
        });
      }
      if (!value.provenance) {
        context.addIssue({
          code: "custom",
          path: ["provenance"],
          message: "source_located ve üzeri için provenance zorunludur.",
        });
      }
    }

    const requiresVerifiedReference =
      value.verificationStatus === "reference_verified" ||
      value.verificationStatus === "fully_verified";

    if (requiresVerifiedReference) {
      if (!value.sourceReference) {
        context.addIssue({
          code: "custom",
          path: ["sourceReference"],
          message: "reference_verified/fully_verified için sourceReference zorunludur.",
        });
      }
      if (!value.arabicText) {
        context.addIssue({
          code: "custom",
          path: ["arabicText"],
          message: "reference_verified/fully_verified için arabicText zorunludur.",
        });
      }
      if (!value.verifiedAt) {
        context.addIssue({
          code: "custom",
          path: ["verifiedAt"],
          message: "reference_verified/fully_verified için verifiedAt zorunludur.",
        });
      }
      if (value.verificationProviders.length === 0) {
        context.addIssue({
          code: "custom",
          path: ["verificationProviders"],
          message:
            "reference_verified/fully_verified için en az bir doğrulama provider kaydı zorunludur.",
        });
      }
    }

    if (
      ["sahih", "hasen", "hasan_sahih", "daif", "mixed"].includes(
        value.grading,
      ) &&
      !value.gradingSource
    ) {
      context.addIssue({
        code: "custom",
        path: ["gradingSource"],
        message: "Aktarılan grading için gradingSource zorunludur.",
      });
    }

    if (value.translationStatus === "missing") {
      if (value.translationTr) {
        context.addIssue({
          code: "custom",
          path: ["translationTr"],
          message: "missing translation durumunda translationTr boş olmalıdır.",
        });
      }
      if (value.translationMethod) {
        context.addIssue({
          code: "custom",
          path: ["translationMethod"],
          message: "missing translation durumunda translationMethod boş olmalıdır.",
        });
      }
      if (value.translationReviewedBy) {
        context.addIssue({
          code: "custom",
          path: ["translationReviewedBy"],
          message: "missing translation insan incelemesi taşıyamaz.",
        });
      }
      if (value.translationVerifiedAt) {
        context.addIssue({
          code: "custom",
          path: ["translationVerifiedAt"],
          message: "missing translation doğrulama tarihi taşıyamaz.",
        });
      }
      if (value.translationNotes) {
        context.addIssue({
          code: "custom",
          path: ["translationNotes"],
          message: "missing translation tercüme notu taşıyamaz.",
        });
      }
    }

    if (value.translationStatus === "ai_draft") {
      if (!value.translationTr) {
        context.addIssue({
          code: "custom",
          path: ["translationTr"],
          message: "ai_draft translation için translationTr zorunludur.",
        });
      }
      if (value.translationMethod !== "ai_from_verified_arabic") {
        context.addIssue({
          code: "custom",
          path: ["translationMethod"],
          message:
            "ai_draft translation yalnız ai_from_verified_arabic yöntemiyle kaydedilebilir.",
        });
      }
      if (value.translationReviewedBy) {
        context.addIssue({
          code: "custom",
          path: ["translationReviewedBy"],
          message: "ai_draft translation insan tarafından incelenmiş gösterilemez.",
        });
      }
      if (value.translationVerifiedAt) {
        context.addIssue({
          code: "custom",
          path: ["translationVerifiedAt"],
          message: "ai_draft translation doğrulanmış gösterilemez.",
        });
      }
    }

    if (value.translationStatus === "human_reviewed") {
      if (!value.translationTr) {
        context.addIssue({
          code: "custom",
          path: ["translationTr"],
          message: "human_reviewed translation için translationTr zorunludur.",
        });
      }
      if (!value.translationMethod) {
        context.addIssue({
          code: "custom",
          path: ["translationMethod"],
          message: "human_reviewed translation için translationMethod zorunludur.",
        });
      }
      if (!value.translationReviewedBy) {
        context.addIssue({
          code: "custom",
          path: ["translationReviewedBy"],
          message: "human_reviewed translation için inceleyen kişi zorunludur.",
        });
      }
    }

    if (value.translationStatus === "verified") {
      if (!value.translationTr) {
        context.addIssue({
          code: "custom",
          path: ["translationTr"],
          message: "verified translation için translationTr zorunludur.",
        });
      }
      if (!value.translationMethod) {
        context.addIssue({
          code: "custom",
          path: ["translationMethod"],
          message: "verified translation için translationMethod zorunludur.",
        });
      }
      if (!value.translationReviewedBy) {
        context.addIssue({
          code: "custom",
          path: ["translationReviewedBy"],
          message: "verified translation için inceleyen kişi zorunludur.",
        });
      }
      if (!value.translationVerifiedAt) {
        context.addIssue({
          code: "custom",
          path: ["translationVerifiedAt"],
          message: "verified translation için doğrulama tarihi zorunludur.",
        });
      }
    }

    if (value.verificationStatus === "fully_verified") {
      if (value.translationStatus !== "verified") {
        context.addIssue({
          code: "custom",
          path: ["translationStatus"],
          message: "fully_verified için translationStatus verified olmalıdır.",
        });
      }
      if (!value.verifiedAt) {
        context.addIssue({
          code: "custom",
          path: ["verifiedAt"],
          message: "fully_verified için verifiedAt zorunludur.",
        });
      }
    }
  });

export type HadithContentSnapshot = {
  topics: Topic[];
  hadithCollections: HadithCollection[];
  hadithReferences: HadithReference[];
};

function normalizeHadithLocatorIdentityPart(value: string) {
  return value.trim().replace(/\s+/g, " ").toLocaleLowerCase("en-US");
}

export function getCanonicalHadithSourceLocatorIdentity(
  reference: HadithReference,
) {
  if (!reference.collectionId) return null;

  return [
    normalizeHadithLocatorIdentityPart(reference.collectionId),
    normalizeHadithLocatorIdentityPart(reference.primaryLocator.scheme),
    normalizeHadithLocatorIdentityPart(reference.primaryLocator.value),
  ].join(" / ");
}

export function collectHadithContentErrors(content: HadithContentSnapshot) {
  const errors: string[] = [];
  const collect = (
    label: string,
    schema: z.ZodTypeAny,
    items: unknown[],
  ) => {
    items.forEach((item, index) => {
      const result = schema.safeParse(item);
      if (!result.success) {
        result.error.issues.forEach((issue) => {
          errors.push(
            `${label}[${index}].${issue.path.join(".")}: ${issue.message}`,
          );
        });
      }
    });
  };
  const duplicate = (items: string[], label: string) => {
    const seen = new Set<string>();
    for (const item of items) {
      if (seen.has(item)) errors.push(`Yinelenen ${label}: ${item}`);
      seen.add(item);
    }
  };

  collect("hadithCollections", hadithCollectionSchema, content.hadithCollections);
  collect("hadithReferences", hadithReferenceSchema, content.hadithReferences);
  duplicate(
    content.hadithCollections.map((collection) => collection.id),
    "hadith collection id",
  );
  duplicate(
    content.hadithReferences.map((reference) => reference.id),
    "hadith reference id",
  );

  const sourceLocatorOwners = new Map<string, string>();
  for (const reference of content.hadithReferences) {
    const identity = getCanonicalHadithSourceLocatorIdentity(reference);
    if (!identity) continue;

    const previousOwner = sourceLocatorOwners.get(identity);
    if (previousOwner && previousOwner !== reference.id) {
      errors.push(
        `Duplicate hadith source locator: ${identity} (${previousOwner} / ${reference.id})`,
      );
    } else if (!previousOwner) {
      sourceLocatorOwners.set(identity, reference.id);
    }
  }

  const topicIds = new Set(content.topics.map((topic) => topic.id));
  const collectionIds = new Set(
    content.hadithCollections.map((collection) => collection.id),
  );
  for (const reference of content.hadithReferences) {
    if (!topicIds.has(reference.topicId)) {
      errors.push(
        `${reference.id}: bulunmayan canonical topicId ${reference.topicId}`,
      );
    }
    if (
      reference.collectionId &&
      !collectionIds.has(reference.collectionId)
    ) {
      errors.push(
        `${reference.id}: bulunmayan hadith collectionId ${reference.collectionId}`,
      );
    }
  }

  return errors;
}

export function validateHadithContent(content: HadithContentSnapshot) {
  const errors = collectHadithContentErrors(content);
  if (errors.length) {
    throw new Error(`Hadis içerik doğrulaması başarısız:\n- ${errors.join("\n- ")}`);
  }
  return true;
}
