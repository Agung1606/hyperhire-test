import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

// bg-gradient-to-bl from-[#26C2B9] to-[#288BE7]

export default function Home() {
  return (
    <>
    <div className="bg-gradient-to-bl from-[#26C2B9] to-[#288BE7] pt-[3.75rem] overflow-hidden">
      <Header />
      <Hero />
    </div>
    <Footer />
    </>
  );
}
