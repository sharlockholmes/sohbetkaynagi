import { describe, expect, it } from "vitest";
import { collectContentErrors, currentContent, verseReferenceSchema, type ContentSnapshot } from "@/lib/content-validation";

function copy():ContentSnapshot{return structuredClone(currentContent);}
describe("içerik doğrulama",()=>{
  it("ayet aralığını kabul eder",()=>expect(verseReferenceSchema.safeParse({...currentContent.verseReferences[0],ayahStart:23,ayahEnd:24}).success).toBe(true));
  it("ters ayet aralığını reddeder",()=>expect(verseReferenceSchema.safeParse({...currentContent.verseReferences[0],ayahStart:24,ayahEnd:23}).success).toBe(false));
  it("geçersiz sureyi reddeder",()=>{const data=copy();data.verseReferences[0].surahNumber=115;expect(collectContentErrors(data).join(" ")).toContain("geçersiz sure numarası");});
  it("geçersiz ayeti reddeder",()=>{const data=copy();data.verseReferences[0].ayahStart=400;expect(collectContentErrors(data).join(" ")).toContain("geçersiz ayet numarası");});
  it("yinelenen topic slug değerini reddeder",()=>{const data=copy();data.topics[1].slug=data.topics[0].slug;expect(collectContentErrors(data).join(" ")).toContain("Yinelenen topic slug");});
  it("verified provenance eksikliğini reddeder",()=>expect(verseReferenceSchema.safeParse({...currentContent.verseReferences[0],verified:true,provenance:null}).success).toBe(false));
  it("bulunmayan source id değerini reddeder",()=>{const data=copy();data.sourceLinks[0].sourceWorkId="yok";expect(collectContentErrors(data).join(" ")).toContain("bulunmayan source id");});
  it("geçersiz provider URL değerini reddeder",()=>{const data=copy();data.sourceProviders[0].baseUrl="not-a-url";expect(collectContentErrors(data).join(" ")).toContain("Invalid URL");});
});
