import Header from "./components/Header";
import Hero from "./components/Hero";

// bg-gradient-to-bl from-[#26C2B9] to-[#288BE7]

export default function Home() {
  return (
    <>
    <div className="pt-[3.75rem] overflow-hidden">
      <Header />
      <Hero />
    </div>
    </>
  );
}
