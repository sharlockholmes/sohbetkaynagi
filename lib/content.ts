import { topicPresentation } from "@/data/topic-presentation";
import { getTopic,topics } from "@/data/topics-v12";
import { verseReferenceById } from "@/data/verse-references";
import type { Topic,VerseReference } from "@/domain/content-types";
export type TopicView=Topic&{presentation:(typeof topicPresentation)[string];directVerseRecords:VerseReference[];relatedVerseRecords:VerseReference[]};
const tones=["amber","green","rose"] as const;
function resolveVerseIds(ids:string[]){return ids.map((id)=>{const item=verseReferenceById.get(id);if(!item)throw new Error(`Ayet referansı bulunamadı: ${id}`);return item;});}
export function resolveTopic(topic:Topic):TopicView{const configured=topicPresentation[topic.id];const presentation=configured??{eyebrow:"Konu kataloğu",color:tones[topics.findIndex((item)=>item.id===topic.id)%tones.length],glyph:topic.title.charAt(0).toLocaleUpperCase("tr-TR")};return{...topic,presentation,directVerseRecords:resolveVerseIds(topic.directVerses),relatedVerseRecords:resolveVerseIds(topic.relatedVerses)};}
export const topicViews=topics.map(resolveTopic);
export function getTopicView(slug:string){const topic=getTopic(slug);return topic?resolveTopic(topic):undefined;}
export function formatVerseReference(item:VerseReference){const numbers=item.ayahEnd?`${item.ayahStart}–${item.ayahEnd}`:String(item.ayahStart);return`${item.surahNameTr} Suresi · ${numbers}. Ayet${item.ayahEnd?"ler":""}`;}
