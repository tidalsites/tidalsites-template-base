import { Hero } from "@/components/Homepage/Hero";
import { Testimonials } from "@/components/Homepage/Testimonials";
import { Services } from "@/components/Homepage/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Testimonials />
      <Services />
    </main>
  );
}
