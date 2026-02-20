import { useState } from "react";

/* ============================= */
/*            TYPES              */
/* ============================= */

type Story = {
  id: number;
  title: string;
  url?: string;
  site?: string;
  points: number;
  author: string;
  createdAt: string;
  content?: string;
};

type Comment = {
  id: number;
  author: string;
  createdAt: string;
  content: string;
  points: number;
  children?: Comment[];
};

/* ============================= */
/*        MAIN COMPONENT         */
/* ============================= */

export default function PostDetail() {
  const story: Story = {
    id: 1,
    title: "Gemini 3.1 Pro",
    url: "https://deepmind.google",
    site: "deepmind.google",
    points: 601,
    author: "PunchTornado",
    createdAt: "12 hours ago",
    content:
      "Gemini 3.1 Pro introduces major improvements in long-context reasoning and code understanding.",
  };

  const comments: Comment[] = [
    {
      id: 1,
      author: "dang",
      createdAt: "7 hours ago",
      content: "Comments moved to another thread.",
      points: 120,
    },
    {
      id: 2,
      author: "takoid",
      createdAt: "12 hours ago",
      content: "Tested the SVG pelican prompt. Pretty impressive.",
      points: 230,
      children: [
        {
          id: 3,
          author: "tasuki",
          createdAt: "7 hours ago",
          content: "That looks amazing!",
          points: 42,
        },
      ],
    },
  ];

  return (
    <div className="text-black p-2">
      <StorySection story={story} />
      <CommentForm />
      <CommentTree comments={comments} />
    </div>
  );
}

/* ============================= */
/*        STORY SECTION          */
/* ============================= */

function StorySection({ story }: { story: Story }) {
  return (
    <div className="pb-4 border-b border-gray-300">
      <div className="flex gap-2">
        <span className="text-gray-500 cursor-pointer">▲</span>

        <div className="flex-1">
          <div>
            <a href={story.url} className="hover:underline">
              {story.title}
            </a>
            {story.site && (
              <span className="text-gray-500 ml-1">({story.site})</span>
            )}
          </div>

          <div className="text-gray-500 text-[11px] mt-1">
            {story.points} points by {story.author} {story.createdAt}
          </div>

          {story.content && (
            <div className="mt-3 leading-snug">{story.content}</div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================= */
/*         COMMENT FORM          */
/* ============================= */

function CommentForm() {
  const [text, setText] = useState("");

  return (
    <div className="mt-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border border-gray-400 p-1 text-[13px] bg-white"
        rows={4}
      />
      <div className="mt-1">
        <button
          onClick={() => setText("")}
          className="border border-gray-400 px-2 py-[2px] text-[12px]"
        >
          add comment
        </button>
      </div>
    </div>
  );
}

/* ============================= */
/*         COMMENT TREE          */
/* ============================= */

function CommentTree({ comments }: { comments: Comment[] }) {
  return (
    <div className="mt-4">
      {comments.map((c) => (
        <CommentItem key={c.id} comment={c} />
      ))}
    </div>
  );
}

function CommentItem({
  comment,
  depth = 0,
}: {
  comment: Comment;
  depth?: number;
}) {
  return (
    <div className="mt-3" style={{ marginLeft: depth * 20 }}>
      <div className="text-[11px] text-gray-600">
        ▲ {comment.points} by {comment.author} {comment.createdAt}
      </div>

      <div className="mt-1 leading-snug">{comment.content}</div>

      <div className="text-[11px] text-gray-600 mt-1 cursor-pointer hover:underline">
        ↩ reply
      </div>

      {comment.children?.map((child) => (
        <CommentItem key={child.id} comment={child} depth={depth + 1} />
      ))}
    </div>
  );
}
