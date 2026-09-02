import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicPageViewV12 } from "@/components/topic-page-view-v12";
import { legacyTopicSlugs,topics } from "@/data/topics-v12";
import { getTopicView } from "@/lib/content";
type TopicPageProps={params:Promise<{slug:string}>};
export const dynamicParams=false;
export function generateStaticParams(){return[...topics.map(({slug})=>({slug})),...Object.keys(legacyTopicSlugs).map((slug)=>({slug}))];}
export async function generateMetadata({params}:TopicPageProps):Promise<Metadata>{const {slug}=await params;const topic=getTopicView(slug);if(!topic)notFound();return{title:`${topic.title}: ayet ve hadis kaynakları`,description:`${topic.summary} Doğrulanmış Kur’an ayetlerini ve hadis kaynaklarını güvenilir dış kaynaklarda inceleyin.`,keywords:[topic.title,...topic.aliases,"Kur’an","ayet","hadis","kaynak"],alternates:{canonical:`/konu/${topic.slug}`},openGraph:{title:`${topic.title}: ayet ve hadis kaynakları`,description:topic.summary,url:`/konu/${topic.slug}`,type:"article",locale:"tr_TR"}};}
export default async function TopicPage({params}:TopicPageProps){const {slug}=await params;const topic=getTopicView(slug);if(!topic)notFound();return <TopicPageViewV12 topic={topic}/>;}
