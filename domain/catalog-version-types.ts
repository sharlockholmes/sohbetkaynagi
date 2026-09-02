export type QuranCatalogStatus = "frozen";

export type QuranCatalogRelease = {
  version: string;
  status: QuranCatalogStatus;
  baselineSha256: string;
  frozenAt: string;
};

export type HadithPrimaryCatalogStatus = "frozen";
export type HadithPrimaryCatalogAuditStatus = "audit_clean";
export type HadithPrimaryReferenceVerificationStatus = "reference_verified";

export type HadithPrimaryCatalogRelease = {
  version: string;
  status: HadithPrimaryCatalogStatus;
  baselineRecordCount: number;
  baselineFingerprint: string;
  fingerprintScope: "reference_only";
  legacySnapshotFingerprint: string;
  auditStatus: HadithPrimaryCatalogAuditStatus;
  auditResult: {
    pass: number;
    passWithNote: number;
    review: number;
  };
  referenceVerificationStatus: HadithPrimaryReferenceVerificationStatus;
  frozenAt: string;
};
