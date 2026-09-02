import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { hadithProviderLinks } from "../data/hadith-provider-links";
import { hadithReferences } from "../data/hadith-references";
import { topics } from "../data/topics-v12";
import { getPrimaryHadithV1References } from "../lib/hadith-primary-v1";

const references = getPrimaryHadithV1References(hadithReferences);
const topicsById = new Map(topics.map((topic) => [topic.id, topic]));
const linksById = new Map(hadithProviderLinks.map((record) => [record.hadithId, record]));

const rows = references.map((reference, index) => {
  const topic = topicsById.get(reference.topicId);
  const links = linksById.get(reference.id);
  if (!topic || !links) throw new Error(`${reference.id}: coverage girdisi üretilemedi.`);
  const diyanet = links.turkishProviders.find((link) => link.providerId === "diyanet-hadislerle-islam");
  const arabic = links.arabicProviders.find((link) => link.providerId === "sunnah-com");
  if (!diyanet || !arabic) throw new Error(`${reference.id}: zorunlu provider eksik.`);
  return {
    topicNumber: index + 1,
    topic: topic.title,
    hadithId: reference.id,
    sourceReference: reference.sourceReference,
    narrator: reference.narrator,
    diyanetStatus: diyanet.matchType,
    diyanetLocator: diyanet.providerLocator,
    diyanetUrl: diyanet.url,
    matchType: diyanet.matchType,
    arabicProvider: { providerId: arabic.providerId, locator: arabic.providerLocator, url: arabic.url },
    notes: diyanet.note,
  };
});

const counts = {
  exactDiyanet: rows.filter((row) => row.matchType === "exact").length,
  parallelDiyanet: rows.filter((row) => row.matchType === "parallel").length,
  notFound: rows.filter((row) => row.matchType === "not_found").length,
  arabicSourceProviderCoverage: rows.filter((row) => row.arabicProvider.url).length,
};
const payload = { generatedAt: "2026-09-02", sourceOfTruth: false, policy: "Doğru eşleşme, 50/50 Türkçe link doldurmaktan önce gelir. Parallel bağlantılar ana Türkçe oku eylemine girmez.", counts, records: rows };
writeFileSync(join(process.cwd(), "docs", "hadith-turkish-provider-coverage.json"), `${JSON.stringify(payload, null, 2)}\n`, "utf8");

const table = rows.map((row) => `| ${row.topicNumber} | ${row.topic} | ${row.sourceReference} | ${row.narrator} | ${row.matchType} | ${row.diyanetLocator ?? "—"} | ${row.diyanetUrl ? `[Aç](${row.diyanetUrl})` : "—"} | [Kaynakta aç](${row.arabicProvider.url}) | ${row.notes} |`).join("\n");
const markdown = `# Hadith V1 Turkish Provider Coverage\n\nBu doküman denetim çıktısıdır; typed HadithReference ve provider-link verileri source of truth olmaya devam eder. Doğru eşleşme, 50/50 Türkçe bağlantı doldurmaktan önce gelir. **Parallel** bağlantılar ana “Türkçe oku” eyleminde kullanılmaz. AI çalışma tercümeleri bu public modelin parçası değildir.\n\n## Özet\n\n- Exact Diyanet: ${counts.exactDiyanet}\n- Parallel Diyanet: ${counts.parallelDiyanet}\n- Not found: ${counts.notFound}\n- Arabic/source provider coverage: ${counts.arabicSourceProviderCoverage}/50\n\n## Kapsama\n\n| # | Topic | Asli kaynak | Râvi | Diyanet | Locator | Türkçe provider | Arabic/source provider | Not |\n| -: | --- | --- | --- | --- | --- | --- | --- | --- |\n${table}\n\n## Public sunum kuralı\n\n- Exact: “Türkçe oku” eyleminde kullanılabilir.\n- Parallel: yalnız kaynak detayında ilgili rivayet olarak tutulur.\n- Not found: tahminî bağlantı veya AI tercüme gösterilmez.\n- Bütün dış bağlantılar yeni sekmede ve noopener noreferrer ilişkisiyle açılmalıdır.\n- reference_verified ile publicReady aynı kavram değildir; canonical publicReady 0/50 kalır.\n`;
writeFileSync(join(process.cwd(), "docs", "hadith-turkish-provider-coverage.md"), markdown, "utf8");
