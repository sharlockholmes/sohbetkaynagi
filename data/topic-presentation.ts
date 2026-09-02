export type TopicPresentation = {
  eyebrow: string;
  color: "amber" | "green" | "rose";
  glyph: string;
};

export const topicPresentation: Record<string, TopicPresentation> = {
  sabir: { eyebrow: "Zorlukta sebat", color: "amber", glyph: "ص" },
  tevekkul: { eyebrow: "Gayret ve teslimiyet", color: "green", glyph: "ت" },
  "anne-babaya-iyilik": { eyebrow: "Merhamet ve vefa", color: "rose", glyph: "و" },
  dua: { eyebrow: "Yöneliş ve niyaz", color: "green", glyph: "د" },
  sukur: { eyebrow: "Nimeti bilmek", color: "amber", glyph: "ش" },
  olum: { eyebrow: "Fanilik ve dönüş", color: "rose", glyph: "م" },
  ahiret: { eyebrow: "Hesap ve sonsuzluk", color: "green", glyph: "آ" },
  "kul-hakki": { eyebrow: "Adalet ve sorumluluk", color: "amber", glyph: "ح" },
  tovbe: { eyebrow: "Dönüş ve bağışlanma", color: "rose", glyph: "ت" },
  kardeslik: { eyebrow: "Birlik ve dayanışma", color: "green", glyph: "خ" },
};
