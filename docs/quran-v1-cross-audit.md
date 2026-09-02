# Kur’an V1 İkinci Çapraz Denetim

Bu doküman canonical veri setinin ikinci kalite kontrol kaydıdır. Uygulamanın typed data katmanı source of truth olmaya devam eder; bu rapor uygulama verisini değiştirmez.

## Baseline

- 50 canonical topic
- 135 ayet ilişkisi
- SHA-256: `04d62dd229173c9aebceef09c0c72c3a12f31cb522bb86fb9a7d88604f4a382e`

## Durum açıklaması

- **PASS:** Mevcut ayet seti ve sınıflama değişiklik gerektirmiyor.
- **PASS WITH NOTE:** Veri değişikliği gerekmiyor fakat kullanım/semantik sınırının korunması gerekiyor.
- **REVIEW:** İnsan incelemesi gerekiyor; otomatik değişiklik yapılmayacak.

## Çapraz denetim metodolojisi

Denetim şu kriterlere göre kaydedilmiştir:

1. Ayet gerçekten başlıkla ilişkili mi?
2. Direct / related sınıflaması doğru mu?
3. `relevanceReason` ayetin ifade ettiği anlamı aşıyor mu?
4. Modern başlık Kur’an lafzında geçiyormuş gibi yanlış izlenim oluşturuyor mu?
5. Ayet sırf konuya sayı eklemek amacıyla zorlanmış mı?
6. Ayet aralığı gereğinden geniş mi?
7. Aynı konudaki ayetler anlamlı bir çekirdek oluşturuyor mu?

Çapraz kontrol kaynak çizgisi:

- Diyanet Kur’an Portalı / Kur’an Yolu
- Elmalılı Muhammed Hamdi Yazır
- Ömer Nasuhi Bilmen

Provider/site ile kaynak eser birbirinden ayrıdır. Elmalılı ve Bilmen metinlerinin bir provider üzerinden görüntülenmesi, provider’ı dinî otorite haline getirmez.

## 1. Sabır

**Status:** PASS

### Direct

- Bakara 2:153
- Bakara 2:155–157
- Zümer 39:10
- Âl-i İmrân 3:200

### Related

- Yok

### Audit sonucu

Ayetlerin tamamı sabır temasını açık şekilde taşıyor. Direct sınıflaması korunacak. Ayet aralıklarında değişiklik gerekmiyor. `relevanceReason` kayıtlarında anlam aşımı tespit edilmedi.

**DATA CHANGE:** Yok.

## 2. Tevekkül

**Status:** PASS

### Direct

- Âl-i İmrân 3:159
- Enfâl 8:2
- Talâk 65:2–3

### Related

- Yok

### Audit sonucu

Üç referans da tevekkülü doğrudan ifade ediyor. Âl-i İmrân 3:159 karar ve azimden sonra Allah’a tevekkülü; Enfâl 8:2 müminlerin tevekkülünü; Talâk 65:2–3 Allah’a tevekkül eden kimseye Allah’ın yeterli oluşunu taşır.

Direct sınıflaması korunacak.

**DATA CHANGE:** Yok.

## 3. Anne-babaya iyilik

**Status:** PASS

### Direct

- İsrâ 17:23–24
- Lokmân 31:14–15
- Ankebût 29:8
- En‘âm 6:151

### Related

- Yok

### Audit sonucu

Dört referans da anne-babaya iyi davranma sorumluluğunu doğrudan taşır.

Özellikle En‘âm 6:151’de anne-babaya iyilik açık biçimde emredildiğinden bu referansın direct sınıflaması kesindir.

**DATA CHANGE:** Yok.

## 4. Dua

**Status:** PASS

### Direct

- Bakara 2:186
- Mü’min 40:60
- A‘râf 7:55–56

### Related

- Yok

### Audit sonucu

Bakara 2:186 dua edenin duasına karşılık verilmesini; Mü’min 40:60 doğrudan Allah’a dua etmeyi; A‘râf 7:55–56 dua adabını ve korku/ümit ile yönelişi taşır.

A‘râf 7:55–56 aralığı gereksiz geniş değildir. Mevcut direct sınıflaması korunacak.

**DATA CHANGE:** Yok.

## 5. Şükür

**Status:** PASS

### Direct

- Bakara 2:152
- İbrâhîm 14:7–8
- Lokmân 31:12
- Nahl 16:114
- Neml 27:40

### Related

- Yok

### Audit sonucu

Beş referansın tamamı şükür kavramını doğrudan taşır.

İbrâhîm 14:7–8 aralığı anlamlıdır; 7. ayette şükür ve nimetin artması, 8. ayette Allah’ın kulların şükrüne muhtaç olmadığı çerçevesi bulunur.

Mevcut aralık korunacak.

**DATA CHANGE:** Yok.

## 6. Ölüm ve hayatın geçiciliği

**Status:** PASS

### Direct

- Âl-i İmrân 3:185
- Enbiyâ 21:34–35
- Hadîd 57:20

### Related

- Yok

### Audit sonucu

Âl-i İmrân 3:185 ölümü ve dünya hayatının geçiciliğini aynı ayette taşır.

Enbiyâ 21:34–35 dünyada ebedîliğin bulunmadığını ve her canlının ölümü tadacağını bildirir.

Hadîd 57:20 dünya hayatının geçici niteliğini açık biçimde işler.

Başlık ve üç referans arasında güçlü doğrudan ilişki vardır.

**DATA CHANGE:** Yok.

## 7. Kul hakkı

**Status:** PASS WITH NOTE

### Direct

- Bakara 2:188
- Nisâ 4:29
- Hucurât 49:11–12

### Related

- Yok

### Audit sonucu

Mevcut ayet seti korunacak.

Bakara 2:188 ve Nisâ 4:29, başkasının malının haksız yollarla alınması bakımından doğrudan ilişkilidir.

Hucurât 49:11–12; insanın onuru, itibarı, mahremiyeti, kötü zan, tecessüs ve gıybet gibi başkasına yönelik hak ihlallerini doğrudan düzenlediği için bu kullanıcı dostu şemsiye başlık altında direct tutulabilir.

### Semantik kural

“Kul hakkı” ifadesi Kur’an’ın lafzında geçen teknik bir Kur’an terimiymiş gibi sunulmayacak.

Başlık, kullanıcının aradığı şemsiye kavramdır. Ayetler bu şemsiye altındaki somut hak ihlallerini göstermektedir. Bu sınır mevcut ürün metinlerinde korunmalıdır.

**DATA CHANGE:** Yok.

## 8. Tövbe ve pişmanlık

**Status:** PASS

### Direct

- Zümer 39:53
- Tahrîm 66:8
- Furkân 25:70–71

### Related

- Yok

### Audit sonucu

Üç referans da tövbe ve Allah’a dönüş temasını açık biçimde taşır.

Tahrîm 66:8 samimi/nasûh tövbeyi doğrudan emreder.

Furkân 25:70–71 tövbe ile salih amele dönüşü açıkça anlatır.

Başlıktaki “pişmanlık” tövbenin anlam çerçevesi içinde kullanılmaktadır; ayetlerden bağımsız yeni bir hüküm üretilmemektedir.

**DATA CHANGE:** Yok.

## 9. Kardeşlik

**Status:** PASS

### Direct

- Hucurât 49:10
- Âl-i İmrân 3:103

### Related

- Haşr 59:9

### Audit sonucu

Hucurât 49:10 müminlerin kardeş olduğunu açıkça bildirir.

Âl-i İmrân 3:103 Allah’ın nimetiyle kardeş olunmasını ve birlik içinde kalmayı anlatır.

Bu iki referans direct olarak korunacak.

Haşr 59:9 diğergâmlık ve başkasını kendisine tercih etme üzerinden kardeşlik ahlâkını desteklemektedir; bu nedenle related sınıflaması daha isabetlidir ve korunacak.

**DATA CHANGE:** Yok.

## 10. Namazın önemi ve manevî etkisi

**Status:** PASS

### Direct

- Ankebût 29:45
- Tâhâ 20:14
- Mü’minûn 23:1–2
- Mü’minûn 23:9

### Related

- Bakara 2:45–46

### Audit sonucu

Ankebût 29:45 namazın kötülükten alıkoyma etkisini açıkça bildirir.

Tâhâ 20:14 Allah’ı anmak için namazı emreder.

Mü’minûn 23:1–2 namazdaki huşûyu müminlerin özelliği olarak bildirir.

Mü’minûn 23:9 namazları korumayı müminlerin özelliği olarak bildirir.

Bunların direct sınıflaması korunacak.

Bakara 2:45–46 namazı Allah’tan yardım istemenin yollarından biri olarak gösterir; ancak mevcut başlığın ana direct çekirdeğine göre destekleyici konumdadır. Bu nedenle related sınıflaması korunacak.

**DATA CHANGE:** Yok.

## 1–10 toplu sonuç

- Audit edilen topic: 10
- Audit edilen ayet ilişkisi: 36
- PASS: 9 topic
- PASS WITH NOTE: 1 topic — Kul hakkı
- REVIEW: 0
- Ayet değişikliği: 0
- Ayet ekleme: 0
- Ayet çıkarma: 0
- Direct/related değişikliği: 0
- `relevanceReason` değişikliği: 0

## Baseline fingerprint kontrolü

- Beklenen SHA-256: `04d62dd229173c9aebceef09c0c72c3a12f31cb522bb86fb9a7d88604f4a382e`
- Canonical typed veri bu denetim kaydı nedeniyle değiştirilmemelidir.
- Fingerprint farklılaşırsa dinî veri otomatik düzeltilmeyecek; önce source-of-truth katmanına yanlışlıkla müdahale edilip edilmediği araştırılacaktır.

## 11. Ahiret ve hesap bilinci

**Status:** PASS

**Direct:** Bakara 2:281; Zilzâl 99:7–8; Kâria 101:6–11.

**Related:** Yok.

**Audit sonucu:** Bakara 2:281 Allah’a dönüşü ve herkesin yaptığının karşılığını tam olarak almasını açıkça bildirir. Zilzâl 99:7–8 en küçük iyilik ve kötülüğün dahi görüleceğini bildirerek ferdî hesap bilincini doğrudan taşır. Kâria 101:6–11 amellerin tartılması ve buna bağlı sonucu açıkça anlatır. Başlık kelâm tartışması üretmek için değil, ahiret sorumluluğu ve hesap bilinci çerçevesinde kullanılmaktadır. Üç referans da direct olarak korunacak.

**DATA CHANGE:** Yok.

## 12. Güzel ahlak

**Status:** PASS WITH NOTE

**Direct:** Kalem 68:4; Nahl 16:90.

**Related:** İsrâ 17:53.

**Audit sonucu:** Kalem 68:4 Hz. Peygamber’in yüce/büyük ahlâk üzere olduğunu açıkça bildirir; direct sınıflaması uygundur. Nahl 16:90 adalet, ihsan ve yakınlara yardım gibi temel davranış ilkelerini emreder; hayâsızlık, kötülük ve taşkınlığı yasaklar. Geniş güzel ahlâk başlığında direct tutulması uygundur. İsrâ 17:53 güzel söz söyleme üzerinden ahlâkın belirli bir boyutunu destekler; related sınıflaması uygundur.

**Semantik not:** “Güzel ahlak” geniş bir şemsiye başlıktır. Doğruluk ve dürüstlük, Gıybet ve dili korumak, Öfkeye hâkim olmak, Affetmek ve bağışlamak, Merhamet, Kibir ve büyüklenme, Haset ve kıskançlık, Emanet ve sorumluluk, İyilik ve ihsan ve diğer özel ahlâk başlıklarını yutmamalıdır. Aramada özel bir konu eşleşiyorsa “Güzel ahlak” özel konunun önüne geçirilmemelidir.

**DATA CHANGE:** Yok.

## 13. Doğruluk ve dürüstlük

**Status:** PASS

**Direct:** Tevbe 9:119; Ahzâb 33:70–71.

**Related:** Yok.

**Audit sonucu:** Tevbe 9:119 Allah’tan sakınmayı ve doğrularla beraber olmayı açıkça emreder; tefsir bağlamında doğruluk ve özü-sözü bir olma erdemini destekler. Ahzâb 33:70–71 doğru ve sağlam söz söylemeyi açıkça emreder ve sonucunu bildirir. İki referans da direct olarak korunacak.

**DATA CHANGE:** Yok.

## 14. Gıybet ve dili korumak

**Status:** PASS

**Direct:** Hucurât 49:12.

**Related:** İsrâ 17:53.

**Audit sonucu:** Hucurât 49:12 gıybeti açıkça yasakladığı için başlığın çekirdek direct ayetidir. İsrâ 17:53 sözün en güzelini söylemeyi emrettiği için genel dil ahlâkını destekler fakat doğrudan gıybet ayeti değildir. Hucurât 49:12 direct, İsrâ 17:53 related ayrımı isabetlidir.

**DATA CHANGE:** Yok.

## 15. Öfkeye hâkim olmak

**Status:** PASS

**Direct:** Âl-i İmrân 3:134.

**Related:** Yok.

**Audit sonucu:** Ayet açıkça “öfkelerini yenenler” özelliğini taşır. Tek ayetli set olması eksiklik değildir; açık ve güçlü tek referans yeterlidir. Buraya sayı artırmak amacıyla başka ayet eklenmemelidir.

**DATA CHANGE:** Yok.

## 16. Affetmek ve bağışlamak

**Status:** PASS

**Direct:** Âl-i İmrân 3:134; Nûr 24:22; Şûrâ 42:40; Şûrâ 42:43.

**Related:** Yok.

**Audit sonucu:** Âl-i İmrân 3:134 insanları affedenleri doğrudan över. Nûr 24:22 affetmeyi ve hoşgörüyü açıkça teşvik eder. Şûrâ 42:40 karşılık verme hakkını kabul ederken affetme ve ıslahı üstün davranış olarak bildirir. Şûrâ 42:43 sabır ve bağışlamayı kararlılık gerektiren değerli davranışlardan sayar. Şûrâ 42:40 ile 42:43 ayrı referans olarak korunmalıdır. Dördü de direct.

**DATA CHANGE:** Yok.

## 17. Merhamet

**Status:** PASS

**Direct:** Beled 90:17; Âl-i İmrân 3:159; Fetih 48:29.

**Related:** Enbiyâ 21:107.

**Audit sonucu:** Beled 90:17 merhameti tavsiye etmeyi müminlerin özelliği olarak açıkça bildirir. Âl-i İmrân 3:159 Allah’ın rahmeti sayesinde Hz. Peygamber’in insanlara yumuşak davranmasını anlatır ve merhamet/yumuşaklık temasını doğrudan taşır. Fetih 48:29 müminlerin birbirlerine karşı merhametli olduklarını açıkça bildirir. Bu üçü direct olarak korunacak. Enbiyâ 21:107 Hz. Peygamber’in âlemlere rahmet olarak gönderildiğini bildirir. Genel “insanların merhametli davranması” emrinden farklı bir bağlam taşıdığı için related sınıflamasının korunması daha sıkıdır.

**DATA CHANGE:** Yok.

## 18. Kibir ve büyüklenme

**Status:** PASS

**Direct:** Lokmân 31:18; Nahl 16:23; A‘râf 7:146.

**Related:** Yok.

**Audit sonucu:** Lokmân 31:18 insanlara karşı kibirli davranmayı ve böbürlenmeyi açıkça yasaklar. Nahl 16:23 Allah’ın büyüklük taslayanları sevmediğini açıkça bildirir. A‘râf 7:146 yeryüzünde haksız yere büyüklük taslayanların durumunu doğrudan işler. Üçü de başlığı açık biçimde taşır.

**DATA CHANGE:** Yok.

## 19. Haset ve kıskançlık

**Status:** PASS

**Direct:** Felak 113:5; Nisâ 4:54; Bakara 2:109.

**Related:** Yok.

**Audit sonucu:** Felak 113:5 haset edenin hasedinden Allah’a sığınmayı açıkça öğretir. Nisâ 4:54 Allah’ın lütfundan verilen nimetler sebebiyle insanları kıskanma/haset tutumunu açıkça işler. Bakara 2:109 haset sebebiyle müminlerin iman nimetini kaybetmesini isteme davranışını anlatır. Üçünde de haset konusu lafız veya açık anlam düzeyinde bulunmaktadır. Direct sınıflaması korunacak.

**DATA CHANGE:** Yok.

## 20. Emanet ve sorumluluk

**Status:** PASS

**Direct:** Nisâ 4:58; Mü’minûn 23:8; Enfâl 8:27.

**Related:** Yok.

**Audit sonucu:** Nisâ 4:58 emanetlerin ehline verilmesini açıkça emreder; tefsir çerçevesinde emanet kavramı maddî ve mânevî sorumlulukları da kapsar. Mü’minûn 23:8 müminlerin emanetlerine ve ahitlerine riayet etmelerini açıkça bildirir. Enfâl 8:27 emanetlere bile bile hıyaneti açıkça yasaklar; tefsir çerçevesi görev ve yükümlülükleri de emanet kapsamında ele alır. Başlıktaki “sorumluluk” kavramı emanetin bu geniş anlam çerçevesi içinde kullanılmaktadır. Üçü de direct olarak korunacak.

**DATA CHANGE:** Yok.

## 11–20 toplu sonuç

- Audit edilen topic: 10
- Audit edilen ayet ilişkisi: 28
- PASS: 9
- PASS WITH NOTE: 1 — Güzel ahlak
- REVIEW: 0
- Ayet ekleme: 0
- Ayet çıkarma: 0
- Ayet/range değişikliği: 0
- Direct/related değişikliği: 0
- relevanceReason değişikliği: 0
- Canonical data change: 0

## Çapraz denetim kaynak çizgisi

Bu denetim Diyanet Kur’an Portalı / Kur’an Yolu, Elmalılı Muhammed Hamdi Yazır ve Ömer Nasuhi Bilmen kaynak çizgisi esas alınarak yapılmıştır.

Provider ile kaynak eser birbirine karıştırılmamalıdır. Bir mealin KuranMeali.net gibi bir provider üzerinden görüntülenmesi, provider’ı dinî kaynak/otorite haline getirmez.

## Kümülatif çapraz denetim durumu

- Denetlenen topic: 20
- Denetlenen ilişki: 64
- PASS: 18
- PASS WITH NOTE: 2 — Kul hakkı, Güzel ahlak
- REVIEW: 0
- Canonical data change: 0

## 11–20 baseline fingerprint kontrolü

- Beklenen SHA-256: 04d62dd229173c9aebceef09c0c72c3a12f31cb522bb86fb9a7d88604f4a382e
- Fingerprint değişmemelidir.
- Bu denetim dokümantasyon dışında canonical dinî veriyi değiştirmemelidir.
- Fingerprint farklılaşırsa otomatik dinî veri değişikliği yapılmayacak; önce source-of-truth katmanına yanlışlıkla müdahale edilip edilmediği araştırılacaktır.

## 21. Yardımlaşma ve cömertlik

**Status:** PASS

**Direct:** Mâide 5:2; Bakara 2:177; Âl-i İmrân 3:92.

**Related:** Yok.

**Audit sonucu:** Mâide 5:2 iyilik ve takvâ üzerinde yardımlaşmayı açıkça emreder ve “Yardımlaşma” başlığını doğrudan taşır. Bakara 2:177 yakınlara, yetimlere, yoksullara, yolculara ve ihtiyaç sahiplerine mal vermeyi gerçek iyiliğin unsurları arasında sayar; cömertlik/paylaşma temasını doğrudan taşır. Âl-i İmrân 3:92 sevilen şeylerden vermeyi iyiliğe erişmenin şartlarından biri olarak bildirir ve cömertlik temasını doğrudan taşır. Üç referansın direct sınıflaması korunacak.

**DATA CHANGE:** Yok.

## 22. Ailede sevgi, huzur ve merhamet

**Status:** PASS

**Direct:** Rûm 30:21.

**Related:** Furkân 25:74.

**Audit sonucu:** Rûm 30:21 eşler arasında huzur, sevgi ve merhameti açıkça bildirir; başlığın çekirdek direct ayetidir. Furkân 25:74 eş ve çocukların göz aydınlığı olması için yapılan duayı aktarır. Aile huzurunu güçlü biçimde destekler fakat Rûm 30:21 kadar doğrudan “sevgi ve merhamet” kavramlarının ana ayeti değildir. Related sınıflaması isabetlidir.

**DATA CHANGE:** Yok.

## 23. Çocuk terbiyesi ve ebeveyn sorumluluğu

**Status:** PASS WITH NOTE

**Direct:** Tahrîm 66:6; Lokmân 31:13; Lokmân 31:16–19.

**Related:** Furkân 25:74.

**Audit sonucu:** Tahrîm 66:6 kişinin kendisini ve ailesini koruma sorumluluğunu açıkça bildirir ve ebeveyn/aile sorumluluğunun güçlü direct temelidir. Lokmân 31:13 Lokmân’ın oğluna öğüdünü doğrudan aktarır. Lokmân 31:16–19 oğluna sorumluluk, namaz, iyilik, sabır, tevazu ve davranış konusunda verdiği öğütleri aktarır. İki Lokmân referansı çocuk eğitimine yönelik doğrudan ebeveyn nasihati örneği olduğu için direct tutulabilir. Furkân 25:74 iyi eş ve nesil için duayı taşıdığı için related kalmalıdır.

**Semantik not:** “Çocuk terbiyesi” ifadesi modern anlamda ayrıntılı pedagojik yöntemlerin Kur’an’da öğretildiği iddiasına dönüştürülmemelidir. Bu canonical konu ebeveynin dinî/ahlâkî sorumluluğu, çocuğa nasihat ve iyi nesil arzusu çerçevesinde kullanılmalıdır.

**DATA CHANGE:** Yok.

## 24. Sıla-i rahim ve akrabalık bağları

**Status:** PASS

**Direct:** İsrâ 17:26; Rûm 30:38; Nisâ 4:36.

**Related:** Yok.

**Audit sonucu:** İsrâ 17:26 ve Rûm 30:38 akrabanın hakkını vermeyi açıkça emreder. Nisâ 4:36 yakın akrabaya iyiliği açıkça bildirir. Başlıktaki “sıla-i rahim” kullanıcıların bildiği klasik şemsiye kavramdır; ayetlerin üçü de akrabalık hakkı ve ilişkisini doğrudan taşır.

**DATA CHANGE:** Yok.

## 25. Komşuluk

**Status:** PASS

**Direct:** Nisâ 4:36.

**Related:** Yok.

**Audit sonucu:** Nisâ 4:36 yakın komşu ve uzak komşuya iyiliği açıkça emreder. Tek referans olması eksiklik değildir. Başlık için açık ve doğrudan bir ayet bulunduğundan sırf sayı artırmak amacıyla başka ayet eklenmemelidir.

**DATA CHANGE:** Yok.

## 26. Haber ve iletişim ahlakı

**Status:** PASS WITH NOTE

**Direct:** Hucurât 49:6; Hucurât 49:11–12; İsrâ 17:36; Ahzâb 33:70–71.

**Related:** Yok.

**Audit sonucu:** Hucurât 49:6 gelen haber karşısında doğrulama/tahkik ilkesini açıkça taşır. Hucurât 49:11–12 alay, kötü lakap, kötü zan, tecessüs ve gıybet gibi insanlar arası iletişimi bozan davranışları açıkça yasaklar. İsrâ 17:36 bilgi sahibi olunmayan şeyin peşine düşmemeyi emreder ve bilgi/haber sorumluluğu bakımından doğrudan ilişkilidir. Ahzâb 33:70–71 doğru ve sağlam söz söylemeyi açıkça emreder; iletişim ahlâkının doğrudan bir ilkesidir. Dördü de canonical başlığın geniş fakat kontrollü kapsamı içinde direct tutulabilir.

**Semantik not:** Kur’an’da sosyal medya, internet veya dijital iletişim kavramlarının geçtiği izlenimi asla oluşturulmamalıdır. Canonical başlık “Haber ve iletişim ahlakı”dır. “Sosyal medya” ve benzeri modern ifadeler yalnız search alias/searchPhrase ve çağdaş uygulama alanıdır. Ayetler modern teknolojiyi değil; haber, bilgi, söz ve insanlar arası iletişimde uygulanabilecek temel ahlâk ilkelerini taşımaktadır.

**DATA CHANGE:** Yok.

## 27. Gençlik ve doğru duruş

**Status:** PASS WITH NOTE

**Direct:** Kehf 18:13–16.

**Related:** Yok.

**Audit sonucu:** Kehf 18:13 Ashâb-ı Kehf’in gençler olduğunu açıkça bildirir. 18:13–16 bütünü bu gençlerin imanlarını korumalarını, inançlarında sebat etmelerini ve içinde bulundukları baskıcı çevreden ayrılmalarını anlatan anlamlı bir pasajdır. Bu nedenle 18:13–16 aralığının “Gençlik ve doğru duruş” başlığında direct tutulması uygundur.

**Semantik not:** Bu başlık Kur’an’da bütün gençlik meselelerinin ayrıntılı biçimde ele alındığı izlenimi oluşturmamalıdır. Canonical çekirdek, inançlarını koruyan gençlerin kararlı duruşudur. “Gençlik ve ömrü değerlendirmek” eski yaklaşımına geri dönülmemeli. Asr 103:1–3 bu konuya eklenmemelidir; Asr sûresi 33. “Vakit ve ömrü değerlendirmek” konusundadır.

**DATA CHANGE:** Yok.

## 28. Ümit ve ümitsizliğe kapılmamak

**Status:** PASS

**Direct:** Zümer 39:53; Yûsuf 12:87.

**Related:** Yok.

**Audit sonucu:** Zümer 39:53 Allah’ın rahmetinden ümit kesmemeyi açıkça bildirir. Yûsuf 12:87 Allah’ın rahmetinden/rahmet ve yardımından ümit kesmemeyi açıkça bildirir. İki referans da başlığı doğrudan taşır. Zümer 39:53’ün aynı zamanda “Tövbe ve pişmanlık” konusunda kullanılması hata değildir; ayet iki konuyu da açık biçimde taşımaktadır.

**DATA CHANGE:** Yok.

## 29. İsraf ve ölçülü yaşamak

**Status:** PASS

**Direct:** A‘râf 7:31; Furkân 25:67.

**Related:** Yok.

**Audit sonucu:** A‘râf 7:31 yeme ve içmede israf etmemeyi açıkça emreder. Furkân 25:67 harcamada israf ile cimrilik arasındaki dengeli tutumu açıkça över. İki referans da direct olarak korunacak.

**Semantik sınır:** “Ölçülü yaşamak” ifadesi ayetlerin taşıdığı tüketim/harcama dengesinden koparılarak her türlü modern yaşam tercihini kapsayan sınırsız bir kavrama dönüştürülmemelidir. Bu not canonical veri değişikliği gerektirmez.

**DATA CHANGE:** Yok.

## 30. Adalet

**Status:** PASS

**Direct:** Nisâ 4:135; Mâide 5:8; Nahl 16:90.

**Related:** Yok.

**Audit sonucu:** Nisâ 4:135 kişinin kendisi ve yakınları aleyhine bile olsa adaleti ayakta tutmayı açıkça emreder. Mâide 5:8 bir topluluğa duyulan öfkenin adaletsizliğe yol açmamasını ve adaletli davranmayı açıkça emreder. Nahl 16:90 Allah’ın adaleti açıkça emrettiğini bildirir. Üç referans da başlığın güçlü direct çekirdeğini oluşturur.

**DATA CHANGE:** Yok.

## 21–30 toplu sonuç

- Audit edilen topic: 10
- Audit edilen ayet ilişkisi: 25
- PASS: 7
- PASS WITH NOTE: 3 — Çocuk terbiyesi ve ebeveyn sorumluluğu; Haber ve iletişim ahlakı; Gençlik ve doğru duruş
- REVIEW: 0
- Ayet ekleme: 0
- Ayet çıkarma: 0
- Ayet/range değişikliği: 0
- Direct/related değişikliği: 0
- relevanceReason değişikliği: 0
- Canonical data change: 0

## Kümülatif çapraz denetim — 1–30

- Önceki 1–20 topic: 20
- Önceki 1–20 ilişki: 64
- Önceki PASS: 18
- Önceki PASS WITH NOTE: 2
- Bu tur topic: 10
- Bu tur ilişki: 25
- Bu tur PASS: 7
- Bu tur PASS WITH NOTE: 3
- Denetlenen topic: 30
- Denetlenen ayet ilişkisi: 89
- PASS: 25
- PASS WITH NOTE: 5 — Kul hakkı; Güzel ahlak; Çocuk terbiyesi ve ebeveyn sorumluluğu; Haber ve iletişim ahlakı; Gençlik ve doğru duruş
- REVIEW: 0

## 21–30 çapraz denetim kaynak çizgisi

Denetim kaynak çizgisi Diyanet Kur’an Portalı / Kur’an Yolu, Elmalılı Muhammed Hamdi Yazır ve Ömer Nasuhi Bilmen’dir. Provider ile kaynak eser kavramı birbirine karıştırılmamalıdır. Bu görevde web içeriği scrape edilmemiş ve kaynak metni projeye kopyalanmamıştır.

## 21–30 baseline fingerprint kontrolü

- Beklenen SHA-256: 04d62dd229173c9aebceef09c0c72c3a12f31cb522bb86fb9a7d88604f4a382e
- Fingerprint değişmemelidir.
- Fingerprint farklılaşırsa canonical dinî veri otomatik değiştirilmemeli; görev sırasında source-of-truth veriye yanlışlıkla müdahale edilip edilmediği araştırılmalıdır.

## 31. Kur’an’la yaşamak ve öğüt almak

**Status:** PASS WITH NOTE

**Direct:** Sâd 38:29; İsrâ 17:9; Zümer 39:23.

**Related:** Yok.

**Audit sonucu:** Sâd 38:29 Kur’an’ın âyetleri üzerinde düşünülmesi ve akıl sahiplerinin öğüt alması amacıyla indirildiğini bildirir. İsrâ 17:9 Kur’an’ın en doğru yola ilettiğini açıkça bildirir. Zümer 39:23 Kur’an’ı en güzel söz olarak niteler ve Allah’tan sakınanların onun etkisiyle gönüllerinin yönelişini anlatır. Üç referans da Kur’an’dan rehberlik, öğüt ve manevî yöneliş elde etmeyi doğrudan destekler.

**Semantik not:** “Kur’an’la yaşamak” kullanıcı dostu bir şemsiye başlıktır; Kur’an lafzında aynen geçen teknik bir ifade gibi sunulmamalıdır. Konu Kur’an’ın rehberliği, üzerinde düşünmek, öğüt almak ve hayatı bu rehberliğe göre yönlendirmek çerçevesinde kullanılmalıdır. Ayetlerin söylemediği ayrıntılı modern yaşam hükümleri bu başlıktan türetilmemelidir.

**DATA CHANGE:** Yok.

## 32. İlim öğrenmek ve bilginin değeri

**Status:** PASS

**Direct:** Zümer 39:9; Tâhâ 20:114; Mücâdele 58:11.

**Related:** Yok.

**Audit sonucu:** Zümer 39:9 bilenlerle bilmeyenlerin bir olmadığını açıkça bildirir. Tâhâ 20:114 “Rabbim, ilmimi artır” duasını açıkça öğretir. Mücâdele 58:11 iman edenler ve kendilerine ilim verilenlerin derecelerinin yükseltilmesini bildirir. Üç referans da ilmin ve bilginin değerini açık biçimde taşır. “İlim öğrenmek” başlığı bu ayetlerin ortak anlam eksenini aşmamaktadır.

**DATA CHANGE:** Yok.

## 33. Vakit ve ömrü değerlendirmek

**Status:** PASS

**Direct:** Asr 103:1–3.

**Related:** Yok.

**Audit sonucu:** Asr sûresi zamana yemin eder; insanın hüsranını ve bundan kurtuluşun iman, salih amel, hakkı ve sabrı tavsiye ile mümkün olduğunu bildirir. Klasik ve çağdaş tefsir çerçevesinde zamanın/ömrün değerinin bilinmesi ve boşa geçirilmemesi temasını güçlü biçimde taşır. Tek pasaj yeterlidir; sırf sayı artırmak amacıyla başka ayet eklenmemelidir.

**Önemli:** Asr 103:1–3, 27. “Gençlik ve doğru duruş” konusuna eklenmemelidir.

**DATA CHANGE:** Yok.

## 34. Gayret ve emeğin değeri

**Status:** PASS WITH NOTE

**Direct:** Tevbe 9:105; Necm 53:39–41.

**Related:** Yok.

**Audit sonucu:** Tevbe 9:105 “çalışın/yapın” emriyle insanın amel ve faaliyetinin Allah tarafından görüleceğini bildirir. Necm 53:39–41 insan için kendi gayretinden/çabasından başkasının olmayacağını ve gayretinin karşılığını göreceğini bildirir. İki referans çaba, amel ve gayret eksenini doğrudan taşır.

**Semantik not:** “Gayret ve emeğin değeri” başlığındaki “emek” yalnız ücretli çalışma, meslek, iş hayatı veya ekonomik üretim anlamına indirgenmemelidir. Ayetlerin kapsamı genel olarak amel, çaba, gayret ve insanın yaptığı iş/faaliyet çerçevesindedir. Konu “Kur’an modern çalışma ekonomisini anlatıyor” iddiasına dönüştürülmemelidir.

**DATA CHANGE:** Yok.

## 35. Vefa ve sözünde durmak

**Status:** PASS

**Direct:** İsrâ 17:34; Nahl 16:91.

**Related:** Yok.

**Audit sonucu:** İsrâ 17:34 verilen sözün/ahdin yerine getirilmesini açıkça emreder ve ahdin sorumluluk doğurduğunu bildirir. Nahl 16:91 Allah adına yapılan ahitlerin yerine getirilmesini açıkça emreder. İki referans da ahde vefa ve sözünde durmayı doğrudan taşır.

**DATA CHANGE:** Yok.

## 36. Mahremiyet ve özel hayata saygı

**Status:** PASS WITH NOTE

**Direct:** Nûr 24:27–28; Nûr 24:58–59; Hucurât 49:12.

**Related:** Yok.

**Audit sonucu:** Nûr 24:27–28 başkasının evine izin almadan ve selam vermeden girmemeyi açıkça emreder. Nûr 24:58–59 ev içindeki belirli özel vakitlerde izin isteme düzenini açıkça bildirir. Hucurât 49:12 tecessüsü, yani başkalarının gizli durumlarını araştırmayı yasaklar. Üç referans kişisel alan, ev hayatı ve başkasının gizliliğine saygının güçlü doğrudan temelidir.

**Semantik not:** “Mahremiyet ve özel hayata saygı” çağdaş kullanıcıya anlaşılır bir şemsiye başlıktır. Bu başlıktan modern veri koruma mevzuatı, dijital gizlilik standartları, KVKK benzeri hukuk düzenlemeleri veya teknoloji güvenliğinin Kur’an’da ayrıntılı biçimde açıklandığı sonucu çıkarılmamalıdır. Modern dijital mahremiyet bu temel ilkelerin çağdaş uygulama alanlarından biri olabilir; ayetin doğrudan konusu teknoloji değildir.

**DATA CHANGE:** Yok.

## 37. Suizan ve zanlardan sakınmak

**Status:** PASS

**Direct:** Hucurât 49:12; Nûr 24:12.

**Related:** Yok.

**Audit sonucu:** Hucurât 49:12 zanların birçoğundan kaçınmayı açıkça emreder ve bazı zanların günah olduğunu bildirir. Nûr 24:12 iftira hadisesi bağlamında müminlerin birbirleri hakkında iyi zan beslemeleri gerektiğini açıkça ortaya koyar. İki referans kötü zan/suizan başlığını doğrudan taşır. Başlıktaki klasik “suizan” terimi ile kullanıcı dostu “zanlardan sakınmak” ifadesi uyumludur.

**DATA CHANGE:** Yok.

## 38. İftira ve asılsız söz

**Status:** PASS

**Direct:** Nûr 24:4; Nûr 24:11–16; Ahzâb 33:58.

**Related:** Yok.

**Audit sonucu:** Nûr 24:4 iffetli kimselere zina isnadında bulunup delil getiremeyenlerin durumunu açıkça düzenler ve iftira temasının güçlü direct örneğidir. Nûr 24:11–16 ifk hadisesi üzerinden asılsız suçlama ve bu sözün yayılmasını açık biçimde işler. Ahzâb 33:58 mümin erkek ve kadınlara işlemedikleri bir şeyden dolayı eziyet edenlerin iftira ve açık günah yüklendiğini bildirir. Üç referans da direct olarak korunacak.

**Semantik sınır:** Nûr 24:4 özel olarak zina isnadı bağlamındadır ve bu özel bağlam gizlenmemelidir. Canonical başlık daha genel iftira temasını kapsadığı için başlığın altında direct bulunması uygundur.

**DATA CHANGE:** Yok.

## 39. Alay, küçümseme ve kötü lakap

**Status:** PASS

**Direct:** Hucurât 49:11.

**Related:** Yok.

**Audit sonucu:** Hucurât 49:11 bir topluluğun diğerini küçümsemesini/alaya almasını, birbirini ayıplamayı ve kötü lakaplarla çağırmayı açıkça yasaklar. Canonical başlığın üç unsurunu da aynı ayet doğrudan taşır. Tek ayet yeterlidir.

**DATA CHANGE:** Yok.

## 40. Dostluk ve arkadaş seçimi

**Status:** PASS WITH NOTE

**Direct:** Furkân 25:27–29; Zuhruf 43:67.

**Related:** Yok.

**Audit sonucu:** Furkân 25:27–29 yanlış bir kimseyi yakın dost edinmenin kişiyi Allah’ın yolundan uzaklaştırmasının pişmanlığını açıkça anlatır. Zuhruf 43:67 takvâ sahipleri dışında yakın dostların kıyamet günü birbirlerine düşman olacağını bildirir. İki referans da arkadaşlık/dostluğun insanın dinî ve ahlâkî yönelişi üzerindeki sonucunu doğrudan taşır.

**Semantik not:** “Arkadaş seçimi” ayetlerin anlamını kullanıcıya anlaşılır biçimde taşıyan bir başlık ifadesidir; ayetler ayrıntılı bir “iyi arkadaş seçme kriterleri listesi” vermemektedir. Canonical çekirdek yakın arkadaşlığın insan üzerindeki etkisi, yanlış dostluğun pişmanlığı ve takvâ temelli dostluğun değeri olarak korunmalıdır.

**DATA CHANGE:** Yok.

## 31–40 toplu sonuç

- Audit edilen topic: 10
- Audit edilen ayet ilişkisi: 22
- PASS: 6
- PASS WITH NOTE: 4 — Kur’an’la yaşamak ve öğüt almak; Gayret ve emeğin değeri; Mahremiyet ve özel hayata saygı; Dostluk ve arkadaş seçimi
- REVIEW: 0
- Ayet ekleme: 0
- Ayet çıkarma: 0
- Ayet/range değişikliği: 0
- Direct/related değişikliği: 0
- relevanceReason değişikliği: 0
- Canonical data change: 0

## Kümülatif çapraz denetim — 1–40

- Önceki 1–30 topic: 30
- Önceki 1–30 ilişki: 89
- Önceki PASS: 25
- Önceki PASS WITH NOTE: 5
- Bu tur topic: 10
- Bu tur ilişki: 22
- Bu tur PASS: 6
- Bu tur PASS WITH NOTE: 4
- Denetlenen topic: 40
- Denetlenen ayet ilişkisi: 111
- PASS: 31
- PASS WITH NOTE: 9 — Kul hakkı; Güzel ahlak; Çocuk terbiyesi ve ebeveyn sorumluluğu; Haber ve iletişim ahlakı; Gençlik ve doğru duruş; Kur’an’la yaşamak ve öğüt almak; Gayret ve emeğin değeri; Mahremiyet ve özel hayata saygı; Dostluk ve arkadaş seçimi
- REVIEW: 0

## 31–40 çapraz denetim kaynak çizgisi

Denetim kaynak çizgisi Diyanet Kur’an Portalı / Kur’an Yolu, Elmalılı Muhammed Hamdi Yazır ve Ömer Nasuhi Bilmen’dir. Provider ile kaynak eser birbirine karıştırılmamalıdır. Meal veya tefsir metni projeye kopyalanmamış ve web scraping yapılmamıştır.

## 31–40 baseline fingerprint kontrolü

- Beklenen SHA-256: 04d62dd229173c9aebceef09c0c72c3a12f31cb522bb86fb9a7d88604f4a382e
- Fingerprint değişmemelidir.
- Fingerprint farklılaşırsa canonical dinî veriye otomatik düzeltme uygulanmamalı; önce source-of-truth verinin görev sırasında yanlışlıkla değişip değişmediği araştırılmalıdır.

## 41. İnsanların arasını düzeltmek

**Status:** PASS

**Direct:** Hucurât 49:9–10; Nisâ 4:114.

**Related:** Yok.

**Audit sonucu:** Hucurât 49:9–10 çatışan mümin toplulukların arasının adaletle düzeltilmesini açıkça emreder; ardından müminlerin kardeş olduğunu ve kardeşlerin arasının düzeltilmesini bildirir. Nisâ 4:114 insanların arasını düzeltmeyi açıkça hayırlı davranışlar arasında sayar. İki referans da canonical başlığı doğrudan taşır.

**DATA CHANGE:** Yok.

## 42. Kötülüğe iyilikle karşılık vermek

**Status:** PASS

**Direct:** Fussilet 41:34–35.

**Related:** Yok.

**Audit sonucu:** Fussilet 41:34 iyilikle kötülüğün bir olmadığını bildirir ve kötülüğün en güzel davranışla savılmasını açıkça emreder. 41:35 bu yüksek ahlâkî tutumun sabır ve güçlü bir nasip gerektirdiğini tamamlayıcı biçimde açıklar. 41:34–35 tek anlamlı pasaj olarak korunmalıdır. Tek referans seti yeterlidir.

**DATA CHANGE:** Yok.

## 43. İyilik ve ihsan

**Status:** PASS

**Direct:** Nahl 16:90; Bakara 2:195.

**Related:** Yok.

**Audit sonucu:** Nahl 16:90 adaletle birlikte ihsanı açıkça emreder. Bakara 2:195 iyilik etmeyi açıkça emreder ve Allah’ın muhsinleri/iyilik edenleri sevdiğini bildirir. İki referans da iyilik ve ihsan temasını doğrudan taşır.

**Semantik ayrım:** Bu konu “Güzel ahlak” ile birleştirilmemelidir. Güzel ahlak geniş ahlâk şemsiyesidir; İyilik ve ihsan somut olarak iyi davranma, ihsan ve iyilik yapma eksenidir. Mevcut ayrım korunacak.

**DATA CHANGE:** Yok.

## 44. Yetimlere karşı sorumluluk

**Status:** PASS

**Direct:** Nisâ 4:2; Nisâ 4:10; Duhâ 93:9.

**Related:** Yok.

**Audit sonucu:** Nisâ 4:2 yetimlerin mallarının korunmasını ve kendilerine verilmesini açıkça emreder. Nisâ 4:10 yetim malını haksız yere yiyenleri ağır biçimde uyarır. Duhâ 93:9 yetime kötü ve ezici davranmamayı açıkça emreder. Üç referans yetimin malî hakkını ve insanî korunmasını birlikte taşıyan güçlü direct çekirdektir.

**DATA CHANGE:** Yok.

## 45. Riya ve gösterişten sakınmak

**Status:** PASS

**Direct:** Mâûn 107:4–7; Bakara 2:264.

**Related:** Yok.

**Audit sonucu:** Mâûn 107:4–7 namaz konusunda gaflet ve gösteriş tutumunu açıkça kınar. Bakara 2:264 insanlara gösteriş amacıyla yapılan harcamayı eleştirir ve böyle davranışın sadakayı boşa çıkarması üzerinde durur. İki referans da gösteriş/riya temasını doğrudan taşır.

**Semantik sınır:** Bu topic bütün niyet meselelerini kapsayan sınırsız bir kategori değildir. Canonical çekirdek, ibadet veya iyiliği insanlar görsün diye yapma/gösteriş tutumudur.

**DATA CHANGE:** Yok.

## 46. İffet ve haya

**Status:** PASS WITH NOTE

**Direct:** Mü’minûn 23:5–7; Nûr 24:30–31; Ahzâb 33:35.

**Related:** Yûsuf 12:23–24; Kasas 28:25.

**Audit sonucu:** Mü’minûn 23:5–7 müminlerin iffetlerini korumalarını açıkça bildirir. Nûr 24:30–31 mümin erkek ve kadınlara bakışlarını sakınmalarını ve iffetlerini korumalarını açıkça emreder. Ahzâb 33:35 iffetlerini koruyan erkek ve kadınları açıkça över ve mükâfat vadeder. Üçünün direct sınıflaması uygundur. Yûsuf 12:23–24 Hz. Yûsuf’un haram teklife karşı tavrını anlatan örnek olaydır; genel iffet emri değildir ve related kalmalıdır. Kasas 28:25 Hz. Mûsâ’ya gelen kadının haya/utangaçlık içeren yürüyüşünü anlatır; genel bir haya emri değildir ve related kalmalıdır.

**Semantik not:** Başlık iffet ve haya adlı yakın fakat aynı olmayan iki kavramı birlikte taşır. Direct çekirdeğin ağırlığı iffetin korunmasıdır; haya yönü özellikle Kasas 28:25 gibi örnek anlatımlarla desteklenir. Kasas 28:25 ve Yûsuf 12:23–24 direct yapılmamalıdır. Kültürel olarak “haya” adı verilen her uygulamanın Kur’an tarafından aynı biçimde emredildiği sonucu çıkarılmamalıdır.

**DATA CHANGE:** Yok.

## 47. İnsan onuru ve saygınlığı

**Status:** PASS WITH NOTE

**Direct:** İsrâ 17:70.

**Related:** Hucurât 49:13.

**Audit sonucu:** İsrâ 17:70 Âdemoğlunun Allah tarafından mükerrem/değerli kılındığını açıkça bildirir ve canonical başlığın güçlü direct temelidir. Hucurât 49:13 insanların ortak kökenini, kavim ve kabilelere ayrılmanın tanışma amacı taşıdığını ve Allah katındaki üstünlük ölçüsünün takvâ olduğunu bildirir. İnsanların kavim/soy üzerinden küçümsenmemesi ve insan değerinin anlaşılması açısından başlığı güçlü biçimde destekler; ancak İsrâ 17:70 gibi doğrudan “insanın şereflendirilmesi” ayeti değildir ve related kalmalıdır.

**Semantik not:** “İnsan onuru ve saygınlığı” çağdaş kullanıcıya anlaşılır bir başlıktır. Modern insan hakları hukukunun bütün maddelerinin, belirli anayasal hükümlerin veya çağdaş hukuk sistemlerinin tamamının Kur’an’da ayrıntılı biçimde bulunduğu sonucu çıkarılmamalıdır. Canonical çekirdek Allah’ın insana verdiği değer ve soy/kavim üstünlüğünün reddedilmesidir.

**DATA CHANGE:** Yok.

## 48. Yumuşak söz ve güzel konuşmak

**Status:** PASS

**Direct:** İsrâ 17:53; Tâhâ 20:44; Bakara 2:83.

**Related:** Yok.

**Audit sonucu:** İsrâ 17:53 Allah’ın kullarına sözün en güzelini söylemelerini açıkça emreder. Tâhâ 20:44 Firavun gibi ağır bir muhataba dahi yumuşak söz söylenmesini emreder. Bakara 2:83 insanlara güzel söz söylemeyi açıkça emreder. Üç referans da güzel ve yumuşak söz temasını doğrudan taşır. Tâhâ 20:44 özel bir hitap bağlamında olsa da “yumuşak söz” ifadesi ayetin kendisinde açık biçimde bulunduğundan direct kalması uygundur.

**DATA CHANGE:** Yok.

## 49. Haksızlık ve zulümden sakınmak

**Status:** PASS WITH NOTE

**Direct:** Şûrâ 42:42; Nahl 16:90.

**Related:** Hûd 11:113.

**Audit sonucu:** Şûrâ 42:42 insanlara zulmeden ve yeryüzünde haksız yere taşkınlık yapanları açıkça kınar; direct sınıflaması kesindir. Nahl 16:90 adaleti emreder, kötülük ve taşkınlığı yasaklar ve zulüm/haksızlığın karşısındaki temel ahlâk ilkesini doğrudan verir; direct tutulması uygundur. Hûd 11:113 zulmedenlere meyletmemeyi açıkça emreder. Ayetin doğrudan emri “siz zulmetmeyin” değil “zalimlere meyletmeyin” şeklindedir; related sınıflamasının korunması daha sıkı ve doğrudur.

**Semantik not:** Canonical başlık zulüm, haksızlık ve başkasına karşı adaletsiz davranıştan sakınma eksenindedir. Bütün hukuk uyuşmazlıklarında otomatik hüküm/fetva üreten bir kategoriye dönüştürülmemelidir. Hûd 11:113 direct yapılmamalıdır.

**DATA CHANGE:** Yok.

## 50. Nefis muhasebesi ve kendini düzeltmek

**Status:** PASS WITH NOTE

**Direct:** Haşr 59:18–19.

**Related:** Yok.

**Audit sonucu:** Haşr 59:18 her insanın yarın için ne hazırladığına bakmasını açıkça emreder. Bu ifade kişinin kendi amellerini gözden geçirmesi, gelecekteki hesabını düşünmesi ve kendini sorgulaması anlamında nefis muhasebesinin güçlü temelidir. Haşr 59:19 Allah’ı unutan ve bunun sonucunda kendilerine kendilerini unutturan kimseleri bildirerek 18. ayetin öz denetim/Allah bilinci eksenini tamamlar. 18–19 aralığı anlamlı bir bütün olarak korunmalıdır.

**Semantik not:** “Nefis muhasebesi” ayet lafzında birebir geçen teknik bir tamlama gibi sunulmamalıdır; ayetlerin anlamını klasik İslâmî ahlâk dilinde özetleyen şemsiye kavramdır. Canonical çekirdek insanın ne hazırladığına bakması, amellerini sorgulaması, Allah’ı unutmaması ve kendi halini düzeltmeye yönelmesidir. Tasavvufun bütün nefis teorisinin tek başına bu ayette ayrıntılı biçimde anlatıldığı iddiasına dönüştürülmemelidir.

**DATA CHANGE:** Yok.

## 41–50 toplu sonuç

- Audit edilen topic: 10
- Audit edilen ayet ilişkisi: 24
- PASS: 6
- PASS WITH NOTE: 4 — İffet ve haya; İnsan onuru ve saygınlığı; Haksızlık ve zulümden sakınmak; Nefis muhasebesi ve kendini düzeltmek
- REVIEW: 0
- Ayet ekleme: 0
- Ayet çıkarma: 0
- Ayet/range değişikliği: 0
- Direct/related değişikliği: 0
- relevanceReason değişikliği: 0
- Canonical data change: 0

## Nihai kümülatif çapraz denetim — 1–50

- Önceki 1–40 topic: 40
- Önceki 1–40 ilişki: 111
- Önceki PASS: 31
- Önceki PASS WITH NOTE: 9
- Bu tur topic: 10
- Bu tur ilişki: 24
- Bu tur PASS: 6
- Bu tur PASS WITH NOTE: 4
- Denetlenen canonical topic: 50 / 50
- Denetlenen ayet ilişkisi: 135 / 135
- PASS: 37
- PASS WITH NOTE: 13
- REVIEW: 0
- Canonical dinî veri değişikliği: 0

## Nihai PASS WITH NOTE listesi

1. Kul hakkı
2. Güzel ahlak
3. Çocuk terbiyesi ve ebeveyn sorumluluğu
4. Haber ve iletişim ahlakı
5. Gençlik ve doğru duruş
6. Kur’an’la yaşamak ve öğüt almak
7. Gayret ve emeğin değeri
8. Mahremiyet ve özel hayata saygı
9. Dostluk ve arkadaş seçimi
10. İffet ve haya
11. İnsan onuru ve saygınlığı
12. Haksızlık ve zulümden sakınmak
13. Nefis muhasebesi ve kendini düzeltmek

Bu statüler “hatalı” anlamına gelmez. Canonical veri uygundur; kullanıcıya sunumda korunması gereken semantik sınırları ifade eder.

## 41–50 çapraz denetim kaynak çizgisi

İkinci çapraz denetimin kaynak çizgisi Diyanet Kur’an Portalı / Kur’an Yolu, Elmalılı Muhammed Hamdi Yazır ve Ömer Nasuhi Bilmen’dir. Provider ile kaynak eser ayrımı korunmuştur. Kaynak metinleri projeye kopyalanmamış ve web scraping yapılmamıştır.

## 41–50 baseline fingerprint kontrolü

- Beklenen SHA-256: 04d62dd229173c9aebceef09c0c72c3a12f31cb522bb86fb9a7d88604f4a382e
- Fingerprint değişmemelidir.
- Bu son çapraz denetim yalnız dokümantasyon eklemeli; canonical source-of-truth veriye müdahale edilmemelidir.

## Nihai Sonuç

### Kur’an V1

- 50 canonical konu
- 135 ayet ilişkisi
- 124 direct
- 11 related
- 50 approved
- 0 draft

### İkinci çapraz denetim

- 50/50 konu tamamlandı
- 135/135 ilişki incelendi
- PASS: 37
- PASS WITH NOTE: 13
- REVIEW: 0
- Canonical ayet değişikliği: 0

PASS WITH NOTE kayıtları veri hatası değil, kullanıcıya sunum sırasında korunması gereken semantik sınırları ifade eder.
