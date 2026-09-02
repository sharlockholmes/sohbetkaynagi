# GÜL STUDIOS Kur’an Kaynak Motoru — V1.2

Next.js 16 App Router ve TypeScript ile hazırlanan Kur’an konu → ayet → kaynak yönlendirme çekirdeğidir. Uygulama meal veya tefsir metni kopyalamaz; kullanıcıyı ilgili dış kaynağa yönlendirir.

## Veri mimarisi

- `data/topics-v12.ts`: 10 konu, arama ifadeleri, kategori/tag ve ayet referans kimlikleri.
- `data/verse-references.ts`: doğrudan/ilişkili ayet adresleri, aralıklar, gerekçe ve provenance durumu.
- `data/taxonomy.ts`: sekiz ana kategori.
- `data/surah-metadata.ts`: 114 surenin canonical adı, ayet sayısı ve dış kaynak slug metadata’sı.
- `data/source-catalog.ts`: üç ana eseri, beş provider aksiyonundan ayırır.
- `lib/source-link-builders.ts`: UI’dan bağımsız merkezî deep-link ve fallback motoru.

Son kullanıcı yalnız üç ana kaynak görür: Elmalılı Muhammed Hamdi Yazır, Ömer Nasuhi Bilmen ve Diyanet. Teknik katmanda beş aksiyon vardır:

- Elmalılı meal → KuranMeali.net ayet sayfası
- Elmalılı tefsir → Türkiye Yazma Eserler Kurumu resmî eser sayfası
- Bilmen meal → KuranMeali.net ayet sayfası
- Bilmen tefsir → Tahavi.com üzerindeki en yakın doğrulanmış ayet aralığı/sure sayfası
- Diyanet → doğrudan Kur’an Portalı ayet/tefsir sayfası

Fallback sırası mümkün olduğunda ayet → ayet aralığı → sure → genel eser/provider sayfasıdır. Doğrulanmamış tefsir veya meal bağlantısı üretilmez.

## Doğrulama ve test

```bash
npm run typecheck
npm run validate-content
npm test
npm run build
```

Zod ve semantik kontroller yinelenen kayıtları, sure/ayet sınırlarını, provenance eksikliğini, bilinmeyen eser/provider kimliklerini, bozuk URL’leri ve bağlantı stratejilerinin üretim hatalarını yakalar.

Supabase, AI/OpenAI, kullanıcı hesabı, ödeme ve yönetim paneli henüz eklenmemiştir. Sonraki aşama: **Doğrulanmış Kur’an konu kataloğunu 10 → 25/30 → 50 → 100+ şeklinde kontrollü büyütme.**
