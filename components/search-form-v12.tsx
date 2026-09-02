"use client";

import { FormEvent, KeyboardEvent, useId, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { findTopic, searchTopics } from "@/lib/topic-search-v12";
import { topicPresentation } from "@/data/topic-presentation";

export function SearchFormV12({ compact=false }:{ compact?:boolean }) {
  const [query,setQuery]=useState(""); const [message,setMessage]=useState(""); const [dismissed,setDismissed]=useState(false); const router=useRouter(); const uid=useId();
  const suggestions=!dismissed&&query.trim().length>=2?searchTopics(query,5):[];
  function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();const topic=findTopic(query);if(topic)router.push(`/konu/${topic.slug}`);else setMessage(`“${query.trim()||"Bu ifade"}” için bir konu bulamadık. Daha kısa veya farklı bir ifade deneyin.`)}
  function handleKeyDown(event:KeyboardEvent<HTMLInputElement>){if(event.key==="Escape"){setDismissed(true);setMessage("")}}
  const inputId=`topic-search-${uid}`;const messageId=`search-message-${uid}`;const suggestionsId=`search-suggestions-${uid}`;
  return <div className={compact?"searchShell compact":"searchShell"}><form className="searchForm" onSubmit={submit} role="search"><label htmlFor={inputId} className="srOnly">Konu ara</label><span className="searchIcon" aria-hidden="true"/><input id={inputId} value={query} onKeyDown={handleKeyDown} onChange={(event)=>{setQuery(event.target.value);setMessage("");setDismissed(false)}} placeholder="Sabır, dua, kul hakkı…" autoComplete="off" aria-describedby={message?messageId:undefined} aria-expanded={suggestions.length>0} aria-controls={suggestions.length?suggestionsId:undefined}/><button type="submit">Kaynakları bul <span aria-hidden="true">→</span></button>{suggestions.length>0&&<div id={suggestionsId} className="searchSuggestions" aria-label="Konu önerileri"><p>Eşleşen konular</p><div role="list">{suggestions.map(({topic})=><Link role="listitem" href={`/konu/${topic.slug}`} key={topic.slug}><span>{topic.title}</span><small>{topicPresentation[topic.id]?.eyebrow}</small><b aria-hidden="true">→</b></Link>)}</div></div>}</form>{message&&<div id={messageId} className="searchMessage" role="status"><span aria-hidden="true">○</span><div><strong>Sonuç bulunamadı</strong><p>{message}</p></div></div>}</div>;
}
