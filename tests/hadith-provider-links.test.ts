import { describe, expect, it } from "vitest";
import { hadithProviderLinks, hadithPublicProviders } from "@/data/hadith-provider-links";
import { hadithReferences } from "@/data/hadith-references";
import { collectHadithProviderLinkErrors } from "@/lib/hadith-provider-validation";
import { primaryHadithPublicPresentations } from "@/lib/hadith-public-presentation";
import { getPrimaryHadithV1References, getSecondaryHadithReferences } from "@/lib/hadith-primary-v1";

describe("Hadith V1 provider link layer", () => {
  it("covers all 50 frozen primary hadiths and every record has Arabic/source access", () => {
    expect(hadithProviderLinks).toHaveLength(50);
    expect(getPrimaryHadithV1References(hadithReferences)).toHaveLength(50);
    expect(getSecondaryHadithReferences(hadithReferences)).toHaveLength(0);
    expect(hadithProviderLinks.every((record) => record.arabicProviders.some((link) => link.providerId === "sunnah-com" && link.verified && link.url?.startsWith("https://")))).toBe(true);
    expect(collectHadithProviderLinkErrors({ providers: hadithPublicProviders, links: hadithProviderLinks, references: hadithReferences })).toEqual([]);
  });

  it("keeps the conservative Diyanet coverage split", () => {
    const matches = hadithProviderLinks.map((record) => record.turkishProviders[0].matchType);
    expect(matches.filter((match) => match === "exact")).toHaveLength(18);
    expect(matches.filter((match) => match === "parallel")).toHaveLength(2);
    expect(matches.filter((match) => match === "not_found")).toHaveLength(30);
  });

  it("requires https URLs for verified matches and forbids URLs for not_found", () => {
    const record = hadithProviderLinks[0];
    const invalidExact = structuredClone(record);
    invalidExact.turkishProviders[0] = { ...invalidExact.turkishProviders[0], matchType: "exact", url: null, verified: true, verifiedAt: "2026-09-01", provenance: "test" };
    expect(collectHadithProviderLinkErrors({ providers: hadithPublicProviders, links: hadithProviderLinks.map((item) => item.hadithId === record.hadithId ? invalidExact : item), references: hadithReferences }).join("\n")).toContain("exact provider için URL");

    const invalidNotFound = structuredClone(record);
    invalidNotFound.turkishProviders[0] = { ...invalidNotFound.turkishProviders[0], matchType: "not_found", url: "https://example.org/not-allowed", providerLocator: null, verified: false, verifiedAt: null, provenance: null };
    expect(collectHadithProviderLinkErrors({ providers: hadithPublicProviders, links: hadithProviderLinks.map((item) => item.hadithId === record.hadithId ? invalidNotFound : item), references: hadithReferences }).join("\n")).toContain("not_found provider URL içeremez");
  });

  it("rejects unknown and duplicate providers", () => {
    const record = structuredClone(hadithProviderLinks[0]);
    record.arabicProviders.push({ ...record.arabicProviders[0], providerId: "unknown-provider" });
    record.arabicProviders.push({ ...record.arabicProviders[0] });
    const errors = collectHadithProviderLinkErrors({ providers: hadithPublicProviders, links: hadithProviderLinks.map((item) => item.hadithId === record.hadithId ? record : item), references: hadithReferences }).join("\n");
    expect(errors).toContain("bilinmeyen provider unknown-provider");
    expect(errors).toContain("yinelenen provider bağlantısı sunnah-com");
  });

  it("never exposes internal AI translations through the public presentation model", () => {
    expect(primaryHadithPublicPresentations).toHaveLength(50);
    const serialized = JSON.stringify(primaryHadithPublicPresentations);
    expect(serialized).not.toContain("translationTr");
    expect(serialized).not.toContain("translationStatus");
    expect(serialized).not.toContain("translationMethod");
    expect(serialized).not.toContain("ai_draft");
    expect(primaryHadithPublicPresentations.every((item) => item.publicReady === false)).toBe(true);
    expect(primaryHadithPublicPresentations.filter((item) => item.turkishExternalReadingReady)).toHaveLength(18);
    expect(primaryHadithPublicPresentations.filter((item) => item.sourceLinkReady)).toHaveLength(50);
  });

  it("keeps parallel Turkish resources out of the main Turkish reading action", () => {
    const parallelIds = ["emanet-sorumluluk-bukhari-7138", "yetimlere-karsi-sorumluluk-bukhari-6005"];
    for (const id of parallelIds) {
      const presentation = primaryHadithPublicPresentations.find((item) => item.hadithId === id);
      expect(presentation?.turkishReading).toBeNull();
      expect(presentation?.parallelTurkishResources).toHaveLength(1);
    }
  });

  it("preserves translation workflow counts without publishing them", () => {
    expect(hadithReferences.filter((item) => item.translationStatus === "ai_draft")).toHaveLength(20);
    expect(hadithReferences.filter((item) => item.translationStatus === "missing")).toHaveLength(30);
    expect(hadithReferences.filter((item) => item.translationStatus === "human_reviewed")).toHaveLength(0);
    expect(hadithReferences.filter((item) => item.verificationStatus === "fully_verified")).toHaveLength(0);
  });
});
