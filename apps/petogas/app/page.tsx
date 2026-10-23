import { About } from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
import { Groups } from "@/components/Groups";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Statements } from "@/components/Statements";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Statements />
      <Groups />
      <ContactSection />
    </>
  );
}
