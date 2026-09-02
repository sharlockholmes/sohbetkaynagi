import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function NotFound(){return <main><Header/><section className="notFound"><span>404 · KAYIT BULUNAMADI</span><h1>Aradığınız sayfa burada değil.</h1><p>Konuyu farklı bir ifadeyle arayabilir veya 50 başlıktan oluşan konu kataloğunu inceleyebilirsiniz.</p><div><Link href="/">Ana sayfaya dön</Link><Link href="/konular" className="outlineLink">Konuları incele</Link></div></section><Footer/></main>}
