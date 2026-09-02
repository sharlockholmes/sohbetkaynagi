export function getTopicInitial(title: string) {
  return Array.from(title.trim())[0]?.toLocaleUpperCase("tr-TR") ?? "";
}
