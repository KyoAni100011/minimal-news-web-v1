import { map } from "lodash-es";
import { StoryItem } from "./story-item";
import type { Story } from "./type";

const MOCK_STORIES: readonly Story[] = [
  {
    id: "1",
    title: "Sizing chaos",
    url: "#",
    site: "pudding.cool",
    image: "https://picsum.photos/seed/1/120/120",
    content:
      "Women's clothing sizes vary wildly across brands and countries. This article explores how inconsistent measurements create confusion, frustration, and economic inefficiencies in the fashion industry.",
  },
  {
    id: "2",
    title: "Building a Minimal Forum in 2026",
    url: "#",
    site: "minimal.dev",
    image: "https://picsum.photos/seed/2/120/120",
    content:
      "Modern forums are bloated with heavy JavaScript, animations, and complex UI frameworks. What if we went back to basics and built something brutally simple, fast, and readable?",
  },
  {
    id: "3",
    title: "Why Software Feels Slower Every Year",
    url: "#",
    site: "performance.blog",
    content:
      "Despite faster CPUs and better hardware, many applications feel slower due to abstraction layers, analytics scripts, and increasing bundle sizes. Performance debt accumulates silently.",
  },
];

export default function StoryList() {
  return (
    <div>
      {map(MOCK_STORIES, (story, index) => (
        <StoryItem key={story.id} story={story} rank={index + 1} />
      ))}
    </div>
  );
}
