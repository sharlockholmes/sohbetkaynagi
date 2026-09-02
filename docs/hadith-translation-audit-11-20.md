# Hadith Translation Working Record — Topics 11–20

Bu belge source of truth değildir. Aşağıdaki Türkçe metinler yalnız canonical `HadithReference.arabicText` alanından oluşturulmuş AI çalışma taslaklarıdır. İnsan incelemesi yapılmamıştır; bu turda `OK`, `CHECK` veya `POTENTIAL ISSUE` kararı verilmemiştir.

Primary reference fingerprint translation alanlarını kapsamaz. Tarihsel tam-snapshot fingerprint `71173c600ee4fad98efba5fd84f799d9118984a7a611274cd20a91537c84435c` metadata'da korunur. Güncel reference-only fingerprint `7c8e4c2140b474790116a02cb84ffb2c06c6bf7a05f2c1a464e884da664615bf` değeridir.

## 11. Ahiret ve hesap bilinci

- Source reference: Sahih al-Bukhari 6536
- Arabic text type: `full_matn`
- Exact Arabic text: مَنْ نُوقِشَ الْحِسَابَ عُذِّبَ، قَالَتْ قُلْتُ أَلَيْسَ يَقُولُ اللَّهُ تَعَالَى {فَسَوْفَ يُحَاسَبُ حِسَابًا يَسِيرًا} قَالَ ذَلِكِ الْعَرْضُ
- Exact translationTr: Kim hesaba ayrıntılı biçimde çekilirse azap görür. Âişe, ‘Yüce Allah, “Kolay bir hesaba çekilecek.” buyurmuyor mu?’ diye sordu. O, ‘Bu, arz edilip sunulmadır.’ buyurdu.
- Translation status: `ai_draft`

| Arapça ifade | Türkçe karşılık | Durum |
| ------------ | --------------- | ----- |
| مَنْ نُوقِشَ الْحِسَابَ | Kim hesaba ayrıntılı biçimde çekilirse | OK |
| عُذِّبَ | azap görür | OK |
| فَسَوْفَ يُحَاسَبُ حِسَابًا يَسِيرًا | Kolay bir hesaba çekilecek | OK |
| ذَلِكِ الْعَرْضُ | Bu, arz edilip sunulmadır | CHECK |

**Final technical audit decision: CHECK**

`نُوقِشَ الْحِسَابَ` ifadesindeki hesabın ayrıntılı biçimde ele alınması nüansı korunmuştur. Exact canonical matnda sonuç cümlesi `ذَلِكِ الْعَرْضُ` şeklindedir. “Arz edilip sunulmadır” temel anlamı taşır; ancak tek Arapça kavramın Türkçede yakın anlamlı iki ifadeyle verilmesi üslup/terim açısından ayrıca değerlendirilmelidir.

## 12. Güzel ahlak

- Source reference: Sahih al-Bukhari 3559
- Arabic text type: `full_matn`
- Exact Arabic text: لَمْ يَكُنِ النَّبِيُّ صلى الله عليه وسلم فَاحِشًا وَلاَ مُتَفَحِّشًا وَكَانَ يَقُولُ إِنَّ مِنْ خِيَارِكُمْ أَحْسَنَكُمْ أَخْلاَقًا
- Exact translationTr: Peygamber çirkin sözlü değildi; çirkin söz söylemeye de yeltenmezdi. Şöyle buyururdu: ‘Sizin en hayırlılarınız, ahlâkı en güzel olanlarınızdır.’
- Translation status: `ai_draft`

| Arapça ifade | Türkçe karşılık | Durum |
| ------------ | --------------- | ----- |
| لَمْ يَكُنِ النَّبِيُّ صلى الله عليه وسلم فَاحِشًا | Peygamber çirkin sözlü değildi | OK |
| وَلاَ مُتَفَحِّشًا | çirkin söz söylemeye de yeltenmezdi | CHECK |
| إِنَّ مِنْ خِيَارِكُمْ أَحْسَنَكُمْ أَخْلاَقًا | Sizin en hayırlılarınız, ahlâkı en güzel olanlarınızdır | OK |

**Final technical audit decision: CHECK**

`مُتَفَحِّشًا` çirkin/fâhiş söz veya davranışı isteyerek sergileme anlam alanındadır. “Yeltenmezdi” temel yönelimi aktarsa da Türkçede ayrıca teşebbüs/niyet çağrışımı oluşturabilir. Bu bir otomatik düzeltme kararı değil, sonraki ilmî inceleme için nüans işaretidir.

## 13. Doğruluk ve dürüstlük

- Source reference: Sahih al-Bukhari 6094
- Arabic text type: `full_matn`
- Exact Arabic text: إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ، وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ، وَإِنَّ الرَّجُلَ لَيَصْدُقُ حَتَّى يَكُونَ صِدِّيقًا، وَإِنَّ الْكَذِبَ يَهْدِي إِلَى الْفُجُورِ، وَإِنَّ الْفُجُورَ يَهْدِي إِلَى النَّارِ، وَإِنَّ الرَّجُلَ لَيَكْذِبُ حَتَّى يُكْتَبَ عِنْدَ اللَّهِ كَذَّابًا
- Exact translationTr: Şüphesiz doğruluk iyilik ve erdeme götürür; iyilik ve erdem de cennete götürür. Kişi doğru söyleye söyleye sonunda sıddîk olur. Yalan ise günaha ve kötülüğe götürür; günah ve kötülük de ateşe götürür. Kişi yalan söyleye söyleye sonunda Allah katında yalancı yazılır.
- Translation status: `ai_draft`

| Arapça ifade | Türkçe karşılık | Durum |
| ------------ | --------------- | ----- |
| إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ | Şüphesiz doğruluk iyilik ve erdeme götürür | OK |
| وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ | iyilik ve erdem de cennete götürür | OK |
| وَإِنَّ الرَّجُلَ لَيَصْدُقُ حَتَّى يَكُونَ صِدِّيقًا | Kişi doğru söyleye söyleye sonunda sıddîk olur | OK |
| وَإِنَّ الْكَذِبَ يَهْدِي إِلَى الْفُجُورِ | Yalan ise günaha ve kötülüğe götürür | OK |
| وَإِنَّ الْفُجُورَ يَهْدِي إِلَى النَّارِ | günah ve kötülük de ateşe götürür | OK |
| وَإِنَّ الرَّجُلَ لَيَكْذِبُ حَتَّى يُكْتَبَ عِنْدَ اللَّهِ كَذَّابًا | Kişi yalan söyleye söyleye sonunda Allah katında yalancı yazılır | OK |

**Final technical audit decision: OK**

Muhtemel asimetri canonical `arabicText` açısından oluşmamaktadır: doğruluk tarafındaki exact lafız `حَتَّى يَكُونَ صِدِّيقًا`, yalan tarafındaki lafız ise `حَتَّى يُكْتَبَ عِنْدَ اللَّهِ كَذَّابًا` şeklindedir. Taslak bu iki farklı yapıyı ayrı ayrı korur. `الْبِرِّ` için “iyilik ve erdem”, `الْفُجُورِ` için “günah ve kötülük” anlam alanını makul biçimde taşır.

## 14. Gıybet ve dili korumak

- Source reference: Sahih Muslim 2589
- Arabic text type: `full_matn`
- Exact Arabic text: أَتَدْرُونَ مَا الْغِيبَةُ، قَالُوا اللَّهُ وَرَسُولُهُ أَعْلَمُ، قَالَ ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ، قِيلَ أَفَرَأَيْتَ إِنْ كَانَ فِي أَخِي مَا أَقُولُ قَالَ إِنْ كَانَ فِيهِ مَا تَقُولُ فَقَدِ اغْتَبْتَهُ وَإِنْ لَمْ يَكُنْ فِيهِ فَقَدْ بَهَتَّهُ
- Exact translationTr: ‘Gıybetin ne olduğunu biliyor musunuz?’ diye sordu. Onlar, ‘Allah ve Resûlü daha iyi bilir.’ dediler. O, ‘Kardeşini hoşlanmadığı bir şeyle anmandır.’ buyurdu. ‘Söylediğim şey kardeşimde varsa ne dersiniz?’ denildi. O, ‘Söylediğin şey onda varsa onun gıybetini etmiş olursun; onda yoksa ona bühtan etmiş olursun.’ buyurdu.
- Translation status: `ai_draft`

| Arapça ifade | Türkçe karşılık | Durum |
| ------------ | --------------- | ----- |
| أَتَدْرُونَ مَا الْغِيبَةُ | Gıybetin ne olduğunu biliyor musunuz? | OK |
| اللَّهُ وَرَسُولُهُ أَعْلَمُ | Allah ve Resûlü daha iyi bilir | OK |
| ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ | Kardeşini hoşlanmadığı bir şeyle anmandır | OK |
| إِنْ كَانَ فِيهِ مَا تَقُولُ فَقَدِ اغْتَبْتَهُ | Söylediğin şey onda varsa onun gıybetini etmiş olursun | OK |
| وَإِنْ لَمْ يَكُنْ فِيهِ فَقَدْ بَهَتَّهُ | onda yoksa ona bühtan etmiş olursun | OK |

**Final technical audit decision: OK**

Soru-cevap yapısı, gıybet ile bühtan ayrımı, şart yapıları ve zamir göndergeleri korunmuştur.

## 15. Öfkeye hâkim olmak

- Source reference: Sahih al-Bukhari 6114
- Arabic text type: `full_matn`
- Exact Arabic text: لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ
- Exact translationTr: Güçlü kimse, insanları güreşte yere seren değildir. Asıl güçlü, öfke anında kendisine hâkim olan kimsedir.
- Translation status: `ai_draft`

| Arapça ifade | Türkçe karşılık | Durum |
| ------------ | --------------- | ----- |
| لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ | Güçlü kimse, insanları güreşte yere seren değildir | OK |
| إِنَّمَا الشَّدِيدُ | Asıl güçlü | OK |
| الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ | öfke anında kendisine hâkim olan kimsedir | OK |

**Final technical audit decision: OK**

`الصُّرَعَةِ` ifadesindeki güreşte rakibini yere seren kişi ile gerçek güç arasındaki karşılaştırma korunmuştur.

## 16. Affetmek ve bağışlamak

- Source reference: Sahih Muslim 2588
- Arabic text type: `full_matn`
- Exact Arabic text: مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلاَّ عِزًّا وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلاَّ رَفَعَهُ اللَّهُ
- Exact translationTr: Sadaka malı eksiltmez. Allah, affeden bir kulun izzetini artırır. Kim Allah için tevazu gösterirse Allah onu yükseltir.
- Translation status: `ai_draft`

| Arapça ifade | Türkçe karşılık | Durum |
| ------------ | --------------- | ----- |
| مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ | Sadaka malı eksiltmez | OK |
| وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلاَّ عِزًّا | Allah, affeden bir kulun izzetini artırır | OK |
| وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلاَّ رَفَعَهُ اللَّهُ | Kim Allah için tevazu gösterirse Allah onu yükseltir | OK |

**Final technical audit decision: OK**

Üç anlam unsuru tam olarak korunmuştur. “Affeden bir kul” ifadesi `بِعَفْوٍ` yapısını konu bağlamında gereksiz biçimde daraltmamaktadır.

## 17. Merhamet

- Source reference: Sahih al-Bukhari 7376
- Arabic text type: `full_matn`
- Exact Arabic text: لاَ يَرْحَمُ اللَّهُ مَنْ لاَ يَرْحَمُ النَّاسَ
- Exact translationTr: İnsanlara merhamet etmeyene Allah merhamet etmez.
- Translation status: `ai_draft`

| Arapça ifade | Türkçe karşılık | Durum |
| ------------ | --------------- | ----- |
| لاَ يَرْحَمُ اللَّهُ | Allah merhamet etmez | OK |
| مَنْ لاَ يَرْحَمُ النَّاسَ | İnsanlara merhamet etmeyene | OK |

**Final technical audit decision: OK**

Olumsuzluk, fail ve insanlara yönelen merhamet unsuru eksiksiz korunmuştur.

## 18. Kibir ve büyüklenme

- Source reference: Sahih Muslim 91a
- Arabic text type: `full_matn`
- Exact Arabic text: لاَ يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ، قَالَ رَجُلٌ إِنَّ الرَّجُلَ يُحِبُّ أَنْ يَكُونَ ثَوْبُهُ حَسَنًا وَنَعْلُهُ حَسَنَةً، قَالَ إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ، الْكِبْرُ بَطَرُ الْحَقِّ وَغَمْطُ النَّاسِ
- Exact translationTr: Kalbinde zerre ağırlığınca kibir bulunan kimse cennete girmez. Bir adam, ‘Kişi elbisesinin güzel, ayakkabısının da güzel olmasını sever.’ dedi. O, ‘Şüphesiz Allah güzeldir, güzelliği sever. Kibir, hakkı reddetmek ve insanları küçümsemektir.’ buyurdu.
- Translation status: `ai_draft`

| Arapça ifade | Türkçe karşılık | Durum |
| ------------ | --------------- | ----- |
| لاَ يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ | Kalbinde zerre ağırlığınca kibir bulunan kimse cennete girmez | OK |
| إِنَّ الرَّجُلَ يُحِبُّ أَنْ يَكُونَ ثَوْبُهُ حَسَنًا وَنَعْلُهُ حَسَنَةً | Kişi elbisesinin güzel, ayakkabısının da güzel olmasını sever | OK |
| إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ | Şüphesiz Allah güzeldir, güzelliği sever | OK |
| الْكِبْرُ بَطَرُ الْحَقِّ | Kibir, hakkı reddetmektir | OK |
| وَغَمْطُ النَّاسِ | ve insanları küçümsemektir | OK |

**Final technical audit decision: OK**

Matnın bütün unsurları korunmuştur. `بَطَرُ الْحَقِّ` ve `غَمْطُ النَّاسِ` karşılıkları uygundur; tercümeye kelâmî şerh eklenmemiştir.

## 19. Haset ve kıskançlık

- Source reference: Sahih al-Bukhari 6065
- Arabic text type: `full_matn`
- Exact Arabic text: لاَ تَبَاغَضُوا، وَلاَ تَحَاسَدُوا، وَلاَ تَدَابَرُوا، وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا، وَلاَ يَحِلُّ لِمُسْلِمٍ أَنْ يَهْجُرَ أَخَاهُ فَوْقَ ثَلاَثَةِ أَيَّامٍ
- Exact translationTr: Birbirinize buğzetmeyin, birbirinize haset etmeyin ve birbirinize sırt çevirmeyin. Ey Allah’ın kulları, kardeş olun. Bir Müslümanın kardeşiyle üç günden fazla küs kalması helâl değildir.
- Translation status: `ai_draft`

| Arapça ifade | Türkçe karşılık | Durum |
| ------------ | --------------- | ----- |
| لاَ تَبَاغَضُوا | Birbirinize buğzetmeyin | OK |
| وَلاَ تَحَاسَدُوا | birbirinize haset etmeyin | OK |
| وَلاَ تَدَابَرُوا | birbirinize sırt çevirmeyin | OK |
| وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا | Ey Allah’ın kulları, kardeş olun | OK |
| وَلاَ يَحِلُّ لِمُسْلِمٍ أَنْ يَهْجُرَ أَخَاهُ فَوْقَ ثَلاَثَةِ أَيَّامٍ | Bir Müslümanın kardeşiyle üç günden fazla küs kalması helâl değildir | OK |

**Final technical audit decision: OK**

Üç nehiy, kardeşlik emri ve üç günden fazla ilişkiyi kesmeme sınırı korunmuştur.

## 20. Emanet ve sorumluluk

- Source reference: Sahih al-Bukhari 7138
- Arabic text type: `full_matn`
- Exact Arabic text: أَلاَ كُلُّكُمْ رَاعٍ، وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ، فَالإِمَامُ الَّذِي عَلَى النَّاسِ رَاعٍ وَهْوَ مَسْئُولٌ عَنْ رَعِيَّتِهِ، وَالرَّجُلُ رَاعٍ عَلَى أَهْلِ بَيْتِهِ وَهْوَ مَسْئُولٌ عَنْ رَعِيَّتِهِ، وَالْمَرْأَةُ رَاعِيَةٌ عَلَى أَهْلِ بَيْتِ زَوْجِهَا وَوَلَدِهِ وَهِيَ مَسْئُولَةٌ عَنْهُمْ، وَعَبْدُ الرَّجُلِ رَاعٍ عَلَى مَالِ سَيِّدِهِ وَهْوَ مَسْئُولٌ عَنْهُ، أَلاَ فَكُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ
- Exact translationTr: Dikkat edin! Hepiniz birer gözeticisiniz ve hepiniz sorumluluğunuz altındakilerden sorgulanacaksınız. İnsanların başındaki yönetici bir gözeticidir ve sorumluluğu altındakilerden sorgulanacaktır. Erkek, aile halkının gözeticisidir ve sorumluluğu altındakilerden sorgulanacaktır. Kadın, kocasının ev halkının ve çocuğunun gözeticisidir ve onlardan sorumludur. Bir kimsenin hizmetçisi, efendisinin malının gözeticisidir ve ondan sorumludur. Dikkat edin! Hepiniz birer gözeticisiniz ve hepiniz sorumluluğunuz altındakilerden sorgulanacaksınız.
- Translation status: `ai_draft`

| Arapça ifade | Türkçe karşılık | Durum |
| ------------ | --------------- | ----- |
| أَلاَ كُلُّكُمْ رَاعٍ، وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ | Dikkat edin! Hepiniz birer gözeticisiniz ve hepiniz sorumluluğunuz altındakilerden sorgulanacaksınız | OK |
| فَالإِمَامُ الَّذِي عَلَى النَّاسِ رَاعٍ وَهْوَ مَسْئُولٌ عَنْ رَعِيَّتِهِ | İnsanların başındaki yönetici bir gözeticidir ve sorumluluğu altındakilerden sorgulanacaktır | OK |
| وَالرَّجُلُ رَاعٍ عَلَى أَهْلِ بَيْتِهِ وَهْوَ مَسْئُولٌ عَنْ رَعِيَّتِهِ | Erkek, aile halkının gözeticisidir ve sorumluluğu altındakilerden sorgulanacaktır | OK |
| وَالْمَرْأَةُ رَاعِيَةٌ عَلَى أَهْلِ بَيْتِ زَوْجِهَا وَوَلَدِهِ وَهِيَ مَسْئُولَةٌ عَنْهُمْ | Kadın, kocasının ev halkının ve çocuğunun gözeticisidir ve onlardan sorumludur | OK |
| وَعَبْدُ الرَّجُلِ رَاعٍ عَلَى مَالِ سَيِّدِهِ وَهْوَ مَسْئُولٌ عَنْهُ | Bir kimsenin hizmetçisi, efendisinin malının gözeticisidir ve ondan sorumludur | OK |
| أَلاَ فَكُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ | Dikkat edin! Hepiniz birer gözeticisiniz ve hepiniz sorumluluğunuz altındakilerden sorgulanacaksınız | OK |

**Final technical audit decision: OK**

`راع / رعية` yapısı gözetim ve sorumluluk ekseninde korunmuştur. Yönetici, aile, ev ve çocuk ile mal sorumluluğu unsurlarının hiçbiri düşmemiş; topic başlığındaki “emanet” kelimesi hadisin lafzıymış gibi tercümeye eklenmemiştir.

## Current workflow state

- Total hadith: 50
- `reference_verified`: 50
- `ai_draft`: 20
- `missing`: 30
- `human_reviewed`: 0
- Verified translation: 0
- `fully_verified`: 0
- `publicReady`: 0/50

Yukarıdaki exact çalışma kayıtları ile aşağıdaki teknik kararlar tercümeleri final hâle getirmez; insan incelemesi yapılmış sayılmaz.

## Technical audit summary

- Audited translations: 10/10
- OK: 8
- CHECK: 2
- POTENTIAL ISSUE: 0
- CHECK records:
  - Ahiret ve hesap bilinci — Buhârî 6536: `الْعَرْضُ` için kullanılan “arz edilip sunulma” ikilemesi üslup/terim bakımından ayrıca değerlendirilmeli.
  - Güzel ahlak — Buhârî 3559: `مُتَفَحِّشًا` için kullanılan “yeltenmezdi” fiili Türkçede ek teşebbüs/niyet çağrışımı oluşturabilir.
- Human review performed: no
- Translation data changed during audit: no
- Public ready: 0/50

Bu teknik audit statüleri `human_reviewed`, `verified` veya `fully_verified` anlamına gelmez. İşaretlenen ifadeler bu turda otomatik olarak düzeltilmemiştir.

## Translation Audit Resolution

Bu bölüm önceki teknik audit geçmişini koruyarak yalnız iki `CHECK` kaydının sonraki AI taslak çözümünü kaydeder.

### Ahiret ve hesap bilinci — Sahih al-Bukhari 6536

- Previous decision: `CHECK`
- Resolution: `AI_DRAFT_REVISED`
- Previous translationTr: Kim hesaba ayrıntılı biçimde çekilirse azap görür. Âişe, ‘Yüce Allah, “Kolay bir hesaba çekilecek.” buyurmuyor mu?’ diye sordu. O, ‘Bu, arz edilip sunulmadır.’ buyurdu.
- Current translationTr: Kim hesaba ayrıntılı biçimde çekilirse azap görür. Âişe, ‘Yüce Allah, “Kolay bir hesaba çekilecek.” buyurmuyor mu?’ diye sordu. O, ‘Bu, yalnızca sunulmadır.’ buyurdu.
- Reason: `الْعَرْضُ` tek kavramdır; Türkçedeki “arz edilip sunulma” ikilemesi kaldırıldı.
- Translation status remains: `ai_draft`
- Human review: not performed
- Public ready: false

### Güzel ahlak — Sahih al-Bukhari 3559

- Previous decision: `CHECK`
- Resolution: `AI_DRAFT_REVISED`
- Previous translationTr: Peygamber çirkin sözlü değildi; çirkin söz söylemeye de yeltenmezdi. Şöyle buyururdu: ‘Sizin en hayırlılarınız, ahlâkı en güzel olanlarınızdır.’
- Current translationTr: Peygamber çirkin sözlü değildi; çirkin söz söyleyen biri de değildi. Şöyle buyururdu: ‘Sizin en hayırlılarınız, ahlâkı en güzel olanlarınızdır.’
- Reason: `مُتَفَحِّشًا` karşılığındaki “yeltenmezdi” fiilinin Arapçada bulunmayan teşebbüs/niyet çağrışımı kaldırıldı.
- Translation status remains: `ai_draft`
- Human review: not performed
- Public ready: false

### Resolution summary

- Topic 11–20 technical audit completed: 10/10
- Resolved CHECK: 2
- Unresolved CHECK: 0
- POTENTIAL ISSUE: 0
- `ai_draft`: 20
- `human_reviewed`: 0
- Verified translation: 0
- Human review performed: no
- Public ready: 0/50

Bu çözüm kaydı yalnız AI taslak düzeyindedir; insan/ilmî inceleme veya final tercüme doğrulaması değildir.
