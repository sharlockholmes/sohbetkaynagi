export const dynamic = 'force-static';

import type { MetadataRoute } from "next";
import { topics } from "@/data/topics-v12";
import { SITE_URL } from "@/data/site";
export default function sitemap():MetadataRoute.Sitemap{const topicPages:MetadataRoute.Sitemap=topics.map((topic)=>({url:`${SITE_URL}/konu/${topic.slug}`,changeFrequency:"monthly",priority:0.8}));return[{url:SITE_URL,changeFrequency:"weekly",priority:1},{url:`${SITE_URL}/konular`,changeFrequency:"monthly",priority:0.8},{url:`${SITE_URL}/kaynaklar`,changeFrequency:"monthly",priority:0.7},...topicPages];}

