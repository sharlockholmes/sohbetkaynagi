import { describe, expect, it } from "vitest";
import { topics } from "@/data/topics-v12";
import { getTopicInitial } from "@/lib/topic-initial";

describe("public topic initials", () => {
  it("uses the Turkish title initial for all 50 topics", () => {
    expect(topics).toHaveLength(50);
    for (const topic of topics) {
      expect(getTopicInitial(topic.title)).toBe(Array.from(topic.title.trim())[0]?.toLocaleUpperCase("tr-TR"));
    }
    expect(getTopicInitial("Şükür")).toBe("Ş");
    expect(getTopicInitial("Ölüm ve hayatın geçiciliği")).toBe("Ö");
    expect(getTopicInitial("İffet ve haya")).toBe("İ");
  });
});
