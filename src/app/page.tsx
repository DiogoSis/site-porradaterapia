import {
  Header,
  Hero,
  About,
  Schedule,
  Gallery,
  CTA,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
