import { hadithProviderLinks, hadithPublicProviders } from "@/data/hadith-provider-links";
import { hadithCollections } from "@/data/hadith-collections";
import { hadithReferences } from "@/data/hadith-references";
import { topics } from "@/data/topics-v12";
import type { SafeExternalLink } from "@/domain/hadith-provider-types";
import { buildHadithVerificationReport } from "@/lib/hadith-verification-report";
import { getPrimaryHadithV1References } from "@/lib/hadith-primary-v1";

const safeLink = (url: string): SafeExternalLink => ({ url, target: "_blank", rel: "noopener noreferrer" });
const providersByHadithId = new Map(hadithProviderLinks.map((record) => [record.hadithId, record])); const topicsById = new Map(topics.map((topic) => [topic.id, topic]));
const collectionsById = new Map(hadithCollections.map((collection) => [collection.id, collection]));
const publicProvidersById = new Map<string, (typeof hadithPublicProviders)[number]>(hadithPublicProviders.map((provider) => [provider.id, provider]));
/** Public V1 model exposes verified Arabic source text and excludes every AI translation field. */
export function buildPublicHadithPresentation(hadithId: string) {
  const reference = hadithReferences.find((candidate) => candidate.id === hadithId); if (!reference) throw new Error(`HadithReference bulunamadı: ${hadithId}`);
  const providerRecord = providersByHadithId.get(hadithId); if (!providerRecord) throw new Error(`Hadith provider kaydı bulunamadı: ${hadithId}`);
  const topic = topicsById.get(reference.topicId); if (!topic) throw new Error(`Topic bulunamadı: ${reference.topicId}`);
  const collection = reference.collectionId ? collectionsById.get(reference.collectionId) : undefined; if (!collection) throw new Error(`HadithCollection bulunamadı: ${reference.collectionId}`);
  if (!reference.arabicText) throw new Error(`Doğrulanmış Arapça hadis metni bulunamadı: ${hadithId}`);
  const report = buildHadithVerificationReport(reference, collection, topic);
  const exactTurkish = providerRecord.turkishProviders.find((link) => link.matchType === "exact" && link.verified && link.url);
  const parallelTurkish = providerRecord.turkishProviders.filter((link) => link.matchType === "parallel" && link.verified && link.url).map((link) => ({ providerId: link.providerId, providerLocator: link.providerLocator, link: safeLink(link.url as string), note: link.note }));
  const sourceProvider = providerRecord.arabicProviders.find((link) => link.providerId === "sunnah-com" && link.verified && link.url);
  return { hadithId: reference.id, topicId: reference.topicId, topicTitle: topic.title, sourceWork: report.sourceWork, sourceReference: reference.sourceReference, narrator: reference.narrator, primaryLocator: reference.primaryLocator, grading: reference.grading, gradingSource: reference.gradingSource, arabicText: reference.arabicText, arabicTextType: reference.arabicTextType,
    turkishReading: exactTurkish ? { providerId: exactTurkish.providerId, providerLocator: exactTurkish.providerLocator, link: safeLink(exactTurkish.url as string), note: exactTurkish.note } : null,
    parallelTurkishResources: parallelTurkish,
    sourceReading: sourceProvider?.url ? { providerId: sourceProvider.providerId, providerLocator: sourceProvider.providerLocator, link: safeLink(sourceProvider.url) } : null,
    technicalProviders: providerRecord.arabicProviders.filter((link) => link.verified && link.url).map((link) => ({ providerId: link.providerId, name: publicProvidersById.get(link.providerId)?.name ?? link.providerId, role: publicProvidersById.get(link.providerId)?.role ?? "technical_cross_check_provider" })),
    verification: { verificationStatus: reference.verificationStatus, verifiedAt: reference.verifiedAt, sourceReference: reference.sourceReference, grading: reference.grading, gradingSource: reference.gradingSource },
    sourceLinkReady: Boolean(reference.verificationStatus === "reference_verified" && sourceProvider?.url), turkishExternalReadingReady: Boolean(exactTurkish), publicReady: false };
}
export const primaryHadithPublicPresentations = getPrimaryHadithV1References(hadithReferences).map((reference) => buildPublicHadithPresentation(reference.id));
