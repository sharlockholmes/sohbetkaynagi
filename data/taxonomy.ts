import type { TaxonomyCategory } from "@/domain/content-types";
export const taxonomy:TaxonomyCategory[]=[
  {id:"ibadet-maneviyat",title:"İbadet ve maneviyat",description:"İbadet, dua, yöneliş ve manevî hayatla ilişkili konular."},
  {id:"ahlak-kisisel-gelisim",title:"Ahlâk ve kişisel gelişim",description:"Karakter, irade ve davranışları geliştirmeye yönelik konular."},
  {id:"aile-yakinlar",title:"Aile ve yakınlar",description:"Aile, ebeveynlik, akrabalık ve yakın çevreyle ilişkili konular."},
  {id:"insan-iliskileri",title:"İnsan ilişkileri",description:"Haklar, dostluk, dayanışma ve insanlar arası sorumluluklar."},
  {id:"toplum-iletisim",title:"Toplum ve iletişim",description:"Toplumsal hayat, haber, dil ve iletişim davranışları."},
  {id:"musibet-olum-hayat",title:"Musibet, ölüm ve hayat",description:"İmtihan, ümit, fanilik, ömür ve ahiret bilinciyle ilişkili konular."},
  {id:"kuran-ilim-tefekkur",title:"Kur’an, ilim ve tefekkür",description:"Kur’an’la ilişki, öğrenme, düşünme ve hayatı değerlendirme konuları."},
];
export const taxonomyById=new Map(taxonomy.map((category)=>[category.id,category]));
