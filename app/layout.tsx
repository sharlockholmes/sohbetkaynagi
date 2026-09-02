import type { Metadata, Viewport } from "next";
import { SITE_NAME, SITE_URL } from "@/data/site";
import "./globals.css";
import "./v11.css";
import "./final-polish.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SohbetKaynağı | Kur’an ve Hadis Kaynak Motoru",
    template: "%s | SohbetKaynağı",
  },
  description: "Konuya göre doğrulanmış Kur’an ayetlerini, hadis referanslarını ve güvenilir dış kaynakları bulun.",
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    title: "SohbetKaynağı | Kur’an ve Hadis Kaynak Motoru",
    description: "Konuya göre doğrulanmış Kur’an ayetlerini, hadis referanslarını ve güvenilir dış kaynakları bulun.",
    url: "/",
    siteName: SITE_NAME,
    locale: "tr_TR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width:"device-width", initialScale:1, themeColor:"#F8EDE3", colorScheme:"light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
