# GÜL STUDIOS Hadis Kaynak Politikası

Bu politika, Kur’an katmanından ayrı tutulan hadis veri altyapısına içerik eklenirken uygulanır. Pilot araştırma kayıtları, gerekli bütün doğrulama ve tercüme aşamaları tamamlanmadan kullanıcı arayüzünde yayımlanmaz.

## Zorunlu doğrulama ilkeleri

1. AI hafızasından hadis referansı kabul edilmez.
2. Arapça metin doğrulanmadan bir hadis kaydı `fully_verified` olamaz.
3. Kitap, bab ve hadis numarası doğrulanmadan kayıt `reference_verified` olamaz.
4. Hadis sıhhat hükmü AI tarafından verilmez.
5. Grading kaydı varsa `gradingSource` zorunludur; bu alan muteber kaynak, tahkik veya hadis âliminin aktarılan değerlendirmesini belirtir.
6. AI tarafından oluşturulan Türkçe tercüme yalnız `ai_draft` statüsünde tutulabilir.
7. İnsan kontrolü ve kaynak/metin karşılaştırması olmadan Türkçe tercüme `verified` olamaz.
8. Riyâzü’s-Sâlihîn yalnız konu keşfi ve indeks amacıyla kullanılabilir; mümkün olduğunda hadis asıl kaynağına geri izlenir.
9. Güçlü hadis bulunamayan topic boş bırakılabilir.
10. Sırf her konuya hadis koymak için zayıf veya şüpheli hadis eklenmez.

## Kaynak önceliği mimarisi

Hadis koleksiyon modeli şu öncelikleri destekler:

- **Primary:** Sahîh-i Buhârî, Sahîh-i Müslim
- **Secondary:** Sünen Ebû Dâvûd, Câmiu’t-Tirmizî, Sünen Nesâî, Sünen İbn Mâce
- **Additional when needed:** Muvatta, Müsned-i Ahmed
- **Topic index:** Riyâzü’s-Sâlihîn

Katalogda yer alan bibliyografik eser metadata kayıtları hadis metni veya bağımsız sıhhat hükmü değildir.

## Kaynak eser ve provider ayrımı

Kaynak eser, hadis değerlendirmesinin dayandığı asıl çalışma veya tahkikli neşirdir. Bir web sitesi ya da dijital provider yalnız görüntüleme ortamıdır ve tek başına dinî otorite sayılmaz.

## Tercüme ve doğrulama ayrımı

Hadisin kaynak doğrulaması ile Türkçe tercümenin doğrulaması ayrı statülerle izlenir. Kaynak referansı doğrulanmış bir hadis, Türkçe tercümesi henüz doğrulanmamışsa kullanıcıya final tercüme olarak sunulamaz.

## Tercüme ve şerh ayrımı

Türkçe tercüme, doğrulanmış Arapça matnın Türkçe karşılığıdır. Şerh ise hadisin anlamını açıklayan ayrı bir içerik katmanıdır; tercümenin içine karıştırılmaz.

Gelecekte Buhârî hadislerinin şerhinde Bedreddin Aynî’nin *Umdetü’l-Kārî* ve İbn Hacer’in *Fethu’l-Bârî* eserleri; Müslim hadislerinde İmam Nevevî’nin *Şerhu Sahîh-i Müslim* eseri klasik Sünnî şerh kaynakları olarak değerlendirilebilir. Bu kayıt kaynak politikasıdır; projeye henüz gerçek şerh içeriği eklenmemiştir.

AI tarafından doğrulanmış Arapça matndan oluşturulan Türkçe çalışma tercümesi yalnız `ai_draft` statüsünde tutulur. Bu aşamada `translationReviewedBy` ve `translationVerifiedAt` boş kalır. Diyanet tercümesi kopyalanmaz veya canonical tercüme sayılmaz; Diyanet yalnız mevcut olduğu kayıtlarda locator ya da bibliyografik çapraz kontrol provider’ı olabilir.

## Grading ilkesi

`grading` alanı modelin kanaati değildir. Yalnız belirtilmiş bir hadis âliminin veya güvenilir tahkikli kaynağın aktarılan değerlendirmesidir. `sahih`, `hasen`, `daif` veya `mixed` değerlerinden biri kullanıldığında `gradingSource` zorunludur.

## Arapça matn ve isnad ayrımı

`arabicText` alanında kullanıcıya gelecekte gösterilecek hadis matnı tutulur; tam isnad zinciri bu alana eklenmez. Râvi, kaynak ve erişim/doğrulama bilgileri sırasıyla `narrator`, `sourceReference` ve `provenance` alanlarında tutulur.

`arabicTextType` alanı metnin kapsamını açıkça belirtir:

- `full_matn`: İsnad hariç hadis matnının tamamı.
- `excerpt`: Konu ilişkisini taşıyan, kaynaktan doğrulanmış matn bölümü.

`excerpt` kayıtları hiçbir kullanıcı yüzeyinde “hadisin tam metni” olarak etiketlenemez.

## Public-ready yayın eşiği

`reference_verified` bir kayıt tek başına yayına hazır değildir. `publicReady` yalnız kaynak/referans ve Arapça matn doğrulaması tamamlanmış, grading kaynağı belirtilmiş, Türkçe tercümesi insan kontrolüyle `verified` olmuş ve genel doğrulama statüsü `fully_verified` seviyesine çıkmış kayıtlarda true olabilir.

Hadis doğrulama raporundaki kaynak eser ile teknik provider ayrı gösterilir. Diyanet Hadislerle İslâm bu katmanda yalnız mevcut olduğu yerlerde locator veya bibliyografik çapraz kontrol provider’ı olarak kullanılabilir; çağdaş yorum metni canonical hadis anlamına taşınmaz.
