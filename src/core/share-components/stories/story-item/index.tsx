import { Link } from "@tanstack/react-router";
import type { Story } from "../type";

type StoryItemProps = {
  story: Story;
  rank: number;
};

export function StoryItem({ story, rank }: StoryItemProps) {
  const up = 128;
  const down = 4;
  const comments = 42;

  return (
    <div className="flex gap-3 py-3 border-b border-gray-200 px-2 text-gray-700">
      <div className="w-6 text-right text-gray-500">{rank}.</div>

      <div className="flex flex-1 justify-between gap-4">
        <div className="flex-1 min-w-0">
          {/* Title */}
          <div>
            <Link
              to="/post/$postId"
              params={{ postId: story.id }}
              className="text-black hover:underline"
            >
              {story.title}
            </Link>

            <span className="text-[11px] text-gray-500 ml-1">
              ({story.site})
            </span>
          </div>

          {/* Content preview */}
          {story.content && (
            <p className="text-[12px] text-gray-600 mt-1 line-clamp-2 leading-snug">
              {story.content}
            </p>
          )}

          {/* Action row */}
          <div className="text-[11px] mt-2 flex gap-4 flex-wrap">
            <Link
              to="/post/$postId"
              params={{ postId: story.id }}
              className="hover:underline"
            >
              ▲ upvote ({up})
            </Link>

            <span className="hover:underline cursor-pointer">
              ▼ downvote ({down})
            </span>

            <Link
              to="/post/$postId"
              params={{ postId: story.id }}
              className="hover:underline"
            >
              ↩ reply ({comments})
            </Link>
          </div>
        </div>

        {story.image && (
          <Link
            to="/post/$postId"
            params={{ postId: story.id }}
            className="shrink-0"
          >
            <img
              src={story.image}
              alt=""
              className="w-[120px] h-[85px] object-cover rounded-xs"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
