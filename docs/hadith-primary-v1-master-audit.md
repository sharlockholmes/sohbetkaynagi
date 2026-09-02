# Hadith Primary V1 Master Audit

> Bu belge türetilmiş kalite kontrol kaydıdır. Typed HadithReference katalogu source of truth olmaya devam eder; audit ikinci bir source of truth değildir.

## Baseline ve nihai karar

- Katalog: 1.0 / reference_verified
- Primary fingerprint önce/sonra: 71173c600ee4fad98efba5fd84f799d9118984a7a611274cd20a91537c84435c / 71173c600ee4fad98efba5fd84f799d9118984a7a611274cd20a91537c84435c
- Kur'an fingerprint önce/sonra: 04d62dd229173c9aebceef09c0c72c3a12f31cb522bb86fb9a7d88604f4a382e / 04d62dd229173c9aebceef09c0c72c3a12f31cb522bb86fb9a7d88604f4a382e
- PASS: 24
- PASS WITH NOTE: 26
- REVIEW: 0
- Sonuç: **Primary Hadith V1 reference baseline is audit-clean.**

PASS WITH NOTE canonical veri hatası değildir; kamu sunumunda korunması gereken semantik, bağlam, excerpt veya grading kapsam sınırını gösterir.

## Katalog bütünlüğü

- 50 canonical topic / 50 primary hadis / her topicte tam 1 kayıt
- Duplicate primary topic: 0; duplicate exact primary hadis: 0
- Orphan/bilinmeyen topicId: 0
- relationType=direct: 50/50
- verificationStatus=reference_verified: 50/50
- fully_verified: 0
- publicReady: 0/50
- **reference_verified ≠ publicReady**

## Source / provider audit

- sourceReference asli eser ve locator gösterir; provider URL değildir.
- gradingSource asli eser/muhaddis otoritesine bağlıdır; Sunnah.com, Dürer veya Diyanet değildir.
- Sunnah.com text_and_locator_verification; Dürer es-Seniyye cross_check rolündedir.
- Diyanet yalnız mevcut alternate locator kayıtlarında locator_cross_check rolündedir; canonical grading/şerh kaynağı değildir.
- Sonuç: hata yok.

## Arabic matn audit

- Arabic populated: 50/50; full_matn: 48; excerpt: 2.
- Excerpt: Sabır — Buhârî 1469; Ölüm ve hayatın geçiciliği — Buhârî 6416.
- İsnad, editorial/takip notu, grading cümlesi veya râvi sonrası açıklamasının Prophetic matna karıştığı kayıt bulunmadı.
- Özel sınırlar: 6416, 5027, 5991, 6016, 6412, 34, 2380, 2406, 6117 ve 1739 PASS.

## Grading master audit

- sahih: 47; hasen: 2; hasan_sahih: 1.
- Sunan Abi Dawud 495: PASS WITH NOTE — Nevevî'nin exact kapsamı 'İsnadı hasendir — إِسْنَادُهُ حَسَنٌ'.
- Jami at-Tirmidhi 2380: PASS — exact hüküm 'هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ'; Prophetic matndan ayrı.
- Jami at-Tirmidhi 2406: PASS WITH NOTE — exact hüküm 'هَذَا حَدِيثٌ حَسَنٌ'; çağdaş zayıf değerlendirme ihtilafı korunuyor.

## Collection dağılımı

| Asli eser | Primary kayıt |
| --- | ---: |
| Sahih al-Bukhari | 34 |
| Sahih Muslim | 13 |
| Sunan Abi Dawud | 1 |
| Jami at-Tirmidhi | 2 |

Musnad Ahmad metadata kataloğunda bulunur; primary omurgada kayıt taşımaz.

## Topic 42 regression

- Primary: Sahih Muslim 2558a
- Musnad Ahmad 17452 primary listede: Hayır
- Sonuç: PASS WITH NOTE; akrabalık bağlamındaki direct ilişki sınırsızlaştırılmamalıdır.

## Translation regresyonu

- ai_draft: 10; missing: 40; human_reviewed: 0; verified: 0; publicReady: 0/50.
- İlk 10 exact taslak ve Şükür 2734a revizyonu fingerprint ile değişmeden korunmuştur.

## PASS WITH NOTE kayıtları

- 1. Sabır — Sahih al-Bukhari 1469
- 6. Ölüm ve hayatın geçiciliği — Sahih al-Bukhari 6416
- 10. Namazın önemi ve manevî etkisi — Sahih al-Bukhari 528
- 11. Ahiret ve hesap bilinci — Sahih al-Bukhari 6536
- 20. Emanet ve sorumluluk — Sahih al-Bukhari 7138
- 21. Yardımlaşma ve cömertlik — Sahih Muslim 2699a
- 22. Ailede sevgi, huzur ve merhamet — Sahih Muslim 1468b
- 23. Çocuk terbiyesi ve ebeveyn sorumluluğu — Sunan Abi Dawud 495
- 26. Haber ve iletişim ahlakı — Sahih al-Bukhari 6475
- 27. Gençlik ve doğru duruş — Sahih al-Bukhari 660
- 28. Ümit ve ümitsizliğe kapılmamak — Sahih Muslim 2877a
- 29. İsraf ve ölçülü yaşamak — Jami at-Tirmidhi 2380
- 31. Kur’an’la yaşamak ve öğüt almak — Sahih al-Bukhari 5027
- 32. İlim öğrenmek ve bilginin değeri — Sahih al-Bukhari 71
- 33. Vakit ve ömrü değerlendirmek — Sahih al-Bukhari 6412
- 34. Gayret ve emeğin değeri — Sahih Muslim 2664
- 36. Mahremiyet ve özel hayata saygı — Sahih al-Bukhari 6241
- 38. İftira ve asılsız söz — Sahih al-Bukhari 2654
- 39. Alay, küçümseme ve kötü lakap — Sahih Muslim 2564a
- 41. İnsanların arasını düzeltmek — Sahih al-Bukhari 2692
- 42. Kötülüğe iyilikle karşılık vermek — Sahih Muslim 2558a
- 43. İyilik ve ihsan — Sahih Muslim 1955a
- 46. İffet ve haya — Sahih al-Bukhari 6117
- 47. İnsan onuru ve saygınlığı — Sahih al-Bukhari 1739
- 48. Yumuşak söz ve güzel konuşmak — Sahih al-Bukhari 2989
- 50. Nefis muhasebesi ve kendini düzeltmek — Jami at-Tirmidhi 2406

## Kayıt bazında audit

### 1. Sabır

| Alan | Değer |
| --- | --- |
| Hadith ID | sabir-bukhari-1469 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 1469 |
| Râvi | Ebû Saîd el-Hudrî |
| Primary locator | collection_global = 1469 |
| Alternate locator | in_book = Book 24, Hadith 71 |
| Arabic text type | excerpt |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 1469 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:1469); Dürer es-Seniyye (cross_check; https://dorar.net/h/7HOKeIU6?osoul=1) |
| Semantic relation | direct |
| Translation status | ai_draft |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Hadis sabretmeye çalışan kimseye Allah’ın sabır vereceğini ve sabırdan daha hayırlı/geniş bir bağış bulunmadığını açıkça bildirir.

Audit notu:

- Doğrulanmış excerpt; hadisin tamamı gibi sunulmamalı ve excerpt notu görünür kalmalıdır.

### 2. Tevekkül

| Alan | Değer |
| --- | --- |
| Hadith ID | tevekkul-bukhari-6472 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 6472 |
| Râvi | İbn Abbâs |
| Primary locator | collection_global = 6472 |
| Alternate locator | in_book = Book 81, Hadith 61 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 6472 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:6472); Dürer es-Seniyye (cross_check; https://dorar.net/h/ffXwurIx) |
| Semantic relation | direct |
| Translation status | ai_draft |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Hadis hesapsız cennete girecek bir topluluğu anlatırken onların Rablerine tevekkül ettiklerini açıkça bildirir.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 3. Anne-babaya iyilik

| Alan | Değer |
| --- | --- |
| Hadith ID | anne-babaya-iyilik-bukhari-5971 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 5971 |
| Râvi | Ebû Hüreyre |
| Primary locator | collection_global = 5971 |
| Alternate locator | in_book = Book 78, Hadith 2; diyanet_hadislerle_islam = B5971 (provider=diyanet-hadislerle-islam) (note=Buhârî, Edeb, 2) |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 5971 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:5971); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/151125); Diyanet Hadislerle İslâm (locator_cross_check; https://hadislerleislam.diyanet.gov.tr/sayfa.php?CILT=4&SAYFA=179) |
| Semantic relation | direct |
| Translation status | ai_draft |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Güzel davranışı en çok hak eden kişi sorusuna üç defa anne, ardından baba cevabı verilir.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 4. Dua

| Alan | Değer |
| --- | --- |
| Hadith ID | dua-bukhari-6340 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 6340 |
| Râvi | Ebû Hüreyre |
| Primary locator | collection_global = 6340 |
| Alternate locator | in_book = Book 80, Hadith 37 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 6340 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:6340); Dürer es-Seniyye (cross_check; https://dorar.net/h/IORgxcKI?osoul=1) |
| Semantic relation | direct |
| Translation status | ai_draft |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Kulun “dua ettim fakat kabul edilmedi” diyerek acele etmediği sürece duasının karşılık bulacağını bildirir.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 5. Şükür

| Alan | Değer |
| --- | --- |
| Hadith ID | sukur-muslim-2734a |
| Collection | Sahih Muslim |
| sourceReference | Sahih Muslim 2734a |
| Râvi | Enes b. Mâlik |
| Primary locator | collection_global = 2734a |
| Alternate locator | in_book = Book 48, Hadith 123; diyanet_hadislerle_islam = M6932 (provider=diyanet-hadislerle-islam) (note=Müslim, Zikir, 89) |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Müslim / Sahih Muslim 2734a |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/muslim:2734a); Dürer es-Seniyye (cross_check; https://dorar.net/h/dTzJEWh5?osoul=1); Diyanet Hadislerle İslâm (locator_cross_check; https://hadislerleislam.diyanet.gov.tr/) |
| Semantic relation | direct |
| Translation status | ai_draft |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Kulun yiyip içtikten sonra Allah’a hamdetmesinin Allah’ın hoşnutluğuna vesile olduğunu açıkça bildirir.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 6. Ölüm ve hayatın geçiciliği

| Alan | Değer |
| --- | --- |
| Hadith ID | olum-ve-hayatin-geciciligi-bukhari-6416 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 6416 |
| Râvi | Abdullah b. Ömer |
| Primary locator | collection_global = 6416 |
| Alternate locator | in_book = Book 81, Hadith 5 |
| Arabic text type | excerpt |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 6416 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:6416); Dürer es-Seniyye (cross_check; https://dorar.net/h/TTEZihxJ) |
| Semantic relation | direct |
| Translation status | ai_draft |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Dünyada bir garip veya yolcu gibi bulunma öğüdünü taşır. Dünya hayatının geçiciliği ve ölüme hazırlık açısından açık ilişkidir.

Audit notu:

- Yalnız Hz. Peygamber'e ait konu ilişkili bölüm excerpt'tır; İbn Ömer'in sonraki öğüdü matna katılmamıştır.

### 7. Kul hakkı

| Alan | Değer |
| --- | --- |
| Hadith ID | kul-hakki-bukhari-2449 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 2449 |
| Râvi | Ebû Hüreyre |
| Primary locator | collection_global = 2449 |
| Alternate locator | in_book = Book 46, Hadith 10 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 2449 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:2449); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/16324) |
| Semantic relation | direct |
| Translation status | ai_draft |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Bir kimsenin başka birinin şeref/onur veya başka bir hakkı konusunda haksızlığı varsa ahiretten önce helalleşmesini açıkça bildirir.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 8. Tövbe ve pişmanlık

| Alan | Değer |
| --- | --- |
| Hadith ID | tovbe-ve-pismanlik-bukhari-6309 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 6309 |
| Râvi | Enes b. Mâlik |
| Primary locator | collection_global = 6309 |
| Alternate locator | in_book = Book 80, Hadith 6 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 6309 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:6309); Dürer es-Seniyye (cross_check; https://dorar.net/h/rYW8INos?osoul=1) |
| Semantic relation | direct |
| Translation status | ai_draft |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Allah’ın kulunun tövbesine, çölde kaybettiği bineğini yeniden bulan kişinin sevincinden daha fazla hoşnut olduğunu bildiren rivayettir.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 9. Kardeşlik

| Alan | Değer |
| --- | --- |
| Hadith ID | kardeslik-bukhari-13 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 13 |
| Râvi | Enes b. Mâlik |
| Primary locator | collection_global = 13 |
| Alternate locator | in_book = Book 2, Hadith 6; diyanet_hadislerle_islam = B13 (provider=diyanet-hadislerle-islam) (note=Buhârî, Îmân, 7) |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 13 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:13); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/7317); Diyanet Hadislerle İslâm (locator_cross_check; https://hadislerleislam.diyanet.gov.tr/sayfa.php?CILT=3&SAYFA=351) |
| Semantic relation | direct |
| Translation status | ai_draft |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Kişinin kendisi için sevdiğini kardeşi için de sevmesini imanın gereği olarak açıkça bildirir.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 10. Namazın önemi ve manevî etkisi

| Alan | Değer |
| --- | --- |
| Hadith ID | namazin-onemi-ve-manevi-etkisi-bukhari-528 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 528 |
| Râvi | Ebû Hüreyre |
| Primary locator | collection_global = 528 |
| Alternate locator | in_book = Book 9, Hadith 7 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 528 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:528); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/112408) |
| Semantic relation | direct |
| Translation status | ai_draft |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Beş vakit namazı, kişinin kapısındaki nehirde günde beş defa yıkanmasına benzeterek günahların silinmesine vesile olduğunu açıkça bildirir.

Audit notu:

- Beş vakit namazın arındırıcı etkisi açıktır; başlıktaki manevî etki daha geniş sonuçlara taşınmamalıdır.

### 11. Ahiret ve hesap bilinci

| Alan | Değer |
| --- | --- |
| Hadith ID | ahiret-hesap-bukhari-6536 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 6536 |
| Râvi | Âişe |
| Primary locator | collection_global = 6536 |
| Alternate locator | in_book = Book 81, Hadith 125 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 6536 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:6536); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/7310) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Hesabın ayrıntılı biçimde sorgulanmasının ağır sonucunu ve kolay hesabın arz/sunum mahiyetini açıkça işler; canonical başlığın hesap bilinci yönünü doğrudan taşır.

Audit notu:

- Hadis hesabın arzı ile ayrıntılı sorgulama ayrımını taşır; geniş ahiret başlığının bütün alt konularını tek başına temsil etmez.

### 12. Güzel ahlak

| Alan | Değer |
| --- | --- |
| Hadith ID | guzel-ahlak-bukhari-3559 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 3559 |
| Râvi | Abdullah b. Amr b. Âs |
| Primary locator | collection_global = 3559 |
| Alternate locator | in_book = Book 61, Hadith 68 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 3559 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:3559); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/15952) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> İnsanların en hayırlılarının ahlâkı en güzel olanlar olduğunu açıkça bildirir ve topic için güçlü ana hadis adayıdır.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 13. Doğruluk ve dürüstlük

| Alan | Değer |
| --- | --- |
| Hadith ID | dogruluk-bukhari-6094 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 6094 |
| Râvi | Abdullah b. Mes’ûd |
| Primary locator | collection_global = 6094 |
| Alternate locator | in_book = Book 78, Hadith 121 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 6094 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:6094); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/151182) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Doğruluğun iyiliğe, iyiliğin cennete; yalanın ise fücura ve ateşe götürdüğünü açıkça bildirir.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 14. Gıybet ve dili korumak

| Alan | Değer |
| --- | --- |
| Hadith ID | giybet-muslim-2589 |
| Collection | Sahih Muslim |
| sourceReference | Sahih Muslim 2589 |
| Râvi | Ebû Hüreyre |
| Primary locator | collection_global = 2589 |
| Alternate locator | in_book = Book 45, Hadith 91 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Müslim / Sahih Muslim 2589 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/muslim:2589); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/127584) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Gıybeti kişinin kardeşini hoşlanmayacağı bir şeyle anması olarak doğrudan tarif eder ve söylenen şey onda yoksa bunun iftira olduğunu ayırır.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 15. Öfkeye hâkim olmak

| Alan | Değer |
| --- | --- |
| Hadith ID | ofke-bukhari-6114 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 6114 |
| Râvi | Ebû Hüreyre |
| Primary locator | collection_global = 6114 |
| Alternate locator | in_book = Book 78, Hadith 141 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 6114 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:6114); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/151201) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Gerçek güçlü kişinin başkalarını fiziksel olarak yenen değil, öfke anında kendisine hâkim olan kişi olduğunu açıkça bildirir.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 16. Affetmek ve bağışlamak

| Alan | Değer |
| --- | --- |
| Hadith ID | affetmek-muslim-2588 |
| Collection | Sahih Muslim |
| sourceReference | Sahih Muslim 2588 |
| Râvi | Ebû Hüreyre |
| Primary locator | collection_global = 2588 |
| Alternate locator | in_book = Book 45, Hadith 90 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Müslim / Sahih Muslim 2588 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/muslim:2588); Dürer es-Seniyye (cross_check; https://dorar.net/h/5ny4Eh57) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Bir kulun affetmesi sebebiyle Allah’ın onun izzetini artıracağını açıkça bildirir; bu topicte affetme bölümü ana ilişkidir.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 17. Merhamet

| Alan | Değer |
| --- | --- |
| Hadith ID | merhamet-bukhari-7376 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 7376 |
| Râvi | Cerîr b. Abdullah |
| Primary locator | collection_global = 7376 |
| Alternate locator | in_book = Book 97, Hadith 6 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 7376 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:7376); Dürer es-Seniyye (cross_check; https://dorar.net/h/bIOgfj61) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> İnsanlara merhamet etmeyen kimseye Allah’ın merhamet etmeyeceğini açıkça bildirir ve canonical merhamet başlığını doğrudan taşır.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 18. Kibir ve büyüklenme

| Alan | Değer |
| --- | --- |
| Hadith ID | kibir-muslim-91a |
| Collection | Sahih Muslim |
| sourceReference | Sahih Muslim 91a |
| Râvi | Abdullah b. Mes’ûd |
| Primary locator | collection_global = 91a |
| Alternate locator | in_book = Book 1, Hadith 171 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Müslim / Sahih Muslim 91a |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/muslim:91a); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/26243) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Kalbinde zerre miktarı kibir bulunan kimse hakkında ağır uyarı taşır ve kibri hakkı reddetmek ile insanları küçümsemek olarak tarif eder.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 19. Haset ve kıskançlık

| Alan | Değer |
| --- | --- |
| Hadith ID | haset-bukhari-6065 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 6065 |
| Râvi | Enes b. Mâlik |
| Primary locator | collection_global = 6065 |
| Alternate locator | in_book = Book 78, Hadith 95 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 6065 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:6065); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/13228) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Birbirine haset etmemeyi açıkça emreder; diğer unsurlarının yanında canonical haset topic’iyle direct ilişkisi açıktır.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 20. Emanet ve sorumluluk

| Alan | Değer |
| --- | --- |
| Hadith ID | emanet-sorumluluk-bukhari-7138 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 7138 |
| Râvi | Abdullah b. Ömer |
| Primary locator | collection_global = 7138 |
| Alternate locator | in_book = Book 93, Hadith 2 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 7138 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:7138); Dürer es-Seniyye (cross_check; https://dorar.net/h/FONlNFyr?sims=1) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Her insanın bir sorumluluk alanına sahip olduğunu ve bundan sorumlu tutulacağını yönetici, aile ve mal sorumluluğu örnekleriyle açıkça bildirir; bu ilk aday başlığın özellikle sorumluluk boyutunu temsil eder.

Audit notu:

- Rivayet başlığın sorumluluk boyutunu taşır; emanet kavramının bütün anlamlarını tek başına temsil etmez.

### 21. Yardımlaşma ve cömertlik

| Alan | Değer |
| --- | --- |
| Hadith ID | yardimlasma-muslim-2699a |
| Collection | Sahih Muslim |
| sourceReference | Sahih Muslim 2699a |
| Râvi | Ebû Hüreyre |
| Primary locator | collection_global = 2699a |
| Alternate locator | in_book = Book 48, Hadith 48 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Müslim / Sahih Muslim 2699a |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/muslim:2699a); Dürer es-Seniyye (cross_check; https://dorar.net/h/vjqUF01B?osoul=1) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Müminin sıkıntısını gidermeyi, darda kalana kolaylık göstermeyi ve kardeşine yardım eden kula Allah’ın yardımını açıkça bildirir; bu ilk aday başlığın özellikle yardımlaşma boyutunu temsil eder.

Audit notu:

- Rivayet yardımlaşma boyutunu taşır; cömertlik/infak ayrı destek gerektirebilir ve tam matn başka temalar da içerir.

### 22. Ailede sevgi, huzur ve merhamet

| Alan | Değer |
| --- | --- |
| Hadith ID | aile-huzuru-muslim-1468b |
| Collection | Sahih Muslim |
| sourceReference | Sahih Muslim 1468b |
| Râvi | Ebû Hüreyre |
| Primary locator | collection_global = 1468b |
| Alternate locator | in_book = Book 17, Hadith 81 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Müslim / Sahih Muslim 1468b |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/muslim:1468b); Dürer es-Seniyye (cross_check; https://dorar.net/h/6tM9JzDS?osoul=1) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Mümin erkeğin mümin eşine bütünüyle nefret beslememesini, bir huyundan hoşlanmasa başka bir huyundan hoşnut olabileceğini bildirerek eşler arası denge ve aile huzurunu doğrudan destekler.

Audit notu:

- Hadis eşler arası denge ve olumlu tarafı görebilme boyutundadır; aile başlığının bütün boyutlarını temsil etmez.

### 23. Çocuk terbiyesi ve ebeveyn sorumluluğu

| Alan | Değer |
| --- | --- |
| Hadith ID | cocuk-terbiyesi-abu-dawud-495 |
| Collection | Sunan Abi Dawud |
| sourceReference | Sunan Abi Dawud 495 |
| Râvi | Abdullah b. Amr b. Âs |
| Primary locator | collection_global = 495 |
| Alternate locator | in_book = Book 2, Hadith 105 |
| Arabic text type | full_matn |
| Grading | hasen |
| Grading source | Nevevî / Hulâsatü'l-Ahkâm 1/252 |
| Grading note | Nevevî’nin lafzı hadis metnine değil isnada ilişkindir: ‘İsnadı hasendir’ (إسناده حسن). |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/abudawud:495); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/71032) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Çocuklara küçük yaştan itibaren namazın öğretilmesi ve yataklarının ayrılması üzerinden ebeveynin dinî eğitim sorumluluğunu doğrudan taşır.

Audit notu:

- Ebeveynin dinî eğitim sorumluluğu direct'tir; Nevevî grading'i yalnız 'isnadı hasendir' kapsamındadır ve genişletilmemelidir.

### 24. Sıla-i rahim ve akrabalık bağları

| Alan | Değer |
| --- | --- |
| Hadith ID | sila-i-rahim-bukhari-5991 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 5991 |
| Râvi | Abdullah b. Amr |
| Primary locator | collection_global = 5991 |
| Alternate locator | in_book = Book 78, Hadith 22 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 5991 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:5991); Dürer es-Seniyye (cross_check; https://dorar.net/h/UsKe7w2o?osoul=1) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Gerçek sıla-i rahmin yalnız iyiliğe karşılık vermek olmadığını, akrabalık bağı kesildiğinde dahi ilişkiyi sürdürmeyi açıkça bildirir.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 25. Komşuluk

| Alan | Değer |
| --- | --- |
| Hadith ID | komsuluk-bukhari-6016 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 6016 |
| Râvi | Ebû Şüreyh |
| Primary locator | collection_global = 6016 |
| Alternate locator | in_book = Book 78, Hadith 47 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 6016 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:6016); Dürer es-Seniyye (cross_check; https://dorar.net/h/7PpsXKcJ) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Komşusunun kötülüğünden emin olmadığı kimse hakkında ağır bir uyarı taşıyarak komşunun güvenliği ve komşuya zarar vermeme ilkesini doğrudan temsil eder.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 26. Haber ve iletişim ahlakı

| Alan | Değer |
| --- | --- |
| Hadith ID | haber-iletisim-bukhari-6475 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 6475 |
| Râvi | Ebû Hüreyre |
| Primary locator | collection_global = 6475 |
| Alternate locator | in_book = Book 81, Hadith 64 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 6475 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:6475); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/4363) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Allah’a ve ahiret gününe iman eden kişinin hayır söylemesini veya susmasını açıkça emreder; canonical topic açısından ana ilişki söz ve iletişim ahlâkıdır.

Audit notu:

- Genel söz ahlâkını taşır; modern internet/sosyal medya metni değildir ve tam matn başka temalar da içerir.

### 27. Gençlik ve doğru duruş

| Alan | Değer |
| --- | --- |
| Hadith ID | genclik-bukhari-660 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 660 |
| Râvi | Ebû Hüreyre |
| Primary locator | collection_global = 660 |
| Alternate locator | in_book = Book 10, Hadith 54 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 660 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:660); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/6991) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Allah’ın gölgesinde gölgelenecek yedi sınıftan biri olarak Allah’a ibadet içinde yetişen genci açıkça zikreder ve gençlik ile sağlam dinî duruş çekirdeğini doğrudan taşır.

Audit notu:

- Gençlik ilişkisi yedi sınıftan Allah'a ibadet içinde yetişen genç unsuruna dayanır; tam matnın diğer unsurları korunur.

### 28. Ümit ve ümitsizliğe kapılmamak

| Alan | Değer |
| --- | --- |
| Hadith ID | umit-muslim-2877a |
| Collection | Sahih Muslim |
| sourceReference | Sahih Muslim 2877a |
| Râvi | Câbir b. Abdullah |
| Primary locator | collection_global = 2877a |
| Alternate locator | in_book = Book 53, Hadith 98 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Müslim / Sahih Muslim 2877a |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/muslim:2877a); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/152064) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Kişinin Allah hakkında hüsnüzan üzere ölmesini açıkça emrederek Allah’tan iyilik umma ve ümit başlığını doğrudan taşır.

Audit notu:

- Özellikle ölüm anında Allah hakkında hüsnüzan bağlamındadır; sınırsız iyimserlik şeklinde genişletilmemelidir.

### 29. İsraf ve ölçülü yaşamak

| Alan | Değer |
| --- | --- |
| Hadith ID | israf-tirmidhi-2380 |
| Collection | Jami at-Tirmidhi |
| sourceReference | Jami at-Tirmidhi 2380 |
| Râvi | Mikdâm b. Ma‘dîkerib |
| Primary locator | collection_global = 2380 |
| Alternate locator | in_book = Book 36, Hadith 77 |
| Arabic text type | full_matn |
| Grading | hasan_sahih |
| Grading source | Tirmizî / Jami at-Tirmidhi 2380 |
| Grading note | Tirmizî’nin hadis hakkındaki kendi lafzı: ‘Bu hadis hasen sahihtir’ (هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ). |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/tirmidhi:2380); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/36016) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Midenin gereğinden fazla doldurulmamasını, yeterli miktarla yetinmeyi ve gerektiğinde yemek, içecek ve nefes için ölçü gözetmeyi bildirerek ölçülü tüketim boyutunu doğrudan temsil eder.

Audit notu:

- Ölçülü yaşamanın yeme/içme boyutunu taşır; Tirmizî'nin hasen sahih hükmü Prophetic matndan ayrıdır.

### 30. Adalet

| Alan | Değer |
| --- | --- |
| Hadith ID | adalet-muslim-1827 |
| Collection | Sahih Muslim |
| sourceReference | Sahih Muslim 1827 |
| Râvi | Abdullah b. Amr |
| Primary locator | collection_global = 1827 |
| Alternate locator | in_book = Book 33, Hadith 21 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Müslim / Sahih Muslim 1827 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/muslim:1827); Dürer es-Seniyye (cross_check; https://dorar.net/h/uAnC2Wo9) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Adaletli davrananları över ve onların hükümlerinde, ailelerine karşı ve sorumluluk alanlarında adaletli olduklarını açıkça bildirir.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 31. Kur’an’la yaşamak ve öğüt almak

| Alan | Değer |
| --- | --- |
| Hadith ID | kuranla-yasamak-bukhari-5027 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 5027 |
| Râvi | Osman b. Affân |
| Primary locator | collection_global = 5027 |
| Alternate locator | in_book = Book 66, Hadith 49 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 5027 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:5027); Dürer es-Seniyye (cross_check; https://dorar.net/h/5vS5H0V8?osoul=1) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Kur’an’ı öğrenen ve öğretenlerin en hayırlı kimseler olduğunu bildirerek Kur’an’la güçlü bağ kurma, öğrenme ve başkasına aktarma boyutunu doğrudan temsil eder; başlığın bütün boyutları bu tek rivayete yüklenmez.

Audit notu:

- Kur'an'ı öğrenme ve öğretme boyutunu taşır; başlığın bütün Kur'an'la yaşamak sonuçları bu tek lafza yüklenmemelidir.

### 32. İlim öğrenmek ve bilginin değeri

| Alan | Değer |
| --- | --- |
| Hadith ID | ilim-bukhari-71 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 71 |
| Râvi | Muâviye b. Ebû Süfyân |
| Primary locator | collection_global = 71 |
| Alternate locator | in_book = Book 3, Hadith 13 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 71 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:71); Dürer es-Seniyye (cross_check; https://dorar.net/h/niFWqQWq) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Allah’ın hakkında hayır dilediği kişiye dinde derin anlayış verdiğini bildirerek ilim ve dinî anlayışın değerini doğrudan taşır.

Audit notu:

- Özellikle dinde anlayış/tefakkuh eksenindedir; bütün bilim dallarının doğrudan delili gibi genişletilmemelidir.

### 33. Vakit ve ömrü değerlendirmek

| Alan | Değer |
| --- | --- |
| Hadith ID | vakit-bukhari-6412 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 6412 |
| Râvi | Abdullah b. Abbâs |
| Primary locator | collection_global = 6412 |
| Alternate locator | in_book = Book 81, Hadith 1 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 6412 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:6412); Dürer es-Seniyye (cross_check; https://dorar.net/hadith-category/cat/182391d682c597cc17a36135efcc8347?all=&new=&page=2) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> İnsanların çoğunun değerini yeterince bilmediği sağlık ve boş vakit nimetlerini açıkça bildirerek canonical başlığın vakti değerlendirme boyutunu doğrudan taşır.

Audit notu:

- Hadis sağlık ve boş vakit nimetlerini taşır; ömür kullanıcı dostu daha geniş çerçevedir.

### 34. Gayret ve emeğin değeri

| Alan | Değer |
| --- | --- |
| Hadith ID | gayret-muslim-2664 |
| Collection | Sahih Muslim |
| sourceReference | Sahih Muslim 2664 |
| Râvi | Ebû Hüreyre |
| Primary locator | collection_global = 2664 |
| Alternate locator | in_book = Book 46, Hadith 52 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Müslim / Sahih Muslim 2664 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/muslim:2664); Dürer es-Seniyye (cross_check; https://dorar.net/h/ptrTn9PP) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Güçlü müminin faziletini, kişiye fayda verene gayret göstermeyi, Allah’tan yardım istemeyi ve acizliğe teslim olmamayı bildirerek gayret ve çaba boyutunu doğrudan taşır.

Audit notu:

- Faydalı olana gayret, Allah'tan yardım ve acizliğe teslim olmama eksenindedir; modern çalışma ekonomisi hadisi değildir.

### 35. Vefa ve sözünde durmak

| Alan | Değer |
| --- | --- |
| Hadith ID | vefa-bukhari-34 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 34 |
| Râvi | Abdullah b. Amr b. Âs |
| Primary locator | collection_global = 34 |
| Alternate locator | in_book = Book 2, Hadith 27 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 34 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:34); Dürer es-Seniyye (cross_check; https://dorar.net/h/8wetNc3N?osoul=1) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Nifak alametleri arasında ahit yaptığında ahdine ihanet etmeyi açıkça zikrederek ahde vefa ve sözünde durma başlığını doğrudan destekler.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 36. Mahremiyet ve özel hayata saygı

| Alan | Değer |
| --- | --- |
| Hadith ID | mahremiyet-bukhari-6241 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 6241 |
| Râvi | Sehl b. Sa‘d |
| Primary locator | collection_global = 6241 |
| Alternate locator | in_book = Book 79, Hadith 15 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 6241 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:6241); Dürer es-Seniyye (cross_check; https://dorar.net/h/dMhkKBHg?osoul=1) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> İzinsiz biçimde evin içine bakılması olayı üzerinden izin istemenin bakış sebebiyle konulduğunu bildirerek özel alana ve ev mahremiyetine saygıyı doğrudan destekler.

Audit notu:

- Ev ve bakış mahremiyetini taşır; dijital gizlilik veya veri koruma mevzuatının ayrıntılı kaynağı değildir.

### 37. Suizan ve zanlardan sakınmak

| Alan | Değer |
| --- | --- |
| Hadith ID | suizan-bukhari-6064 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 6064 |
| Râvi | Ebû Hüreyre |
| Primary locator | collection_global = 6064 |
| Alternate locator | in_book = Book 78, Hadith 94 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 6064 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:6064); Dürer es-Seniyye (cross_check; https://dorar.net/h/a65iKv93?osoul=1) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Zandan sakınmayı açıkça emreder ve zannın sözün en yalanı olduğunu bildirir; canonical suizan başlığıyla doğrudan ilişkilidir.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 38. İftira ve asılsız söz

| Alan | Değer |
| --- | --- |
| Hadith ID | iftira-bukhari-2654 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 2654 |
| Râvi | Ebû Bekre |
| Primary locator | collection_global = 2654 |
| Alternate locator | in_book = Book 52, Hadith 18 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 2654 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:2654); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/2991) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Büyük günahlar arasında yalan ve asılsız söz konusunda güçlü, tekrarlı bir uyarı taşıyarak canonical topic’in asılsız söz boyutunu doğrudan temsil eder.

Audit notu:

- Yalan/asılsız söz ve yalancı şahitlik boyutunu taşır; iftiranın bütün teknik biçimlerinin tanımı değildir.

### 39. Alay, küçümseme ve kötü lakap

| Alan | Değer |
| --- | --- |
| Hadith ID | alay-kucumseme-muslim-2564a |
| Collection | Sahih Muslim |
| sourceReference | Sahih Muslim 2564a |
| Râvi | Ebû Hüreyre |
| Primary locator | collection_global = 2564a |
| Alternate locator | in_book = Book 45, Hadith 40 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Müslim / Sahih Muslim 2564a |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/muslim:2564a); Dürer es-Seniyye (cross_check; https://dorar.net/h/VMwfh7m3?osoul=1) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Müslüman kardeşini küçümsememeyi ve bir kimsenin kardeşini küçümsemesinin ona kötülük olarak yeteceğini bildirerek canonical topic’in küçümseme boyutunu doğrudan temsil eder.

Audit notu:

- Küçümseme direct'tir; açık alay ve kötü lakap lafızları bu hadiste yoktur, tam matn başka temalar da içerir.

### 40. Dostluk ve arkadaş seçimi

| Alan | Değer |
| --- | --- |
| Hadith ID | dostluk-bukhari-5534 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 5534 |
| Râvi | Ebû Mûsâ el-Eş‘arî |
| Primary locator | collection_global = 5534 |
| Alternate locator | in_book = Book 72, Hadith 59 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 5534 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:5534); Dürer es-Seniyye (cross_check; https://dorar.net/h/k5Apq046?osoul=1) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> İyi ve kötü arkadaşın etkisini misk taşıyan ve körük üfleyen kişi benzetmeleriyle anlatarak arkadaş seçiminin fayda ve zarar boyutunu doğrudan taşır.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 41. İnsanların arasını düzeltmek

| Alan | Değer |
| --- | --- |
| Hadith ID | insanlarin-arasini-duzeltmek-bukhari-2692 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 2692 |
| Râvi | Ümmü Külsûm bint Ukbe |
| Primary locator | collection_global = 2692 |
| Alternate locator | in_book = Book 53, Hadith 3 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 2692 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:2692); Dürer es-Seniyye (cross_check; https://dorar.net/h/BhU2Hklq?osoul=1) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> İnsanların arasını düzelten ve bu amaçla hayırlı söz aktaran kimseyi açıkça işleyerek canonical topic ile doğrudan ilişki kurar.

Audit notu:

- Arayı düzeltme ilişkisi açıktır; sulh amacıyla sınırsız yalan serbesttir şeklinde genişletilmemelidir.

### 42. Kötülüğe iyilikle karşılık vermek

| Alan | Değer |
| --- | --- |
| Hadith ID | kotuluge-iyilikle-karsilik-vermek-muslim-2558a |
| Collection | Sahih Muslim |
| sourceReference | Sahih Muslim 2558a |
| Râvi | Ebû Hüreyre |
| Primary locator | collection_global = 2558a |
| Alternate locator | in_book = Book 45, Hadith 25 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Müslim / Sahih Muslim 2558a |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/muslim:2558a); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/78395) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Akrabaları bağı kestiği hâlde bağı sürdürme, onlar kötülük ettiği hâlde iyilik etme ve kaba davrandıkları hâlde hilm gösterme tutumunu işleyerek kötülüğe iyilikle karşılık verme başlığını doğrudan taşır.

Audit notu:

- Kötülüğe iyilikle karşılık ilişkisi akrabaların bağı kesmesi ve kötü davranmasına rağmen ilişkiyi sürdürme bağlamındadır.

### 43. İyilik ve ihsan

| Alan | Değer |
| --- | --- |
| Hadith ID | iyilik-ve-ihsan-muslim-1955a |
| Collection | Sahih Muslim |
| sourceReference | Sahih Muslim 1955a |
| Râvi | Şeddâd b. Evs |
| Primary locator | collection_global = 1955a |
| Alternate locator | in_book = Book 34, Hadith 84 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Müslim / Sahih Muslim 1955a |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/muslim:1955a); Dürer es-Seniyye (cross_check; https://dorar.net/h/zJB1WCUU?sims=1) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Allah’ın her şeyde ihsanı emrettiğini açıkça bildirerek canonical iyilik ve ihsan başlığını doğrudan taşır.

Audit notu:

- İlk cümle genel ihsan ilkesini taşır; uygulama bağlamı öldürme ve hayvan kesiminde ihsandır.

### 44. Yetimlere karşı sorumluluk

| Alan | Değer |
| --- | --- |
| Hadith ID | yetimlere-karsi-sorumluluk-bukhari-6005 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 6005 |
| Râvi | Sehl b. Sa‘d |
| Primary locator | collection_global = 6005 |
| Alternate locator | in_book = Book 78, Hadith 36 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 6005 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:6005); Dürer es-Seniyye (cross_check; https://dorar.net/h/OwbDID6D) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Yetime kefil olan ve bakımını üstlenen kişinin faziletini açıkça bildirerek yetimlere karşı sorumluluk başlığını doğrudan taşır.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 45. Riya ve gösterişten sakınmak

| Alan | Değer |
| --- | --- |
| Hadith ID | riya-ve-gosteristen-sakinmak-bukhari-6499 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 6499 |
| Râvi | Cündeb |
| Primary locator | collection_global = 6499 |
| Alternate locator | in_book = Book 81, Hadith 88 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 6499 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:6499); Dürer es-Seniyye (cross_check; https://dorar.net/h/ZsAK0GOF) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> İnsanların duyması veya görmesi için amel etme ve gösteriş tutumunu açıkça işleyerek riya başlığını doğrudan taşır.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 46. İffet ve haya

| Alan | Değer |
| --- | --- |
| Hadith ID | iffet-ve-haya-bukhari-6117 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 6117 |
| Râvi | İmrân b. Husayn |
| Primary locator | collection_global = 6117 |
| Alternate locator | in_book = Book 78, Hadith 144 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 6117 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:6117); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/151155) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Hayânın yalnız hayır getirdiğini açıkça bildirerek canonical başlığın haya boyutunu doğrudan temsil eder.

Audit notu:

- Hadis başlığın haya boyutunu taşır; iffet boyutunu tek başına temsil etmez.

### 47. İnsan onuru ve saygınlığı

| Alan | Değer |
| --- | --- |
| Hadith ID | insan-onuru-ve-sayginligi-bukhari-1739 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 1739 |
| Râvi | Abdullah b. Abbâs |
| Primary locator | collection_global = 1739 |
| Alternate locator | in_book = Book 25, Hadith 217 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 1739 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:1739); Dürer es-Seniyye (cross_check; https://dorar.net/h/uF0nLC00?osoul=1) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Veda hutbesi bağlamında can, mal ve ırzın dokunulmazlığını bildirerek insan onuru ve saygınlığı başlığını doğrudan taşır.

Audit notu:

- Can, mal ve onur dokunulmazlığı direct'tir; modern insan hakları hukukunun bütün maddeleri bu rivayete yüklenmemelidir.

### 48. Yumuşak söz ve güzel konuşmak

| Alan | Değer |
| --- | --- |
| Hadith ID | yumusak-soz-ve-guzel-konusmak-bukhari-2989 |
| Collection | Sahih al-Bukhari |
| sourceReference | Sahih al-Bukhari 2989 |
| Râvi | Ebû Hüreyre |
| Primary locator | collection_global = 2989 |
| Alternate locator | in_book = Book 56, Hadith 198 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Buhârî / Sahih al-Bukhari 2989 |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/bukhari:2989); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/133053) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Güzel sözün sadaka olduğunu açıkça bildirerek canonical başlığın güzel konuşmak ve güzel söz boyutunu doğrudan taşır.

Audit notu:

- Hadis güzel söz boyutunu taşır; yumuşaklık/rifk boyutunu tek başına temsil etmez ve tam matn başka temalar içerir.

### 49. Haksızlık ve zulümden sakınmak

| Alan | Değer |
| --- | --- |
| Hadith ID | haksizlik-ve-zulumden-sakinmak-muslim-2577a |
| Collection | Sahih Muslim |
| sourceReference | Sahih Muslim 2577a |
| Râvi | Ebû Zer |
| Primary locator | collection_global = 2577a |
| Alternate locator | in_book = Book 45, Hadith 70 |
| Arabic text type | full_matn |
| Grading | sahih |
| Grading source | Müslim / Sahih Muslim 2577a |
| Grading note | Yok |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/muslim:2577a); Dürer es-Seniyye (cross_check; https://dorar.net/hadith/sharh/63223) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS** |

Topic relation rationale:

> Zulmün haram kılındığını ve kulların birbirlerine zulmetmemesini açıkça bildiren hadis-i kudsî olarak canonical başlığı doğrudan taşır.

Audit notu:

- Kaynak, locator, râvi, matn sınırı, grading kaynağı ve topic ilişkisi tutarlı.

### 50. Nefis muhasebesi ve kendini düzeltmek

| Alan | Değer |
| --- | --- |
| Hadith ID | nefis-muhasebesi-tirmidhi-2406 |
| Collection | Jami at-Tirmidhi |
| sourceReference | Jami at-Tirmidhi 2406 |
| Râvi | Ukbe b. Âmir |
| Primary locator | collection_global = 2406 |
| Alternate locator | in_book = Book 36, Hadith 104 |
| Arabic text type | full_matn |
| Grading | hasen |
| Grading source | Tirmizî / Jami at-Tirmidhi 2406 |
| Grading note | Tirmizî’nin kendi lafzı ‘bu hadis hasendir’ (هَذَا حَدِيثٌ حَسَنٌ) şeklindedir. Bazı çağdaş grading sistemleri rivayeti zayıf değerlendirmiştir; canonical kayıt Tirmizî’nin kendi eserindeki açık hükmü, otoritesini belirterek aktarır ve grading ihtilafını yok saymaz. |
| Verification | reference_verified |
| Provenance providers | Sunnah.com (text_and_locator_verification; https://sunnah.com/tirmidhi:2406); Dürer es-Seniyye (cross_check; https://dorar.net/h/ZVMx3QV3) |
| Semantic relation | direct |
| Translation status | missing |
| publicReady | false |
| Audit kararı | **PASS WITH NOTE** |

Topic relation rationale:

> Dili tutma, evin kişiye yetmesi ve kendi hatasına ağlama öğüdüyle kişinin kendi durumunu sorgulaması ve kendini düzeltmesi başlığını doğrudan destekler.

Audit notu:

- Nefis muhasebesi şemsiye başlıktır; Tirmizî'nin hasen hükmü ile çağdaş zayıf değerlendirme ihtilafı birlikte görünür kalmalıdır.

## Nihai sonuç

50/50 primary hadis tek tek ve katalog düzeyinde denetlendi. REVIEW bulunmadı. **Primary Hadith V1 reference baseline is audit-clean.**

Audit sırasında canonical HadithReference verisi, tercümeler, sürüm metadata'sı, testler ve UI değiştirilmedi.

