import { Hero } from "@/components/Homepage/Hero";
import { HeroOne } from "@/components/Homepage/Hero1";
import { Testimonials } from "@/components/Homepage/Testimonials";
import { Services } from "@/components/Homepage/Services";

export default function Home() {
  return (
    <main>
      <HeroOne />
      <Testimonials />
      <Services />
    </main>
  );
}
