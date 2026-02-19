import { createFileRoute } from "@tanstack/react-router";
import SignIn from "../../share-components/sign-in";

export const Route = createFileRoute("/(auth)/signin")({
  component: SignIn,
});
