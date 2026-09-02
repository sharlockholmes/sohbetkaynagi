import type { SourceLink,SourceProvider,SourceWork } from "@/domain/content-types";
export const sourceWorks:SourceWork[]=[
  {id:"elmalili",title:"Hak Dini Kur’an Dili",author:"Elmalılı Muhammed Hamdi Yazır",theologicalLine:"Ehl-i Sünnet / Hanefî-Mâtürîdî geleneğe güçlü uyum",usageRole:"primary",qualityClass:"A",description:"Klasik birikim ile yakın dönem Türkçe tefsir dilini buluşturan temel başvuru eseri."},
  {id:"bilmen",title:"Kur’an-ı Kerim’in Türkçe Meâl-i Âlîsi ve Tefsiri",author:"Ömer Nasuhi Bilmen",theologicalLine:"Ehl-i Sünnet / Hanefî-Mâtürîdî",usageRole:"primary",qualityClass:"A",description:"Hanefî-Mâtürîdî çizgide, Türkçe tefsir literatürünün yerleşik temel eserlerinden biri."},
  {id:"diyanet",title:"Kur’an Portalı / Kur’an Yolu",institution:"Diyanet İşleri Başkanlığı",theologicalLine:"Kurumsal Sünnî ana çizgi",usageRole:"comparison",qualityClass:"A",description:"Ayet, meal ve heyet tefsirini resmî Kur’an portalında birlikte sunan güncel başvuru kaynağı."},
];
export const sourceProviders:SourceProvider[]=[
  {id:"elmalili-meal-kuranmeali",providerName:"KuranMeali.net",providerDomain:"kuranmeali.net",baseUrl:"https://www.kuranmeali.net",contentType:"meal",strategy:"author-verse-page",verified:true,lastCheckedAt:"2026-08-31",fallbackUrl:"https://www.kuranmeali.net/elmalili-hamdi-yazir-orijinal/"},
  {id:"elmalili-tafsir-yek",providerName:"Türkiye Yazma Eserler Kurumu",providerDomain:"ekitap.yek.gov.tr",baseUrl:"https://ekitap.yek.gov.tr",contentType:"tafsir",strategy:"official-work-page",verified:true,lastCheckedAt:"2026-08-31",fallbackUrl:"https://ekitap.yek.gov.tr/urun/hak-dini-kur-an-dili--takim-6-cilt-_743.aspx?CatId=270"},
  {id:"bilmen-meal-kuranmeali",providerName:"KuranMeali.net",providerDomain:"kuranmeali.net",baseUrl:"https://www.kuranmeali.net",contentType:"meal",strategy:"author-verse-page",verified:true,lastCheckedAt:"2026-08-31",fallbackUrl:"https://www.kuranmeali.net/omer-nasuhi-bilmen/"},
  {id:"bilmen-tafsir-tahavi",providerName:"Tahavi.com",providerDomain:"tahavi.com",baseUrl:"https://www.tahavi.com",contentType:"tafsir",strategy:"tahavi-ayah-range",verified:true,lastCheckedAt:"2026-08-31",fallbackUrl:"https://www.tahavi.com/tefsir/"},
  {id:"diyanet-quran",providerName:"Diyanet Kur’an Portalı",providerDomain:"kuran.diyanet.gov.tr",baseUrl:"https://kuran.diyanet.gov.tr",contentType:"quran",strategy:"direct-ayah-page",verified:true,lastCheckedAt:"2026-08-31",fallbackUrl:"https://kuran.diyanet.gov.tr/tefsir"},
];
export const sourceLinks:SourceLink[]=[
  {id:"elmalili-meal",sourceWorkId:"elmalili",providerId:"elmalili-meal-kuranmeali",authorSlug:"elmalili-hamdi-yazir-orijinal"},
  {id:"elmalili-tafsir",sourceWorkId:"elmalili",providerId:"elmalili-tafsir-yek"},
  {id:"bilmen-meal",sourceWorkId:"bilmen",providerId:"bilmen-meal-kuranmeali",authorSlug:"omer-nasuhi-bilmen"},
  {id:"bilmen-tafsir",sourceWorkId:"bilmen",providerId:"bilmen-tafsir-tahavi"},
  {id:"diyanet-portal",sourceWorkId:"diyanet",providerId:"diyanet-quran"},
];
export const sourceWorkById=new Map(sourceWorks.map((item)=>[item.id,item]));
export const sourceProviderById=new Map(sourceProviders.map((item)=>[item.id,item]));
