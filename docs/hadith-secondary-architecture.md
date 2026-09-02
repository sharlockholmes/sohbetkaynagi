# Hadith Secondary Catalog Architecture

Bu belge mimari kararı açıklar; canonical hadis verisinin source of truth'u değildir.

## Primary rolü

Primary Hadith V1 rolü `HadithReference` üzerinde ayrı bir alanla tutulmaz. Bir kayıt yalnız `PRIMARY_HADITH_V1_IDS` frozen listesinde yer alıyorsa Primary Hadith V1 kaydıdır. Primary sorguları `isPrimaryHadithV1` ve `getPrimaryHadithV1References` helper'larını kullanır; katalog sırası, topic başına ilk kayıt veya toplam kayıt sayısı gibi kırılgan varsayımlara dayanmaz.

Frozen primary lookup tam 50 ID'yi canonical topic sırası 1–50 ile döndürür. Bir frozen ID eksikse veya katalogda aynı ID birden çok kez bulunursa helper hata verir.

## Secondary rolü

Bir `HadithReference`, frozen primary ID listesinde bulunmuyorsa secondary katalog kaydıdır. Bunun için canonical şemaya `primary` veya `secondary` alanı eklenmez.

`relationType` yalnız semantik ilişkiyi ifade eder:

- `direct`: Hadis topic'i açık biçimde taşır.
- `related`: Hadis topic'i güçlü biçimde destekler fakat ana doğrudan delil değildir.

Primary/secondary katalog rolü `relationType` alanına yüklenmez. Hem primary hem secondary kayıtlar semantik olarak `direct` veya `related` olabilir.

## Genel katalog

Genel hadis kataloğu bütün `hadithReferences` listesidir ve 50 kayıttan fazla olabilir. Aynı canonical topic altında birden fazla geçerli hadis bulunabilir. Genel validation topic başına toplam tam bir hadis şartı koymaz; bütün kayıtları ayrı ayrı ve katalog bütünlüğü içinde doğrular.

Primary-only rapor ve denetimler frozen ID üyeliğinden seçilen kayıtları kullanır. Genel katalog raporları tam listeyi kullanır. Tek hadis bazlı `HadithVerificationReport` aynı topic altında birden fazla kayıt bulunmasından etkilenmez.

## Duplicate kimliği

Yanlışlıkla aynı kaynak kaydının farklı ID ile tekrar eklenmesini önleyen canonical kimlik:

`collectionId + primaryLocator.scheme + primaryLocator.value`

Kimlik parçaları deterministic olarak trim edilir, iç whitespace tek boşluğa indirilir ve küçük harfe normalize edilir. Provider URL'si, `providerId` veya alternate locator birincil duplicate kimliği değildir. Bu nedenle aynı locator numarası farklı collection'larda duplicate sayılmaz.

Bu aşamada validation yalnız primary-locator ile primary-locator çakışmasını kesin hata yapar. Bir kaydın alternate locator'ının başka kaydın primary locator'ıyla çapraz çakışması ileride ihtiyaç doğarsa ayrı bir warning/error politikasıyla ele alınabilir.

## Fingerprint izolasyonu

Primary Hadith V1 fingerprint hesabı yalnız `PRIMARY_HADITH_V1_IDS` içindeki frozen 50 kaydı kapsar. Secondary kayıt eklenmesi:

- primary sayısını değiştirmez,
- primary topic coverage değerini değiştirmez,
- Primary Hadith V1 fingerprint değerini değiştirmez.

Typed `HadithReference` verisi source of truth olmaya devam eder; frozen ID listesi baseline kimliği ve regresyon denetimi içindir.
