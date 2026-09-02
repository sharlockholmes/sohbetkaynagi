import { hadithReferences } from "../data/hadith-references";
import { topics } from "../data/topics-v12";
import { surahMetadata } from "../data/surah-metadata";
import { verseReferences } from "../data/verse-references";
import { validateContent } from "../lib/content-validation";
validateContent();
console.log(`İçerik doğrulaması başarılı: ${topics.length} canonical konu, ${verseReferences.length} ayet ilişkisi, ${surahMetadata.length} sure ve ${hadithReferences.length} hadis kaydı kontrol edildi.`);
