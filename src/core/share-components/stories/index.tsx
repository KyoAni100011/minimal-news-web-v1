import { map } from "lodash-es";
import { StoryItem } from "./story-item";
import type { Props } from "./type";

export default function StoryList({ stories }: Props) {
  return (
    <div>
      {map(stories, (story, index) => (
        <StoryItem key={story.id} story={story} rank={(index ?? 0) + 1} />
      ))}
    </div>
  );
}
