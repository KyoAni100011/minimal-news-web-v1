import type { Props } from "./type";

export function StoryItem({ story, rank }: Props) {
  return (
    <div className="flex gap-3 py-3 border-b border-gray-200">
      {/* Rank */}
      <div className="w-6 text-right text-gray-500">{rank}.</div>

      {/* Main row */}
      <div className="flex flex-1 justify-between gap-4">
        {/* LEFT */}
        <div className="flex-1 min-w-0">
          <div>
            <a href={story.url} className="text-black hover:underline">
              {story.title}
            </a>
            <span className="text-[11px] text-gray-500 ml-1">
              ({story.site})
            </span>
          </div>

          <div className="text-[11px] text-gray-500 mt-1">
            128 points by anon 2 hours ago | 42 comments
          </div>

          <div className="text-[11px] text-gray-500 mt-2 space-x-4">
            <a href="#" className="hover:underline">
              ▲ upvote
            </a>
            <a href="#" className="hover:underline">
              ▼ downvote
            </a>
            <a href="#" className="hover:underline">
              ↩ reply
            </a>
            <a href="#" className="hover:underline">
              ⤴ share
            </a>
            <a href="#" className="hover:underline">
              ★ save
            </a>
          </div>
        </div>

        {story.image && (
          <img
            src={story.image}
            alt=""
            className="w-[90px] h-[90px] object-cover shrink-0"
          />
        )}
      </div>
    </div>
  );
}
