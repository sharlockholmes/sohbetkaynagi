export type HadithPublicProviderRole =
  | "trusted_turkish_reading_provider"
  | "arabic_and_locator_provider"
  | "technical_cross_check_provider";

export type HadithProviderMatchType = "exact" | "parallel" | "not_found";

export type HadithPublicProvider = {
  id: string;
  name: string;
  role: HadithPublicProviderRole;
  baseUrl: string;
  notes: string;
};

export type HadithProviderLink = {
  providerId: string;
  matchType: HadithProviderMatchType;
  url: string | null;
  providerLocator: string | null;
  verified: boolean;
  verifiedAt: string | null;
  note: string;
  provenance: string | null;
};

export type HadithProviderLinkRecord = {
  hadithId: string;
  turkishProviders: HadithProviderLink[];
  arabicProviders: HadithProviderLink[];
};

export type SafeExternalLink = {
  url: string;
  target: "_blank";
  rel: "noopener noreferrer";
};
