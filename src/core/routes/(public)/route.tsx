import { Outlet, createFileRoute } from "@tanstack/react-router";
import Navbar from "../../share-components/navbar";
import Footer from "../../share-components/footer";

export const Route = createFileRoute("/(public)")({
  component: PublicLayout,
});

function PublicLayout() {
  return (
    <div className="md:w-5xl md:mx-auto">
      <Navbar />
      <div className="bg-(--background)">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
