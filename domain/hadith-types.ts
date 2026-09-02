export type HadithRelationType = "direct" | "related";

export type HadithTranslationStatus =
  | "missing"
  | "ai_draft"
  | "human_reviewed"
  | "verified";

export type HadithTranslationMethod =
  | "ai_from_verified_arabic"
  | "human_from_verified_arabic";

export type HadithVerificationStatus =
  | "draft"
  | "source_located"
  | "reference_verified"
  | "fully_verified";

export type HadithGrading =
  | "sahih"
  | "hasen"
  | "hasan_sahih"
  | "daif"
  | "mixed"
  | "not_applicable"
  | "unknown";

export type HadithArabicTextType = "full_matn" | "excerpt";

export type HadithLocatorScheme =
  | "collection_global"
  | "in_book"
  | "diyanet_hadislerle_islam"
  | "legacy"
  | "other";

export type HadithLocator = {
  scheme: HadithLocatorScheme;
  value: string;
  providerId?: string;
  note?: string;
};

export type HadithVerificationProviderRole =
  | "text_and_locator_verification"
  | "cross_check"
  | "locator_cross_check";

export type HadithVerificationProvider = {
  id: string;
  name: string;
  url: string;
  role: HadithVerificationProviderRole;
};

export type HadithReference = {
  id: string;
  topicId: string;
  relationType: HadithRelationType;
  relevanceReason: string;
  arabicText: string | null;
  arabicTextType: HadithArabicTextType | null;
  narrator: string | null;
  collectionId: string | null;
  bookName: string | null;
  chapterName: string | null;
  primaryLocator: HadithLocator;
  alternateLocators: HadithLocator[];
  /** @deprecated Yeni kayıtlarda primaryLocator kullanılır. */
  hadithNumber: string | null;
  /** @deprecated Yeni kayıtlarda alternateLocators kullanılır. */
  alternateNumbering: string[];
  sourceReference: string | null;
  grading: HadithGrading;
  gradingSource: string | null;
  gradingNote?: string | null;
  translationTr: string | null;
  translationStatus: HadithTranslationStatus;
  translationMethod: HadithTranslationMethod | null;
  translationReviewedBy: string | null;
  translationVerifiedAt: string | null;
  translationNotes: string | null;
  verificationStatus: HadithVerificationStatus;
  verifiedAt: string | null;
  reviewerNote: string;
  provenance: string | null;
  verificationProviders: HadithVerificationProvider[];
};

export type HadithCollectionCategory =
  | "canonical_collection"
  | "thematic_compilation";

export type HadithCollectionPriority =
  | "primary"
  | "secondary"
  | "additional"
  | "topic_index";

export type HadithCollectionUsagePolicy =
  | "original_source"
  | "topic_discovery_only";

export type HadithCollection = {
  id: string;
  canonicalName: string;
  arabicName: string | null;
  author: string;
  category: HadithCollectionCategory;
  priority: HadithCollectionPriority;
  theologicalFit: string;
  usagePolicy: HadithCollectionUsagePolicy;
  notes: string;
};
