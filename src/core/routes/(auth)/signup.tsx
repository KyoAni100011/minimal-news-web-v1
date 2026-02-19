import { createFileRoute } from "@tanstack/react-router";
import SignUp from "../../share-components/sign-up";

export const Route = createFileRoute("/(auth)/signup")({
  component: SignUp,
});
