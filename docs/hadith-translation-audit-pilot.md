# Hadis Türkçe Tercüme Pilot Denetimi

Bu dosya yalnız insan ve ilmî incelemeyi kolaylaştıran bir denetim raporudur. Source-of-truth değildir. Arapça matnlar ve Türkçe çalışma tercümeleri `data/hadith-references.ts` dosyasından değiştirilmeden aktarılmıştır.

Statüler:

- **OK:** Mevcut taslakta incelenen Arapça unsurlar görünür durumdadır.
- **CHECK:** Metin değiştirilmeden insan/ilmî incelemeye bırakılan bir kapsam veya sunum noktası vardır.
- **POTENTIAL ISSUE:** İnsan incelemesinde özellikle ele alınması gereken muhtemel anlam sorunudur.

Bu statüler tercümenin doğrulandığı veya yayıma hazır olduğu anlamına gelmez.

## 1. Sabır — Buhârî 1469

### Topic

Sabır

### Asıl kaynak

Sahih al-Bukhari 1469

### Râvi

Ebû Saîd el-Hudrî

### Arabic text type

`excerpt`

### Doğrulanmış Arapça matn

```text
وَمَنْ يَتَصَبَّرْ يُصَبِّرْهُ اللَّهُ، وَمَا أُعْطِيَ أَحَدٌ عَطَاءً خَيْرًا وَأَوْسَعَ مِنَ الصَّبْرِ
```

### Mevcut Türkçe AI taslak tercüme

```text
Kim sabretmeye çalışırsa Allah ona sabır verir. Hiç kimseye sabırdan daha hayırlı ve daha geniş bir bağış verilmemiştir.
```

### Translation status

`ai_draft`

### Translation method

`ai_from_verified_arabic`

### Translation notes

```text
Bu tercüme hadisin tamamına değil, topic ile ilgili doğrulanmış matn bölümüne aittir.
```

### Human review

Yok

### Translation verified

Hayır

### Teknik karşılaştırma

| Arapça ifade | Mevcut Türkçe taslakta karşılığı |
| ------------ | -------------------------------- |
| `وَمَنْ يَتَصَبَّرْ` | “Kim sabretmeye çalışırsa” |
| `يُصَبِّرْهُ اللَّهُ` | “Allah ona sabır verir.” |
| `وَمَا أُعْطِيَ أَحَدٌ عَطَاءً` | “Hiç kimseye ... bir bağış verilmemiştir.” |
| `خَيْرًا وَأَوْسَعَ مِنَ الصَّبْرِ` | “sabırdan daha hayırlı ve daha geniş” |

### Kontrol sonucu

**CHECK**

- **OK:** `يتصبر`, `يصبره الله` ve `خيرًا وأوسع من الصبر` unsurlarının mevcut taslakta görünür karşılıkları vardır.
- **CHECK:** Kayıt bir `excerpt`tır. Türkçe taslak yalnız bu doğrulanmış bölüme aittir; tam hadis gibi algılanma riski vardır. Mevcut `translationNotes` bu sınırı açıkça kaydetmektedir.
- Arapçada bulunup Türkçe taslakta görünmeyen belirgin bir unsur bu denetimde işaretlenmedi.
- Türkçe taslakta Arapçada açık karşılığı olmayan belirgin bir açıklama bu denetimde işaretlenmedi.

## 2. Anne-babaya iyilik — Buhârî 5971

### Topic

Anne-babaya iyilik

### Asıl kaynak

Sahih al-Bukhari 5971

### Râvi

Ebû Hüreyre

### Arabic text type

`full_matn`

### Doğrulanmış Arapça matn

```text
جَاءَ رَجُلٌ إِلَى رَسُولِ اللَّهِ صلى الله عليه وسلم فَقَالَ يَا رَسُولَ اللَّهِ مَنْ أَحَقُّ بِحُسْنِ صَحَابَتِي قَالَ أُمُّكَ قَالَ ثُمَّ مَنْ قَالَ أُمُّكَ قَالَ ثُمَّ مَنْ قَالَ أُمُّكَ قَالَ ثُمَّ مَنْ قَالَ ثُمَّ أَبُوكَ
```

### Mevcut Türkçe AI taslak tercüme

```text
Bir adam Allah Resûlü’ne gelerek, ‘Ey Allah’ın Resûlü! Kendisine güzel davranmama en çok kim hak sahibidir?’ diye sordu. O, ‘Annen.’ buyurdu. Adam, ‘Sonra kim?’ dedi. O, ‘Annen.’ buyurdu. Adam, ‘Sonra kim?’ dedi. O, ‘Annen.’ buyurdu. Adam, ‘Sonra kim?’ dedi. O da, ‘Sonra baban.’ buyurdu.
```

### Translation status

`ai_draft`

### Translation method

`ai_from_verified_arabic`

### Translation notes

Yok

### Human review

Yok

### Translation verified

Hayır

### Teknik karşılaştırma

| Arapça ifade | Mevcut Türkçe taslakta karşılığı |
| ------------ | -------------------------------- |
| `جَاءَ رَجُلٌ إِلَى رَسُولِ اللَّهِ صلى الله عليه وسلم` | “Bir adam Allah Resûlü’ne gelerek” |
| `يَا رَسُولَ اللَّهِ مَنْ أَحَقُّ بِحُسْنِ صَحَابَتِي` | “Ey Allah’ın Resûlü! Kendisine güzel davranmama en çok kim hak sahibidir?” |
| `قَالَ أُمُّكَ` — birinci tekrar | “O, ‘Annen.’ buyurdu.” |
| `قَالَ ثُمَّ مَنْ` — birinci tekrar | “Adam, ‘Sonra kim?’ dedi.” |
| `قَالَ أُمُّكَ` — ikinci tekrar | “O, ‘Annen.’ buyurdu.” |
| `قَالَ ثُمَّ مَنْ` — ikinci tekrar | “Adam, ‘Sonra kim?’ dedi.” |
| `قَالَ أُمُّكَ` — üçüncü tekrar | “O, ‘Annen.’ buyurdu.” |
| `قَالَ ثُمَّ مَنْ` — üçüncü tekrar | “Adam, ‘Sonra kim?’ dedi.” |
| `قَالَ ثُمَّ أَبُوكَ` | “O da, ‘Sonra baban.’ buyurdu.” |

### Kontrol sonucu

**CHECK**

- **OK:** `أمك` cevabının üç tekrarı mevcut Türkçe taslakta üç defa korunmuştur.
- **OK:** `ثم أبوك` ayrı son cevap olarak görünmektedir.
- **CHECK:** `من أحق بحسن صحابتي` ifadesindeki `حسن صحابتي` mevcut taslakta “kendisine güzel davranmama” olarak yer almaktadır. İfadenin eşlik/sohbet ve iyi muamele kapsamının daralıp daralmadığı insan ve ilmî incelemeye bırakılmıştır; bu raporda metin değiştirilmemiştir.
- **CHECK:** Türkçe taslaktaki tekrarlanan “Adam” ve “O” özne etiketleri, Arapça `قال` fiillerindeki bağlamsal özneleri açıklaştırmaktadır. Bunların anlam genişletmesi oluşturup oluşturmadığı insan incelemesine bırakılmıştır.

## 3. Kardeşlik — Buhârî 13

### Topic

Kardeşlik

### Asıl kaynak

Sahih al-Bukhari 13

### Râvi

Enes b. Mâlik

### Arabic text type

`full_matn`

### Doğrulanmış Arapça matn

```text
لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ
```

### Mevcut Türkçe AI taslak tercüme

```text
Hiçbiriniz, kendisi için sevdiğini kardeşi için de sevmedikçe iman etmiş olmaz.
```

### Translation status

`ai_draft`

### Translation method

`ai_from_verified_arabic`

### Translation notes

Yok

### Human review

Yok

### Translation verified

Hayır

### Teknik karşılaştırma

| Arapça ifade | Mevcut Türkçe taslakta karşılığı |
| ------------ | -------------------------------- |
| `لَا يُؤْمِنُ أَحَدُكُمْ` | “Hiçbiriniz ... iman etmiş olmaz.” |
| `حَتَّى يُحِبَّ لِأَخِيهِ` | “kardeşi için de sevmedikçe” |
| `مَا يُحِبُّ لِنَفْسِهِ` | “kendisi için sevdiğini” |

### Kontrol sonucu

**OK**

- **OK:** `لا يؤمن أحدكم`, `حتى يحب لأخيه` ve `ما يحب لنفسه` unsurlarının tamamı mevcut Türkçe taslakta görünmektedir.
- **OK:** Arapça şart/sınır yapısı Türkçe taslakta `-medikçe` yapısıyla görünür durumdadır.
- `لا يؤمن أحدكم` ifadesine ilişkin itikadî şerh bu tercüme denetiminin dışındadır ve rapora eklenmemiştir.
- Arapçada olup Türkçe taslakta görünmeyen veya Türkçede olup Arapçada açık karşılığı olmayan belirgin bir unsur bu denetimde işaretlenmedi.

## Nihai teknik durum

- Denetlenen hadis: 3
- `translationStatus = ai_draft`: 3
- `translationStatus = missing`: 7
- `translationStatus = human_reviewed`: 0
- `translationStatus = verified`: 0
- `verificationStatus = fully_verified`: 0
- `publicReady`: 0
- Canonical hadis verisi değişikliği: 0
- Canonical Kur’an verisi değişikliği: 0
- UI değişikliği: 0

Bu rapor herhangi bir tercümeyi düzeltmez, doğrulamaz veya final hale getirmez. Bütün bulgular insan ve ilmî inceleme içindir.

## Translation Audit Resolution

Bu bölüm ilk denetim bulgularını silmez veya geriye dönük olarak değiştirmez. İnsan değerlendirmesi sonucunda alınan kararları ve uygulanan sınırlı `ai_draft` revizyonunu kaydeder.

### Sabır — Buhârî 1469

- Final audit decision: **OK**
- Data change: **no**
- `arabicTextType = excerpt` korunmuştur.
- Tercümenin hadisin tamamına değil, doğrulanmış ilgili matn bölümüne ait olduğunu belirten sunum notu korunmuştur.

### Anne-babaya iyilik — Buhârî 5971

- Final audit decision: **AI_DRAFT_REVISED**
- Reason: `حسن صحابتي` / `صحبة` nüansını Türkçe çalışma tercümesinde görünür kılmak.
- Önceki `ai_draft` tercüme:

  ```text
  Bir adam Allah Resûlü’ne gelerek, ‘Ey Allah’ın Resûlü! Kendisine güzel davranmama en çok kim hak sahibidir?’ diye sordu. O, ‘Annen.’ buyurdu. Adam, ‘Sonra kim?’ dedi. O, ‘Annen.’ buyurdu. Adam, ‘Sonra kim?’ dedi. O, ‘Annen.’ buyurdu. Adam, ‘Sonra kim?’ dedi. O da, ‘Sonra baban.’ buyurdu.
  ```

- Revize `ai_draft` tercüme:

  ```text
  Bir adam Allah Resûlü’ne gelerek, ‘Ey Allah’ın Resûlü! İyi muamele ve güzel refakatime en çok kim hak sahibidir?’ diye sordu. O, ‘Annen.’ buyurdu. Adam, ‘Sonra kim?’ dedi. O, ‘Annen.’ buyurdu. Adam, ‘Sonra kim?’ dedi. O, ‘Annen.’ buyurdu. Adam, ‘Sonra kim?’ dedi. O da, ‘Sonra baban.’ buyurdu.
  ```

- Translation status remains: `ai_draft`
- İnsan incelemesi veya final tercüme doğrulaması yapılmış sayılmaz.

### Kardeşlik — Buhârî 13

- Final audit decision: **OK**
- Data change: **no**
- `لا يؤمن` ifadesine ilişkin itikadî açıklama bilerek tercümenin dışında tutulmuştur; şerh ayrı içerik katmanında ele alınacaktır.

### Resolution sonrası durum

- Toplam hadis: 10
- `verificationStatus = reference_verified`: 10
- `verificationStatus = fully_verified`: 0
- `translationStatus = ai_draft`: 3
- `translationStatus = missing`: 7
- `translationStatus = human_reviewed`: 0
- `translationStatus = verified`: 0
- `publicReady`: 0 / 10
- UI değişikliği: 0
- Canonical Kur’an verisi değişikliği: 0

## Remaining Seven Translation Audit

Bu bölüm kalan yedi `ai_draft` tercümenin teknik/Arapça-Türkçe karşılaştırma kaydıdır. Tercümeleri değiştirmez, insan incelemesi yerine geçmez ve hiçbir kaydı `human_reviewed`, `verified` veya `fully_verified` yapmaz.

### 1. Tevekkül — Buhârî 6472

- Topic: Tevekkül
- Source reference: `Sahih al-Bukhari 6472`
- Râvi: İbn Abbâs
- Arabic text type: `full_matn`
- Translation status: `ai_draft`
- Translation method: `ai_from_verified_arabic`
- Translation notes: Yok

#### Doğrulanmış Arapça matn

```text
يَدْخُلُ الْجَنَّةَ مِنْ أُمَّتِي سَبْعُونَ أَلْفًا بِغَيْرِ حِسَابٍ، هُمُ الَّذِينَ لاَ يَسْتَرْقُونَ، وَلاَ يَتَطَيَّرُونَ، وَعَلَى رَبِّهِمْ يَتَوَكَّلُونَ
```

#### Mevcut Türkçe taslak

```text
Ümmetimden yetmiş bin kişi hesaba çekilmeden cennete girer. Onlar, kendilerine rukye yapılmasını istemeyen, uğursuzluk saymayan ve Rablerine tevekkül eden kimselerdir.
```

| Arapça ifade | Mevcut Türkçe taslaktaki karşılığı | Durum |
| ------------ | ---------------------------------- | ----- |
| `يَدْخُلُ الْجَنَّةَ مِنْ أُمَّتِي سَبْعُونَ أَلْفًا بِغَيْرِ حِسَابٍ` | “Ümmetimden yetmiş bin kişi hesaba çekilmeden cennete girer.” | OK |
| `هُمُ الَّذِينَ لاَ يَسْتَرْقُونَ` | “Onlar, kendilerine rukye yapılmasını istemeyen” | OK |
| `وَلاَ يَتَطَيَّرُونَ` | “uğursuzluk saymayan” | OK |
| `وَعَلَى رَبِّهِمْ يَتَوَكَّلُونَ` | “Rablerine tevekkül eden kimselerdir.” | OK |

**Audit sonucu: OK**

Olumsuzluklar korunmuştur. `بِغَيْرِ حِسَابٍ`, `لاَ يَسْتَرْقُونَ`, `لاَ يَتَطَيَّرُونَ` ve tevekkül ifadesi taslakta görünür durumdadır. Rukye ve uğursuzluk unsurları hakkında şerh veya mezhebî/itikadî açıklama eklenmemiştir.

### 2. Dua — Buhârî 6340

- Topic: Dua
- Source reference: `Sahih al-Bukhari 6340`
- Râvi: Ebû Hüreyre
- Arabic text type: `full_matn`
- Translation status: `ai_draft`
- Translation method: `ai_from_verified_arabic`
- Translation notes: Yok

#### Doğrulanmış Arapça matn

```text
يُسْتَجَابُ لأَحَدِكُمْ مَا لَمْ يَعْجَلْ يَقُولُ دَعَوْتُ فَلَمْ يُسْتَجَبْ لِي
```

#### Mevcut Türkçe taslak

```text
Sizden birinin duasına, acele edip ‘Dua ettim fakat bana karşılık verilmedi.’ demediği sürece karşılık verilir.
```

| Arapça ifade | Mevcut Türkçe taslaktaki karşılığı | Durum |
| ------------ | ---------------------------------- | ----- |
| `يُسْتَجَابُ لأَحَدِكُمْ` | “Sizden birinin duasına ... karşılık verilir.” | OK |
| `مَا لَمْ يَعْجَلْ` | “acele edip ... demediği sürece” | OK |
| `دَعَوْتُ` | “Dua ettim” | OK |
| `فَلَمْ يُسْتَجَبْ لِي` | “fakat bana karşılık verilmedi.” | OK |

**Audit sonucu: OK**

Şart/istisna yapısı ve olumsuzluk korunmuştur. Taslak, her isteğin mutlaka istenilen biçimde gerçekleşeceğine ilişkin ek bir sonuç taşımamaktadır.

### 3. Şükür — Müslim 2734a

- Topic: Şükür
- Source reference: `Sahih Muslim 2734a`
- Râvi: Enes b. Mâlik
- Arabic text type: `full_matn`
- Translation status: `ai_draft`
- Translation method: `ai_from_verified_arabic`
- Translation notes: Yok

#### Doğrulanmış Arapça matn

```text
إِنَّ اللَّهَ لَيَرْضَى عَنِ الْعَبْدِ أَنْ يَأْكُلَ الأَكْلَةَ فَيَحْمَدَهُ عَلَيْهَا أَوْ يَشْرَبَ الشَّرْبَةَ فَيَحْمَدَهُ عَلَيْهَا
```

#### Mevcut Türkçe taslak

```text
Şüphesiz Allah, kulun bir yemek yiyip bunun üzerine kendisine hamdetmesinden veya bir içecek içip bunun üzerine kendisine hamdetmesinden razı olur.
```

| Arapça ifade | Mevcut Türkçe taslaktaki karşılığı | Durum |
| ------------ | ---------------------------------- | ----- |
| `إِنَّ اللَّهَ لَيَرْضَى عَنِ الْعَبْدِ` | “Şüphesiz Allah, kulun ... razı olur.” | OK |
| `أَنْ يَأْكُلَ الأَكْلَةَ` | “bir yemek yiyip” | OK |
| `فَيَحْمَدَهُ عَلَيْهَا` | “bunun üzerine kendisine hamdetmesinden” | CHECK |
| `أَوْ يَشْرَبَ الشَّرْبَةَ` | “veya bir içecek içip” | OK |
| `فَيَحْمَدَهُ عَلَيْهَا` | “bunun üzerine kendisine hamdetmesinden” | CHECK |

**Audit sonucu: CHECK**

Arapçadaki `هُ` zamiri Allah’a dönmektedir. Mevcut Türkçe taslaktaki iki “kendisine” ifadesinin dil bilgisel göndergesi okuyucu tarafından kula da bağlanabilir; temel hamd ve rıza ilişkisi taslakta mevcut olmakla birlikte zamir açıklığı ayrıca değerlendirilmelidir. Bu audit metni değiştirmez ve alternatif tercüme önermez.

### 4. Ölüm ve hayatın geçiciliği — Buhârî 6416

- Topic: Ölüm ve hayatın geçiciliği
- Source reference: `Sahih al-Bukhari 6416`
- Râvi: Abdullah b. Ömer
- Arabic text type: `excerpt`
- Translation status: `ai_draft`
- Translation method: `ai_from_verified_arabic`
- Translation notes: `Bu tercüme hadisin tamamına değil, Hz. Peygamber’e ait ve topic ile ilgili doğrulanmış matn bölümüne aittir.`

#### Doğrulanmış Arapça matn

```text
كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ، أَوْ عَابِرُ سَبِيلٍ
```

#### Mevcut Türkçe taslak

```text
Dünyada bir garip veya bir yolcu gibi ol.
```

| Arapça ifade | Mevcut Türkçe taslaktaki karşılığı | Durum |
| ------------ | ---------------------------------- | ----- |
| `كُنْ فِي الدُّنْيَا` | “Dünyada ... ol.” | OK |
| `كَأَنَّكَ غَرِيبٌ` | “bir garip ... gibi” | OK |
| `أَوْ عَابِرُ سَبِيلٍ` | “veya bir yolcu gibi” | OK |

**Audit sonucu: OK**

Emir ve benzetme yapısı korunmuştur. `عابر سبيل` için kullanılan “yolcu” ifadesi çekirdek anlamı taşımaktadır. Kayıt bir `excerpt`tır; mevcut not bunun tam hadis olmadığını ve İbn Ömer’in sonraki öğüdünü içermediğini açıkça korumaktadır.

### 5. Kul hakkı — Buhârî 2449

- Topic: Kul hakkı
- Source reference: `Sahih al-Bukhari 2449`
- Râvi: Ebû Hüreyre
- Arabic text type: `full_matn`
- Translation status: `ai_draft`
- Translation method: `ai_from_verified_arabic`
- Translation notes: Yok

#### Doğrulanmış Arapça matn

```text
مَنْ كَانَتْ لَهُ مَظْلَمَةٌ لأَحَدٍ مِنْ عِرْضِهِ أَوْ شَىْءٍ فَلْيَتَحَلَّلْهُ مِنْهُ الْيَوْمَ، قَبْلَ أَنْ لاَ يَكُونَ دِينَارٌ وَلاَ دِرْهَمٌ، إِنْ كَانَ لَهُ عَمَلٌ صَالِحٌ أُخِذَ مِنْهُ بِقَدْرِ مَظْلَمَتِهِ، وَإِنْ لَمْ تَكُنْ لَهُ حَسَنَاتٌ أُخِذَ مِنْ سَيِّئَاتِ صَاحِبِهِ فَحُمِلَ عَلَيْهِ
```

#### Mevcut Türkçe taslak

```text
Kim birine onun onuru veya başka bir hususta haksızlık etmişse, dinar ve dirhemin bulunmayacağı gün gelmeden bugün ondan helallik alsın. İyi bir ameli varsa, yaptığı haksızlık ölçüsünde bu amelinden alınır. İyilikleri yoksa, haksızlığa uğrayanın günahlarından alınarak ona yüklenir.
```

| Arapça ifade | Mevcut Türkçe taslaktaki karşılığı | Durum |
| ------------ | ---------------------------------- | ----- |
| `مَنْ كَانَتْ لَهُ مَظْلَمَةٌ لأَحَدٍ` | “Kim birine ... haksızlık etmişse” | OK |
| `مِنْ عِرْضِهِ أَوْ شَىْءٍ` | “onun onuru veya başka bir hususta” | OK |
| `فَلْيَتَحَلَّلْهُ مِنْهُ الْيَوْمَ` | “bugün ondan helallik alsın.” | OK |
| `قَبْلَ أَنْ لاَ يَكُونَ دِينَارٌ وَلاَ دِرْهَمٌ` | “dinar ve dirhemin bulunmayacağı gün gelmeden” | OK |
| `إِنْ كَانَ لَهُ عَمَلٌ صَالِحٌ أُخِذَ مِنْهُ بِقَدْرِ مَظْلَمَتِهِ` | “İyi bir ameli varsa, yaptığı haksızlık ölçüsünde bu amelinden alınır.” | OK |
| `وَإِنْ لَمْ تَكُنْ لَهُ حَسَنَاتٌ` | “İyilikleri yoksa” | OK |
| `أُخِذَ مِنْ سَيِّئَاتِ صَاحِبِهِ فَحُمِلَ عَلَيْهِ` | “haksızlığa uğrayanın günahlarından alınarak ona yüklenir.” | OK |

**Audit sonucu: OK**

İstenen anlam unsurları taslakta görünmektedir. “Kul hakkı” yalnız topic adıdır ve Arapça matnın birebir teknik terimiymiş gibi tercüme içine eklenmemiştir.

### 6. Tövbe ve pişmanlık — Buhârî 6309

- Topic: Tövbe ve pişmanlık
- Source reference: `Sahih al-Bukhari 6309`
- Râvi: Enes b. Mâlik
- Arabic text type: `full_matn`
- Translation status: `ai_draft`
- Translation method: `ai_from_verified_arabic`
- Translation notes: Yok

#### Doğrulanmış Arapça matn

```text
اللَّهُ أَفْرَحُ بِتَوْبَةِ عَبْدِهِ مِنْ أَحَدِكُمْ سَقَطَ عَلَى بَعِيرِهِ، وَقَدْ أَضَلَّهُ فِي أَرْضِ فَلاَةٍ
```

#### Mevcut Türkçe taslak

```text
Allah, kulunun tövbesine, sizden birinin ıssız bir yerde kaybettiği devesini bulduğunda duyduğu sevinçten daha çok sevinir.
```

| Arapça ifade | Mevcut Türkçe taslaktaki karşılığı | Durum |
| ------------ | ---------------------------------- | ----- |
| `اللَّهُ أَفْرَحُ بِتَوْبَةِ عَبْدِهِ` | “Allah, kulunun tövbesine ... daha çok sevinir.” | OK |
| `مِنْ أَحَدِكُمْ` | “sizden birinin” | OK |
| `سَقَطَ عَلَى بَعِيرِهِ` | “devesini bulduğunda” | OK |
| `وَقَدْ أَضَلَّهُ` | “kaybettiği” | OK |
| `فِي أَرْضِ فَلاَةٍ` | “ıssız bir yerde” | OK |

**Audit sonucu: OK**

Benzetmenin temel unsurları korunmuştur. Allah hakkında `فرح` lafzına ilişkin itikadî şerh tercümeye veya bu teknik audit kaydına eklenmemiştir.

### 7. Namazın önemi ve manevî etkisi — Buhârî 528

- Topic: Namazın önemi ve manevî etkisi
- Source reference: `Sahih al-Bukhari 528`
- Râvi: Ebû Hüreyre
- Arabic text type: `full_matn`
- Translation status: `ai_draft`
- Translation method: `ai_from_verified_arabic`
- Translation notes: Yok

#### Doğrulanmış Arapça matn

```text
أَرَأَيْتُمْ لَوْ أَنَّ نَهَرًا بِبَابِ أَحَدِكُمْ، يَغْتَسِلُ فِيهِ كُلَّ يَوْمٍ خَمْسًا، مَا تَقُولُ ذَلِكَ يُبْقِي مِنْ دَرَنِهِ. قَالُوا لاَ يُبْقِي مِنْ دَرَنِهِ شَيْئًا. قَالَ فَذَلِكَ مِثْلُ الصَّلَوَاتِ الْخَمْسِ، يَمْحُو اللَّهُ بِهَا الْخَطَايَا
```

#### Mevcut Türkçe taslak

```text
Ne dersiniz? Birinizin kapısında bir nehir olsa ve o kişi her gün orada beş defa yıkansa, bu onun kirinden bir şey bırakır mı? Onlar, ‘Kirinden hiçbir şey bırakmaz.’ dediler. O da, ‘İşte beş vakit namaz da böyledir; Allah onlarla günahları siler.’ buyurdu.
```

| Arapça ifade | Mevcut Türkçe taslaktaki karşılığı | Durum |
| ------------ | ---------------------------------- | ----- |
| `أَرَأَيْتُمْ لَوْ أَنَّ نَهَرًا بِبَابِ أَحَدِكُمْ` | “Ne dersiniz? Birinizin kapısında bir nehir olsa” | OK |
| `يَغْتَسِلُ فِيهِ كُلَّ يَوْمٍ خَمْسًا` | “o kişi her gün orada beş defa yıkansa” | OK |
| `مَا تَقُولُ ذَلِكَ يُبْقِي مِنْ دَرَنِهِ` | “bu onun kirinden bir şey bırakır mı?” | OK |
| `قَالُوا لاَ يُبْقِي مِنْ دَرَنِهِ شَيْئًا` | “Onlar, ‘Kirinden hiçbir şey bırakmaz.’ dediler.” | OK |
| `فَذَلِكَ مِثْلُ الصَّلَوَاتِ الْخَمْسِ` | “İşte beş vakit namaz da böyledir” | OK |
| `يَمْحُو اللَّهُ بِهَا الْخَطَايَا` | “Allah onlarla günahları siler.” | OK |

**Audit sonucu: OK**

Nehir, günde beş kez yıkanma, kir, beş namaz ve günahların silinmesi unsurları korunmuştur. “Onlarla” zamiri, aynı cümlede hemen önce geçen “beş vakit namaz” ifadesine dönmektedir ve bu bağlamda açık kabul edilmiştir. Günahların türü veya fıkhî kapsamı hakkında ek yorum üretilmemiştir.

### Remaining Seven toplu sonuç

- Denetlenen tercüme: 7
- OK: 6
- CHECK: 1
- POTENTIAL ISSUE: 0
- CHECK kaydı: Şükür — Müslim 2734a (`kendisine` zamirinin göndergesi)
- `translationTr` değişikliği: 0
- `translationStatus = ai_draft`: 10
- `translationStatus = human_reviewed`: 0
- `translationStatus = verified`: 0
- `verificationStatus = fully_verified`: 0
- `publicReady`: 0 / 10
- Bu statüler insan incelemesi veya final tercüme doğrulaması değildir.

## Remaining Seven Translation Audit Resolution

### Şükür — Müslim 2734a

- Previous decision: **CHECK**
- Resolution: **AI_DRAFT_REVISED**
- Issue: Türkçe “kendisine” zamirinin göndergesinin muğlak olması.
- Resolution detail: Hamdin yöneldiği varlık, Arapçadaki `هُ` zamirinin göndergesine uygun olarak Türkçe `ai_draft` metinde açık isimle “Allah’a” yazılmıştır.
- Theological commentary added: **no**
- Translation status remains: `ai_draft`
- Translation method remains: `ai_from_verified_arabic`
- Human review: **not performed**
- Translation verified: **no**
- Verification status remains: `reference_verified`
- Public ready: **false**

Önceki taslak:

```text
Şüphesiz Allah, kulun bir yemek yiyip bunun üzerine kendisine hamdetmesinden veya bir içecek içip bunun üzerine kendisine hamdetmesinden razı olur.
```

Revize `ai_draft`:

```text
Şüphesiz Allah, kulun bir yemek yiyip bundan dolayı Allah’a hamdetmesinden veya bir içecek içip bundan dolayı Allah’a hamdetmesinden razı olur.
```

### Pilot tercüme audit genel sonucu

- Total pilot translations: 10
- Technical audit completed: 10 / 10
- Unresolved CHECK: 0
- POTENTIAL ISSUE: 0
- `translationStatus = ai_draft`: 10
- `translationStatus = human_reviewed`: 0
- `translationStatus = verified`: 0
- `verificationStatus = fully_verified`: 0
- `publicReady`: 0 / 10

Bu teknik audit çözümü, insan incelemesinin veya final tercüme doğrulamasının tamamlandığı anlamına gelmez.
