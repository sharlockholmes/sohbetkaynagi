import { z } from "zod";
import { PRIMARY_HADITH_V1_IDS } from "@/data/hadith-catalog-version";
import type { HadithProviderLinkRecord, HadithPublicProvider } from "@/domain/hadith-provider-types";
import type { HadithReference } from "@/domain/hadith-types";

const nonEmpty = z.string().trim().min(1);
const httpsUrl = z.string().url().refine((value) => new URL(value).protocol === "https:", "yalnız https URL kabul edilir");

export const hadithPublicProviderSchema = z.object({ id: nonEmpty, name: nonEmpty, role: z.enum(["trusted_turkish_reading_provider", "arabic_and_locator_provider", "technical_cross_check_provider"]), baseUrl: httpsUrl, notes: nonEmpty });
export const hadithProviderLinkSchema = z.object({ providerId: nonEmpty, matchType: z.enum(["exact", "parallel", "not_found"]), url: httpsUrl.nullable(), providerLocator: nonEmpty.nullable(), verified: z.boolean(), verifiedAt: nonEmpty.nullable(), note: nonEmpty, provenance: nonEmpty.nullable() }).superRefine((link, context) => {
  if (link.matchType === "not_found") {
    if (link.url !== null) context.addIssue({ code: "custom", path: ["url"], message: "not_found provider URL içeremez." });
    if (link.providerLocator !== null || link.verified || link.verifiedAt !== null) context.addIssue({ code: "custom", message: "not_found provider doğrulanmış locator/tarih taşıyamaz." });
  } else if (!link.url || !link.providerLocator || !link.verified || !link.verifiedAt) context.addIssue({ code: "custom", message: `${link.matchType} provider için URL, locator ve doğrulama tarihi zorunludur.` });
});
export const hadithProviderLinkRecordSchema = z.object({ hadithId: nonEmpty, turkishProviders: z.array(hadithProviderLinkSchema).min(1), arabicProviders: z.array(hadithProviderLinkSchema).min(1) });
export type HadithProviderValidationInput = { providers: readonly HadithPublicProvider[]; links: readonly HadithProviderLinkRecord[]; references: readonly HadithReference[] };

export function collectHadithProviderLinkErrors({ providers, links, references }: HadithProviderValidationInput) {
  const errors: string[] = []; const providerIds = new Set<string>(); const providerById = new Map<string, HadithPublicProvider>();
  providers.forEach((provider, index) => { const result = hadithPublicProviderSchema.safeParse(provider); if (!result.success) result.error.issues.forEach((issue) => errors.push(`hadithProviders[${index}].${issue.path.join(".")}: ${issue.message}`)); if (providerIds.has(provider.id)) errors.push(`Yinelenen hadis provider id: ${provider.id}`); providerIds.add(provider.id); providerById.set(provider.id, provider); });
  const referenceIds = new Set(references.map((reference) => reference.id)); const linkRecordsById = new Map<string, number>();
  links.forEach((record, index) => {
    const result = hadithProviderLinkRecordSchema.safeParse(record); if (!result.success) result.error.issues.forEach((issue) => errors.push(`hadithProviderLinks[${index}].${issue.path.join(".")}: ${issue.message}`));
    linkRecordsById.set(record.hadithId, (linkRecordsById.get(record.hadithId) ?? 0) + 1); if (!referenceIds.has(record.hadithId)) errors.push(`${record.hadithId}: provider bağlantısının HadithReference kaydı yok.`);
    const usedProviders = new Set<string>();
    for (const [group, providerLinks] of [["turkishProviders", record.turkishProviders], ["arabicProviders", record.arabicProviders]] as const) for (const link of providerLinks) {
      if (usedProviders.has(link.providerId)) errors.push(`${record.hadithId}: yinelenen provider bağlantısı ${link.providerId}.`); usedProviders.add(link.providerId);
      const provider = providerById.get(link.providerId); if (!provider) { errors.push(`${record.hadithId}: bilinmeyen provider ${link.providerId}.`); continue; }
      if (group === "turkishProviders" && provider.role !== "trusted_turkish_reading_provider") errors.push(`${record.hadithId}: ${link.providerId} Türkçe okuma provider rolünde değildir.`);
      if (group === "arabicProviders" && provider.role === "trusted_turkish_reading_provider") errors.push(`${record.hadithId}: ${link.providerId} Arabic/source provider rolünde değildir.`);
      if (link.providerId === "diyanet-hadislerle-islam" && link.matchType === "exact" && !link.provenance) errors.push(`${record.hadithId}: exact Diyanet eşleşmesi provenance içermelidir.`);
    }
    const sourceReady = record.arabicProviders.some((link) => providerById.get(link.providerId)?.role === "arabic_and_locator_provider" && link.matchType === "exact" && link.verified && link.url); if (!sourceReady) errors.push(`${record.hadithId}: doğrulanmış Arabic/source provider yok.`);
  });
  if (links.length !== PRIMARY_HADITH_V1_IDS.length) errors.push(`Primary provider coverage ${PRIMARY_HADITH_V1_IDS.length} kayıt olmalı; bulunan ${links.length}.`);
  for (const id of PRIMARY_HADITH_V1_IDS) { const count = linkRecordsById.get(id) ?? 0; if (count !== 1) errors.push(`${id}: tam 1 primary provider coverage kaydı bekleniyordu; ${count}.`); }
  return errors;
}
