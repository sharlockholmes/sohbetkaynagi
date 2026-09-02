import { describe,expect,it } from "vitest";
import { sourceProviderById } from "@/data/source-catalog";
import { buildSourceLink } from "@/lib/source-link-builders";

function expectVerified(link:ReturnType<typeof buildSourceLink>){expect(new URL(link.url).protocol).toBe("https:");expect(link.provider.verified).toBe(true);expect(sourceProviderById.get(link.provider.id)?.verified).toBe(true);expect(()=>new URL(link.surahFallbackUrl)).not.toThrow();expect(()=>new URL(link.generalFallbackUrl)).not.toThrow();}
describe("beş aksiyonlu kaynak bağlantı motoru",()=>{
  it("Bakara 153 Elmalılı meal",()=>{const link=buildSourceLink({sourceId:"elmalili",contentType:"meal",surahNumber:2,ayahStart:153});expect(link.url).toBe("https://www.kuranmeali.net/elmalili-hamdi-yazir-orijinal/bakara-suresi-153.ayet.htm");expect(link.surahFallbackUrl).toContain("bakara-suresi.htm");expectVerified(link);});
  it("Bakara 153 Elmalılı tefsir ayet sayfası",()=>{const link=buildSourceLink({sourceId:"elmalili",contentType:"tafsir",surahNumber:2,ayahStart:153});expect(link.url).toBe("https://islamarsivi.com/tefsir/tr-elmalili-hamdi-yazir/2/153/");expect(link.generalFallbackUrl).toContain("ekitap.yek.gov.tr/urun/hak-dini-kur-an-dili");expectVerified(link);});
  it("Bakara 153 Bilmen meal",()=>{const link=buildSourceLink({sourceId:"bilmen",contentType:"meal",surahNumber:2,ayahStart:153});expect(link.url).toBe("https://www.kuranmeali.net/omer-nasuhi-bilmen/bakara-suresi-153.ayet.htm");expectVerified(link);});
  it("Bakara 153 Bilmen tefsir 150–179 bölümü",()=>{const link=buildSourceLink({sourceId:"bilmen",contentType:"tafsir",surahNumber:2,ayahStart:153});expect(link.url).toBe("https://www.tahavi.com/bakara-suresi/6/");expect(link.rangeLabel).toBe("150–179");expect(link.surahFallbackUrl).toBe("https://www.tahavi.com/bakara-suresi/");expectVerified(link);});
  it("Bakara 153 Diyanet",()=>{const link=buildSourceLink({sourceId:"diyanet",contentType:"quran",surahNumber:2,ayahStart:153});expect(link.url).toBe("https://kuran.diyanet.gov.tr/tefsir/Bakara-suresi/160/153-ayet-tefsiri");expectVerified(link);});
  it("Zümer 10 Elmalılı meal",()=>{const link=buildSourceLink({sourceId:"elmalili",contentType:"meal",surahNumber:39,ayahStart:10});expect(link.url).toContain("/zumer-suresi-10.ayet.htm");expectVerified(link);});
  it("Zümer 10 Bilmen meal",()=>{const link=buildSourceLink({sourceId:"bilmen",contentType:"meal",surahNumber:39,ayahStart:10});expect(link.url).toContain("/zumer-suresi-10.ayet.htm");expectVerified(link);});
  it("Zümer 10 Diyanet Türkçe sure yolu",()=>{const link=buildSourceLink({sourceId:"diyanet",contentType:"quran",surahNumber:39,ayahStart:10});expect(link.url).toBe("https://kuran.diyanet.gov.tr/tefsir/Z%C3%BCmer-suresi/4068/10-ayet-tefsiri");expectVerified(link);});
  it("Âl-i İmrân provider slug override",()=>expect(buildSourceLink({sourceId:"bilmen",contentType:"meal",surahNumber:3,ayahStart:159}).url).toContain("/ali-imran-suresi-159.ayet.htm"));
});
