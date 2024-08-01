import HorizontalStickyScroll from "@/components/animations/HorizontalStickyScroll";
import PageTransition from "@/components/animations/PageTransition";
import BreadCrumbs from "@/components/BreadCrumbs";
import BuyOptions from "@/components/BuyOptions";
import ImageGrid from "@/components/ImageGrid";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="px-10">
      <Navbar />
      <BreadCrumbs />
      <ImageGrid />
      <BuyOptions />

      {/* <Reveal /> */}
      {/* <HorizontalStickyScroll /> */}
      {/* <PageTransition /> */}
    </main>
  );
}
