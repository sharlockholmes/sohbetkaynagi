import Link from "next/link";

export function Footer(){return <footer className="footer"><div className="footerBrand"><b>SohbetKaynağı</b><span>Kur’an ve Hadis Kaynak Motoru</span><small>GÜL STUDIOS tarafından</small></div><p>Kaynaklara ulaşmayı kolaylaştıran bağımsız bir çalışma. Fetva veya dinî hüküm üretmez.</p><nav aria-label="Alt menü"><Link href="/">Ana Sayfa</Link><Link href="/konular">Konular</Link><Link href="/kaynaklar">Kaynaklar</Link></nav></footer>}
