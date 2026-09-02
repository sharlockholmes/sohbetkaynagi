import { surahMetadataByNumber } from "@/data/surah-metadata";
import type { VerseReference, VerseRelationType } from "@/domain/content-types";

const MASTER_PROVENANCE = "GÜL STUDIOS Kur’an konu doğrulaması";

function verse(
  id: string,
  surahNumber: number,
  ayahStart: number,
  ayahEnd: number | undefined,
  relevanceReason: string,
  relationType: VerseRelationType,
  verified = true,
  provenance: string | null = MASTER_PROVENANCE,
): VerseReference {
  const surah = surahMetadataByNumber.get(surahNumber);
  if (!surah) throw new Error(`Sure metadata bulunamadı: ${surahNumber}`);

  return {
    id,
    surahNumber,
    surahNameTr: surah.nameTr,
    ayahStart,
    ayahEnd,
    relevanceReason,
    relationType,
    verified,
    provenance,
  };
}

export const verseReferences: VerseReference[] = [
  verse("sabir-2-153", 2, 153, undefined, "Sabretmeyi ve namazla Allah’tan yardım dilemeyi açıkça emreder.", "direct"),
  verse("sabir-2-155-157", 2, 155, 157, "İmtihan ve musibetler karşısında sabredenlerin tutumunu ve mükâfatını açıkça bildirir.", "direct"),
  verse("sabir-39-10", 39, 10, undefined, "Sabredenlere ecirlerinin hesapsız verileceğini açıkça bildirir.", "direct"),
  verse("sabir-3-200", 3, 200, undefined, "Sabrı, sabırda sebatı ve dayanıklılığı açıkça emreder.", "direct"),

  verse("tevekkul-3-159", 3, 159, undefined, "Karar verdikten sonra Allah’a tevekkül etmeyi açıkça emreder.", "direct"),
  verse("tevekkul-8-2", 8, 2, undefined, "Allah’a tevekkülü müminlerin temel özelliklerinden biri olarak bildirir.", "direct"),
  verse("tevekkul-65-2-3", 65, 2, 3, "Allah’a tevekkül eden kimseye Allah’ın yeterli olacağını açıkça bildirir.", "direct"),

  verse("anne-babaya-17-23-24", 17, 23, 24, "Anne-babaya iyilik etmeyi, güzel söz söylemeyi ve merhametle davranmayı açıkça emreder.", "direct"),
  verse("anne-babaya-31-14-15", 31, 14, 15, "Anne-babaya karşı şükür ve iyi davranma sorumluluğunu açıkça bildirir.", "direct"),
  verse("anne-babaya-29-8", 29, 8, undefined, "İnsana anne-babasına iyi davranmasını açıkça emreder.", "direct"),
  verse("anne-babaya-6-151", 6, 151, undefined, "Anne-babaya iyilik etmeyi temel ahlâkî emirlerden biri olarak bildirir.", "direct"),

  verse("dua-2-186", 2, 186, undefined, "Allah’ın dua edenin duasına karşılık verdiğini açıkça bildirir.", "direct"),
  verse("dua-40-60", 40, 60, undefined, "Allah’a dua etmeyi açıkça emreder.", "direct"),
  verse("dua-7-55-56", 7, 55, 56, "Allah’a yalvararak ve gizlice dua etmeyi, korku ve ümitle yönelmeyi öğretir.", "direct"),

  verse("sukur-2-152", 2, 152, undefined, "Allah’ı anmayı ve O’na şükretmeyi açıkça emreder.", "direct"),
  verse("sukur-14-7-8", 14, 7, 8, "Şükretmenin nimetlerin artmasıyla ilişkisini açıkça bildirir.", "direct"),
  verse("sukur-31-12", 31, 12, undefined, "Allah’a şükretmeyi öğütler ve şükrün kişinin kendi yararına olduğunu bildirir.", "direct"),
  verse("sukur-16-114", 16, 114, undefined, "Allah’ın nimetlerine şükretmeyi açıkça emreder.", "direct"),
  verse("sukur-27-40", 27, 40, undefined, "Şükretmenin kişinin kendi lehine olduğunu ve nimetin bir imtihan olduğunu bildirir.", "direct"),

  verse("olum-3-185", 3, 185, undefined, "Her canlının ölümü tadacağını ve dünya hayatının geçici olduğunu açıkça bildirir.", "direct"),
  verse("olum-21-34-35", 21, 34, 35, "Hiçbir insana dünyada ebedîlik verilmediğini ve her canlının ölümü tadacağını bildirir.", "direct"),
  verse("olum-57-20", 57, 20, undefined, "Dünya hayatının geçici ve aldatıcı yönünü açık biçimde anlatır.", "direct"),

  verse("kul-hakki-2-188", 2, 188, undefined, "İnsanların mallarını haksız yollarla yemeyi açıkça yasaklar.", "direct"),
  verse("kul-hakki-4-29", 4, 29, undefined, "İnsanların mallarını haksız yollarla edinmeyi açıkça yasaklar.", "direct"),
  verse("kul-hakki-49-11-12", 49, 11, 12, "İnsanların onurunu zedeleyen alay, kötü lakap, kötü zan, gizlilikleri araştırma ve gıybet gibi davranışları yasaklar.", "direct"),

  verse("tovbe-39-53", 39, 53, undefined, "Günah işlemiş kulları Allah’ın rahmetinden ümit kesmemeye ve O’na yönelmeye çağırır.", "direct"),
  verse("tovbe-66-8", 66, 8, undefined, "Samimi bir tövbe ile Allah’a dönmeyi açıkça emreder.", "direct"),
  verse("tovbe-25-70-71", 25, 70, 71, "Tövbe edip iman eden ve iyi işler yapanların dönüşünü ve bağışlanmasını açıkça bildirir.", "direct"),

  verse("kardeslik-49-10", 49, 10, undefined, "Müminlerin kardeş olduğunu açıkça bildirir ve aralarının düzeltilmesini emreder.", "direct"),
  verse("kardeslik-3-103", 3, 103, undefined, "Birlik içinde Allah’ın ipine sarılmayı ve Allah’ın nimetiyle kardeş olunmasını açıkça hatırlatır.", "direct"),
  verse("kardeslik-59-9", 59, 9, undefined, "Başkalarını kendine tercih etme ve fedakârlık üzerinden güçlü bir kardeşlik örneği sunar.", "related"),

  verse("namaz-29-45", 29, 45, undefined, "Namazın insanı hayasızlıktan ve kötülükten alıkoyan manevî etkisini açıkça bildirir.", "direct"),
  verse("namaz-20-14", 20, 14, undefined, "Allah’ı anmak için namaz kılmayı açıkça emreder.", "direct"),
  verse("namaz-23-1-2", 23, 1, 2, "Kurtuluşa eren müminlerin namazlarında huşû içinde olduklarını bildirir.", "direct"),
  verse("namaz-23-9", 23, 9, undefined, "Müminlerin namazlarını titizlikle korumalarını temel özelliklerinden biri olarak bildirir.", "direct"),
  verse("namaz-2-45-46", 2, 45, 46, "Sabır ve namazla Allah’tan yardım istemeyi öğütler.", "related"),

  verse("ahiret-2-281", 2, 281, undefined, "Allah’a döndürülecek günü ve herkesin yaptığının karşılığını eksiksiz alacağını açıkça hatırlatır.", "direct"),
  verse("ahiret-99-7-8", 99, 7, 8, "İnsanın yaptığı en küçük iyilik ve kötülüğün bile karşılığını göreceğini açıkça bildirir.", "direct"),
  verse("ahiret-101-6-11", 101, 6, 11, "Amellerin tartılması ve buna göre insanın karşılaşacağı sonucu açıkça anlatır.", "direct"),

  verse("guzel-ahlak-68-4", 68, 4, undefined, "Hz. Peygamber’in yüce bir ahlâk üzere olduğunu açıkça bildirir.", "direct"),
  verse("guzel-ahlak-16-90", 16, 90, undefined, "Adaleti, iyiliği ve yakınlara yardım etmeyi emrederek temel ahlâk ilkelerini bildirir.", "direct"),
  verse("guzel-ahlak-17-53", 17, 53, undefined, "İnsanlara sözün en güzelini söylemeyi emrederek güzel ahlâkın iletişim boyutunu destekler.", "related"),

  verse("dogruluk-9-119", 9, 119, undefined, "Müminlere Allah’tan sakınmayı ve doğrularla beraber olmayı açıkça emreder.", "direct"),
  verse("dogruluk-33-70-71", 33, 70, 71, "Doğru ve sağlam söz söylemeyi açıkça emreder ve bunun insanın amellerine etkisini bildirir.", "direct"),

  verse("giybet-49-12", 49, 12, undefined, "Gıybeti açıkça yasaklar ve onu son derece ağır bir benzetmeyle kınar.", "direct"),
  verse("giybet-17-53", 17, 53, undefined, "İnsanlara sözün en güzelini söylemeyi emrederek dili doğru kullanma ilkesini destekler.", "related"),

  verse("ofke-3-134", 3, 134, undefined, "Öfkelerini yenenleri ve insanları bağışlayanları övgüyle anlatır.", "direct"),

  verse("affetmek-3-134", 3, 134, undefined, "Öfkesini yenen ve insanları bağışlayan kimseleri övgüyle anlatır.", "direct"),
  verse("affetmek-24-22", 24, 22, undefined, "Affetmeyi ve hoşgörülü davranmayı açıkça teşvik eder.", "direct"),
  verse("affetmek-42-40", 42, 40, undefined, "Haksızlığa karşılık verme hakkını bildirirken affetme ve barışmayı üstün bir davranış olarak teşvik eder.", "direct"),
  verse("affetmek-42-43", 42, 43, undefined, "Sabredip bağışlamanın kararlılık gerektiren değerli davranışlardan olduğunu bildirir.", "direct"),

  verse("merhamet-90-17", 90, 17, undefined, "Müminlerin birbirlerine sabrı ve merhameti tavsiye eden kimseler olduğunu bildirir.", "direct"),
  verse("merhamet-3-159", 3, 159, undefined, "Hz. Peygamber’in insanlara karşı yumuşak ve merhametli davranışını açıkça öne çıkarır.", "direct"),
  verse("merhamet-48-29", 48, 29, undefined, "Müminlerin birbirlerine karşı merhametli olduklarını açıkça bildirir.", "direct"),
  verse("merhamet-21-107", 21, 107, undefined, "Hz. Peygamber’in âlemlere rahmet olarak gönderildiğini bildirerek merhamet temasını destekler.", "related"),

  verse("kibir-31-18", 31, 18, undefined, "İnsanlara karşı kibirli davranmayı ve yeryüzünde böbürlenerek yürümeyi açıkça yasaklar.", "direct"),
  verse("kibir-16-23", 16, 23, undefined, "Allah’ın büyüklük taslayanları sevmediğini açıkça bildirir.", "direct"),
  verse("kibir-7-146", 7, 146, undefined, "Yeryüzünde haksız yere büyüklük taslayanların hakikatten uzaklaşmasını bildirir.", "direct"),

  verse("haset-113-5", 113, 5, undefined, "Haset edenin hasedinden Allah’a sığınmayı açıkça öğretir.", "direct"),
  verse("haset-4-54", 4, 54, undefined, "İnsanların Allah’ın lütfuyla verdiği nimetler sebebiyle başkalarını kıskanmalarını eleştirir.", "direct"),
  verse("haset-2-109", 2, 109, undefined, "Haset sebebiyle başkalarının sahip olduğu iman nimetini kaybetmesini isteme tutumunu açıkça bildirir.", "direct"),

  verse("emanet-4-58", 4, 58, undefined, "Emanetlerin sahiplerine verilmesini açıkça emreder.", "direct"),
  verse("emanet-23-8", 23, 8, undefined, "Müminlerin emanetlerine ve verdikleri sözlere riayet ettiklerini bildirir.", "direct"),
  verse("emanet-8-27", 8, 27, undefined, "Allah’a, Peygamber’e ve insanların emanetlerine bile bile ihanet etmeyi yasaklar.", "direct"),

  verse("yardimlasma-5-2", 5, 2, undefined, "İyilik ve takvâ konusunda yardımlaşmayı açıkça emreder.", "direct"),
  verse("yardimlasma-2-177", 2, 177, undefined, "Sevilen maldan yakınlara, yetimlere, yoksullara ve ihtiyaç sahiplerine vermeyi gerçek iyiliğin unsurlarından biri olarak bildirir.", "direct"),
  verse("yardimlasma-3-92", 3, 92, undefined, "Sevilen şeylerden Allah yolunda vermeden gerçek iyiliğe erişilemeyeceğini bildirir.", "direct"),

  verse("aile-30-21", 30, 21, undefined, "Eşler arasında huzur, sevgi ve merhametin Allah’ın ayetlerinden olduğunu açıkça bildirir.", "direct"),
  verse("aile-25-74", 25, 74, undefined, "Eşlerin ve çocukların gönül huzuru kaynağı olması için yapılan duayı aktararak aile mutluluğu temasını destekler.", "related"),

  verse("cocuk-66-6", 66, 6, undefined, "İnsanın kendisini ve ailesini kötülükten koruma sorumluluğunu açıkça bildirir.", "direct"),
  verse("cocuk-31-13", 31, 13, undefined, "Lokmân’ın oğluna verdiği temel dinî ve ahlâkî öğüdü aktararak ebeveyn rehberliğini açıkça örneklendirir.", "direct"),
  verse("cocuk-31-16-19", 31, 16, 19, "Lokmân’ın oğluna sorumluluk, namaz, iyiliği emretme, sabır, tevazu ve güzel davranış konusunda verdiği öğütleri aktarır.", "direct"),
  verse("cocuk-25-74", 25, 74, undefined, "İyi bir aile ve nesil için yapılan duayı aktararak ebeveyn sorumluluğu temasını destekler.", "related"),

  verse("sila-17-26", 17, 26, undefined, "Akrabaya hakkını vermeyi açıkça emreder.", "direct"),
  verse("sila-30-38", 30, 38, undefined, "Akrabaya, yoksula ve yolcuya hakkının verilmesini açıkça emreder.", "direct"),
  verse("sila-4-36", 4, 36, undefined, "Yakın akrabaya iyilik etmeyi temel toplumsal sorumluluklar arasında açıkça bildirir.", "direct"),

  verse("komsuluk-4-36", 4, 36, undefined, "Yakın ve uzak komşuya iyilik etmeyi açıkça emreder.", "direct"),

  verse("haber-49-6", 49, 6, undefined, "Gelen bir haberin doğruluğunu araştırmadan hareket etmemeyi açıkça emreder.", "direct"),
  verse("haber-49-11-12", 49, 11, 12, "Alay, kötü lakap, kötü zan, insanların gizliliklerini araştırma ve gıybet gibi iletişimi bozan davranışları yasaklar.", "direct"),
  verse("haber-17-36", 17, 36, undefined, "Kesin bilgi sahibi olunmayan şeyin peşine düşmemeyi açıkça emreder.", "direct"),
  verse("haber-33-70-71", 33, 70, 71, "Doğru ve sağlam söz söylemeyi açıkça emreder.", "direct"),

  verse("genclik-18-13-16", 18, 13, 16, "İnançlarını koruyan gençlerin hakikat karşısındaki kararlı duruşunu ve çevre baskısına rağmen inançlarını muhafaza etmelerini anlatır.", "direct"),

  verse("umit-39-53", 39, 53, undefined, "Günah işlemiş kullara Allah’ın rahmetinden ümit kesmemeyi açıkça bildirir.", "direct"),
  verse("umit-12-87", 12, 87, undefined, "Allah’ın rahmetinden ümit kesmemeyi açıkça öğütler.", "direct"),

  verse("israf-7-31", 7, 31, undefined, "Yeme ve içmede israf etmemeyi açıkça emreder.", "direct"),
  verse("israf-25-67", 25, 67, undefined, "Harcarken ne israf eden ne de cimrilik yapan dengeli tutumu över.", "direct"),

  verse("adalet-4-135", 4, 135, undefined, "Kişinin kendisi ve yakınları aleyhine bile olsa adaleti titizlikle ayakta tutmasını açıkça emreder.", "direct"),
  verse("adalet-5-8", 5, 8, undefined, "Bir topluluğa duyulan öfkenin insanı adaletsizliğe sevk etmemesini ve adaletli davranmayı açıkça emreder.", "direct"),
  verse("adalet-16-90", 16, 90, undefined, "Allah’ın adaleti açıkça emrettiğini bildirir.", "direct"),

  verse("kuranla-38-29", 38, 29, undefined, "Kur’an’ın ayetleri üzerinde düşünülmesi ve akıl sahiplerinin öğüt alması için indirildiğini açıkça bildirir.", "direct"),
  verse("kuranla-17-9", 17, 9, undefined, "Kur’an’ın insanı en doğru ve en sağlam yola yönelttiğini açıkça bildirir.", "direct"),
  verse("kuranla-39-23", 39, 23, undefined, "Kur’an’ın Allah tarafından indirilen en güzel söz olduğunu ve onun müminlerin kalpleri üzerindeki etkisini anlatır.", "direct"),

  verse("ilim-39-9", 39, 9, undefined, "Bilenlerle bilmeyenlerin bir olmayacağını açıkça bildirerek bilginin değerini vurgular.", "direct"),
  verse("ilim-20-114", 20, 114, undefined, "‘Rabbim, ilmimi artır’ duasını öğreterek ilmin artmasını istemeyi açıkça teşvik eder.", "direct"),
  verse("ilim-58-11", 58, 11, undefined, "İman edenlerin ve kendilerine ilim verilenlerin derecelerinin yükseltileceğini açıkça bildirir.", "direct"),

  verse("vakit-103-1-3", 103, 1, 3, "Zamana yemin ederek insan ömrünün iman, salih amel, hakkı ve sabrı tavsiye ile değerlendirilmediğinde hüsrana dönüşeceğini bildirir.", "direct"),

  verse("gayret-9-105", 9, 105, undefined, "İnsanı çalışmaya ve amel etmeye yönelterek yapılan işlerin Allah tarafından görüldüğünü bildirir.", "direct"),
  verse("gayret-53-39-41", 53, 39, 41, "İnsan için kendi gayretinden başkasının olmadığını ve gayretinin karşılığının kendisine verileceğini açıkça bildirir.", "direct"),

  verse("vefa-17-34", 17, 34, undefined, "Verilen söze bağlı kalmayı açıkça emreder ve verilen sözün sorumluluk doğurduğunu bildirir.", "direct"),
  verse("vefa-16-91", 16, 91, undefined, "Allah adına yapılan ahit ve verilen sözlerin yerine getirilmesini açıkça emreder.", "direct"),

  verse("mahremiyet-24-27-28", 24, 27, 28, "Başkasının evine izin almadan ve selam vermeden girilmemesini açıkça emrederek özel hayatın sınırlarını korur.", "direct"),
  verse("mahremiyet-24-58-59", 24, 58, 59, "Aile içinde dahi belirli özel vakitlerde izin isteme kuralını bildirerek mahremiyet ilkesini düzenler.", "direct"),
  verse("mahremiyet-49-12", 49, 12, undefined, "İnsanların gizliliklerini araştırmayı açıkça yasaklayarak özel hayatın korunmasını destekler.", "direct"),

  verse("suizan-49-12", 49, 12, undefined, "Zannın birçoğundan sakınmayı açıkça emreder ve bazı zanların günah olduğunu bildirir.", "direct"),
  verse("suizan-24-12", 24, 12, undefined, "Müminlerin asılsız bir haber karşısında birbirleri hakkında iyi zan beslemeleri gerektiğini bildirir.", "direct"),

  verse("iftira-24-4", 24, 4, undefined, "İffetli kimselere delilsiz suç isnat edilmesini açıkça ağır bir suç olarak düzenler.", "direct"),
  verse("iftira-24-11-16", 24, 11, 16, "Asılsız bir iftiranın yayılması karşısında müminlerin nasıl davranması gerektiğini ve doğrulanmamış sözün yayılmasının ağırlığını anlatır.", "direct"),
  verse("iftira-33-58", 33, 58, undefined, "Suçsuz müminlere eziyet eden ve onlara asılsız isnatta bulunanların açık bir iftira ve günah yüklendiğini bildirir.", "direct"),

  verse("alay-49-11", 49, 11, undefined, "İnsanlarla alay etmeyi, onları küçümsemeyi ve kötü lakaplarla çağırmayı açıkça yasaklar.", "direct"),

  verse("dostluk-25-27-29", 25, 27, 29, "İnsanı hak yoldan uzaklaştıran yanlış arkadaşlığın ahirette doğuracağı pişmanlığı açıkça anlatır.", "direct"),
  verse("dostluk-43-67", 43, 67, undefined, "Takvâ temeline dayanmayan yakın dostlukların ahirette düşmanlığa dönüşebileceğini bildirir.", "direct"),

  verse("arayi-duzeltmek-49-9-10", 49, 9, 10, "Çatışan müminlerin arasının adaletle düzeltilmesini emreder ve müminlerin kardeş olduğunu bildirir.", "direct"),
  verse("arayi-duzeltmek-4-114", 4, 114, undefined, "İnsanların arasını düzeltmeyi açıkça hayırlı davranışlardan biri olarak bildirir.", "direct"),

  verse("kotuluge-iyilik-41-34-35", 41, 34, 35, "Kötülüğü en güzel davranışla savmayı öğütler ve bunun düşmanlığı yakın dostluğa çevirebileceğini bildirir.", "direct"),

  verse("iyilik-ihsan-16-90", 16, 90, undefined, "Allah’ın adaleti ve ihsanı açıkça emrettiğini bildirir.", "direct"),
  verse("iyilik-ihsan-2-195", 2, 195, undefined, "İyilik etmeyi açıkça emreder ve Allah’ın iyilik edenleri sevdiğini bildirir.", "direct"),

  verse("yetim-4-2", 4, 2, undefined, "Yetimlerin mallarının kendilerine verilmesini ve haklarının korunmasını açıkça emreder.", "direct"),
  verse("yetim-4-10", 4, 10, undefined, "Yetimlerin mallarını haksız yere yiyenleri ağır biçimde uyarır.", "direct"),
  verse("yetim-93-9", 93, 9, undefined, "Yetime kötü ve ezici davranmamayı açıkça emreder.", "direct"),

  verse("riya-107-4-7", 107, 4, 7, "İbadetlerini gösteriş için yapan kimseleri açıkça kınar.", "direct"),
  verse("riya-2-264", 2, 264, undefined, "İnsanlara gösteriş için yapılan harcamanın değerini kaybettiğini bildirir.", "direct"),

  verse("iffet-24-30-31", 24, 30, 31, "Mümin erkek ve kadınlara bakışlarını sakınmalarını ve iffetlerini korumalarını açıkça emreder.", "direct"),
  verse("iffet-23-5-7", 23, 5, 7, "Müminlerin iffetlerini korumalarını temel özelliklerinden biri olarak açıkça bildirir.", "direct"),
  verse("iffet-33-35", 33, 35, undefined, "İffetlerini koruyan erkek ve kadınları Allah’ın mükâfat vadettiği kimseler arasında açıkça sayar.", "direct"),
  verse("iffet-12-23-24", 12, 23, 24, "Hz. Yûsuf’un haram bir teklife karşı duruşunu anlatarak iffetin korunmasına güçlü bir örnek sunar.", "related"),
  verse("iffet-28-25", 28, 25, undefined, "Hz. Mûsâ’ya gelen kadının utana utana yürüyüşünü anlatarak haya temasına örnek oluşturur.", "related"),

  verse("insan-onuru-17-70", 17, 70, undefined, "Âdemoğlunun Allah tarafından değerli ve şerefli kılındığını açıkça bildirir.", "direct"),
  verse("insan-onuru-49-13", 49, 13, undefined, "İnsanların farklı topluluklara ayrılışının tanışma amacı taşıdığını ve üstünlük ölçüsünün soy veya kavim olmadığını bildirerek insan saygınlığı temasını destekler.", "related"),

  verse("yumusak-soz-17-53", 17, 53, undefined, "Allah’ın kullarına sözün en güzelini söylemelerini açıkça emreder.", "direct"),
  verse("yumusak-soz-20-44", 20, 44, undefined, "Firavun gibi bir muhataba dahi yumuşak söz söylenmesini emrederek iletişimde yumuşak üslubun önemini gösterir.", "direct"),
  verse("yumusak-soz-2-83", 2, 83, undefined, "İnsanlara güzel söz söylemeyi açıkça emreder.", "direct"),

  verse("zulum-42-42", 42, 42, undefined, "İnsanlara zulmeden ve yeryüzünde haksız yere taşkınlık yapanları açıkça kınar.", "direct"),
  verse("zulum-16-90", 16, 90, undefined, "Adaleti emreder ve azgınlık ile haksızlığı yasaklayan temel ahlâk ilkesini bildirir.", "direct"),
  verse("zulum-11-113", 11, 113, undefined, "Zulmedenlere meyletmemeyi açıkça emrederek zulme destek ve yakınlık göstermemeyi öğütler.", "related"),

  verse("nefis-muhasebesi-59-18-19", 59, 18, 19, "İnsana yarın için ne hazırladığına bakmasını emrederek kişinin kendi hayatını ve amellerini sorgulamasını öğütler.", "direct"),
];

export const verseReferenceById = new Map(verseReferences.map((item) => [item.id, item]));
