import { PRIMARY_HADITH_V1_IDS } from "@/data/hadith-catalog-version";
import type { HadithReference } from "@/domain/hadith-types";

const primaryHadithV1IdSet = new Set<string>(PRIMARY_HADITH_V1_IDS);

/**
 * Primary/secondary catalog role is derived exclusively from the frozen V1 ID
 * baseline. relationType remains a semantic direct/related classification.
 */
export function isPrimaryHadithV1(hadithId: string) {
  return primaryHadithV1IdSet.has(hadithId);
}

export function getPrimaryHadithV1References(
  references: readonly HadithReference[],
) {
  const referencesById = new Map<string, HadithReference[]>();

  for (const reference of references) {
    const matches = referencesById.get(reference.id) ?? [];
    matches.push(reference);
    referencesById.set(reference.id, matches);
  }

  return PRIMARY_HADITH_V1_IDS.map((id) => {
    const matches = referencesById.get(id) ?? [];
    if (matches.length !== 1) {
      throw new Error(
        `Frozen Primary Hadith V1 ID ${id} için tam 1 kayıt bekleniyordu; bulunan: ${matches.length}.`,
      );
    }
    return matches[0];
  });
}

export function getSecondaryHadithReferences(
  references: readonly HadithReference[],
) {
  return references.filter((reference) => !isPrimaryHadithV1(reference.id));
}
