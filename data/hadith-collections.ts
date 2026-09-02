import type { HadithCollection } from "@/domain/hadith-types";

// Bunlar bibliyografik eser kayıtlarıdır; hadis metni veya sıhhat hükmü değildir.
export const hadithCollections: HadithCollection[] = [
  {
    id: "sahih-al-bukhari",
    canonicalName: "Sahih al-Bukhari",
    arabicName: "صحيح البخاري",
    author: "Muhammed b. İsmâil el-Buhârî",
    category: "canonical_collection",
    priority: "primary",
    theologicalFit: "Klasik Sünnî hadis geleneğinin temel kaynaklarından.",
    usagePolicy: "original_source",
    notes: "Hadis araştırmasında ilk tercih edilen aslî koleksiyonlardan biridir.",
  },
  {
    id: "sahih-muslim",
    canonicalName: "Sahih Muslim",
    arabicName: "صحيح مسلم",
    author: "Müslim b. Haccâc el-Kuşeyrî",
    category: "canonical_collection",
    priority: "primary",
    theologicalFit: "Klasik Sünnî hadis geleneğinin temel kaynaklarından.",
    usagePolicy: "original_source",
    notes: "Hadis araştırmasında ilk tercih edilen aslî koleksiyonlardan biridir.",
  },
  {
    id: "sunan-abi-dawud",
    canonicalName: "Sunan Abi Dawud",
    arabicName: "سنن أبي داود",
    author: "Ebû Dâvûd Süleyman b. el-Eş‘as es-Sicistânî",
    category: "canonical_collection",
    priority: "secondary",
    theologicalFit: "Klasik Sünnî hadis geleneğinin temel sünen kaynaklarından.",
    usagePolicy: "original_source",
    notes:
      "Buhârî ve Müslim önceliğinden sonra, kaynak ve sıhhat değerlendirmesi ayrıca doğrulanarak kullanılır.",
  },
  {
    id: "jami-at-tirmidhi",
    canonicalName: "Jami at-Tirmidhi",
    arabicName: "جامع الترمذي",
    author: "Muhammed b. Îsâ et-Tirmizî",
    category: "canonical_collection",
    priority: "secondary",
    theologicalFit: "Klasik Sünnî hadis geleneğinin temel câmi kaynaklarından.",
    usagePolicy: "original_source",
    notes:
      "Buhârî ve Müslim önceliğinden sonra, kaynak ve sıhhat değerlendirmesi ayrıca doğrulanarak kullanılır.",
  },
  {
    id: "musnad-ahmad",
    canonicalName: "Musnad Ahmad",
    arabicName: "مسند أحمد",
    author: "Ahmed b. Hanbel",
    category: "canonical_collection",
    priority: "additional",
    theologicalFit: "Klasik Sünnî hadis geleneğinin temel müsned kaynaklarından.",
    usagePolicy: "original_source",
    notes:
      "Buhârî, Müslim ve ana sünenlerden sonra konu için gerektiğinde; isnad ve grading ayrıca klasik kaynaklardan doğrulanarak kullanılır.",
  },
];
