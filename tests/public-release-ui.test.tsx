import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { HadithSourceCard } from "@/components/hadith-source-card";
import { hadithReferences } from "@/data/hadith-references";
import { primaryHadithPublicPresentations } from "@/lib/hadith-public-presentation";

const renderCard = (hadithId: string) => {
  const hadith = primaryHadithPublicPresentations.find((item) => item.hadithId === hadithId);
  if (!hadith) throw new Error(`Public presentation bulunamadı: ${hadithId}`);
  return renderToStaticMarkup(createElement(HadithSourceCard, { hadith }));
};

describe("public release hadith UI safety", () => {
  it("renders the Turkish action only for 18 exact Diyanet matches", () => {
    const cards = primaryHadithPublicPresentations.map((item) => renderCard(item.hadithId));
    expect(cards.filter((markup) => markup.includes("Türkçe oku"))).toHaveLength(18);
  });

  it("keeps parallel resources in details and out of the main Turkish action", () => {
    for (const id of ["emanet-sorumluluk-bukhari-7138", "yetimlere-karsi-sorumluluk-bukhari-6005"]) {
      const markup = renderCard(id);
      expect(markup).not.toContain("Türkçe oku");
      expect(markup).toContain("İlgili rivayeti Diyanet’te incele");
    }
  });

  it("renders one safe source link for all 50 records", () => {
    for (const item of primaryHadithPublicPresentations) {
      const markup = renderCard(item.hadithId);
      expect(markup).toContain("Kaynak kaydını aç");
      expect(markup).toContain('target="_blank"');
      expect(markup).toContain('rel="noopener noreferrer"');
      expect(markup).not.toContain('href=""');
    }
  });

  it("never renders internal AI draft text", () => {
    const allCards = primaryHadithPublicPresentations.map((item) => renderCard(item.hadithId)).join("\n");
    for (const reference of hadithReferences) {
      if (reference.translationTr) expect(allCards).not.toContain(reference.translationTr);
    }
    expect(allCards).not.toContain("ai_draft");
    expect(allCards).not.toContain("translationTr");
  });

  it("renders all 50 verified Arabic texts with RTL language metadata", () => {
    for (const reference of hadithReferences) {
      const markup = renderCard(reference.id);
      expect(markup).toContain(reference.arabicText);
      expect(markup).toContain('lang="ar"');
      expect(markup).toContain('dir="rtl"');
    }
  });

  it("labels the two excerpt records as relevant sections", () => {
    const cards = primaryHadithPublicPresentations.map((item) => renderCard(item.hadithId));
    expect(cards.filter((markup) => markup.includes("hadithExcerptBadge"))).toHaveLength(2);
    expect(renderCard("sabir-bukhari-1469")).toContain("İlgili bölüm");
    expect(renderCard("olum-ve-hayatin-geciciligi-bukhari-6416")).toContain("İlgili bölüm");
  });
});
