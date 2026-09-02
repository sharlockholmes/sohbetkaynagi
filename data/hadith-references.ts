import type {
  HadithReference,
  HadithVerificationProvider,
} from "@/domain/hadith-types";

const pilotState = {
  relationType: "direct",
  arabicText: null,
  arabicTextType: null,
  bookName: null,
  chapterName: null,
  hadithNumber: null,
  alternateNumbering: [] as string[],
  sourceReference: null,
  grading: "unknown",
  gradingSource: null,
  translationTr: null,
  translationStatus: "missing",
  translationMethod: null,
  translationReviewedBy: null,
  translationVerifiedAt: null,
  translationNotes: null,
  verificationStatus: "source_located",
  verifiedAt: null,
  reviewerNote:
    "Pilot source_located kaydı; metin, locator ve râvi final doğrulaması tamamlanmadı.",
  verificationProviders: [] as HadithVerificationProvider[],
} as const;

function providerChecks(
  sourceUrl: string,
  crossCheckUrl: string,
  additional: HadithVerificationProvider[] = [],
): HadithVerificationProvider[] {
  return [
    {
      id: "sunnah-com",
      name: "Sunnah.com",
      url: sourceUrl,
      role: "text_and_locator_verification",
    },
    {
      id: "dorar",
      name: "Dürer es-Seniyye",
      url: crossCheckUrl,
      role: "cross_check",
    },
    ...additional,
  ];
}

export const hadithReferences: HadithReference[] = [
  {
    ...pilotState,
    id: "sabir-bukhari-1469",
    topicId: "sabir",
    relevanceReason:
      "Hadis sabretmeye çalışan kimseye Allah’ın sabır vereceğini ve sabırdan daha hayırlı/geniş bir bağış bulunmadığını açıkça bildirir.",
    narrator: "Ebû Saîd el-Hudrî",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "1469" },
    alternateLocators: [{ scheme: "in_book", value: "Book 24, Hadith 71" }],
    arabicText:
      "وَمَنْ يَتَصَبَّرْ يُصَبِّرْهُ اللَّهُ، وَمَا أُعْطِيَ أَحَدٌ عَطَاءً خَيْرًا وَأَوْسَعَ مِنَ الصَّبْرِ",
    arabicTextType: "excerpt",
    sourceReference: "Sahih al-Bukhari 1469",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 1469",
    translationTr:
      "Kim sabretmeye çalışırsa Allah ona sabır verir. Hiç kimseye sabırdan daha hayırlı ve daha geniş bir bağış verilmemiştir.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    translationNotes:
      "Bu tercüme hadisin tamamına değil, topic ile ilgili doğrulanmış matn bölümüne aittir.",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, locator ve konuya esas Arapça matn excerpt doğrulandı; Türkçe çalışma tercümesi insan incelemesi bekliyor.",
    provenance:
      "Source work: Sahih al-Bukhari 1469; verification/access providers: Sunnah.com (https://sunnah.com/bukhari:1469) ve Dürer es-Seniyye (https://dorar.net/h/7HOKeIU6?osoul=1); checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:1469",
      "https://dorar.net/h/7HOKeIU6?osoul=1",
    ),
  },
  {
    ...pilotState,
    id: "tevekkul-bukhari-6472",
    topicId: "tevekkul",
    relevanceReason:
      "Hadis hesapsız cennete girecek bir topluluğu anlatırken onların Rablerine tevekkül ettiklerini açıkça bildirir.",
    narrator: "İbn Abbâs",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "6472" },
    alternateLocators: [{ scheme: "in_book", value: "Book 81, Hadith 61" }],
    arabicText:
      "يَدْخُلُ الْجَنَّةَ مِنْ أُمَّتِي سَبْعُونَ أَلْفًا بِغَيْرِ حِسَابٍ، هُمُ الَّذِينَ لاَ يَسْتَرْقُونَ، وَلاَ يَتَطَيَّرُونَ، وَعَلَى رَبِّهِمْ يَتَوَكَّلُونَ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 6472",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 6472",
    translationTr:
      "Ümmetimden yetmiş bin kişi hesaba çekilmeden cennete girer. Onlar, kendilerine rukye yapılmasını istemeyen, uğursuzluk saymayan ve Rablerine tevekkül eden kimselerdir.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, locator ve isnadsız Arapça matn doğrulandı; Türkçe çalışma tercümesi insan incelemesi bekliyor.",
    provenance:
      "Source work: Sahih al-Bukhari 6472; verification/access providers: Sunnah.com ve Dürer es-Seniyye; checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:6472",
      "https://dorar.net/h/ffXwurIx",
    ),
  },
  {
    ...pilotState,
    id: "anne-babaya-iyilik-bukhari-5971",
    topicId: "anne-babaya-iyilik",
    relevanceReason:
      "Güzel davranışı en çok hak eden kişi sorusuna üç defa anne, ardından baba cevabı verilir.",
    narrator: "Ebû Hüreyre",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "5971" },
    alternateLocators: [
      { scheme: "in_book", value: "Book 78, Hadith 2" },
      {
        scheme: "diyanet_hadislerle_islam",
        value: "B5971",
        providerId: "diyanet-hadislerle-islam",
        note: "Buhârî, Edeb, 2",
      },
    ],
    arabicText:
      "جَاءَ رَجُلٌ إِلَى رَسُولِ اللَّهِ صلى الله عليه وسلم فَقَالَ يَا رَسُولَ اللَّهِ مَنْ أَحَقُّ بِحُسْنِ صَحَابَتِي قَالَ أُمُّكَ قَالَ ثُمَّ مَنْ قَالَ أُمُّكَ قَالَ ثُمَّ مَنْ قَالَ أُمُّكَ قَالَ ثُمَّ مَنْ قَالَ ثُمَّ أَبُوكَ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 5971",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 5971",
    translationTr:
      "Bir adam Allah Resûlü’ne gelerek, ‘Ey Allah’ın Resûlü! İyi muamele ve güzel refakatime en çok kim hak sahibidir?’ diye sordu. O, ‘Annen.’ buyurdu. Adam, ‘Sonra kim?’ dedi. O, ‘Annen.’ buyurdu. Adam, ‘Sonra kim?’ dedi. O, ‘Annen.’ buyurdu. Adam, ‘Sonra kim?’ dedi. O da, ‘Sonra baban.’ buyurdu.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, locator ve isnadsız Arapça matn doğrulandı; Türkçe çalışma tercümesi insan incelemesi bekliyor.",
    provenance:
      "Source work: Sahih al-Bukhari 5971; verification/access providers: Sunnah.com (https://sunnah.com/bukhari:5971) ve Diyanet Hadislerle İslâm (https://hadislerleislam.diyanet.gov.tr/sayfa.php?CILT=4&SAYFA=179); checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:5971",
      "https://dorar.net/hadith/sharh/151125",
      [
        {
          id: "diyanet-hadislerle-islam",
          name: "Diyanet Hadislerle İslâm",
          url: "https://hadislerleislam.diyanet.gov.tr/sayfa.php?CILT=4&SAYFA=179",
          role: "locator_cross_check",
        },
      ],
    ),
  },
  {
    ...pilotState,
    id: "dua-bukhari-6340",
    topicId: "dua",
    relevanceReason:
      "Kulun “dua ettim fakat kabul edilmedi” diyerek acele etmediği sürece duasının karşılık bulacağını bildirir.",
    narrator: "Ebû Hüreyre",
    collectionId: "sahih-al-bukhari",
    chapterName: "Deavât / dua konusunda acele etmemek",
    primaryLocator: { scheme: "collection_global", value: "6340" },
    alternateLocators: [{ scheme: "in_book", value: "Book 80, Hadith 37" }],
    arabicText:
      "يُسْتَجَابُ لأَحَدِكُمْ مَا لَمْ يَعْجَلْ يَقُولُ دَعَوْتُ فَلَمْ يُسْتَجَبْ لِي",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 6340",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 6340",
    translationTr:
      "Sizden birinin duasına, acele edip ‘Dua ettim fakat bana karşılık verilmedi.’ demediği sürece karşılık verilir.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, locator ve isnadsız Arapça matn doğrulandı; Türkçe çalışma tercümesi insan incelemesi bekliyor.",
    provenance:
      "Source work: Sahih al-Bukhari 6340; verification/access providers: Sunnah.com ve Dürer es-Seniyye; checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:6340",
      "https://dorar.net/h/IORgxcKI?osoul=1",
    ),
  },
  {
    ...pilotState,
    id: "sukur-muslim-2734a",
    topicId: "sukur",
    relevanceReason:
      "Kulun yiyip içtikten sonra Allah’a hamdetmesinin Allah’ın hoşnutluğuna vesile olduğunu açıkça bildirir.",
    narrator: "Enes b. Mâlik",
    collectionId: "sahih-muslim",
    primaryLocator: { scheme: "collection_global", value: "2734a" },
    alternateLocators: [
      { scheme: "in_book", value: "Book 48, Hadith 123" },
      {
        scheme: "diyanet_hadislerle_islam",
        value: "M6932",
        providerId: "diyanet-hadislerle-islam",
        note: "Müslim, Zikir, 89",
      },
    ],
    arabicText:
      "إِنَّ اللَّهَ لَيَرْضَى عَنِ الْعَبْدِ أَنْ يَأْكُلَ الأَكْلَةَ فَيَحْمَدَهُ عَلَيْهَا أَوْ يَشْرَبَ الشَّرْبَةَ فَيَحْمَدَهُ عَلَيْهَا",
    arabicTextType: "full_matn",
    sourceReference: "Sahih Muslim 2734a",
    grading: "sahih",
    gradingSource: "Müslim / Sahih Muslim 2734a",
    translationTr:
      "Şüphesiz Allah, kulun bir yemek yiyip bundan dolayı Allah’a hamdetmesinden veya bir içecek içip bundan dolayı Allah’a hamdetmesinden razı olur.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, locator ve isnadsız Arapça matn doğrulandı; Türkçe çalışma tercümesi insan incelemesi bekliyor.",
    provenance:
      "Source work: Sahih Muslim 2734a; verification/access providers: Sunnah.com ve Dürer es-Seniyye; Diyanet yalnız locator cross-check provider'ıdır; checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/muslim:2734a",
      "https://dorar.net/h/dTzJEWh5?osoul=1",
      [
        {
          id: "diyanet-hadislerle-islam",
          name: "Diyanet Hadislerle İslâm",
          url: "https://hadislerleislam.diyanet.gov.tr/",
          role: "locator_cross_check",
        },
      ],
    ),
  },
  {
    ...pilotState,
    id: "olum-ve-hayatin-geciciligi-bukhari-6416",
    topicId: "olum-ve-hayatin-geciciligi",
    relevanceReason:
      "Dünyada bir garip veya yolcu gibi bulunma öğüdünü taşır. Dünya hayatının geçiciliği ve ölüme hazırlık açısından açık ilişkidir.",
    narrator: "Abdullah b. Ömer",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "6416" },
    alternateLocators: [{ scheme: "in_book", value: "Book 81, Hadith 5" }],
    arabicText: "كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ، أَوْ عَابِرُ سَبِيلٍ",
    arabicTextType: "excerpt",
    sourceReference: "Sahih al-Bukhari 6416",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 6416",
    translationTr: "Dünyada bir garip veya bir yolcu gibi ol.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    translationNotes:
      "Bu tercüme hadisin tamamına değil, Hz. Peygamber’e ait ve topic ile ilgili doğrulanmış matn bölümüne aittir.",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Yalnız Hz. Peygamber’e ait matn bölümü excerpt olarak doğrulandı; İbn Ömer’in devamındaki öğüt dahil edilmedi; Türkçe çalışma tercümesi insan incelemesi bekliyor.",
    provenance:
      "Source work: Sahih al-Bukhari 6416; verification/access providers: Sunnah.com ve Dürer es-Seniyye; checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:6416",
      "https://dorar.net/h/TTEZihxJ",
    ),
  },
  {
    ...pilotState,
    id: "kul-hakki-bukhari-2449",
    topicId: "kul-hakki",
    relevanceReason:
      "Bir kimsenin başka birinin şeref/onur veya başka bir hakkı konusunda haksızlığı varsa ahiretten önce helalleşmesini açıkça bildirir.",
    narrator: "Ebû Hüreyre",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "2449" },
    alternateLocators: [{ scheme: "in_book", value: "Book 46, Hadith 10" }],
    arabicText:
      "مَنْ كَانَتْ لَهُ مَظْلَمَةٌ لأَحَدٍ مِنْ عِرْضِهِ أَوْ شَىْءٍ فَلْيَتَحَلَّلْهُ مِنْهُ الْيَوْمَ، قَبْلَ أَنْ لاَ يَكُونَ دِينَارٌ وَلاَ دِرْهَمٌ، إِنْ كَانَ لَهُ عَمَلٌ صَالِحٌ أُخِذَ مِنْهُ بِقَدْرِ مَظْلَمَتِهِ، وَإِنْ لَمْ تَكُنْ لَهُ حَسَنَاتٌ أُخِذَ مِنْ سَيِّئَاتِ صَاحِبِهِ فَحُمِلَ عَلَيْهِ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 2449",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 2449",
    translationTr:
      "Kim birine onun onuru veya başka bir hususta haksızlık etmişse, dinar ve dirhemin bulunmayacağı gün gelmeden bugün ondan helallik alsın. İyi bir ameli varsa, yaptığı haksızlık ölçüsünde bu amelinden alınır. İyilikleri yoksa, haksızlığa uğrayanın günahlarından alınarak ona yüklenir.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Hadis matnı doğrulandı; Buhârî’nin sonraki bibliyografik açıklaması arabicText alanına dahil edilmedi; Türkçe çalışma tercümesi insan incelemesi bekliyor.",
    provenance:
      "Source work: Sahih al-Bukhari 2449; verification/access providers: Sunnah.com ve Dürer es-Seniyye; checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:2449",
      "https://dorar.net/hadith/sharh/16324",
    ),
  },
  {
    ...pilotState,
    id: "tovbe-ve-pismanlik-bukhari-6309",
    topicId: "tovbe-ve-pismanlik",
    relevanceReason:
      "Allah’ın kulunun tövbesine, çölde kaybettiği bineğini yeniden bulan kişinin sevincinden daha fazla hoşnut olduğunu bildiren rivayettir.",
    narrator: "Enes b. Mâlik",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "6309" },
    alternateLocators: [{ scheme: "in_book", value: "Book 80, Hadith 6" }],
    arabicText:
      "اللَّهُ أَفْرَحُ بِتَوْبَةِ عَبْدِهِ مِنْ أَحَدِكُمْ سَقَطَ عَلَى بَعِيرِهِ، وَقَدْ أَضَلَّهُ فِي أَرْضِ فَلاَةٍ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 6309",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 6309",
    translationTr:
      "Allah, kulunun tövbesine, sizden birinin ıssız bir yerde kaybettiği devesini bulduğunda duyduğu sevinçten daha çok sevinir.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, locator ve isnadsız Arapça matn doğrulandı; Türkçe çalışma tercümesi insan incelemesi bekliyor.",
    provenance:
      "Source work: Sahih al-Bukhari 6309; verification/access providers: Sunnah.com ve Dürer es-Seniyye; checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:6309",
      "https://dorar.net/h/rYW8INos?osoul=1",
    ),
  },
  {
    ...pilotState,
    id: "kardeslik-bukhari-13",
    topicId: "kardeslik",
    relevanceReason:
      "Kişinin kendisi için sevdiğini kardeşi için de sevmesini imanın gereği olarak açıkça bildirir.",
    narrator: "Enes b. Mâlik",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "13" },
    alternateLocators: [
      { scheme: "in_book", value: "Book 2, Hadith 6" },
      {
        scheme: "diyanet_hadislerle_islam",
        value: "B13",
        providerId: "diyanet-hadislerle-islam",
        note: "Buhârî, Îmân, 7",
      },
    ],
    arabicText:
      "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 13",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 13",
    translationTr:
      "Hiçbiriniz, kendisi için sevdiğini kardeşi için de sevmedikçe iman etmiş olmaz.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, locator ve isnadsız Arapça matn doğrulandı; Türkçe çalışma tercümesi insan incelemesi bekliyor.",
    provenance:
      "Source work: Sahih al-Bukhari 13; verification/access providers: Sunnah.com (https://sunnah.com/bukhari:13) ve Diyanet Hadislerle İslâm (https://hadislerleislam.diyanet.gov.tr/sayfa.php?CILT=3&SAYFA=351); checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:13",
      "https://dorar.net/hadith/sharh/7317",
      [
        {
          id: "diyanet-hadislerle-islam",
          name: "Diyanet Hadislerle İslâm",
          url: "https://hadislerleislam.diyanet.gov.tr/sayfa.php?CILT=3&SAYFA=351",
          role: "locator_cross_check",
        },
      ],
    ),
  },
  {
    ...pilotState,
    id: "namazin-onemi-ve-manevi-etkisi-bukhari-528",
    topicId: "namazin-onemi-ve-manevi-etkisi",
    relevanceReason:
      "Beş vakit namazı, kişinin kapısındaki nehirde günde beş defa yıkanmasına benzeterek günahların silinmesine vesile olduğunu açıkça bildirir.",
    narrator: "Ebû Hüreyre",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "528" },
    alternateLocators: [{ scheme: "in_book", value: "Book 9, Hadith 7" }],
    arabicText:
      "أَرَأَيْتُمْ لَوْ أَنَّ نَهَرًا بِبَابِ أَحَدِكُمْ، يَغْتَسِلُ فِيهِ كُلَّ يَوْمٍ خَمْسًا، مَا تَقُولُ ذَلِكَ يُبْقِي مِنْ دَرَنِهِ. قَالُوا لاَ يُبْقِي مِنْ دَرَنِهِ شَيْئًا. قَالَ فَذَلِكَ مِثْلُ الصَّلَوَاتِ الْخَمْسِ، يَمْحُو اللَّهُ بِهَا الْخَطَايَا",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 528",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 528",
    translationTr:
      "Ne dersiniz? Birinizin kapısında bir nehir olsa ve o kişi her gün orada beş defa yıkansa, bu onun kirinden bir şey bırakır mı? Onlar, ‘Kirinden hiçbir şey bırakmaz.’ dediler. O da, ‘İşte beş vakit namaz da böyledir; Allah onlarla günahları siler.’ buyurdu.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, locator ve isnadsız Arapça matn doğrulandı; Türkçe çalışma tercümesi insan incelemesi bekliyor.",
    provenance:
      "Source work: Sahih al-Bukhari 528; verification/access providers: Sunnah.com ve Dürer es-Seniyye; checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:528",
      "https://dorar.net/hadith/sharh/112408",
    ),
  },
  {
    ...pilotState,
    id: "ahiret-hesap-bukhari-6536",
    topicId: "ahiret-ve-hesap-bilinci",
    relevanceReason:
      "Hesabın ayrıntılı biçimde sorgulanmasının ağır sonucunu ve kolay hesabın arz/sunum mahiyetini açıkça işler; canonical başlığın hesap bilinci yönünü doğrudan taşır.",
    narrator: "Âişe",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "6536" },
    alternateLocators: [{ scheme: "in_book", value: "Book 81, Hadith 125" }],
    arabicText:
      "مَنْ نُوقِشَ الْحِسَابَ عُذِّبَ، قَالَتْ قُلْتُ أَلَيْسَ يَقُولُ اللَّهُ تَعَالَى {فَسَوْفَ يُحَاسَبُ حِسَابًا يَسِيرًا} قَالَ ذَلِكِ الْعَرْضُ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 6536",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 6536",
    translationTr:
      "Kim hesaba ayrıntılı biçimde çekilirse azap görür. Âişe, ‘Yüce Allah, “Kolay bir hesaba çekilecek.” buyurmuyor mu?’ diye sordu. O, ‘Bu, yalnızca sunulmadır.’ buyurdu.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam matn doğrulandı; kaynak kaydındaki mükerrer isnad matna dahil edilmedi; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih al-Bukhari 6536; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:6536",
      "https://dorar.net/hadith/sharh/7310",
    ),
  },
  {
    ...pilotState,
    id: "guzel-ahlak-bukhari-3559",
    topicId: "guzel-ahlak",
    relevanceReason:
      "İnsanların en hayırlılarının ahlâkı en güzel olanlar olduğunu açıkça bildirir ve topic için güçlü ana hadis adayıdır.",
    narrator: "Abdullah b. Amr b. Âs",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "3559" },
    alternateLocators: [{ scheme: "in_book", value: "Book 61, Hadith 68" }],
    arabicText:
      "لَمْ يَكُنِ النَّبِيُّ صلى الله عليه وسلم فَاحِشًا وَلاَ مُتَفَحِّشًا وَكَانَ يَقُولُ إِنَّ مِنْ خِيَارِكُمْ أَحْسَنَكُمْ أَخْلاَقًا",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 3559",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 3559",
    translationTr:
      "Peygamber çirkin sözlü değildi; çirkin söz söyleyen biri de değildi. Şöyle buyururdu: ‘Sizin en hayırlılarınız, ahlâkı en güzel olanlarınızdır.’",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih al-Bukhari 3559; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:3559",
      "https://dorar.net/hadith/sharh/15952",
    ),
  },
  {
    ...pilotState,
    id: "dogruluk-bukhari-6094",
    topicId: "dogruluk-ve-durustluk",
    relevanceReason:
      "Doğruluğun iyiliğe, iyiliğin cennete; yalanın ise fücura ve ateşe götürdüğünü açıkça bildirir.",
    narrator: "Abdullah b. Mes’ûd",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "6094" },
    alternateLocators: [{ scheme: "in_book", value: "Book 78, Hadith 121" }],
    arabicText:
      "إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ، وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ، وَإِنَّ الرَّجُلَ لَيَصْدُقُ حَتَّى يَكُونَ صِدِّيقًا، وَإِنَّ الْكَذِبَ يَهْدِي إِلَى الْفُجُورِ، وَإِنَّ الْفُجُورَ يَهْدِي إِلَى النَّارِ، وَإِنَّ الرَّجُلَ لَيَكْذِبُ حَتَّى يُكْتَبَ عِنْدَ اللَّهِ كَذَّابًا",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 6094",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 6094",
    translationTr:
      "Şüphesiz doğruluk iyilik ve erdeme götürür; iyilik ve erdem de cennete götürür. Kişi doğru söyleye söyleye sonunda sıddîk olur. Yalan ise günaha ve kötülüğe götürür; günah ve kötülük de ateşe götürür. Kişi yalan söyleye söyleye sonunda Allah katında yalancı yazılır.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih al-Bukhari 6094; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:6094",
      "https://dorar.net/hadith/sharh/151182",
    ),
  },
  {
    ...pilotState,
    id: "giybet-muslim-2589",
    topicId: "giybet-ve-dili-korumak",
    relevanceReason:
      "Gıybeti kişinin kardeşini hoşlanmayacağı bir şeyle anması olarak doğrudan tarif eder ve söylenen şey onda yoksa bunun iftira olduğunu ayırır.",
    narrator: "Ebû Hüreyre",
    collectionId: "sahih-muslim",
    primaryLocator: { scheme: "collection_global", value: "2589" },
    alternateLocators: [{ scheme: "in_book", value: "Book 45, Hadith 91" }],
    arabicText:
      "أَتَدْرُونَ مَا الْغِيبَةُ، قَالُوا اللَّهُ وَرَسُولُهُ أَعْلَمُ، قَالَ ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ، قِيلَ أَفَرَأَيْتَ إِنْ كَانَ فِي أَخِي مَا أَقُولُ قَالَ إِنْ كَانَ فِيهِ مَا تَقُولُ فَقَدِ اغْتَبْتَهُ وَإِنْ لَمْ يَكُنْ فِيهِ فَقَدْ بَهَتَّهُ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih Muslim 2589",
    grading: "sahih",
    gradingSource: "Müslim / Sahih Muslim 2589",
    translationTr:
      "‘Gıybetin ne olduğunu biliyor musunuz?’ diye sordu. Onlar, ‘Allah ve Resûlü daha iyi bilir.’ dediler. O, ‘Kardeşini hoşlanmadığı bir şeyle anmandır.’ buyurdu. ‘Söylediğim şey kardeşimde varsa ne dersiniz?’ denildi. O, ‘Söylediğin şey onda varsa onun gıybetini etmiş olursun; onda yoksa ona bühtan etmiş olursun.’ buyurdu.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih Muslim 2589; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/muslim:2589",
      "https://dorar.net/hadith/sharh/127584",
    ),
  },
  {
    ...pilotState,
    id: "ofke-bukhari-6114",
    topicId: "ofkeye-hakim-olmak",
    relevanceReason:
      "Gerçek güçlü kişinin başkalarını fiziksel olarak yenen değil, öfke anında kendisine hâkim olan kişi olduğunu açıkça bildirir.",
    narrator: "Ebû Hüreyre",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "6114" },
    alternateLocators: [{ scheme: "in_book", value: "Book 78, Hadith 141" }],
    arabicText:
      "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 6114",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 6114",
    translationTr:
      "Güçlü kimse, insanları güreşte yere seren değildir. Asıl güçlü, öfke anında kendisine hâkim olan kimsedir.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih al-Bukhari 6114; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:6114",
      "https://dorar.net/hadith/sharh/151201",
    ),
  },
  {
    ...pilotState,
    id: "affetmek-muslim-2588",
    topicId: "affetmek-ve-bagislamak",
    relevanceReason:
      "Bir kulun affetmesi sebebiyle Allah’ın onun izzetini artıracağını açıkça bildirir; bu topicte affetme bölümü ana ilişkidir.",
    narrator: "Ebû Hüreyre",
    collectionId: "sahih-muslim",
    primaryLocator: { scheme: "collection_global", value: "2588" },
    alternateLocators: [{ scheme: "in_book", value: "Book 45, Hadith 90" }],
    arabicText:
      "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلاَّ عِزًّا وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلاَّ رَفَعَهُ اللَّهُ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih Muslim 2588",
    grading: "sahih",
    gradingSource: "Müslim / Sahih Muslim 2588",
    translationTr:
      "Sadaka malı eksiltmez. Allah, affeden bir kulun izzetini artırır. Kim Allah için tevazu gösterirse Allah onu yükseltir.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih Muslim 2588; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/muslim:2588",
      "https://dorar.net/h/5ny4Eh57",
    ),
  },
  {
    ...pilotState,
    id: "merhamet-bukhari-7376",
    topicId: "merhamet",
    relevanceReason:
      "İnsanlara merhamet etmeyen kimseye Allah’ın merhamet etmeyeceğini açıkça bildirir ve canonical merhamet başlığını doğrudan taşır.",
    narrator: "Cerîr b. Abdullah",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "7376" },
    alternateLocators: [{ scheme: "in_book", value: "Book 97, Hadith 6" }],
    arabicText: "لاَ يَرْحَمُ اللَّهُ مَنْ لاَ يَرْحَمُ النَّاسَ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 7376",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 7376",
    translationTr: "İnsanlara merhamet etmeyene Allah merhamet etmez.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih al-Bukhari 7376; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:7376",
      "https://dorar.net/h/bIOgfj61",
    ),
  },
  {
    ...pilotState,
    id: "kibir-muslim-91a",
    topicId: "kibir-ve-buyuklenme",
    relevanceReason:
      "Kalbinde zerre miktarı kibir bulunan kimse hakkında ağır uyarı taşır ve kibri hakkı reddetmek ile insanları küçümsemek olarak tarif eder.",
    narrator: "Abdullah b. Mes’ûd",
    collectionId: "sahih-muslim",
    primaryLocator: { scheme: "collection_global", value: "91a" },
    alternateLocators: [{ scheme: "in_book", value: "Book 1, Hadith 171" }],
    arabicText:
      "لاَ يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ، قَالَ رَجُلٌ إِنَّ الرَّجُلَ يُحِبُّ أَنْ يَكُونَ ثَوْبُهُ حَسَنًا وَنَعْلُهُ حَسَنَةً، قَالَ إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ، الْكِبْرُ بَطَرُ الْحَقِّ وَغَمْطُ النَّاسِ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih Muslim 91a",
    grading: "sahih",
    gradingSource: "Müslim / Sahih Muslim 91a",
    translationTr:
      "Kalbinde zerre ağırlığınca kibir bulunan kimse cennete girmez. Bir adam, ‘Kişi elbisesinin güzel, ayakkabısının da güzel olmasını sever.’ dedi. O, ‘Şüphesiz Allah güzeldir, güzelliği sever. Kibir, hakkı reddetmek ve insanları küçümsemektir.’ buyurdu.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih Muslim 91a; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/muslim:91a",
      "https://dorar.net/hadith/sharh/26243",
    ),
  },
  {
    ...pilotState,
    id: "haset-bukhari-6065",
    topicId: "haset-ve-kiskanclik",
    relevanceReason:
      "Birbirine haset etmemeyi açıkça emreder; diğer unsurlarının yanında canonical haset topic’iyle direct ilişkisi açıktır.",
    narrator: "Enes b. Mâlik",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "6065" },
    alternateLocators: [{ scheme: "in_book", value: "Book 78, Hadith 95" }],
    arabicText:
      "لاَ تَبَاغَضُوا، وَلاَ تَحَاسَدُوا، وَلاَ تَدَابَرُوا، وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا، وَلاَ يَحِلُّ لِمُسْلِمٍ أَنْ يَهْجُرَ أَخَاهُ فَوْقَ ثَلاَثَةِ أَيَّامٍ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 6065",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 6065",
    translationTr:
      "Birbirinize buğzetmeyin, birbirinize haset etmeyin ve birbirinize sırt çevirmeyin. Ey Allah’ın kulları, kardeş olun. Bir Müslümanın kardeşiyle üç günden fazla küs kalması helâl değildir.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih al-Bukhari 6065; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:6065",
      "https://dorar.net/hadith/sharh/13228",
    ),
  },
  {
    ...pilotState,
    id: "emanet-sorumluluk-bukhari-7138",
    topicId: "emanet-ve-sorumluluk",
    relevanceReason:
      "Her insanın bir sorumluluk alanına sahip olduğunu ve bundan sorumlu tutulacağını yönetici, aile ve mal sorumluluğu örnekleriyle açıkça bildirir; bu ilk aday başlığın özellikle sorumluluk boyutunu temsil eder.",
    narrator: "Abdullah b. Ömer",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "7138" },
    alternateLocators: [{ scheme: "in_book", value: "Book 93, Hadith 2" }],
    arabicText:
      "أَلاَ كُلُّكُمْ رَاعٍ، وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ، فَالإِمَامُ الَّذِي عَلَى النَّاسِ رَاعٍ وَهْوَ مَسْئُولٌ عَنْ رَعِيَّتِهِ، وَالرَّجُلُ رَاعٍ عَلَى أَهْلِ بَيْتِهِ وَهْوَ مَسْئُولٌ عَنْ رَعِيَّتِهِ، وَالْمَرْأَةُ رَاعِيَةٌ عَلَى أَهْلِ بَيْتِ زَوْجِهَا وَوَلَدِهِ وَهِيَ مَسْئُولَةٌ عَنْهُمْ، وَعَبْدُ الرَّجُلِ رَاعٍ عَلَى مَالِ سَيِّدِهِ وَهْوَ مَسْئُولٌ عَنْهُ، أَلاَ فَكُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 7138",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 7138",
    translationTr:
      "Dikkat edin! Hepiniz birer gözeticisiniz ve hepiniz sorumluluğunuz altındakilerden sorgulanacaksınız. İnsanların başındaki yönetici bir gözeticidir ve sorumluluğu altındakilerden sorgulanacaktır. Erkek, aile halkının gözeticisidir ve sorumluluğu altındakilerden sorgulanacaktır. Kadın, kocasının ev halkının ve çocuğunun gözeticisidir ve onlardan sorumludur. Bir kimsenin hizmetçisi, efendisinin malının gözeticisidir ve ondan sorumludur. Dikkat edin! Hepiniz birer gözeticisiniz ve hepiniz sorumluluğunuz altındakilerden sorgulanacaksınız.",
    translationStatus: "ai_draft",
    translationMethod: "ai_from_verified_arabic",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; başlığın özellikle sorumluluk boyutunu temsil eden semantik sınır korundu; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih al-Bukhari 7138; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:7138",
      "https://dorar.net/h/FONlNFyr?sims=1",
    ),
  },
  {
    ...pilotState,
    id: "yardimlasma-muslim-2699a",
    topicId: "yardimlasma-ve-comertlik",
    relevanceReason:
      "Müminin sıkıntısını gidermeyi, darda kalana kolaylık göstermeyi ve kardeşine yardım eden kula Allah’ın yardımını açıkça bildirir; bu ilk aday başlığın özellikle yardımlaşma boyutunu temsil eder.",
    narrator: "Ebû Hüreyre",
    collectionId: "sahih-muslim",
    primaryLocator: { scheme: "collection_global", value: "2699a" },
    alternateLocators: [{ scheme: "in_book", value: "Book 48, Hadith 48" }],
    arabicText:
      "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ وَمَنْ يَسَّرَ عَلَى مُعْسِرٍ يَسَّرَ اللَّهُ عَلَيْهِ فِي الدُّنْيَا وَالآخِرَةِ وَمَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ فِي الدُّنْيَا وَالآخِرَةِ وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ وَمَا اجْتَمَعَ قَوْمٌ فِي بَيْتٍ مِنْ بُيُوتِ اللَّهِ يَتْلُونَ كِتَابَ اللَّهِ وَيَتَدَارَسُونَهُ بَيْنَهُمْ إِلاَّ نَزَلَتْ عَلَيْهِمُ السَّكِينَةُ وَغَشِيَتْهُمُ الرَّحْمَةُ وَحَفَّتْهُمُ الْمَلاَئِكَةُ وَذَكَرَهُمُ اللَّهُ فِيمَنْ عِنْدَهُ وَمَنْ بَطَّأَ بِهِ عَمَلُهُ لَمْ يُسْرِعْ بِهِ نَسَبُهُ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih Muslim 2699a",
    grading: "sahih",
    gradingSource: "Müslim / Sahih Muslim 2699a",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; uzun rivayetin bütün Prophetic matnı korundu; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih Muslim 2699a; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/muslim:2699a",
      "https://dorar.net/h/vjqUF01B?osoul=1",
    ),
  },
  {
    ...pilotState,
    id: "aile-huzuru-muslim-1468b",
    topicId: "ailede-sevgi-huzur-ve-merhamet",
    relevanceReason:
      "Mümin erkeğin mümin eşine bütünüyle nefret beslememesini, bir huyundan hoşlanmasa başka bir huyundan hoşnut olabileceğini bildirerek eşler arası denge ve aile huzurunu doğrudan destekler.",
    narrator: "Ebû Hüreyre",
    collectionId: "sahih-muslim",
    primaryLocator: { scheme: "collection_global", value: "1468b" },
    alternateLocators: [{ scheme: "in_book", value: "Book 17, Hadith 81" }],
    arabicText:
      "لاَ يَفْرَكْ مُؤْمِنٌ مُؤْمِنَةً إِنْ كَرِهَ مِنْهَا خُلُقًا رَضِيَ مِنْهَا آخَرَ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih Muslim 1468b",
    grading: "sahih",
    gradingSource: "Müslim / Sahih Muslim 1468b",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; râvinin ‘أَوْ قَالَ غَيْرَهُ’ varyant notu Prophetic matna dahil edilmedi; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih Muslim 1468b; Sunnah.com text/locator kaydı ile Dürer es-Seniyye üzerindeki Sahih Muslim 1469 klasik numaralı paralel kaynak izi çapraz kontrol edildi; ‘أَوْ قَالَ غَيْرَهُ’ varyant notu matndan ayrı tutuldu; checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/muslim:1468b",
      "https://dorar.net/h/6tM9JzDS?osoul=1",
    ),
  },
  {
    ...pilotState,
    id: "cocuk-terbiyesi-abu-dawud-495",
    topicId: "cocuk-terbiyesi-ve-ebeveyn-sorumlulugu",
    relevanceReason:
      "Çocuklara küçük yaştan itibaren namazın öğretilmesi ve yataklarının ayrılması üzerinden ebeveynin dinî eğitim sorumluluğunu doğrudan taşır.",
    narrator: "Abdullah b. Amr b. Âs",
    collectionId: "sunan-abi-dawud",
    primaryLocator: { scheme: "collection_global", value: "495" },
    alternateLocators: [{ scheme: "in_book", value: "Book 2, Hadith 105" }],
    arabicText:
      "مُرُوا أَوْلاَدَكُمْ بِالصَّلاَةِ وَهُمْ أَبْنَاءُ سَبْعِ سِنِينَ وَاضْرِبُوهُمْ عَلَيْهَا وَهُمْ أَبْنَاءُ عَشْرِ سِنِينَ وَفَرِّقُوا بَيْنَهُمْ فِي الْمَضَاجِعِ",
    arabicTextType: "full_matn",
    sourceReference: "Sunan Abi Dawud 495",
    grading: "hasen",
    gradingSource: "Nevevî / Hulâsatü'l-Ahkâm 1/252",
    gradingNote:
      "Nevevî’nin lafzı hadis metnine değil isnada ilişkindir: ‘İsnadı hasendir’ (إسناده حسن).",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; Ebû Dâvûd’un râvi açıklaması matna katılmadı; Nevevî’nin değerlendirmesinin isnada ilişkin sınırı gradingNote içinde korundu; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sunan Abi Dawud 495; Sunnah.com text/locator erişimi; Dürer es-Seniyye source ve Nevevî / Hulâsatü'l-Ahkâm 1/252 grading çapraz kontrolü; grading authority: Nevevî; checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/abudawud:495",
      "https://dorar.net/hadith/sharh/71032",
    ),
  },
  {
    ...pilotState,
    id: "sila-i-rahim-bukhari-5991",
    topicId: "sila-i-rahim-ve-akrabalik-baglari",
    relevanceReason:
      "Gerçek sıla-i rahmin yalnız iyiliğe karşılık vermek olmadığını, akrabalık bağı kesildiğinde dahi ilişkiyi sürdürmeyi açıkça bildirir.",
    narrator: "Abdullah b. Amr",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "5991" },
    alternateLocators: [{ scheme: "in_book", value: "Book 78, Hadith 22" }],
    arabicText:
      "لَيْسَ الْوَاصِلُ بِالْمُكَافِئِ، وَلَكِنِ الْوَاصِلُ الَّذِي إِذَا قَطَعَتْ رَحِمُهُ وَصَلَهَا",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 5991",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 5991",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; Süfyân’ın A‘meş, Hasan ve Fıtr tariklerine ilişkin merfû aktarım notu Prophetic matna dahil edilmedi; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih al-Bukhari 5991; verification/access providers: Sunnah.com (text, locator and transmission note) ve Dürer es-Seniyye (source cross-check); transmission note matndan ayrı tutuldu; checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:5991",
      "https://dorar.net/h/UsKe7w2o?osoul=1",
    ),
  },
  {
    ...pilotState,
    id: "komsuluk-bukhari-6016",
    topicId: "komsuluk",
    relevanceReason:
      "Komşusunun kötülüğünden emin olmadığı kimse hakkında ağır bir uyarı taşıyarak komşunun güvenliği ve komşuya zarar vermeme ilkesini doğrudan temsil eder.",
    narrator: "Ebû Şüreyh",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "6016" },
    alternateLocators: [{ scheme: "in_book", value: "Book 78, Hadith 47" }],
    arabicText:
      "وَاللَّهِ لاَ يُؤْمِنُ، وَاللَّهِ لاَ يُؤْمِنُ، وَاللَّهِ لاَ يُؤْمِنُ، قِيلَ وَمَنْ يَا رَسُولَ اللَّهِ قَالَ الَّذِي لاَ يَأْمَنُ جَارُهُ بَوَايِقَهُ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 6016",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 6016",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; üç tekrar korundu; Şebâbe ve diğer tariklere ilişkin takip notları matna dahil edilmedi; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih al-Bukhari 6016; verification/access providers: Sunnah.com (text, locator and alternate-isnad notes) ve Dürer es-Seniyye (source cross-check); alternate-isnad notes matndan ayrı tutuldu; checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:6016",
      "https://dorar.net/h/7PpsXKcJ",
    ),
  },
  {
    ...pilotState,
    id: "haber-iletisim-bukhari-6475",
    topicId: "haber-ve-iletisim-ahlaki",
    relevanceReason:
      "Allah’a ve ahiret gününe iman eden kişinin hayır söylemesini veya susmasını açıkça emreder; canonical topic açısından ana ilişki söz ve iletişim ahlâkıdır.",
    narrator: "Ebû Hüreyre",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "6475" },
    alternateLocators: [{ scheme: "in_book", value: "Book 81, Hadith 64" }],
    arabicText:
      "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا، أَوْ لِيَصْمُتْ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلاَ يُؤْذِ جَارَهُ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيُكْرِمْ ضَيْفَهُ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 6475",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 6475",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; hayır söylemek/susmak, komşuya zarar vermemek ve misafire ikram bölümleri birlikte korundu; modern iletişim lafzı hadise yüklenmedi; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih al-Bukhari 6475; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:6475",
      "https://dorar.net/hadith/sharh/4363",
    ),
  },
  {
    ...pilotState,
    id: "genclik-bukhari-660",
    topicId: "genclik-ve-dogru-durus",
    relevanceReason:
      "Allah’ın gölgesinde gölgelenecek yedi sınıftan biri olarak Allah’a ibadet içinde yetişen genci açıkça zikreder ve gençlik ile sağlam dinî duruş çekirdeğini doğrudan taşır.",
    narrator: "Ebû Hüreyre",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "660" },
    alternateLocators: [{ scheme: "in_book", value: "Book 10, Hadith 54" }],
    arabicText:
      "سَبْعَةٌ يُظِلُّهُمُ اللَّهُ فِي ظِلِّهِ يَوْمَ لاَ ظِلَّ إِلاَّ ظِلُّهُ الإِمَامُ الْعَادِلُ، وَشَابٌّ نَشَأَ فِي عِبَادَةِ رَبِّهِ، وَرَجُلٌ قَلْبُهُ مُعَلَّقٌ فِي الْمَسَاجِدِ، وَرَجُلاَنِ تَحَابَّا فِي اللَّهِ اجْتَمَعَا عَلَيْهِ وَتَفَرَّقَا عَلَيْهِ، وَرَجُلٌ طَلَبَتْهُ امْرَأَةٌ ذَاتُ مَنْصِبٍ وَجَمَالٍ فَقَالَ إِنِّي أَخَافُ اللَّهَ، وَرَجُلٌ تَصَدَّقَ أَخْفَى حَتَّى لاَ تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِينُهُ، وَرَجُلٌ ذَكَرَ اللَّهَ خَالِيًا فَفَاضَتْ عَيْنَاهُ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 660",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 660",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; yedi sınıfın tamamı keyfî excerpt yapılmadan korundu; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih al-Bukhari 660; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:660",
      "https://dorar.net/hadith/sharh/6991",
    ),
  },
  {
    ...pilotState,
    id: "umit-muslim-2877a",
    topicId: "umit-ve-umitsizlige-kapilmamak",
    relevanceReason:
      "Kişinin Allah hakkında hüsnüzan üzere ölmesini açıkça emrederek Allah’tan iyilik umma ve ümit başlığını doğrudan taşır.",
    narrator: "Câbir b. Abdullah",
    collectionId: "sahih-muslim",
    primaryLocator: { scheme: "collection_global", value: "2877a" },
    alternateLocators: [{ scheme: "in_book", value: "Book 53, Hadith 98" }],
    arabicText:
      "لاَ يَمُوتَنَّ أَحَدُكُمْ إِلاَّ وَهُوَ يُحْسِنُ بِاللَّهِ الظَّنَّ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih Muslim 2877a",
    grading: "sahih",
    gradingSource: "Müslim / Sahih Muslim 2877a",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; râvinin vefattan üç gün önce işittiğine dair giriş bilgisi Prophetic matndan ayrı tutuldu; ölüm anında hüsnüzan semantik sınırı korundu; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih Muslim 2877a; verification/access providers: Sunnah.com (text, locator and narration context) ve Dürer es-Seniyye (source cross-check); narration context matndan ayrı tutuldu; checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/muslim:2877a",
      "https://dorar.net/hadith/sharh/152064",
    ),
  },
  {
    ...pilotState,
    id: "israf-tirmidhi-2380",
    topicId: "israf-ve-olculu-yasamak",
    relevanceReason:
      "Midenin gereğinden fazla doldurulmamasını, yeterli miktarla yetinmeyi ve gerektiğinde yemek, içecek ve nefes için ölçü gözetmeyi bildirerek ölçülü tüketim boyutunu doğrudan temsil eder.",
    narrator: "Mikdâm b. Ma‘dîkerib",
    collectionId: "jami-at-tirmidhi",
    primaryLocator: { scheme: "collection_global", value: "2380" },
    alternateLocators: [{ scheme: "in_book", value: "Book 36, Hadith 77" }],
    arabicText:
      "مَا مَلأَ آدَمِيٌّ وِعَاءً شَرًّا مِنْ بَطْنٍ بِحَسْبِ ابْنِ آدَمَ أُكُلاَتٌ يُقِمْنَ صُلْبَهُ فَإِنْ كَانَ لاَ مَحَالَةَ فَثُلُثٌ لِطَعَامِهِ وَثُلُثٌ لِشَرَابِهِ وَثُلُثٌ لِنَفَسِهِ",
    arabicTextType: "full_matn",
    sourceReference: "Jami at-Tirmidhi 2380",
    grading: "hasan_sahih",
    gradingSource: "Tirmizî / Jami at-Tirmidhi 2380",
    gradingNote:
      "Tirmizî’nin hadis hakkındaki kendi lafzı: ‘Bu hadis hasen sahihtir’ (هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ).",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; ikinci isnad ile Tirmizî’nin grading cümlesi Prophetic matna dahil edilmedi; Tirmizî’nin kendi hasen sahih hükmü grading metadata olarak kaydedildi; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Jami at-Tirmidhi 2380; Sunnah.com text/locator ve Tirmizî'nin kendi grading lafzına teknik erişim; Dürer es-Seniyye source cross-check; grading authority: Tirmizî; Darussalam grading canonical gradingSource olarak kullanılmadı; checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/tirmidhi:2380",
      "https://dorar.net/hadith/sharh/36016",
    ),
  },
  {
    ...pilotState,
    id: "adalet-muslim-1827",
    topicId: "adalet",
    relevanceReason:
      "Adaletli davrananları över ve onların hükümlerinde, ailelerine karşı ve sorumluluk alanlarında adaletli olduklarını açıkça bildirir.",
    narrator: "Abdullah b. Amr",
    collectionId: "sahih-muslim",
    primaryLocator: { scheme: "collection_global", value: "1827" },
    alternateLocators: [{ scheme: "in_book", value: "Book 33, Hadith 21" }],
    arabicText:
      "إِنَّ الْمُقْسِطِينَ عِنْدَ اللَّهِ عَلَى مَنَابِرَ مِنْ نُورٍ عَنْ يَمِينِ الرَّحْمَنِ عَزَّ وَجَلَّ وَكِلْتَا يَدَيْهِ يَمِينٌ الَّذِينَ يَعْدِلُونَ فِي حُكْمِهِمْ وَأَهْلِيهِمْ وَمَا وَلُوا",
    arabicTextType: "full_matn",
    sourceReference: "Sahih Muslim 1827",
    grading: "sahih",
    gradingSource: "Müslim / Sahih Muslim 1827",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-08-31",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; Allah’ın sıfatlarına ilişkin lafız exact matn olarak korundu, itikadî/kelâmî yorum eklenmedi; Türkçe tercüme henüz yok.",
    provenance:
      "Source work: Sahih Muslim 1827; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); no theological commentary added; checked: 2026-08-31.",
    verificationProviders: providerChecks(
      "https://sunnah.com/muslim:1827",
      "https://dorar.net/h/uAnC2Wo9",
    ),
  },
  {
    ...pilotState,
    id: "kuranla-yasamak-bukhari-5027",
    topicId: "kuranla-yasamak-ve-ogut-almak",
    relevanceReason:
      "Kur’an’ı öğrenen ve öğretenlerin en hayırlı kimseler olduğunu bildirerek Kur’an’la güçlü bağ kurma, öğrenme ve başkasına aktarma boyutunu doğrudan temsil eder; başlığın bütün boyutları bu tek rivayete yüklenmez.",
    narrator: "Osman b. Affân",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "5027" },
    alternateLocators: [{ scheme: "in_book", value: "Book 66, Hadith 49" }],
    arabicText: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 5027",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 5027",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam nebevî matn doğrulandı; Ebû Abdurrahman es-Sülemî’nin sonraki açıklaması matna alınmadı. Hadis Kur’an’ı öğrenme ve öğretme boyutunu temsil eder; başlığın bütün hükümleri doğrudan bu hadisin lafzına yüklenmeyecektir.",
    provenance:
      "Source work: Sahih al-Bukhari 5027; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); Ebû Abdurrahman es-Sülemî açıklaması Prophetic matndan ayrıldı; checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:5027",
      "https://dorar.net/h/5vS5H0V8?osoul=1",
    ),
  },
  {
    ...pilotState,
    id: "ilim-bukhari-71",
    topicId: "ilim-ogrenmek-ve-bilginin-degeri",
    relevanceReason:
      "Allah’ın hakkında hayır dilediği kişiye dinde derin anlayış verdiğini bildirerek ilim ve dinî anlayışın değerini doğrudan taşır.",
    narrator: "Muâviye b. Ebû Süfyân",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "71" },
    alternateLocators: [{ scheme: "in_book", value: "Book 3, Hadith 13" }],
    arabicText:
      "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ، وَإِنَّمَا أَنَا قَاسِمٌ وَاللَّهُ يُعْطِي، وَلَنْ تَزَالَ هَذِهِ الأُمَّةُ قَائِمَةً عَلَى أَمْرِ اللَّهِ لاَ يَضُرُّهُمْ مَنْ خَالَفَهُمْ حَتَّى يَأْتِيَ أَمْرُ اللَّهِ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 71",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 71",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; taksim, Allah’ın vermesi ve ümmetten bir grubun devamına ilişkin aynı rivayet bölümleri korundu. İlişkinin sınırı dinî anlayış ve tefakkuhtur.",
    provenance:
      "Source work: Sahih al-Bukhari 71; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:71",
      "https://dorar.net/h/niFWqQWq",
    ),
  },
  {
    ...pilotState,
    id: "vakit-bukhari-6412",
    topicId: "vakit-ve-omru-degerlendirmek",
    relevanceReason:
      "İnsanların çoğunun değerini yeterince bilmediği sağlık ve boş vakit nimetlerini açıkça bildirerek canonical başlığın vakti değerlendirme boyutunu doğrudan taşır.",
    narrator: "Abdullah b. Abbâs",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "6412" },
    alternateLocators: [{ scheme: "in_book", value: "Book 81, Hadith 1" }],
    arabicText:
      "نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ، الصِّحَّةُ وَالْفَرَاغُ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 6412",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 6412",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam nebevî matn doğrulandı; ardından gelen alternatif isnad ve ‘misli’ takip kaydı matna katılmadı. Boş vakit nimeti modern zaman yönetimi tekniklerine genişletilmeyecektir.",
    provenance:
      "Source work: Sahih al-Bukhari 6412; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); alternate isnad follow-up excluded from Prophetic matn; checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:6412",
      "https://dorar.net/hadith-category/cat/182391d682c597cc17a36135efcc8347?all=&new=&page=2",
    ),
  },
  {
    ...pilotState,
    id: "gayret-muslim-2664",
    topicId: "gayret-ve-emegin-degeri",
    relevanceReason:
      "Güçlü müminin faziletini, kişiye fayda verene gayret göstermeyi, Allah’tan yardım istemeyi ve acizliğe teslim olmamayı bildirerek gayret ve çaba boyutunu doğrudan taşır.",
    narrator: "Ebû Hüreyre",
    collectionId: "sahih-muslim",
    primaryLocator: { scheme: "collection_global", value: "2664" },
    alternateLocators: [{ scheme: "in_book", value: "Book 46, Hadith 52" }],
    arabicText:
      "الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ وَفِي كُلٍّ خَيْرٌ احْرِصْ عَلَى مَا يَنْفَعُكَ وَاسْتَعِنْ بِاللَّهِ وَلاَ تَعْجِزْ وَإِنْ أَصَابَكَ شَىْءٌ فَلاَ تَقُلْ لَوْ أَنِّي فَعَلْتُ كَانَ كَذَا وَكَذَا وَلَكِنْ قُلْ قَدَرُ اللَّهِ وَمَا شَاءَ فَعَلَ فَإِنَّ لَوْ تَفْتَحُ عَمَلَ الشَّيْطَانِ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih Muslim 2664",
    grading: "sahih",
    gradingSource: "Müslim / Sahih Muslim 2664",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; güçlü/zayıf mümin, faydalı olana gayret, yardım isteme, acizliğe düşmeme ve ‘keşke’ bölümleri birlikte korundu. Kader konusunda şerh eklenmedi.",
    provenance:
      "Source work: Sahih Muslim 2664; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); no theological commentary added; checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/muslim:2664",
      "https://dorar.net/h/ptrTn9PP",
    ),
  },
  {
    ...pilotState,
    id: "vefa-bukhari-34",
    topicId: "vefa-ve-sozunde-durmak",
    relevanceReason:
      "Nifak alametleri arasında ahit yaptığında ahdine ihanet etmeyi açıkça zikrederek ahde vefa ve sözünde durma başlığını doğrudan destekler.",
    narrator: "Abdullah b. Amr b. Âs",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "34" },
    alternateLocators: [{ scheme: "in_book", value: "Book 2, Hadith 27" }],
    arabicText:
      "أَرْبَعٌ مَنْ كُنَّ فِيهِ كَانَ مُنَافِقًا خَالِصًا، وَمَنْ كَانَتْ فِيهِ خَصْلَةٌ مِنْهُنَّ كَانَتْ فِيهِ خَصْلَةٌ مِنَ النِّفَاقِ حَتَّى يَدَعَهَا إِذَا اؤْتُمِنَ خَانَ وَإِذَا حَدَّثَ كَذَبَ وَإِذَا عَاهَدَ غَدَرَ، وَإِذَا خَاصَمَ فَجَرَ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 34",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 34",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam nebevî matn doğrulandı; emanet, yalan, ahit ve tartışma bölümleri birlikte korundu, Şu‘be takip/isnad notu matna katılmadı.",
    provenance:
      "Source work: Sahih al-Bukhari 34; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); Shu‘ba transmission follow-up excluded from Prophetic matn; checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:34",
      "https://dorar.net/h/8wetNc3N?osoul=1",
    ),
  },
  {
    ...pilotState,
    id: "mahremiyet-bukhari-6241",
    topicId: "mahremiyet-ve-ozel-hayata-saygi",
    relevanceReason:
      "İzinsiz biçimde evin içine bakılması olayı üzerinden izin istemenin bakış sebebiyle konulduğunu bildirerek özel alana ve ev mahremiyetine saygıyı doğrudan destekler.",
    narrator: "Sehl b. Sa‘d",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "6241" },
    alternateLocators: [{ scheme: "in_book", value: "Book 79, Hadith 15" }],
    arabicText:
      "اطَّلَعَ رَجُلٌ مِنْ جُحْرٍ فِي حُجَرِ النَّبِيِّ صلى الله عليه وسلم وَمَعَ النَّبِيِّ صلى الله عليه وسلم مِدْرًى يَحُكُّ بِهِ رَأْسَهُ فَقَالَ لَوْ أَعْلَمُ أَنَّكَ تَنْظُرُ لَطَعَنْتُ بِهِ فِي عَيْنِكَ، إِنَّمَا جُعِلَ الاِسْتِئْذَانُ مِنْ أَجْلِ الْبَصَرِ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 6241",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 6241",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam rivayet raporu doğrulandı; olay bağlamı ile izin istemenin bakış sebebiyle konulduğunu bildiren nebevî söz birlikte korundu. Modern dijital gizlilik düzenlemeleri hadisin doğrudan konusu gibi sunulmayacaktır.",
    provenance:
      "Source work: Sahih al-Bukhari 6241; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:6241",
      "https://dorar.net/h/dMhkKBHg?osoul=1",
    ),
  },
  {
    ...pilotState,
    id: "suizan-bukhari-6064",
    topicId: "suizan-ve-zanlardan-sakinmak",
    relevanceReason:
      "Zandan sakınmayı açıkça emreder ve zannın sözün en yalanı olduğunu bildirir; canonical suizan başlığıyla doğrudan ilişkilidir.",
    narrator: "Ebû Hüreyre",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "6064" },
    alternateLocators: [{ scheme: "in_book", value: "Book 78, Hadith 94" }],
    arabicText:
      "إِيَّاكُمْ وَالظَّنَّ، فَإِنَّ الظَّنَّ أَكْذَبُ الْحَدِيثِ، وَلاَ تَحَسَّسُوا، وَلاَ تَجَسَّسُوا، وَلاَ تَحَاسَدُوا، وَلاَ تَدَابَرُوا، وَلاَ تَبَاغَضُوا، وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 6064",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 6064",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam nebevî matn doğrulandı; zan, tahassüs, tecessüs, haset, sırt çevirme, nefret ve kardeşlik bölümleri birlikte korundu.",
    provenance:
      "Source work: Sahih al-Bukhari 6064; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:6064",
      "https://dorar.net/h/a65iKv93?osoul=1",
    ),
  },
  {
    ...pilotState,
    id: "iftira-bukhari-2654",
    topicId: "iftira-ve-asilsiz-soz",
    relevanceReason:
      "Büyük günahlar arasında yalan ve asılsız söz konusunda güçlü, tekrarlı bir uyarı taşıyarak canonical topic’in asılsız söz boyutunu doğrudan temsil eder.",
    narrator: "Ebû Bekre",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "2654" },
    alternateLocators: [{ scheme: "in_book", value: "Book 52, Hadith 18" }],
    arabicText:
      "قَالَ النَّبِيُّ صلى الله عليه وسلم أَلاَ أُنَبِّئُكُمْ بِأَكْبَرِ الْكَبَائِرِ ثَلاَثًا قَالُوا بَلَى يَا رَسُولَ اللَّهِ قَالَ الإِشْرَاكُ بِاللَّهِ، وَعُقُوقُ الْوَالِدَيْنِ وَجَلَسَ وَكَانَ مُتَّكِئًا فَقَالَ أَلاَ وَقَوْلُ الزُّورِ قَالَ فَمَا زَالَ يُكَرِّرُهَا حَتَّى قُلْنَا لَيْتَهُ سَكَتَ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 2654",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 2654",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam rivayet raporu doğrulandı; doğrulup oturma, قول الزور uyarısının tekrarı ve sahâbenin temennisi korundu, alternatif isnad notu matna katılmadı. Hadis her türlü iftiranın ayrıntılı tanımı gibi sunulmayacaktır.",
    provenance:
      "Source work: Sahih al-Bukhari 2654; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); alternate isnad note excluded while narrator event report was retained; checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:2654",
      "https://dorar.net/hadith/sharh/2991",
    ),
  },
  {
    ...pilotState,
    id: "alay-kucumseme-muslim-2564a",
    topicId: "alay-kucumseme-ve-kotu-lakap",
    relevanceReason:
      "Müslüman kardeşini küçümsememeyi ve bir kimsenin kardeşini küçümsemesinin ona kötülük olarak yeteceğini bildirerek canonical topic’in küçümseme boyutunu doğrudan temsil eder.",
    narrator: "Ebû Hüreyre",
    collectionId: "sahih-muslim",
    primaryLocator: { scheme: "collection_global", value: "2564a" },
    alternateLocators: [{ scheme: "in_book", value: "Book 45, Hadith 40" }],
    arabicText:
      "لاَ تَحَاسَدُوا وَلاَ تَنَاجَشُوا وَلاَ تَبَاغَضُوا وَلاَ تَدَابَرُوا وَلاَ يَبِعْ بَعْضُكُمْ عَلَى بَيْعِ بَعْضٍ وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا الْمُسْلِمُ أَخُو الْمُسْلِمِ لاَ يَظْلِمُهُ وَلاَ يَخْذُلُهُ وَلاَ يَحْقِرُهُ التَّقْوَى هَا هُنَا وَيُشِيرُ إِلَى صَدْرِهِ ثَلاَثَ مَرَّاتٍ بِحَسْبِ امْرِئٍ مِنَ الشَّرِّ أَنْ يَحْقِرَ أَخَاهُ الْمُسْلِمَ كُلُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ حَرَامٌ دَمُهُ وَمَالُهُ وَعِرْضُهُ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih Muslim 2564a",
    grading: "sahih",
    gradingSource: "Müslim / Sahih Muslim 2564a",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam rivayet raporu doğrulandı; küçümseme ifadeleri ile göğse üç kez işaret edilmesini aktaran rivayet unsuru korundu. Açık alay ve kötü lakap lafızları hadiste varmış gibi sunulmayacaktır.",
    provenance:
      "Source work: Sahih Muslim 2564a; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); narrator movement report retained as part of the narration; checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/muslim:2564a",
      "https://dorar.net/h/VMwfh7m3?osoul=1",
    ),
  },
  {
    ...pilotState,
    id: "dostluk-bukhari-5534",
    topicId: "dostluk-ve-arkadas-secimi",
    relevanceReason:
      "İyi ve kötü arkadaşın etkisini misk taşıyan ve körük üfleyen kişi benzetmeleriyle anlatarak arkadaş seçiminin fayda ve zarar boyutunu doğrudan taşır.",
    narrator: "Ebû Mûsâ el-Eş‘arî",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "5534" },
    alternateLocators: [{ scheme: "in_book", value: "Book 72, Hadith 59" }],
    arabicText:
      "مَثَلُ الْجَلِيسِ الصَّالِحِ وَالسَّوْءِ كَحَامِلِ الْمِسْكِ وَنَافِخِ الْكِيرِ، فَحَامِلُ الْمِسْكِ إِمَّا أَنْ يُحْذِيَكَ، وَإِمَّا أَنْ تَبْتَاعَ مِنْهُ، وَإِمَّا أَنْ تَجِدَ مِنْهُ رِيحًا طَيِّبَةً، وَنَافِخُ الْكِيرِ إِمَّا أَنْ يُحْرِقَ ثِيَابَكَ، وَإِمَّا أَنْ تَجِدَ رِيحًا خَبِيثَةً",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 5534",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 5534",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam Arapça matn doğrulandı; iyi/kötü arkadaş, misk taşıyan ve körük üfleyen benzetmelerinin bütün unsurları korundu. Başka koleksiyonlardaki dostluk rivayetleri bu kayda karıştırılmadı.",
    provenance:
      "Source work: Sahih al-Bukhari 5534; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:5534",
      "https://dorar.net/h/k5Apq046?osoul=1",
    ),
  },
  {
    ...pilotState,
    id: "insanlarin-arasini-duzeltmek-bukhari-2692",
    topicId: "insanlarin-arasini-duzeltmek",
    relevanceReason:
      "İnsanların arasını düzelten ve bu amaçla hayırlı söz aktaran kimseyi açıkça işleyerek canonical topic ile doğrudan ilişki kurar.",
    narrator: "Ümmü Külsûm bint Ukbe",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "2692" },
    alternateLocators: [{ scheme: "in_book", value: "Book 53, Hadith 3" }],
    arabicText:
      "لَيْسَ الْكَذَّابُ الَّذِي يُصْلِحُ بَيْنَ النَّاسِ، فَيَنْمِي خَيْرًا، أَوْ يَقُولُ خَيْرًا",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 2692",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 2692",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam nebevî matn doğrulandı. Rivayet sulh amacıyla sınırsız yalan izni gibi yorumlanmadı; fıkhî şerh eklenmedi.",
    provenance:
      "Source work: Sahih al-Bukhari 2692; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:2692",
      "https://dorar.net/h/BhU2Hklq?osoul=1",
    ),
  },
  {
    ...pilotState,
    id: "kotuluge-iyilikle-karsilik-vermek-muslim-2558a",
    topicId: "kotuluge-iyilikle-karsilik-vermek",
    relevanceReason:
      "Akrabaları bağı kestiği hâlde bağı sürdürme, onlar kötülük ettiği hâlde iyilik etme ve kaba davrandıkları hâlde hilm gösterme tutumunu işleyerek kötülüğe iyilikle karşılık verme başlığını doğrudan taşır.",
    narrator: "Ebû Hüreyre",
    collectionId: "sahih-muslim",
    primaryLocator: { scheme: "collection_global", value: "2558a" },
    alternateLocators: [{ scheme: "in_book", value: "Book 45, Hadith 25" }],
    arabicText:
      "أَنَّ رَجُلاً قَالَ يَا رَسُولَ اللَّهِ إِنَّ لِي قَرَابَةً أَصِلُهُمْ وَيَقْطَعُونِي وَأُحْسِنُ إِلَيْهِمْ وَيُسِيئُونَ إِلَىَّ وَأَحْلُمُ عَنْهُمْ وَيَجْهَلُونَ عَلَىَّ فَقَالَ لَئِنْ كُنْتَ كَمَا قُلْتَ فَكَأَنَّمَا تُسِفُّهُمُ الْمَلَّ وَلاَ يَزَالُ مَعَكَ مِنَ اللَّهِ ظَهِيرٌ عَلَيْهِمْ مَا دُمْتَ عَلَى ذَلِكَ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih Muslim 2558a",
    grading: "sahih",
    gradingSource: "Müslim / Sahih Muslim 2558a",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam rivayet matnı doğrulandı. Musnad Ahmad 17452 ilk ana omurgadan çıkarıldı; güvensiz veya silinmiş rivayet olarak işaretlenmedi ve collection metadata korundu.",
    provenance:
      "Source work: Sahih Muslim 2558a; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); replaces Musnad Ahmad 17452 only in the primary one-hadith-per-topic backbone; checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/muslim:2558a",
      "https://dorar.net/hadith/sharh/78395",
    ),
  },
  {
    ...pilotState,
    id: "iyilik-ve-ihsan-muslim-1955a",
    topicId: "iyilik-ve-ihsan",
    relevanceReason:
      "Allah’ın her şeyde ihsanı emrettiğini açıkça bildirerek canonical iyilik ve ihsan başlığını doğrudan taşır.",
    narrator: "Şeddâd b. Evs",
    collectionId: "sahih-muslim",
    primaryLocator: { scheme: "collection_global", value: "1955a" },
    alternateLocators: [{ scheme: "in_book", value: "Book 34, Hadith 84" }],
    arabicText:
      "ثِنْتَانِ حَفِظْتُهُمَا عَنْ رَسُولِ اللَّهِ صلى الله عليه وسلم قَالَ إِنَّ اللَّهَ كَتَبَ الإِحْسَانَ عَلَى كُلِّ شَىْءٍ فَإِذَا قَتَلْتُمْ فَأَحْسِنُوا الْقِتْلَةَ وَإِذَا ذَبَحْتُمْ فَأَحْسِنُوا الذَّبْحَ وَلْيُحِدَّ أَحَدُكُمْ شَفْرَتَهُ فَلْيُرِحْ ذَبِيحَتَهُ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih Muslim 1955a",
    grading: "sahih",
    gradingSource: "Müslim / Sahih Muslim 1955a",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam rivayet matnı doğrulandı; genel ihsan ilkesi ile öldürme/kesme, bıçağı bileme ve hayvanı rahat ettirme uygulama bağlamı birlikte korundu.",
    provenance:
      "Source work: Sahih Muslim 1955a; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/muslim:1955a",
      "https://dorar.net/h/zJB1WCUU?sims=1",
    ),
  },
  {
    ...pilotState,
    id: "yetimlere-karsi-sorumluluk-bukhari-6005",
    topicId: "yetimlere-karsi-sorumluluk",
    relevanceReason:
      "Yetime kefil olan ve bakımını üstlenen kişinin faziletini açıkça bildirerek yetimlere karşı sorumluluk başlığını doğrudan taşır.",
    narrator: "Sehl b. Sa‘d",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "6005" },
    alternateLocators: [{ scheme: "in_book", value: "Book 78, Hadith 36" }],
    arabicText:
      "أَنَا وَكَافِلُ الْيَتِيمِ، فِي الْجَنَّةِ هَكَذَا وَقَالَ بِإِصْبَعَيْهِ السَّبَّابَةِ وَالْوُسْطَى",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 6005",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 6005",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam rivayet matnı doğrulandı; işaret ve orta parmakla yapılan gösterimi aktaran rivayet unsuru korundu.",
    provenance:
      "Source work: Sahih al-Bukhari 6005; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); gesture report retained; checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:6005",
      "https://dorar.net/h/OwbDID6D",
    ),
  },
  {
    ...pilotState,
    id: "riya-ve-gosteristen-sakinmak-bukhari-6499",
    topicId: "riya-ve-gosteristen-sakinmak",
    relevanceReason:
      "İnsanların duyması veya görmesi için amel etme ve gösteriş tutumunu açıkça işleyerek riya başlığını doğrudan taşır.",
    narrator: "Cündeb",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "6499" },
    alternateLocators: [{ scheme: "in_book", value: "Book 81, Hadith 88" }],
    arabicText:
      "مَنْ سَمَّعَ سَمَّعَ اللَّهُ بِهِ، وَمَنْ يُرَائِي يُرَائِي اللَّهُ بِهِ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 6499",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 6499",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam nebevî matn doğrulandı; kaynak sayfasındaki mükerrer isnad yapısı arabicText alanına katılmadı.",
    provenance:
      "Source work: Sahih al-Bukhari 6499; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); duplicate isnad structure excluded; checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:6499",
      "https://dorar.net/h/ZsAK0GOF",
    ),
  },
  {
    ...pilotState,
    id: "iffet-ve-haya-bukhari-6117",
    topicId: "iffet-ve-haya",
    relevanceReason:
      "Hayânın yalnız hayır getirdiğini açıkça bildirerek canonical başlığın haya boyutunu doğrudan temsil eder.",
    narrator: "İmrân b. Husayn",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "6117" },
    alternateLocators: [{ scheme: "in_book", value: "Book 78, Hadith 144" }],
    arabicText: "الْحَيَاءُ لاَ يَأْتِي إِلاَّ بِخَيْرٍ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 6117",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 6117",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve tam nebevî matn doğrulandı. Bu ilk hadis başlığın haya tarafını taşır; Büşeyr b. Kâ‘b’ın hikmet sahifesi sözü ve İmrân’ın cevabı Prophetic matna katılmadı.",
    provenance:
      "Source work: Sahih al-Bukhari 6117; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); Bashir ibn Ka‘b statement and Imran response separated from Prophetic matn; checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:6117",
      "https://dorar.net/hadith/sharh/151155",
    ),
  },
  {
    ...pilotState,
    id: "insan-onuru-ve-sayginligi-bukhari-1739",
    topicId: "insan-onuru-ve-sayginligi",
    relevanceReason:
      "Veda hutbesi bağlamında can, mal ve ırzın dokunulmazlığını bildirerek insan onuru ve saygınlığı başlığını doğrudan taşır.",
    narrator: "Abdullah b. Abbâs",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "1739" },
    alternateLocators: [{ scheme: "in_book", value: "Book 25, Hadith 217" }],
    arabicText:
      "أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم خَطَبَ النَّاسَ يَوْمَ النَّحْرِ فَقَالَ يَا أَيُّهَا النَّاسُ أَىُّ يَوْمٍ هَذَا قَالُوا يَوْمٌ حَرَامٌ قَالَ فَأَىُّ بَلَدٍ هَذَا قَالُوا بَلَدٌ حَرَامٌ قَالَ فَأَىُّ شَهْرٍ هَذَا قَالُوا شَهْرٌ حَرَامٌ قَالَ فَإِنَّ دِمَاءَكُمْ وَأَمْوَالَكُمْ وَأَعْرَاضَكُمْ عَلَيْكُمْ حَرَامٌ، كَحُرْمَةِ يَوْمِكُمْ هَذَا، فِي بَلَدِكُمْ هَذَا فِي شَهْرِكُمْ هَذَا فَأَعَادَهَا مِرَارًا، ثُمَّ رَفَعَ رَأْسَهُ فَقَالَ اللَّهُمَّ هَلْ بَلَّغْتُ اللَّهُمَّ هَلْ بَلَّغْتُ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 1739",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 1739",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, sahâbî kaynak, iki locator ve isnadsız Veda hutbesi matnı doğrulandı. İkrime, İbn Abbâs’tan nakletmektedir; narrator alanı model gereği sahâbî Abdullah b. Abbâs’ı tutar. İbn Abbâs’ın hutbe sonrası açıklaması Prophetic matna katılmadı.",
    provenance:
      "Source work: Sahih al-Bukhari 1739; transmission note: Ikrime narrates from Abdullah ibn Abbas; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); Ibn Abbas post-sermon explanation separated from Prophetic matn; checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:1739",
      "https://dorar.net/h/uF0nLC00?osoul=1",
    ),
  },
  {
    ...pilotState,
    id: "yumusak-soz-ve-guzel-konusmak-bukhari-2989",
    topicId: "yumusak-soz-ve-guzel-konusmak",
    relevanceReason:
      "Güzel sözün sadaka olduğunu açıkça bildirerek canonical başlığın güzel konuşmak ve güzel söz boyutunu doğrudan taşır.",
    narrator: "Ebû Hüreyre",
    collectionId: "sahih-al-bukhari",
    primaryLocator: { scheme: "collection_global", value: "2989" },
    alternateLocators: [{ scheme: "in_book", value: "Book 56, Hadith 198" }],
    arabicText:
      "كُلُّ سُلاَمَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ، يَعْدِلُ بَيْنَ الاِثْنَيْنِ صَدَقَةٌ، وَيُعِينُ الرَّجُلَ عَلَى دَابَّتِهِ، فَيَحْمِلُ عَلَيْهَا، أَوْ يَرْفَعُ عَلَيْهَا مَتَاعَهُ صَدَقَةٌ، وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ، وَكُلُّ خَطْوَةٍ يَخْطُوهَا إِلَى الصَّلاَةِ صَدَقَةٌ، وَيُمِيطُ الأَذَى عَنِ الطَّرِيقِ صَدَقَةٌ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih al-Bukhari 2989",
    grading: "sahih",
    gradingSource: "Buhârî / Sahih al-Bukhari 2989",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam nebevî matn doğrulandı; adalet, bineğe yardım, güzel söz, namaza adım ve yoldan eziyeti kaldırma bölümleri birlikte korundu.",
    provenance:
      "Source work: Sahih al-Bukhari 2989; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/bukhari:2989",
      "https://dorar.net/hadith/sharh/133053",
    ),
  },
  {
    ...pilotState,
    id: "haksizlik-ve-zulumden-sakinmak-muslim-2577a",
    topicId: "haksizlik-ve-zulumden-sakinmak",
    relevanceReason:
      "Zulmün haram kılındığını ve kulların birbirlerine zulmetmemesini açıkça bildiren hadis-i kudsî olarak canonical başlığı doğrudan taşır.",
    narrator: "Ebû Zer",
    collectionId: "sahih-muslim",
    primaryLocator: { scheme: "collection_global", value: "2577a" },
    alternateLocators: [{ scheme: "in_book", value: "Book 45, Hadith 70" }],
    arabicText:
      "يَا عِبَادِي إِنِّي حَرَّمْتُ الظُّلْمَ عَلَى نَفْسِي وَجَعَلْتُهُ بَيْنَكُمْ مُحَرَّمًا فَلاَ تَظَالَمُوا يَا عِبَادِي كُلُّكُمْ ضَالٌّ إِلاَّ مَنْ هَدَيْتُهُ فَاسْتَهْدُونِي أَهْدِكُمْ يَا عِبَادِي كُلُّكُمْ جَائِعٌ إِلاَّ مَنْ أَطْعَمْتُهُ فَاسْتَطْعِمُونِي أُطْعِمْكُمْ يَا عِبَادِي كُلُّكُمْ عَارٍ إِلاَّ مَنْ كَسَوْتُهُ فَاسْتَكْسُونِي أَكْسُكُمْ يَا عِبَادِي إِنَّكُمْ تُخْطِئُونَ بِاللَّيْلِ وَالنَّهَارِ وَأَنَا أَغْفِرُ الذُّنُوبَ جَمِيعًا فَاسْتَغْفِرُونِي أَغْفِرْ لَكُمْ يَا عِبَادِي إِنَّكُمْ لَنْ تَبْلُغُوا ضَرِّي فَتَضُرُّونِي وَلَنْ تَبْلُغُوا نَفْعِي فَتَنْفَعُونِي يَا عِبَادِي لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ كَانُوا عَلَى أَتْقَى قَلْبِ رَجُلٍ وَاحِدٍ مِنْكُمْ مَا زَادَ ذَلِكَ فِي مُلْكِي شَيْئًا يَا عِبَادِي لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ كَانُوا عَلَى أَفْجَرِ قَلْبِ رَجُلٍ وَاحِدٍ مَا نَقَصَ ذَلِكَ مِنْ مُلْكِي شَيْئًا يَا عِبَادِي لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ قَامُوا فِي صَعِيدٍ وَاحِدٍ فَسَأَلُونِي فَأَعْطَيْتُ كُلَّ إِنْسَانٍ مَسْأَلَتَهُ مَا نَقَصَ ذَلِكَ مِمَّا عِنْدِي إِلاَّ كَمَا يَنْقُصُ الْمِخْيَطُ إِذَا أُدْخِلَ الْبَحْرَ يَا عِبَادِي إِنَّمَا هِيَ أَعْمَالُكُمْ أُحْصِيهَا لَكُمْ ثُمَّ أُوَفِّيكُمْ إِيَّاهَا فَمَنْ وَجَدَ خَيْرًا فَلْيَحْمَدِ اللَّهَ وَمَنْ وَجَدَ غَيْرَ ذَلِكَ فَلاَ يَلُومَنَّ إِلاَّ نَفْسَهُ",
    arabicTextType: "full_matn",
    sourceReference: "Sahih Muslim 2577a",
    grading: "sahih",
    gradingSource: "Müslim / Sahih Muslim 2577a",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator ve isnadsız tam hadis-i kudsî matnı doğrulandı; zulüm bölümü nedeniyle keyfî excerpt yapılmadı. Ebû İdrîs el-Havlânî’nin sonraki hareket raporu matna katılmadı; itikadî/kelâmî şerh eklenmedi.",
    provenance:
      "Source work: Sahih Muslim 2577a; verification/access providers: Sunnah.com (text and locator) ve Dürer es-Seniyye (source cross-check); Abu Idris post-narration gesture excluded; no theological commentary added; checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/muslim:2577a",
      "https://dorar.net/hadith/sharh/63223",
    ),
  },
  {
    ...pilotState,
    id: "nefis-muhasebesi-tirmidhi-2406",
    topicId: "nefis-muhasebesi-ve-kendini-duzeltmek",
    relevanceReason:
      "Dili tutma, evin kişiye yetmesi ve kendi hatasına ağlama öğüdüyle kişinin kendi durumunu sorgulaması ve kendini düzeltmesi başlığını doğrudan destekler.",
    narrator: "Ukbe b. Âmir",
    collectionId: "jami-at-tirmidhi",
    primaryLocator: { scheme: "collection_global", value: "2406" },
    alternateLocators: [{ scheme: "in_book", value: "Book 36, Hadith 104" }],
    arabicText:
      "أَمْسِكْ عَلَيْكَ لِسَانَكَ وَلْيَسَعْكَ بَيْتُكَ وَابْكِ عَلَى خَطِيئَتِكَ",
    arabicTextType: "full_matn",
    sourceReference: "Jami at-Tirmidhi 2406",
    grading: "hasen",
    gradingSource: "Tirmizî / Jami at-Tirmidhi 2406",
    gradingNote:
      "Tirmizî’nin kendi lafzı ‘bu hadis hasendir’ (هَذَا حَدِيثٌ حَسَنٌ) şeklindedir. Bazı çağdaş grading sistemleri rivayeti zayıf değerlendirmiştir; canonical kayıt Tirmizî’nin kendi eserindeki açık hükmü, otoritesini belirterek aktarır ve grading ihtilafını yok saymaz.",
    verificationStatus: "reference_verified",
    verifiedAt: "2026-09-01",
    reviewerNote:
      "Kaynak, râvi, iki locator, isnadsız tam nebevî matn ve Tirmizî’nin matn sonrasındaki kendi ‘hasen’ hükmü doğrulandı. Grading cümlesi arabicText alanına katılmadı; çağdaş zayıf değerlendirme ihtilaf notunda korundu.",
    provenance:
      "Source work and grading authority: Jami at-Tirmidhi 2406 / al-Tirmidhi; verification/access providers: Sunnah.com (text, locator and displayed modern grading metadata) ve Dürer es-Seniyye (source and al-Tirmidhi grading cross-check); al-Tirmidhi grading statement separated from Prophetic matn; checked: 2026-09-01.",
    verificationProviders: providerChecks(
      "https://sunnah.com/tirmidhi:2406",
      "https://dorar.net/h/ZVMx3QV3",
    ),
  },
];
