// pages/index.js
import Head from "next/head";
import BannerSection from "../components/BannerSection";
import CollectionSection from "../components/CollectionSection";
import ShortcutSection from "../components/ShortcutSection";
import ResponsiveCarousel from "../carousels/ResponsiveCarousel"; // Updated import path

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Carousels</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BannerSection />
        <CollectionSection />
        <ShortcutSection />
        <ResponsiveCarousel />
      </main>
    </div>
  );
}