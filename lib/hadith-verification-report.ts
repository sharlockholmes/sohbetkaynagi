import type { Topic } from "@/domain/content-types";
import type {
  HadithCollection,
  HadithLocator,
  HadithReference,
  HadithVerificationProvider,
} from "@/domain/hadith-types";

export type HadithVerificationReport = {
  referenceId: string;
  topic: {
    id: string;
    slug: string;
    title: string;
  };
  sourceWork: {
    id: string;
    title: string;
    author: string;
  };
  narrator: string | null;
  primaryLocator: HadithLocator;
  alternateLocators: HadithLocator[];
  bookName: string | null;
  chapterName: string | null;
  arabicTextType: HadithReference["arabicTextType"];
  verificationStatus: HadithReference["verificationStatus"];
  grading: HadithReference["grading"];
  gradingSource: string | null;
  gradingNote: string | null;
  translationStatus: HadithReference["translationStatus"];
  translationMethod: HadithReference["translationMethod"];
  translationReviewedBy: string | null;
  translationVerifiedAt: string | null;
  translationNotes: string | null;
  verificationProviders: HadithVerificationProvider[];
  verifiedAt: string | null;
  sourceReference: string | null;
  publicReady: boolean;
};

export function buildHadithVerificationReport(
  reference: HadithReference,
  collection: HadithCollection,
  topic: Topic,
): HadithVerificationReport {
  return {
    referenceId: reference.id,
    topic: {
      id: topic.id,
      slug: topic.slug,
      title: topic.title,
    },
    sourceWork: {
      id: collection.id,
      title: collection.canonicalName,
      author: collection.author,
    },
    narrator: reference.narrator,
    primaryLocator: { ...reference.primaryLocator },
    alternateLocators: reference.alternateLocators.map((locator) => ({
      ...locator,
    })),
    bookName: reference.bookName,
    chapterName: reference.chapterName,
    arabicTextType: reference.arabicTextType,
    verificationStatus: reference.verificationStatus,
    grading: reference.grading,
    gradingSource: reference.gradingSource,
    gradingNote: reference.gradingNote ?? null,
    translationStatus: reference.translationStatus,
    translationMethod: reference.translationMethod,
    translationReviewedBy: reference.translationReviewedBy,
    translationVerifiedAt: reference.translationVerifiedAt,
    translationNotes: reference.translationNotes,
    verificationProviders: reference.verificationProviders.map((provider) => ({
      ...provider,
    })),
    verifiedAt: reference.verifiedAt,
    sourceReference: reference.sourceReference,
    publicReady:
      reference.verificationStatus === "fully_verified" &&
      reference.translationStatus === "verified",
  };
}

export function buildHadithVerificationReports(
  references: HadithReference[],
  collections: HadithCollection[],
  topics: Topic[],
): HadithVerificationReport[] {
  const collectionById = new Map(
    collections.map((collection) => [collection.id, collection]),
  );
  const topicById = new Map(topics.map((topic) => [topic.id, topic]));

  return references.map((reference) => {
    const collection = reference.collectionId
      ? collectionById.get(reference.collectionId)
      : undefined;
    const topic = topicById.get(reference.topicId);

    if (!collection) {
      throw new Error(
        `${reference.id}: doğrulama raporu için kaynak eser bulunamadı.`,
      );
    }
    if (!topic) {
      throw new Error(
        `${reference.id}: doğrulama raporu için canonical topic bulunamadı.`,
      );
    }

    return buildHadithVerificationReport(reference, collection, topic);
  });
}
