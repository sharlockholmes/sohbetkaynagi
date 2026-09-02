import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SearchFormV12 } from "@/components/search-form-v12";
import { taxonomy } from "@/data/taxonomy";
import { topicViews } from "@/lib/content";
import { getTopicInitial } from "@/lib/topic-initial";
import "./konular.css";

export const metadata:Metadata={title:"Kur’an ve hadis konu kataloğu",description:"50 konu başlığını kategori bazında keşfedin; doğrulanmış ayet ve hadis kaynaklarına ulaşın.",alternates:{canonical:"/konular"}};

export default function TopicsPage(){return <main><Header/><section className="directoryHero"><div><p className="topicKicker">50 KONU BAŞLIĞI <span>·</span> TEK KAYNAK DÜZENİ</p><h1>Konu kataloğu</h1><p>Aradığınız başlığı doğrudan yazın veya yedi kategori içinde sakin bir keşfe çıkın.</p></div><SearchFormV12 compact/></section><section className="topicsDirectory">{taxonomy.map((category,categoryIndex)=>{const categoryTopics=topicViews.filter((topic)=>topic.categories.includes(category.id));if(!categoryTopics.length)return null;return <section className="categorySection" key={category.id} id={category.id}><header><span>{String(categoryIndex+1).padStart(2,"0")}</span><div><h2>{category.title}</h2><p>{category.description}</p></div><b>{categoryTopics.length} konu</b></header><div className="categoryTopics">{categoryTopics.map((topic)=><Link href={`/konu/${topic.slug}`} key={`${category.id}-${topic.slug}`}><span className={`categoryGlyph ${topic.presentation.color}`} aria-hidden="true">{getTopicInitial(topic.title)}</span><span><small>{topic.presentation.eyebrow}</small><strong>{topic.title}</strong></span><i aria-hidden="true">→</i></Link>)}</div></section>})}</section><Footer/></main>}
