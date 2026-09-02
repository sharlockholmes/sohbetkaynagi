import Link from "next/link";
import { Footer } from "@/components/footer";
import { HadithSourceCard } from "@/components/hadith-source-card";
import { Header } from "@/components/header";
import { SearchFormV12 } from "@/components/search-form-v12";
import { SourceCatalogListV12 } from "@/components/source-catalog-list-v12";
import { VerseSectionV12 } from "@/components/verse-section-v12";
import { topicViews, type TopicView } from "@/lib/content";
import { primaryHadithPublicPresentations } from "@/lib/hadith-public-presentation";
import { getTopicInitial } from "@/lib/topic-initial";

export function TopicPageViewV12({topic}:{topic:TopicView}) {
  const {presentation}=topic;
  const hadith=primaryHadithPublicPresentations.find((item)=>item.topicId===topic.id);
  if(!hadith) throw new Error(`${topic.id}: public primary hadis presentation bulunamadı.`);
  const neighbors=topicViews.filter((item)=>item.slug!==topic.slug).slice(0,3);
  return <main><Header/><section className="topicHero"><nav className="breadcrumb" aria-label="Sayfa yolu"><Link href="/konular">Konular</Link><span aria-hidden="true">/</span><span>{topic.title}</span></nav><div className="topicTitleRow"><div><p className="topicKicker">KONU DOSYASI <span>·</span> {presentation.eyebrow.toLocaleUpperCase("tr-TR")}</p><h1>{topic.title}</h1></div><span className={`largeGlyph ${presentation.color}`} aria-hidden="true">{getTopicInitial(topic.title)}</span></div><div className="topicIntro"><p>{topic.summary}</p><dl><div><dt>Kur’an</dt><dd>{topic.directVerseRecords.length+topic.relatedVerseRecords.length} ayet grubu</dd></div><div><dt>Hadis</dt><dd>1 doğrulanmış kayıt</dd></div></dl></div><SearchFormV12 compact/></section>
    <VerseSectionV12 eyebrow="KUR’AN · DOĞRUDAN" title="Doğrudan ilgili ayetler" description="Konuyu açıkça ifade eden veya doğrudan kuran ayetler." verses={topic.directVerseRecords}/>
    {topic.relatedVerseRecords.length>0&&<VerseSectionV12 eyebrow="KUR’AN · İLİŞKİLİ" title="İlişkili ayetler" description="Konunun anlam çerçevesini tamamlayan ve yakın bağ kuran ayetler." verses={topic.relatedVerseRecords} tone="related"/>}
    <HadithSourceCard hadith={hadith}/>
    <section className="topicSources"><div className="sectionHeading"><div><p>KUR’AN KAYNAKLARI</p><h2>Meali ve tefsiri inceleyin</h2></div><span>Metinleri çoğaltmak yerine sizi doğrudan güvenilir kaynağa yönlendiriyoruz.</span></div><SourceCatalogListV12 compact/><Link href="/kaynaklar" className="methodLink">Kaynak yöntemini inceleyin <span>→</span></Link></section>
    <section className="moreTopics"><p>Keşfe devam edin</p><div>{neighbors.map((item)=><Link key={item.slug} href={`/konu/${item.slug}`}><span>{item.title}</span><i aria-hidden="true">→</i></Link>)}</div></section><Footer/></main>;
}
