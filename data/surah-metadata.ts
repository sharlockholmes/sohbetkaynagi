import type { SurahMetadata } from "@/domain/content-types";

const rows: Array<[number, string, number, string]> = [
  [1,"Fâtiha",7,"fatiha"],[2,"Bakara",286,"bakara"],[3,"Âl-i İmrân",200,"al-i-imran"],[4,"Nisâ",176,"nisa"],
  [5,"Mâide",120,"maide"],[6,"En'âm",165,"enam"],[7,"A'râf",206,"araf"],[8,"Enfâl",75,"enfal"],
  [9,"Tevbe",129,"tevbe"],[10,"Yûnus",109,"yunus"],[11,"Hûd",123,"hud"],[12,"Yûsuf",111,"yusuf"],
  [13,"Ra'd",43,"rad"],[14,"İbrâhim",52,"ibrahim"],[15,"Hicr",99,"hicr"],[16,"Nahl",128,"nahl"],
  [17,"İsrâ",111,"isra"],[18,"Kehf",110,"kehf"],[19,"Meryem",98,"meryem"],[20,"Tâ-Hâ",135,"taha"],
  [21,"Enbiyâ",112,"enbiya"],[22,"Hac",78,"hac"],[23,"Mü'minûn",118,"muminun"],[24,"Nûr",64,"nur"],
  [25,"Furkân",77,"furkan"],[26,"Şuarâ",227,"suara"],[27,"Neml",93,"neml"],[28,"Kasas",88,"kasas"],
  [29,"Ankebût",69,"ankebut"],[30,"Rûm",60,"rum"],[31,"Lokmân",34,"lokman"],[32,"Secde",30,"secde"],
  [33,"Ahzâb",73,"ahzab"],[34,"Sebe'",54,"sebe"],[35,"Fâtır",45,"fatir"],[36,"Yâsin",83,"yasin"],
  [37,"Sâffât",182,"saffat"],[38,"Sâd",88,"sad"],[39,"Zümer",75,"zumer"],[40,"Mü'min",85,"mumin"],
  [41,"Fussilet",54,"fussilet"],[42,"Şûrâ",53,"sura"],[43,"Zuhruf",89,"zuhruf"],[44,"Duhân",59,"duhan"],
  [45,"Câsiye",37,"casiye"],[46,"Ahkâf",35,"ahkaf"],[47,"Muhammed",38,"muhammed"],[48,"Fetih",29,"fetih"],
  [49,"Hucurât",18,"hucurat"],[50,"Kâf",45,"kaf"],[51,"Zâriyât",60,"zariyat"],[52,"Tûr",49,"tur"],
  [53,"Necm",62,"necm"],[54,"Kamer",55,"kamer"],[55,"Rahmân",78,"rahman"],[56,"Vâkıa",96,"vakia"],
  [57,"Hadîd",29,"hadid"],[58,"Mücâdele",22,"mucadele"],[59,"Haşr",24,"hasr"],[60,"Mümtehine",13,"mumtehine"],
  [61,"Saf",14,"saf"],[62,"Cum'a",11,"cuma"],[63,"Münâfikûn",11,"munafikun"],[64,"Teğabün",18,"tegabun"],
  [65,"Talâk",12,"talak"],[66,"Tahrîm",12,"tahrim"],[67,"Mülk",30,"mulk"],[68,"Kalem",52,"kalem"],
  [69,"Hâkka",52,"hakka"],[70,"Meâric",44,"mearic"],[71,"Nûh",28,"nuh"],[72,"Cin",28,"cin"],
  [73,"Müzzemmil",20,"muzzemmil"],[74,"Müddessir",56,"muddessir"],[75,"Kıyamet",40,"kiyamet"],[76,"İnsan",31,"insan"],
  [77,"Mürselât",50,"murselat"],[78,"Nebe'",40,"nebe"],[79,"Nâziât",46,"naziat"],[80,"Abese",42,"abese"],
  [81,"Tekvir",29,"tekvir"],[82,"İnfitâr",19,"infitar"],[83,"Mutaffifîn",36,"mutaffifin"],[84,"İnşikak",25,"insikak"],
  [85,"Bürûc",22,"buruc"],[86,"Târık",17,"tarik"],[87,"A'lâ",19,"ala"],[88,"Gâşiye",26,"gasiye"],
  [89,"Fecr",30,"fecr"],[90,"Beled",20,"beled"],[91,"Şems",15,"sems"],[92,"Leyl",21,"leyl"],
  [93,"Duhâ",11,"duha"],[94,"İnşirâh",8,"insirah"],[95,"Tîn",8,"tin"],[96,"Alak",19,"alak"],
  [97,"Kadir",5,"kadir"],[98,"Beyyine",8,"beyyine"],[99,"Zilzâl",8,"zilzal"],[100,"Âdiyât",11,"adiyat"],
  [101,"Kâria",11,"karia"],[102,"Tekâsür",8,"tekasur"],[103,"Asr",3,"asr"],[104,"Hümeze",9,"humeze"],
  [105,"Fîl",5,"fil"],[106,"Kureyş",4,"kureys"],[107,"Mâûn",7,"maun"],[108,"Kevser",3,"kevser"],
  [109,"Kâfirûn",6,"kafirun"],[110,"Nasr",3,"nasr"],[111,"Tebbet",5,"tebbet"],[112,"İhlâs",4,"ihlas"],
  [113,"Felâk",5,"felak"],[114,"Nâs",6,"nas"],
];

export const surahMetadata: SurahMetadata[] = rows.map(
  ([surahNumber, nameTr, ayahCount, kuranVeMealiSlug]) => ({
    surahNumber,
    nameTr,
    ayahCount,
    kuranVeMealiSlug,
    diyanetPathName: nameTr,
  }),
);

export const surahMetadataByNumber = new Map(
  surahMetadata.map((surah) => [surah.surahNumber, surah]),
);

export function getGlobalAyahNumber(surahNumber: number, ayah: number) {
  return surahMetadata
    .slice(0, surahNumber - 1)
    .reduce((total, surah) => total + surah.ayahCount, ayah);
}
