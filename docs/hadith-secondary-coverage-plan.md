# Hadith Secondary Coverage Plan

> Bu plan source of truth değildir. Typed HadithReference verisi source of truth olmaya devam eder. Bu turda hadis araştırması, hadis seçimi veya canonical veri değişikliği yapılmamıştır.

## Frozen baseline

- Primary Hadith V1: 1.0 / frozen / audit_clean
- Frozen primary kayıt: 50
- Primary fingerprint önce/sonra: 71173c600ee4fad98efba5fd84f799d9118984a7a611274cd20a91537c84435c / 71173c600ee4fad98efba5fd84f799d9118984a7a611274cd20a91537c84435c
- Kur'an fingerprint önce/sonra: 04d62dd229173c9aebceef09c0c72c3a12f31cb522bb86fb9a7d88604f4a382e / 04d62dd229173c9aebceef09c0c72c3a12f31cb522bb86fb9a7d88604f4a382e
- Canonical hadis verisi değişikliği: Hayır

## Plan özeti

- NONE_FOR_NOW: 17
- USEFUL: 13
- NEEDED: 20
- HIGH: 10
- MEDIUM: 21
- LOW: 19

Bu sınıflandırma hadis sıhhatini değil, secondary araştırma ihtiyacı ve sırasını ifade eder. Otomatik 2–4 hadis hedefi uygulanmamıştır.

## Priority topic listeleri

### HIGH

20. Emanet ve sorumluluk; 21. Yardımlaşma ve cömertlik; 22. Ailede sevgi, huzur ve merhamet; 26. Haber ve iletişim ahlakı; 29. İsraf ve ölçülü yaşamak; 31. Kur’an’la yaşamak ve öğüt almak; 38. İftira ve asılsız söz; 39. Alay, küçümseme ve kötü lakap; 46. İffet ve haya; 48. Yumuşak söz ve güzel konuşmak

### MEDIUM

1. Sabır; 2. Tevekkül; 3. Anne-babaya iyilik; 4. Dua; 5. Şükür; 6. Ölüm ve hayatın geçiciliği; 8. Tövbe ve pişmanlık; 11. Ahiret ve hesap bilinci; 23. Çocuk terbiyesi ve ebeveyn sorumluluğu; 25. Komşuluk; 27. Gençlik ve doğru duruş; 28. Ümit ve ümitsizliğe kapılmamak; 32. İlim öğrenmek ve bilginin değeri; 33. Vakit ve ömrü değerlendirmek; 34. Gayret ve emeğin değeri; 35. Vefa ve sözünde durmak; 36. Mahremiyet ve özel hayata saygı; 41. İnsanların arasını düzeltmek; 42. Kötülüğe iyilikle karşılık vermek; 43. İyilik ve ihsan; 50. Nefis muhasebesi ve kendini düzeltmek

### LOW

7. Kul hakkı; 9. Kardeşlik; 10. Namazın önemi ve manevî etkisi; 12. Güzel ahlak; 13. Doğruluk ve dürüstlük; 14. Gıybet ve dili korumak; 15. Öfkeye hâkim olmak; 16. Affetmek ve bağışlamak; 17. Merhamet; 18. Kibir ve büyüklenme; 19. Haset ve kıskançlık; 24. Sıla-i rahim ve akrabalık bağları; 30. Adalet; 37. Suizan ve zanlardan sakınmak; 40. Dostluk ve arkadaş seçimi; 44. Yetimlere karşı sorumluluk; 45. Riya ve gösterişten sakınmak; 47. İnsan onuru ve saygınlığı; 49. Haksızlık ve zulümden sakınmak

## İlk secondary araştırma batch'i

Bu liste hadis seçimi değildir; yalnız aranacak semantic target'i tanımlar.

| Topic | Aranacak semantic target |
| --- | --- |
| 20. Emanet ve sorumluluk | Emaneti korumak ve emanete hıyanetten sakınmak |
| 21. Yardımlaşma ve cömertlik | Cömertlik, infak ve imkânı ihtiyaç sahibiyle paylaşma |
| 22. Ailede sevgi, huzur ve merhamet | Aileye iyi davranma, şefkat ve merhametli muamele |
| 26. Haber ve iletişim ahlakı | Duyulan her şeyi nakletmemek ve haber/bilgi aktarımında doğruluğu gözetmek |
| 29. İsraf ve ölçülü yaşamak | Harcama ve genel tüketimde israftan kaçınma, ölçüyü koruma |
| 31. Kur’an’la yaşamak ve öğüt almak | Kur'an'a bağlılık, ondan öğüt alma ve rehberliğini davranışa taşıma |
| 38. İftira ve asılsız söz | Bir kişiye işlemediği şeyi isnat etme ve asılsız suçlamadan sakınma |
| 39. Alay, küçümseme ve kötü lakap | Alay etmekten ve kötü/incitici lakap kullanmaktan sakınma |
| 46. İffet ve haya | İffeti koruma ve haramdan sakınarak kişisel sınırları muhafaza etme |
| 48. Yumuşak söz ve güzel konuşmak | Rifk, yumuşak muamele ve sertlikten sakınma |

## Secondary architecture check

- Hazırlık durumu: **PARTIALLY_READY**
- Aynı topicId altında birden fazla HadithReference: Model ve validation tarafından destekleniyor.
- Primary/secondary rolü: relationType'a yüklenmemeli; relationType yalnız direct/related semantik ilişkisini ifade eder.
- Frozen primary ayrımı: PRIMARY_HADITH_V1_IDS gelecekteki secondary kayıtları primary V1 fingerprint hesabı dışında bırakıyor.
- HadithReference veri modeli değişikliği: Gerekli değil.

### Architecture changes required before secondary insertion

- Toplam hadis sayısını 50 ve her topicte tam 1 toplam hadis olarak sabitleyen mevcut testler, frozen primary ID kümesini denetleyecek ve secondary kayıtları ayrıca sayacak biçimde ayrıştırılmalıdır.
- Genel hadis validation katmanına farklı ID altında aynı collectionId + primary locator kombinasyonunun yinelenmesini engelleyen exact kaynak/locator duplicate kontrolü eklenmelidir.
- Primary-only rapor veya sorgular PRIMARY_HADITH_V1_IDS üyeliğini kullanmalı; genel validate-content ise primary ve secondary dahil tüm kataloğu denetlemeye devam etmelidir.

## Topic bazında coverage analizi

### 1. Sabır

| Alan | Değer |
| --- | --- |
| Primary hadith | sabir-bukhari-1469 |
| Primary sourceReference | Sahih al-Bukhari 1469 |
| Primary semantic coverage | Sabretmeye çalışan kimseye Allah'ın sabır vereceğini ve sabrın en hayırlı, en geniş bağış olduğunu doğrudan taşır. |
| Kapsanmayan önemli boyutlar | Musibet veya ilk sarsıntı anında sabır; Uzun süreli sebat ve dayanıklılık |
| Second hadith need | **USEFUL** |
| Desired secondary semantic target | Musibet anında ve özellikle ilk sarsıntıda sabır gösterme |
| Priority | **MEDIUM** |

Primary relation rationale:

> Hadis sabretmeye çalışan kimseye Allah’ın sabır vereceğini ve sabırdan daha hayırlı/geniş bir bağış bulunmadığını açıkça bildirir.

Notes:

- Primary doğrulanmış excerpt'tır ve güçlüdür; secondary sırf excerpt olduğu için değil, sabrın uygulama bağlamını tamamlamak için anlamlı olabilir.

### 2. Tevekkül

| Alan | Değer |
| --- | --- |
| Primary hadith | tevekkul-bukhari-6472 |
| Primary sourceReference | Sahih al-Bukhari 6472 |
| Primary semantic coverage | Rablerine tevekkül eden bir topluluğu açıkça zikrederek tevekkül bağını doğrudan kurar. |
| Kapsanmayan önemli boyutlar | Sebeplere başvurma ile Allah'a güven arasındaki denge; Zorluk anında aktif tevekkül |
| Second hadith need | **USEFUL** |
| Desired secondary semantic target | Tedbir ve gayreti terk etmeden Allah'a dayanma |
| Priority | **MEDIUM** |

Primary relation rationale:

> Hadis hesapsız cennete girecek bir topluluğu anlatırken onların Rablerine tevekkül ettiklerini açıkça bildirir.

Notes:

- Primary'nin ruqye ve uğursuzluk bağlamı itikadî ayrıntılar üretilmeden korunmalıdır.

### 3. Anne-babaya iyilik

| Alan | Değer |
| --- | --- |
| Primary hadith | anne-babaya-iyilik-bukhari-5971 |
| Primary sourceReference | Sahih al-Bukhari 5971 |
| Primary semantic coverage | Güzel muameleyi en çok hak eden kişinin üç kez anne, ardından baba olduğunu açıkça bildirir. |
| Kapsanmayan önemli boyutlar | Yaşlılıkta bakım ve hizmet; Anne-babaya iyiliğin sürekliliği |
| Second hadith need | **USEFUL** |
| Desired secondary semantic target | Anne-babaya özellikle ihtiyaç ve yaşlılık döneminde bakım, hizmet ve vefa |
| Priority | **MEDIUM** |

Primary relation rationale:

> Güzel davranışı en çok hak eden kişi sorusuna üç defa anne, ardından baba cevabı verilir.

Notes:

- Primary ikonik ve güçlüdür; secondary ana hükmü tekrar etmek yerine bakım boyutunu tamamlamalıdır.

### 4. Dua

| Alan | Değer |
| --- | --- |
| Primary hadith | dua-bukhari-6340 |
| Primary sourceReference | Sahih al-Bukhari 6340 |
| Primary semantic coverage | Dua eden kişinin acele edip karşılık görmediğini söylememesini bildirir. |
| Kapsanmayan önemli boyutlar | Duanın kulluk ve Allah'a yöneliş değeri; Dua adabının primary'de bulunmayan temel boyutu |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Duanın kulluk, yöneliş ve Allah'tan isteme değeri |
| Priority | **MEDIUM** |

Primary relation rationale:

> Kulun “dua ettim fakat kabul edilmedi” diyerek acele etmediği sürece duasının karşılık bulacağını bildirir.

Notes:

- Primary duanın kendisinden çok duada acele etmemeyi merkez alır; başlığın çekirdeğini tamamlayan ikinci rivayet belirgin kalite artışı sağlar.

### 5. Şükür

| Alan | Değer |
| --- | --- |
| Primary hadith | sukur-muslim-2734a |
| Primary sourceReference | Sahih Muslim 2734a |
| Primary semantic coverage | Yeme veya içme sonrasında Allah'a hamd eden kuldan Allah'ın razı olacağını bildirir. |
| Kapsanmayan önemli boyutlar | Yeme-içme dışındaki nimetlere şükür; Şükrün genel ve sürekli kulluk boyutu |
| Second hadith need | **USEFUL** |
| Desired secondary semantic target | Nimetleri genel olarak Allah'a hamd ve şükürle karşılama |
| Priority | **MEDIUM** |

Primary relation rationale:

> Kulun yiyip içtikten sonra Allah’a hamdetmesinin Allah’ın hoşnutluğuna vesile olduğunu açıkça bildirir.

Notes:

- Primary şükrü açıkça taşır fakat uygulama bağlamı yeme ve içmedir.

### 6. Ölüm ve hayatın geçiciliği

| Alan | Değer |
| --- | --- |
| Primary hadith | olum-ve-hayatin-geciciligi-bukhari-6416 |
| Primary sourceReference | Sahih al-Bukhari 6416 |
| Primary semantic coverage | Dünyada garip veya yolcu gibi olma öğüdüyle hayatın geçiciliğini güçlü biçimde taşır. |
| Kapsanmayan önemli boyutlar | Ölümü hatırlama; Ölüme ve ahiret hesabına hazırlanma |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Ölümü hatırlama ve hayat bitmeden hazırlık yapma |
| Priority | **MEDIUM** |

Primary relation rationale:

> Dünyada bir garip veya yolcu gibi bulunma öğüdünü taşır. Dünya hayatının geçiciliği ve ölüme hazırlık açısından açık ilişkidir.

Notes:

- Primary excerpt özellikle geçicilik tarafını taşır; başlığın ölüm boyutu ayrı bir güçlü rivayetle tamamlanmalıdır.

### 7. Kul hakkı

| Alan | Değer |
| --- | --- |
| Primary hadith | kul-hakki-bukhari-2449 |
| Primary sourceReference | Sahih al-Bukhari 2449 |
| Primary semantic coverage | Başkasının onuru veya başka hakkıyla ilgili haksızlığı bulunan kişinin ahiretten önce helalleşmesini ve karşılık aktarımını açıkça işler. |
| Kapsanmayan önemli boyutlar | Belirgin eksik yok |
| Second hadith need | **NONE_FOR_NOW** |
| Desired secondary semantic target | Yok — mevcut primary hak ihlali, helalleşme ve ahiret sonucunu yeterince güçlü temsil ediyor |
| Priority | **LOW** |

Primary relation rationale:

> Bir kimsenin başka birinin şeref/onur veya başka bir hakkı konusunda haksızlığı varsa ahiretten önce helalleşmesini açıkça bildirir.

Notes:

- Yeni hadis yalnız farklı bir hak ihlali boyutunu gerçekten açıyorsa düşünülmelidir.

### 8. Tövbe ve pişmanlık

| Alan | Değer |
| --- | --- |
| Primary hadith | tovbe-ve-pismanlik-bukhari-6309 |
| Primary sourceReference | Sahih al-Bukhari 6309 |
| Primary semantic coverage | Allah'ın kulun tövbesine duyduğu sevinci kayıp bineğini bulan kişinin sevincine benzeterek tövbenin değerini taşır. |
| Kapsanmayan önemli boyutlar | Pişmanlığın tövbedeki yeri; Günahtan dönme ve davranışı düzeltme |
| Second hadith need | **USEFUL** |
| Desired secondary semantic target | Tövbenin pişmanlık, günahtan dönüş ve düzeltme boyutu |
| Priority | **MEDIUM** |

Primary relation rationale:

> Allah’ın kulunun tövbesine, çölde kaybettiği bineğini yeniden bulan kişinin sevincinden daha fazla hoşnut olduğunu bildiren rivayettir.

Notes:

- Primary tövbenin kabul ve rahmet boyutunda çok güçlüdür; secondary aynı benzetmeyi tekrar etmemelidir.

### 9. Kardeşlik

| Alan | Değer |
| --- | --- |
| Primary hadith | kardeslik-bukhari-13 |
| Primary sourceReference | Sahih al-Bukhari 13 |
| Primary semantic coverage | Kişinin kendisi için sevdiğini kardeşi için de sevmesini imanın gereği olarak açıkça bildirir. |
| Kapsanmayan önemli boyutlar | Belirgin eksik yok |
| Second hadith need | **NONE_FOR_NOW** |
| Desired secondary semantic target | Yok — kardeşliğin özgecilik ve karşılıklı iyilik çekirdeği güçlü biçimde temsil ediliyor |
| Priority | **LOW** |

Primary relation rationale:

> Kişinin kendisi için sevdiğini kardeşi için de sevmesini imanın gereği olarak açıkça bildirir.

Notes:

- Yardımlaşma ve hak koruma gibi boyutlar ayrı canonical topiclerde zaten bulunur.

### 10. Namazın önemi ve manevî etkisi

| Alan | Değer |
| --- | --- |
| Primary hadith | namazin-onemi-ve-manevi-etkisi-bukhari-528 |
| Primary sourceReference | Sahih al-Bukhari 528 |
| Primary semantic coverage | Beş vakit namazı günde beş kez yıkanmaya benzeterek günahların silinmesi ve manevî arınmayı açıkça taşır. |
| Kapsanmayan önemli boyutlar | Namazın kulluk düzenindeki merkeziliği; Namaza devam ve koruma |
| Second hadith need | **USEFUL** |
| Desired secondary semantic target | Beş vakit namazı koruma ve kulluk hayatındaki merkezî konumu |
| Priority | **LOW** |

Primary relation rationale:

> Beş vakit namazı, kişinin kapısındaki nehirde günde beş defa yıkanmasına benzeterek günahların silinmesine vesile olduğunu açıkça bildirir.

Notes:

- Primary hem önem hem manevî etki için yeterince güçlüdür; secondary zenginleştirici olabilir fakat acil değildir.

### 11. Ahiret ve hesap bilinci

| Alan | Değer |
| --- | --- |
| Primary hadith | ahiret-hesap-bukhari-6536 |
| Primary sourceReference | Sahih al-Bukhari 6536 |
| Primary semantic coverage | Kolay hesabın arz/sunum olduğunu, ayrıntılı sorgulamanın ağır sonucunu açıkça işler. |
| Kapsanmayan önemli boyutlar | Ahirete hazırlık; Amellerin hesap için önceden değerlendirilmesi |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Ahiret hesabına hazırlık ve insanın amellerinden sorumlu oluşu |
| Priority | **MEDIUM** |

Primary relation rationale:

> Hesabın ayrıntılı biçimde sorgulanmasının ağır sonucunu ve kolay hesabın arz/sunum mahiyetini açıkça işler; canonical başlığın hesap bilinci yönünü doğrudan taşır.

Notes:

- Primary hesap türü nüansında güçlüdür; geniş başlığın hazırlık ve sorumluluk boyutunu tamamlamak gerekir.

### 12. Güzel ahlak

| Alan | Değer |
| --- | --- |
| Primary hadith | guzel-ahlak-bukhari-3559 |
| Primary sourceReference | Sahih al-Bukhari 3559 |
| Primary semantic coverage | İnsanların en hayırlılarının ahlâkı en güzel olanlar olduğunu ve Hz. Peygamber'in kötü sözlü olmadığını bildirir. |
| Kapsanmayan önemli boyutlar | Belirgin eksik yok |
| Second hadith need | **NONE_FOR_NOW** |
| Desired secondary semantic target | Yok — güzel ahlâk şemsiyesinin değeri açıkça temsil ediliyor |
| Priority | **LOW** |

Primary relation rationale:

> İnsanların en hayırlılarının ahlâkı en güzel olanlar olduğunu açıkça bildirir ve topic için güçlü ana hadis adayıdır.

Notes:

- Özel ahlâk boyutları ayrı canonical topiclerde bulunduğu için bu şemsiye topic gereksiz hadis biriktirmemelidir.

### 13. Doğruluk ve dürüstlük

| Alan | Değer |
| --- | --- |
| Primary hadith | dogruluk-bukhari-6094 |
| Primary sourceReference | Sahih al-Bukhari 6094 |
| Primary semantic coverage | Doğruluğun iyiliğe ve cennete, yalanın fücura ve ateşe götürmesini; sürekliliğin kişiyi sıddîk veya yalancı yazdırmasını tam olarak taşır. |
| Kapsanmayan önemli boyutlar | Belirgin eksik yok |
| Second hadith need | **NONE_FOR_NOW** |
| Desired secondary semantic target | Yok — doğruluk ve yalan karşıtlığı sonuçlarıyla birlikte tam temsil ediliyor |
| Priority | **LOW** |

Primary relation rationale:

> Doğruluğun iyiliğe, iyiliğin cennete; yalanın ise fücura ve ateşe götürdüğünü açıkça bildirir.

Notes:

- Secondary ancak dürüstlüğün farklı bir uygulama alanını açıyorsa eklenmelidir.

### 14. Gıybet ve dili korumak

| Alan | Değer |
| --- | --- |
| Primary hadith | giybet-muslim-2589 |
| Primary sourceReference | Sahih Muslim 2589 |
| Primary semantic coverage | Gıybeti kişinin kardeşini hoşlanmadığı şeyle anması olarak tanımlar; söz onda yoksa bühtan olduğunu ayırır. |
| Kapsanmayan önemli boyutlar | Belirgin eksik yok |
| Second hadith need | **NONE_FOR_NOW** |
| Desired secondary semantic target | Yok — gıybet ve bühtan ayrımı topic çekirdeğini yeterince temsil ediyor |
| Priority | **LOW** |

Primary relation rationale:

> Gıybeti kişinin kardeşini hoşlanmayacağı bir şeyle anması olarak doğrudan tarif eder ve söylenen şey onda yoksa bunun iftira olduğunu ayırır.

Notes:

- Genel söz ahlâkı 26 ve 48 numaralı topiclerde ayrıca temsil edilir.

### 15. Öfkeye hâkim olmak

| Alan | Değer |
| --- | --- |
| Primary hadith | ofke-bukhari-6114 |
| Primary sourceReference | Sahih al-Bukhari 6114 |
| Primary semantic coverage | Gerçek güçlü kişinin öfke anında kendisine hâkim olan kişi olduğunu açık karşılaştırmayla bildirir. |
| Kapsanmayan önemli boyutlar | Belirgin eksik yok |
| Second hadith need | **NONE_FOR_NOW** |
| Desired secondary semantic target | Yok — topic tek ve güçlü bir çekirdekle doğrudan temsil ediliyor |
| Priority | **LOW** |

Primary relation rationale:

> Gerçek güçlü kişinin başkalarını fiziksel olarak yenen değil, öfke anında kendisine hâkim olan kişi olduğunu açıkça bildirir.

Notes:

- Sırf sayı artırmak için benzer lafızlı ikinci rivayet eklenmemelidir.

### 16. Affetmek ve bağışlamak

| Alan | Değer |
| --- | --- |
| Primary hadith | affetmek-muslim-2588 |
| Primary sourceReference | Sahih Muslim 2588 |
| Primary semantic coverage | Affın insanın izzetini artıracağını doğrudan bildirir. |
| Kapsanmayan önemli boyutlar | Belirgin eksik yok |
| Second hadith need | **NONE_FOR_NOW** |
| Desired secondary semantic target | Yok — affetmenin değeri ve sonucu açıkça temsil ediliyor |
| Priority | **LOW** |

Primary relation rationale:

> Bir kulun affetmesi sebebiyle Allah’ın onun izzetini artıracağını açıkça bildirir; bu topicte affetme bölümü ana ilişkidir.

Notes:

- Tam matn sadaka ve tevazu temalarını da içerir; secondary bu temaları tekrar etmemelidir.

### 17. Merhamet

| Alan | Değer |
| --- | --- |
| Primary hadith | merhamet-bukhari-7376 |
| Primary sourceReference | Sahih al-Bukhari 7376 |
| Primary semantic coverage | İnsanlara merhamet etmeyene Allah'ın merhamet etmeyeceğini genel ve güçlü biçimde bildirir. |
| Kapsanmayan önemli boyutlar | Belirgin eksik yok |
| Second hadith need | **NONE_FOR_NOW** |
| Desired secondary semantic target | Yok — merhamet topic'i genel bir ilkeyle yeterince temsil ediliyor |
| Priority | **LOW** |

Primary relation rationale:

> İnsanlara merhamet etmeyen kimseye Allah’ın merhamet etmeyeceğini açıkça bildirir ve canonical merhamet başlığını doğrudan taşır.

Notes:

- Secondary ancak belirli bir korunmasız gruba merhamet gibi yeni bir boyut sağlarsa düşünülmelidir.

### 18. Kibir ve büyüklenme

| Alan | Değer |
| --- | --- |
| Primary hadith | kibir-muslim-91a |
| Primary sourceReference | Sahih Muslim 91a |
| Primary semantic coverage | Kibri hakkı reddetmek ve insanları küçümsemek olarak tanımlar; kalpte zerre miktarı kibir hakkında uyarır. |
| Kapsanmayan önemli boyutlar | Belirgin eksik yok |
| Second hadith need | **NONE_FOR_NOW** |
| Desired secondary semantic target | Yok — kibir hem tanımı hem sonucu bakımından güçlü biçimde temsil ediliyor |
| Priority | **LOW** |

Primary relation rationale:

> Kalbinde zerre miktarı kibir bulunan kimse hakkında ağır uyarı taşır ve kibri hakkı reddetmek ile insanları küçümsemek olarak tarif eder.

Notes:

- Mevcut full matn topic için yüksek kapsama sahiptir.

### 19. Haset ve kıskançlık

| Alan | Değer |
| --- | --- |
| Primary hadith | haset-bukhari-6065 |
| Primary sourceReference | Sahih al-Bukhari 6065 |
| Primary semantic coverage | Birbirine haset etmemeyi açıkça emreder ve bunu kardeşlik bağlamında taşır. |
| Kapsanmayan önemli boyutlar | Belirgin eksik yok |
| Second hadith need | **NONE_FOR_NOW** |
| Desired secondary semantic target | Yok — haset yasağı açık lafızla doğrudan temsil ediliyor |
| Priority | **LOW** |

Primary relation rationale:

> Birbirine haset etmemeyi açıkça emreder; diğer unsurlarının yanında canonical haset topic’iyle direct ilişkisi açıktır.

Notes:

- Primary'nin diğer kardeşlik unsurları full matnda korunur.

### 20. Emanet ve sorumluluk

| Alan | Değer |
| --- | --- |
| Primary hadith | emanet-sorumluluk-bukhari-7138 |
| Primary sourceReference | Sahih al-Bukhari 7138 |
| Primary semantic coverage | Herkesin bir sorumluluk alanı bulunduğunu ve bundan sorgulanacağını yönetici, aile ve mal örnekleriyle açıkça taşır. |
| Kapsanmayan önemli boyutlar | Emaneti koruma; Emanete hıyanetten sakınma |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Emaneti korumak ve emanete hıyanetten sakınmak |
| Priority | **HIGH** |

Primary relation rationale:

> Her insanın bir sorumluluk alanına sahip olduğunu ve bundan sorumlu tutulacağını yönetici, aile ve mal sorumluluğu örnekleriyle açıkça bildirir; bu ilk aday başlığın özellikle sorumluluk boyutunu temsil eder.

Notes:

- Primary başlığın sorumluluk yarısını çok güçlü taşır; emanet yarısı ayrı ve doğrudan bir secondary gerektirir.

### 21. Yardımlaşma ve cömertlik

| Alan | Değer |
| --- | --- |
| Primary hadith | yardimlasma-muslim-2699a |
| Primary sourceReference | Sahih Muslim 2699a |
| Primary semantic coverage | Müminin sıkıntısını giderme, darda kalana kolaylık ve kardeşine yardım eden kula Allah'ın yardımını güçlü biçimde taşır. |
| Kapsanmayan önemli boyutlar | Cömertlik; İnfak ve karşılıksız verme |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Cömertlik, infak ve imkânı ihtiyaç sahibiyle paylaşma |
| Priority | **HIGH** |

Primary relation rationale:

> Müminin sıkıntısını gidermeyi, darda kalana kolaylık göstermeyi ve kardeşine yardım eden kula Allah’ın yardımını açıkça bildirir; bu ilk aday başlığın özellikle yardımlaşma boyutunu temsil eder.

Notes:

- Primary yardımlaşma tarafını tamamlar; canonical başlığın cömertlik tarafı açıkça eksiktir.

### 22. Ailede sevgi, huzur ve merhamet

| Alan | Değer |
| --- | --- |
| Primary hadith | aile-huzuru-muslim-1468b |
| Primary sourceReference | Sahih Muslim 1468b |
| Primary semantic coverage | Eşin bir huyundan hoşlanmasa diğerinden hoşnut olabilmeyi öğreterek aile içi denge ve tahammülü taşır. |
| Kapsanmayan önemli boyutlar | Aile fertlerine iyi davranma; Eşler ve çocuklar arasında şefkat ve merhamet |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Aileye iyi davranma, şefkat ve merhametli muamele |
| Priority | **HIGH** |

Primary relation rationale:

> Mümin erkeğin mümin eşine bütünüyle nefret beslememesini, bir huyundan hoşlanmasa başka bir huyundan hoşnut olabileceğini bildirerek eşler arası denge ve aile huzurunu doğrudan destekler.

Notes:

- Primary aile huzurunun bir mekanizmasını taşır; sevgi ve merhamet boyutu ayrı direct destek gerektirir.

### 23. Çocuk terbiyesi ve ebeveyn sorumluluğu

| Alan | Değer |
| --- | --- |
| Primary hadith | cocuk-terbiyesi-abu-dawud-495 |
| Primary sourceReference | Sunan Abi Dawud 495 |
| Primary semantic coverage | Çocuklara namazı öğretme/emretme ve yataklarını ayırma üzerinden ebeveynin dinî eğitim sorumluluğunu taşır. |
| Kapsanmayan önemli boyutlar | Çocuğa merhamet ve şefkat; Ebeveynin örnekliği ve adaletli muamelesi |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Çocuğa merhametli muamele ve ebeveynin olumlu örnekliği |
| Priority | **MEDIUM** |

Primary relation rationale:

> Çocuklara küçük yaştan itibaren namazın öğretilmesi ve yataklarının ayrılması üzerinden ebeveynin dinî eğitim sorumluluğunu doğrudan taşır.

Notes:

- Primary dinî eğitim boyutundadır; hassas fıkhî açıklamalar tercümeden ayrı tutulmalıdır.

### 24. Sıla-i rahim ve akrabalık bağları

| Alan | Değer |
| --- | --- |
| Primary hadith | sila-i-rahim-bukhari-5991 |
| Primary sourceReference | Sahih al-Bukhari 5991 |
| Primary semantic coverage | Gerçek sıla-i rahmin yalnız karşılık vermek değil, bağ kesildiğinde dahi ilişkiyi sürdürmek olduğunu açıkça bildirir. |
| Kapsanmayan önemli boyutlar | Belirgin eksik yok |
| Second hadith need | **NONE_FOR_NOW** |
| Desired secondary semantic target | Yok — akrabalık bağını sürdürmenin en zor ve ayırt edici boyutu temsil ediliyor |
| Priority | **LOW** |

Primary relation rationale:

> Gerçek sıla-i rahmin yalnız iyiliğe karşılık vermek olmadığını, akrabalık bağı kesildiğinde dahi ilişkiyi sürdürmeyi açıkça bildirir.

Notes:

- Primary tek başına yüksek kapsama sahiptir.

### 25. Komşuluk

| Alan | Değer |
| --- | --- |
| Primary hadith | komsuluk-bukhari-6016 |
| Primary sourceReference | Sahih al-Bukhari 6016 |
| Primary semantic coverage | Komşusunun kötülüğünden emin olmadığı kişi hakkında ağır uyarıyla komşuya zarar vermemeyi taşır. |
| Kapsanmayan önemli boyutlar | Komşuya aktif iyilik ve ikram; Komşunun ihtiyacını gözetme |
| Second hadith need | **USEFUL** |
| Desired secondary semantic target | Komşuya zarar vermemenin ötesinde aktif iyilik, ikram ve ihtiyaç gözetme |
| Priority | **MEDIUM** |

Primary relation rationale:

> Komşusunun kötülüğünden emin olmadığı kimse hakkında ağır bir uyarı taşıyarak komşunun güvenliği ve komşuya zarar vermeme ilkesini doğrudan temsil eder.

Notes:

- Primary negatif güvenlik sınırını çok güçlü taşır; pozitif komşuluk secondary ile zenginleşebilir.

### 26. Haber ve iletişim ahlakı

| Alan | Değer |
| --- | --- |
| Primary hadith | haber-iletisim-bukhari-6475 |
| Primary sourceReference | Sahih al-Bukhari 6475 |
| Primary semantic coverage | Allah'a ve ahiret gününe iman eden kişinin hayır söylemesini veya susmasını açıkça bildirir. |
| Kapsanmayan önemli boyutlar | Haber doğrulama; Duyulan her şeyi aktarmama; Bilginin güvenilirliğini gözetme |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Duyulan her şeyi nakletmemek ve haber/bilgi aktarımında doğruluğu gözetmek |
| Priority | **HIGH** |

Primary relation rationale:

> Allah’a ve ahiret gününe iman eden kişinin hayır söylemesini veya susmasını açıkça emreder; canonical topic açısından ana ilişki söz ve iletişim ahlâkıdır.

Notes:

- Primary söz üretme ahlâkını taşır; haber alma ve aktarma sorumluluğu canonical başlığın ayrı ana boyutudur.

### 27. Gençlik ve doğru duruş

| Alan | Değer |
| --- | --- |
| Primary hadith | genclik-bukhari-660 |
| Primary sourceReference | Sahih al-Bukhari 660 |
| Primary semantic coverage | Allah'a ibadet içinde yetişen genci, özel mükâfata erişecek yedi sınıftan biri olarak açıkça zikreder. |
| Kapsanmayan önemli boyutlar | Gençlikte baskı veya cazibe karşısında ahlâkî kararlılık; Doğru duruşu koruma |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Gençlikte ayartma, baskı veya imkân karşısında doğru ve iffetli duruşu koruma |
| Priority | **MEDIUM** |

Primary relation rationale:

> Allah’ın gölgesinde gölgelenecek yedi sınıftan biri olarak Allah’a ibadet içinde yetişen genci açıkça zikreder ve gençlik ile sağlam dinî duruş çekirdeğini doğrudan taşır.

Notes:

- Primary gençlik ve ibadet bağını taşır; başlıktaki doğru duruş daha belirgin bir örnekle tamamlanmalıdır.

### 28. Ümit ve ümitsizliğe kapılmamak

| Alan | Değer |
| --- | --- |
| Primary hadith | umit-muslim-2877a |
| Primary sourceReference | Sahih Muslim 2877a |
| Primary semantic coverage | Kişinin Allah hakkında hüsnüzan üzere ölmesini emrederek ölüm anındaki ümit boyutunu taşır. |
| Kapsanmayan önemli boyutlar | Günah sonrası Allah'ın rahmetinden ümit kesmeme; Ümit ile tövbe ve sorumluluk dengesi |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Günah veya ağır durum sonrasında Allah'ın rahmetinden ümit kesmeme |
| Priority | **MEDIUM** |

Primary relation rationale:

> Kişinin Allah hakkında hüsnüzan üzere ölmesini açıkça emrederek Allah’tan iyilik umma ve ümit başlığını doğrudan taşır.

Notes:

- Primary'nin özel bağlamı ölüm anıdır; genel ümit başlığı daha geniş fakat sorumlulukla dengeli bir destek ister.

### 29. İsraf ve ölçülü yaşamak

| Alan | Değer |
| --- | --- |
| Primary hadith | israf-tirmidhi-2380 |
| Primary sourceReference | Jami at-Tirmidhi 2380 |
| Primary semantic coverage | Midenin aşırı doldurulmamasını ve yemek, içecek, nefes için ölçüyü taşıyarak ölçülü yeme/tüketimi temsil eder. |
| Kapsanmayan önemli boyutlar | Genel harcama ve tüketimde israftan kaçınma; Kaynakları ölçülü kullanma |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Harcama ve genel tüketimde israftan kaçınma, ölçüyü koruma |
| Priority | **HIGH** |

Primary relation rationale:

> Midenin gereğinden fazla doldurulmamasını, yeterli miktarla yetinmeyi ve gerektiğinde yemek, içecek ve nefes için ölçü gözetmeyi bildirerek ölçülü tüketim boyutunu doğrudan temsil eder.

Notes:

- Primary yalnız yeme/içme alanında çok güçlüdür; başlığın genel israf boyutu açıkça tamamlanmalıdır.

### 30. Adalet

| Alan | Değer |
| --- | --- |
| Primary hadith | adalet-muslim-1827 |
| Primary sourceReference | Sahih Muslim 1827 |
| Primary semantic coverage | Adil kimseleri hükümlerinde, ailelerinde ve sorumluluk alanlarında adaletli davranmalarıyla över. |
| Kapsanmayan önemli boyutlar | Belirgin eksik yok |
| Second hadith need | **NONE_FOR_NOW** |
| Desired secondary semantic target | Yok — adalet farklı sorumluluk alanlarıyla birlikte geniş ve direct temsil ediliyor |
| Priority | **LOW** |

Primary relation rationale:

> Adaletli davrananları över ve onların hükümlerinde, ailelerine karşı ve sorumluluk alanlarında adaletli olduklarını açıkça bildirir.

Notes:

- Secondary ancak belirgin yeni bir adalet uygulaması sağlıyorsa düşünülmelidir.

### 31. Kur’an’la yaşamak ve öğüt almak

| Alan | Değer |
| --- | --- |
| Primary hadith | kuranla-yasamak-bukhari-5027 |
| Primary sourceReference | Sahih al-Bukhari 5027 |
| Primary semantic coverage | Kur'an'ı öğrenen ve öğretenlerin en hayırlı kimseler olduğunu bildirerek Kur'an'la bilgi ve aktarım bağını taşır. |
| Kapsanmayan önemli boyutlar | Kur'an okuma ve ona bağlılık; Kur'an rehberliğine göre davranma ve öğüt alma |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Kur'an'a bağlılık, ondan öğüt alma ve rehberliğini davranışa taşıma |
| Priority | **HIGH** |

Primary relation rationale:

> Kur’an’ı öğrenen ve öğretenlerin en hayırlı kimseler olduğunu bildirerek Kur’an’la güçlü bağ kurma, öğrenme ve başkasına aktarma boyutunu doğrudan temsil eder; başlığın bütün boyutları bu tek rivayete yüklenmez.

Notes:

- Primary öğrenme/öğretme boyutunda güçlüdür; canonical başlığın yaşama ve öğüt boyutu ayrı direct destek gerektirir.

### 32. İlim öğrenmek ve bilginin değeri

| Alan | Değer |
| --- | --- |
| Primary hadith | ilim-bukhari-71 |
| Primary sourceReference | Sahih al-Bukhari 71 |
| Primary semantic coverage | Allah'ın hakkında hayır dilediği kişiye dinde derin anlayış vermesini bildirerek dinî bilginin değerini taşır. |
| Kapsanmayan önemli boyutlar | İlim öğrenme yolunda çaba; Faydalı bilgiyi arama ve öğretme |
| Second hadith need | **USEFUL** |
| Desired secondary semantic target | Faydalı ilmi arama, öğrenme yoluna girme ve bilgiyi paylaşma |
| Priority | **MEDIUM** |

Primary relation rationale:

> Allah’ın hakkında hayır dilediği kişiye dinde derin anlayış verdiğini bildirerek ilim ve dinî anlayışın değerini doğrudan taşır.

Notes:

- Primary dinî anlayışın değerini yeterince taşır; secondary ilim edinme sürecini zenginleştirir.

### 33. Vakit ve ömrü değerlendirmek

| Alan | Değer |
| --- | --- |
| Primary hadith | vakit-bukhari-6412 |
| Primary sourceReference | Sahih al-Bukhari 6412 |
| Primary semantic coverage | İnsanların çoğunun değerini bilmediği sağlık ve boş vakit nimetlerini açıkça bildirir. |
| Kapsanmayan önemli boyutlar | Ömrü sona ermeden değerlendirme; Vakti salih ve faydalı işle doldurma |
| Second hadith need | **USEFUL** |
| Desired secondary semantic target | Ömür ve imkân geçmeden zamanı faydalı işlerle değerlendirme |
| Priority | **MEDIUM** |

Primary relation rationale:

> İnsanların çoğunun değerini yeterince bilmediği sağlık ve boş vakit nimetlerini açıkça bildirerek canonical başlığın vakti değerlendirme boyutunu doğrudan taşır.

Notes:

- Primary vakit nimetini güçlü taşır; ömür başlığını tamamlamak faydalı fakat acil değildir.

### 34. Gayret ve emeğin değeri

| Alan | Değer |
| --- | --- |
| Primary hadith | gayret-muslim-2664 |
| Primary sourceReference | Sahih Muslim 2664 |
| Primary semantic coverage | Fayda verene gayret etmeyi, Allah'tan yardım istemeyi ve acizliğe teslim olmamayı açıkça emreder. |
| Kapsanmayan önemli boyutlar | Helâl kazanç ve kişinin kendi emeğinin değeri; Üretme ve sorumlulukla çalışma |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Helâl kazanç, kişinin kendi emeği ve çalışarak üretmenin değeri |
| Priority | **MEDIUM** |

Primary relation rationale:

> Güçlü müminin faziletini, kişiye fayda verene gayret göstermeyi, Allah’tan yardım istemeyi ve acizliğe teslim olmamayı bildirerek gayret ve çaba boyutunu doğrudan taşır.

Notes:

- Primary genel gayret boyutundadır; başlıktaki emek boyutu ekonomik ideolojiye çevrilmeden tamamlanmalıdır.

### 35. Vefa ve sözünde durmak

| Alan | Değer |
| --- | --- |
| Primary hadith | vefa-bukhari-34 |
| Primary sourceReference | Sahih al-Bukhari 34 |
| Primary semantic coverage | Ahit yaptığında hıyaneti nifak alameti sayarak söz ve ahde bağlılığın önemini karşıt yönden açıkça taşır. |
| Kapsanmayan önemli boyutlar | Sözü olumlu biçimde yerine getirme; Vefanın övgüsü |
| Second hadith need | **USEFUL** |
| Desired secondary semantic target | Verilen sözü ve ahdi olumlu biçimde yerine getirme |
| Priority | **MEDIUM** |

Primary relation rationale:

> Nifak alametleri arasında ahit yaptığında ahdine ihanet etmeyi açıkça zikrederek ahde vefa ve sözünde durma başlığını doğrudan destekler.

Notes:

- Primary negatif ihlal sınırında güçlüdür; pozitif vefa örneği topic'i dengeler.

### 36. Mahremiyet ve özel hayata saygı

| Alan | Değer |
| --- | --- |
| Primary hadith | mahremiyet-bukhari-6241 |
| Primary sourceReference | Sahih al-Bukhari 6241 |
| Primary semantic coverage | İzinsiz bakış olayından hareketle izin istemenin bakış sebebiyle konulduğunu bildirerek ev ve görsel mahremiyeti taşır. |
| Kapsanmayan önemli boyutlar | Sır ve özel bilginin korunması; Tecessüs ve gizli durumları araştırmama |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Sırları ve özel bilgiyi koruma, başkasının gizli durumlarını araştırmama |
| Priority | **MEDIUM** |

Primary relation rationale:

> İzinsiz biçimde evin içine bakılması olayı üzerinden izin istemenin bakış sebebiyle konulduğunu bildirerek özel alana ve ev mahremiyetine saygıyı doğrudan destekler.

Notes:

- Primary fiziksel ev/bakış mahremiyetindedir; modern mevzuat iddiası üretmeden daha genel özel hayat boyutu tamamlanmalıdır.

### 37. Suizan ve zanlardan sakınmak

| Alan | Değer |
| --- | --- |
| Primary hadith | suizan-bukhari-6064 |
| Primary sourceReference | Sahih al-Bukhari 6064 |
| Primary semantic coverage | Zandan sakınmayı, zannın sözlerin en yalanı oluşunu ve tecessüs gibi bağlantılı davranışları açıkça taşır. |
| Kapsanmayan önemli boyutlar | Belirgin eksik yok |
| Second hadith need | **NONE_FOR_NOW** |
| Desired secondary semantic target | Yok — suizan hem açık emir hem bağlantılı davranışlarla yeterince temsil ediliyor |
| Priority | **LOW** |

Primary relation rationale:

> Zandan sakınmayı açıkça emreder ve zannın sözün en yalanı olduğunu bildirir; canonical suizan başlığıyla doğrudan ilişkilidir.

Notes:

- Mevcut full matn yüksek kapsama sahiptir.

### 38. İftira ve asılsız söz

| Alan | Değer |
| --- | --- |
| Primary hadith | iftira-bukhari-2654 |
| Primary sourceReference | Sahih al-Bukhari 2654 |
| Primary semantic coverage | Büyük günahlar arasında asılsız/yalan söz ve yalancı şahitlik konusunda tekrarlı, güçlü uyarı taşır. |
| Kapsanmayan önemli boyutlar | Bir kimseye işlemediği bir fiili isnat etme; İftiranın kişiye yönelen suçlama boyutu |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Bir kişiye işlemediği şeyi isnat etme ve asılsız suçlamadan sakınma |
| Priority | **HIGH** |

Primary relation rationale:

> Büyük günahlar arasında yalan ve asılsız söz konusunda güçlü, tekrarlı bir uyarı taşıyarak canonical topic’in asılsız söz boyutunu doğrudan temsil eder.

Notes:

- Primary asılsız söz boyutunda direct'tir; canonical başlığın iftira yarısı ayrı direct secondary gerektirir.

### 39. Alay, küçümseme ve kötü lakap

| Alan | Değer |
| --- | --- |
| Primary hadith | alay-kucumseme-muslim-2564a |
| Primary sourceReference | Sahih Muslim 2564a |
| Primary semantic coverage | Müslüman kardeşi küçümsememeyi ve küçümsemenin kişiye kötülük olarak yeterli oluşunu açıkça bildirir. |
| Kapsanmayan önemli boyutlar | Alay etme; Kötü veya incitici lakapla çağırma |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Alay etmekten ve kötü/incitici lakap kullanmaktan sakınma |
| Priority | **HIGH** |

Primary relation rationale:

> Müslüman kardeşini küçümsememeyi ve bir kimsenin kardeşini küçümsemesinin ona kötülük olarak yeteceğini bildirerek canonical topic’in küçümseme boyutunu doğrudan temsil eder.

Notes:

- Primary yalnız küçümseme boyutunda direct'tir; başlığın diğer iki açık unsuru hadis katmanında eksiktir.

### 40. Dostluk ve arkadaş seçimi

| Alan | Değer |
| --- | --- |
| Primary hadith | dostluk-bukhari-5534 |
| Primary sourceReference | Sahih al-Bukhari 5534 |
| Primary semantic coverage | İyi ve kötü arkadaşın etkisini misk taşıyan ile körük üfleyen benzetmesiyle fayda ve zarar yönleriyle açıkça anlatır. |
| Kapsanmayan önemli boyutlar | Belirgin eksik yok |
| Second hadith need | **NONE_FOR_NOW** |
| Desired secondary semantic target | Yok — arkadaş seçiminin etkisi güçlü ve dengeli bir benzetmeyle temsil ediliyor |
| Priority | **LOW** |

Primary relation rationale:

> İyi ve kötü arkadaşın etkisini misk taşıyan ve körük üfleyen kişi benzetmeleriyle anlatarak arkadaş seçiminin fayda ve zarar boyutunu doğrudan taşır.

Notes:

- Benzer anlamlı secondary sırf meşhur olduğu için eklenmemelidir.

### 41. İnsanların arasını düzeltmek

| Alan | Değer |
| --- | --- |
| Primary hadith | insanlarin-arasini-duzeltmek-bukhari-2692 |
| Primary sourceReference | Sahih al-Bukhari 2692 |
| Primary semantic coverage | İnsanların arasını düzeltmek amacıyla hayır taşıyan veya hayır söyleyen kişiyi doğrudan işler. |
| Kapsanmayan önemli boyutlar | Sulhun fazileti; Adaletli arabuluculuk ve çatışmayı sona erdirme |
| Second hadith need | **USEFUL** |
| Desired secondary semantic target | Adaletli arabuluculuk ve insanlar arasında sulhun fazileti |
| Priority | **MEDIUM** |

Primary relation rationale:

> İnsanların arasını düzelten ve bu amaçla hayırlı söz aktaran kimseyi açıkça işleyerek canonical topic ile doğrudan ilişki kurar.

Notes:

- Primary direct'tir fakat fıkhî sınırı hassastır; secondary sulhu daha nötr ve olumlu bir eksende zenginleştirebilir.

### 42. Kötülüğe iyilikle karşılık vermek

| Alan | Değer |
| --- | --- |
| Primary hadith | kotuluge-iyilikle-karsilik-vermek-muslim-2558a |
| Primary sourceReference | Sahih Muslim 2558a |
| Primary semantic coverage | Akrabaları bağı kesip kötülük ettiği halde ilişkiyi ve iyiliği sürdüren kişiyi destekleyerek kötülüğe iyilikle karşılığı taşır. |
| Kapsanmayan önemli boyutlar | Akrabalık dışındaki kötülüğe güzel karşılık; Affetme ve iyilikle savma |
| Second hadith need | **USEFUL** |
| Desired secondary semantic target | Akrabalık bağlamı dışında zarara iyilik, af ve güzel davranışla karşılık verme |
| Priority | **MEDIUM** |

Primary relation rationale:

> Akrabaları bağı kestiği hâlde bağı sürdürme, onlar kötülük ettiği hâlde iyilik etme ve kaba davrandıkları hâlde hilm gösterme tutumunu işleyerek kötülüğe iyilikle karşılık verme başlığını doğrudan taşır.

Notes:

- Primary çok güçlü bir pratik örnektir; secondary bağlamı genişletirse anlamlı olur.

### 43. İyilik ve ihsan

| Alan | Değer |
| --- | --- |
| Primary hadith | iyilik-ve-ihsan-muslim-1955a |
| Primary sourceReference | Sahih Muslim 1955a |
| Primary semantic coverage | Allah'ın her şeyde ihsanı emrettiğini bildirir; uygulamayı öldürme ve hayvan kesiminde eziyeti azaltma üzerinden gösterir. |
| Kapsanmayan önemli boyutlar | İnsanlara genel iyilik; İhsanın sosyal ve günlük davranış boyutu |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | İnsanlara genel iyilik ve günlük ilişkilerde ihsan |
| Priority | **MEDIUM** |

Primary relation rationale:

> Allah’ın her şeyde ihsanı emrettiğini açıkça bildirerek canonical iyilik ve ihsan başlığını doğrudan taşır.

Notes:

- Primary genel ilkeyi taşır fakat uygulama bağlamı kesimdir; sosyal iyilik boyutu katalog kalitesini belirgin artırır.

### 44. Yetimlere karşı sorumluluk

| Alan | Değer |
| --- | --- |
| Primary hadith | yetimlere-karsi-sorumluluk-bukhari-6005 |
| Primary sourceReference | Sahih al-Bukhari 6005 |
| Primary semantic coverage | Yetime kefil olan/bakımını üstlenen kişinin cennette Hz. Peygamber'e yakınlığını işaret anlatımıyla açıkça taşır. |
| Kapsanmayan önemli boyutlar | Yetimin mal ve haklarını koruma; Yetime kötü davranmama |
| Second hadith need | **USEFUL** |
| Desired secondary semantic target | Yetimin hakkını ve malını koruma, ona zarar vermeme |
| Priority | **LOW** |

Primary relation rationale:

> Yetime kefil olan ve bakımını üstlenen kişinin faziletini açıkça bildirerek yetimlere karşı sorumluluk başlığını doğrudan taşır.

Notes:

- Primary bakım sorumluluğunda güçlüdür; hak koruma boyutu faydalı fakat ilk batch için acil değildir.

### 45. Riya ve gösterişten sakınmak

| Alan | Değer |
| --- | --- |
| Primary hadith | riya-ve-gosteristen-sakinmak-bukhari-6499 |
| Primary sourceReference | Sahih al-Bukhari 6499 |
| Primary semantic coverage | Amelini insanlara duyurma ve gösteriş için yapmanın karşılığını açıkça bildirerek riya ve süm'a çekirdeğini taşır. |
| Kapsanmayan önemli boyutlar | Belirgin eksik yok |
| Second hadith need | **NONE_FOR_NOW** |
| Desired secondary semantic target | Yok — riya ve duyurma/gösteriş topic'i doğrudan temsil ediliyor |
| Priority | **LOW** |

Primary relation rationale:

> İnsanların duyması veya görmesi için amel etme ve gösteriş tutumunu açıkça işleyerek riya başlığını doğrudan taşır.

Notes:

- Niyetin bütün alanları bu topic altında biriktirilmemelidir.

### 46. İffet ve haya

| Alan | Değer |
| --- | --- |
| Primary hadith | iffet-ve-haya-bukhari-6117 |
| Primary sourceReference | Sahih al-Bukhari 6117 |
| Primary semantic coverage | Hayânın ancak hayır getirdiğini açıkça bildirerek canonical başlığın haya tarafını güçlü biçimde taşır. |
| Kapsanmayan önemli boyutlar | İffeti koruma; Bakış ve cinsel sınırları muhafaza etme |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | İffeti koruma ve haramdan sakınarak kişisel sınırları muhafaza etme |
| Priority | **HIGH** |

Primary relation rationale:

> Hayânın yalnız hayır getirdiğini açıkça bildirerek canonical başlığın haya boyutunu doğrudan temsil eder.

Notes:

- Primary yalnız haya boyutundadır; başlığın iffet yarısı ayrı direct secondary gerektirir.

### 47. İnsan onuru ve saygınlığı

| Alan | Değer |
| --- | --- |
| Primary hadith | insan-onuru-ve-sayginligi-bukhari-1739 |
| Primary sourceReference | Sahih al-Bukhari 1739 |
| Primary semantic coverage | Can, mal ve ırz/onurun dokunulmazlığını Veda hutbesi bağlamında güçlü ve doğrudan biçimde taşır. |
| Kapsanmayan önemli boyutlar | Belirgin eksik yok |
| Second hadith need | **NONE_FOR_NOW** |
| Desired secondary semantic target | Yok — insan onurunun ana dokunulmazlık alanları birlikte temsil ediliyor |
| Priority | **LOW** |

Primary relation rationale:

> Veda hutbesi bağlamında can, mal ve ırzın dokunulmazlığını bildirerek insan onuru ve saygınlığı başlığını doğrudan taşır.

Notes:

- Modern insan hakları hukukunun bütün maddeleri bu rivayete yüklenmemeli; bu sunum sınırı secondary ihtiyacı doğurmaz.

### 48. Yumuşak söz ve güzel konuşmak

| Alan | Değer |
| --- | --- |
| Primary hadith | yumusak-soz-ve-guzel-konusmak-bukhari-2989 |
| Primary sourceReference | Sahih al-Bukhari 2989 |
| Primary semantic coverage | Güzel sözün sadaka olduğunu açıkça bildirerek başlığın güzel konuşma tarafını doğrudan taşır. |
| Kapsanmayan önemli boyutlar | Rifk ve yumuşak muamele; Sertlikten kaçınma |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Rifk, yumuşak muamele ve sertlikten sakınma |
| Priority | **HIGH** |

Primary relation rationale:

> Güzel sözün sadaka olduğunu açıkça bildirerek canonical başlığın güzel konuşmak ve güzel söz boyutunu doğrudan taşır.

Notes:

- Primary güzel söz boyutunda güçlüdür; canonical başlığın yumuşaklık yarısı ayrı direct secondary gerektirir.

### 49. Haksızlık ve zulümden sakınmak

| Alan | Değer |
| --- | --- |
| Primary hadith | haksizlik-ve-zulumden-sakinmak-muslim-2577a |
| Primary sourceReference | Sahih Muslim 2577a |
| Primary semantic coverage | Hadis-i kudsîde zulmün haram kılındığını ve insanların birbirine zulmetmemesini genel ve açık biçimde bildirir. |
| Kapsanmayan önemli boyutlar | Belirgin eksik yok |
| Second hadith need | **NONE_FOR_NOW** |
| Desired secondary semantic target | Yok — zulüm yasağı genel, doğrudan ve güçlü biçimde temsil ediliyor |
| Priority | **LOW** |

Primary relation rationale:

> Zulmün haram kılındığını ve kulların birbirlerine zulmetmemesini açıkça bildiren hadis-i kudsî olarak canonical başlığı doğrudan taşır.

Notes:

- Mevcut primary başlık için yüksek kapsama sahiptir.

### 50. Nefis muhasebesi ve kendini düzeltmek

| Alan | Değer |
| --- | --- |
| Primary hadith | nefis-muhasebesi-tirmidhi-2406 |
| Primary sourceReference | Jami at-Tirmidhi 2406 |
| Primary semantic coverage | Dili tutma, evin kişiye yetmesi ve kendi hatasına ağlama öğütleriyle öz denetim ve kendini düzeltmeye yönelişi taşır. |
| Kapsanmayan önemli boyutlar | Amelleri düzenli biçimde gözden geçirme; Yanlışı fark ettikten sonra davranışı düzeltme |
| Second hadith need | **NEEDED** |
| Desired secondary semantic target | Kişinin amellerini hesaba çekmesi ve hatasını somut biçimde düzeltmesi |
| Priority | **MEDIUM** |

Primary relation rationale:

> Dili tutma, evin kişiye yetmesi ve kendi hatasına ağlama öğüdüyle kişinin kendi durumunu sorgulaması ve kendini düzeltmesi başlığını doğrudan destekler.

Notes:

- Primary öz eleştiri yönünde güçlü fakat şemsiye başlık daha sistematik muhasebe ve düzeltme boyutu ister; grading ihtilaf notu korunmalıdır.

## Nihai sonuç

50 canonical topic tek tek incelendi. 17 topic için primary şimdilik yeterli, 13 topic için secondary faydalı, 20 topic için secondary belirgin biçimde gereklidir.

İlk araştırma batch'i 10 HIGH topic ile sınırlandırılmıştır. Henüz hiçbir hadis seçilmemiş veya kataloğa eklenmemiştir.
