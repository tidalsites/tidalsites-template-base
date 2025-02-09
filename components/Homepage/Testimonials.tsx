// import Image from "next/image";

import { SectionHeader } from "./SectionHeader";

const testimonials = [
  {
    quote:
      "Company transformed my online presence. Their attention to detail and creativity are unmatched.",
    name: "John Doe",
    identifier: "CEO, Example Corp",
    img: "/images/testimonial1.jpg",
  },
  {
    quote:
      "Working with Company was a game-changer for our business. Highly recommend their services!",
    name: "Jane Smith",
    identifier: "Marketing Director, Another Co",
    img: "/images/testimonial2.jpg",
  },
  {
    quote:
      "The team at Company is professional, responsive, and delivered a stunning website for us.",
    name: "Alice Johnson",
    identifier: "Founder, Startup Inc",
    img: "/images/testimonial3.jpg",
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-background">
      <SectionHeader
        heading="Testimonials"
        subheading="See what our customers are saying about us."
      />
      <div className="flex flex-wrap gap-4 justify-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            name={testimonial.name}
            identifier={testimonial.identifier}
            img={testimonial.img}
          />
        ))}
      </div>
    </section>
  );
};

type TestimonialCardProps = {
  quote: string;
  name: string;
  identifier: string;
  img: string;
};

const TestimonialCard = ({
  quote,
  name,
  identifier,
  img,
}: TestimonialCardProps) => {
  return (
    <div className="p-4 flex flex-col gap-4 border border-gray-300 rounded-lg shadow-md w-fit bg-bg-alt">
      <p className="max-w-[30ch]">{quote}</p>
      <div className="flex gap-4">
        <div className="rounded-full overflow-hidden w-12 h-12 bg-accent">
          {/* <Image src={img} alt={name} /> */}
        </div>
        <div className="flex flex-col gap-1">
          <p>{name}</p>
          <p className="text-sm text-fg-alt">{identifier}</p>
        </div>
      </div>
    </div>
  );
};
