import { describe,expect,it } from "vitest";
import { findTopic,normalizeSearchText } from "@/lib/topic-search-v12";
describe("Türkçe konu araması",()=>{
  it("Türkçe karakterleri normalize eder",()=>expect(normalizeSearchText("Şükür, Âhiret ve GÜVEN!")).toBe("sukur ahiret ve guven"));
  it.each([
    ["pişman oldum","Tövbe ve pişmanlık"],["anneme iyi davranmak","Anne-babaya iyilik"],["ölüm korkusu","Ölüm ve hayatın geçiciliği"],["Allah’a güvenmek","Tevekkül"],
    ["sosyal medya","Haber ve iletişim ahlakı"],["zamanımı boşa harcıyorum","Vakit ve ömrü değerlendirmek"],["çok gururluyum","Kibir ve büyüklenme"],["dedikodu","Gıybet ve dili korumak"],["savurganlık","İsraf ve ölçülü yaşamak"],
  ])("%s ifadesini %s konusuna yöneltir",(query,title)=>expect(findTopic(query)?.title).toBe(title));
});
