import Image from "next/image";
import Link from "next/link";

const navigation = [{href:"/",label:"Ana Sayfa"},{href:"/konular",label:"Konular"},{href:"/kaynaklar",label:"Kaynaklar"}];

export function Header(){return <header className="siteHeader"><Link href="/" className="brand" aria-label="SohbetKaynağı ana sayfa"><Image className="brandLogo" src="/brand/gul-studios-logo.png" width={786} height={724} alt="GÜL STUDIOS" priority/><span className="brandProduct"><strong>SohbetKaynağı</strong><small>Kur’an ve Hadis Kaynak Motoru</small></span></Link><nav className="desktopNav" aria-label="Ana menü">{navigation.map((item)=><Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><details className="mobileNav"><summary aria-label="Menüyü aç"><span/><span/></summary><nav aria-label="Mobil menü">{navigation.map((item)=><Link key={item.href} href={item.href}>{item.label}<span aria-hidden="true">→</span></Link>)}</nav></details></header>}
