import { createFileRoute } from "@tanstack/react-router";
import PostDetail from "../../share-components/stories/story-detail";

export const Route = createFileRoute("/(public)/post/$postId")({
  component: PostDetail,
});
