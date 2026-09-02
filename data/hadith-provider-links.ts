import { hadithReferences } from "@/data/hadith-references";
import type {
  HadithProviderLink,
  HadithProviderLinkRecord,
  HadithPublicProvider,
} from "@/domain/hadith-provider-types";
import type { HadithReference } from "@/domain/hadith-types";
import { getPrimaryHadithV1References } from "@/lib/hadith-primary-v1";

export const hadithPublicProviders = [
  {
    id: "diyanet-hadislerle-islam",
    name: "Diyanet Hadislerle İslâm",
    role: "trusted_turkish_reading_provider",
    baseUrl: "https://hadislerleislam.diyanet.gov.tr",
    notes:
      "Güvenilir Türkçe okuma ve bibliyografik erişim provider'ıdır; asli kaynak, grading veya canonical şerh otoritesi değildir.",
  },
  {
    id: "sunnah-com",
    name: "Sunnah.com",
    role: "arabic_and_locator_provider",
    baseUrl: "https://sunnah.com",
    notes:
      "Arapça matn ve canonical collection locator erişim provider'ıdır; asli eser veya grading kaynağı değildir.",
  },
  {
    id: "dorar",
    name: "Dürer es-Seniyye",
    role: "technical_cross_check_provider",
    baseUrl: "https://dorar.net",
    notes:
      "Kaynak, Arapça matn ve klasik grading izi için teknik çapraz kontrol provider'ıdır; çağdaş açıklamaları canonical şerh değildir.",
  },
] as const satisfies readonly HadithPublicProvider[];

type DiyanetMatch = {
  matchType: "exact" | "parallel";
  url: string;
  providerLocator: string;
  note: string;
};

const exact = (
  providerLocator: string,
  cilt: number,
  sayfa: number,
  note = "Diyanet iç numaralandırması canonical global numaralandırmadan farklı olabilir.",
): DiyanetMatch => ({
  matchType: "exact",
  providerLocator,
  url: `https://hadislerleislam.diyanet.gov.tr/sayfa.php?CILT=${cilt}&SAYFA=${sayfa}`,
  note,
});

const diyanetMatches: Readonly<Record<string, DiyanetMatch>> = {
  "tevekkul-bukhari-6472": exact("B6472", 6, 189),
  "anne-babaya-iyilik-bukhari-5971": exact("B5971", 4, 179),
  "sukur-muslim-2734a": exact("M6932", 1, 190),
  "olum-ve-hayatin-geciciligi-bukhari-6416": exact("B6416", 1, 339),
  "kardeslik-bukhari-13": exact("B13", 3, 351),
  "namazin-onemi-ve-manevi-etkisi-bukhari-528": exact("B528", 2, 175),
  "dogruluk-bukhari-6094": exact("B6094", 7, 637),
  "giybet-muslim-2589": exact("M6593", 3, 467),
  "ofke-bukhari-6114": exact("B6114", 3, 210),
  "merhamet-bukhari-7376": exact("B7376", 3, 87),
  "haset-bukhari-6065": exact("B6065", 4, 313),
  "sila-i-rahim-bukhari-5991": exact("B5991", 4, 198),
  "haber-iletisim-bukhari-6475": exact("B6475", 4, 337),
  "israf-tirmidhi-2380": exact("T2380", 7, 415),
  "vakit-bukhari-6412": exact("B6412", 3, 515),
  "suizan-bukhari-6064": exact("B6064", 4, 85),
  "dostluk-bukhari-5534": exact("B5534", 4, 347),
  "insanlarin-arasini-duzeltmek-bukhari-2692": exact("B2692", 2, 562),
  "emanet-sorumluluk-bukhari-7138": {
    matchType: "parallel",
    providerLocator: "B2409",
    url: "https://hadislerleislam.diyanet.gov.tr/sayfa.php?CILT=3&SAYFA=97",
    note:
      "Aynı sorumluluk matnının farklı Buhârî kaydıdır; canonical Buhârî 7138 ile birebir provider kaydı değildir ve ana Türkçe oku bağlantısı olarak kullanılmaz.",
  },
  "yetimlere-karsi-sorumluluk-bukhari-6005": {
    matchType: "parallel",
    providerLocator: "B5304",
    url: "https://hadislerleislam.diyanet.gov.tr/sayfa.php?CILT=4&SAYFA=287",
    note:
      "Aynı Prophetic matnın farklı Buhârî kaydıdır; canonical Buhârî 6005 ile birebir provider kaydı değildir ve ana Türkçe oku bağlantısı olarak kullanılmaz.",
  },
};

function diyanetLink(reference: HadithReference): HadithProviderLink {
  const match = diyanetMatches[reference.id];
  if (!match) {
    return {
      providerId: "diyanet-hadislerle-islam",
      matchType: "not_found",
      url: null,
      providerLocator: null,
      verified: false,
      verifiedAt: null,
      note:
        "V1 taramasında canonical rivayetle birebir veya açıkça açıklanabilir paralel Türkçe provider kaydı güvenle doğrulanamadı; tahminî bağlantı verilmedi.",
      provenance: null,
    };
  }

  return {
    providerId: "diyanet-hadislerle-islam",
    matchType: match.matchType,
    url: match.url,
    providerLocator: match.providerLocator,
    verified: true,
    verifiedAt: "2026-09-01",
    note: match.note,
    provenance:
      match.matchType === "exact"
        ? "Resmî Diyanet Hadislerle İslâm sayfasındaki Türkçe rivayet, râvi ve kaynak izi canonical reference ile karşılaştırıldı."
        : "Resmî Diyanet Hadislerle İslâm sayfasındaki paralel rivayet, canonical kayıttan farklı locator taşıdığı belirtilerek karşılaştırıldı.",
  };
}

function technicalLink(
  reference: HadithReference,
  providerId: "sunnah-com" | "dorar",
): HadithProviderLink {
  const provider = reference.verificationProviders.find(
    (candidate) => candidate.id === providerId,
  );
  if (!provider) {
    throw new Error(`${reference.id}: ${providerId} provenance kaydı bulunamadı.`);
  }

  return {
    providerId,
    matchType: "exact",
    url: provider.url,
    providerLocator: `${reference.primaryLocator.scheme}:${reference.primaryLocator.value}`,
    verified: true,
    verifiedAt: reference.verifiedAt,
    note:
      providerId === "sunnah-com"
        ? "Canonical Arapça matn ve collection locator erişimi; asli kaynak veya grading otoritesi değildir."
        : "Canonical source ve Arabic matn için teknik çapraz kontrol; çağdaş şerh canonical anlam değildir.",
    provenance: reference.provenance,
  };
}

export const hadithProviderLinks: readonly HadithProviderLinkRecord[] =
  getPrimaryHadithV1References(hadithReferences).map((reference) => ({
    hadithId: reference.id,
    turkishProviders: [diyanetLink(reference)],
    arabicProviders: [
      technicalLink(reference, "sunnah-com"),
      technicalLink(reference, "dorar"),
    ],
  }));
