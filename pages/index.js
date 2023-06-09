import Category from "@/components/Category";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TopProduct from "@/components/TopProduct";
import WhyUs from "@/components/WhyUs";
import Head from "next/head";

export default function Home() {
  return (
    <div className="scroll-smooth h-[calc(100vh-48px)] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0  scrollbar-thin scrollbar-track-neutral-300 scrollbar-thumb-neutral-800 scrollbar-thumb-rounded-md">
      <Head>
        <title>Décor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* category */}
      <section id="category" className="snap-start">
        <Category />
      </section>

      {/* featured */}
      <section id="featured" className="snap-start">
        <Featured />
      </section>

      {/* top products */}
      <section id="top_Product" className="snap-start">
        <TopProduct />
      </section>

      {/* why us */}
      <section id="why_us" className="snap-start">
        <WhyUs />
      </section>

      {/* footer */}
      <footer className="snap-start">
        <Footer />
      </footer>
    </div>
  );
}
