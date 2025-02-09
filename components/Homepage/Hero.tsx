import Image from "next/image";
import hero from "@/public/template-hero.png";

export const Hero = () => {
  return (
    <section className="flex mb-20 min-h-screen w-full max-w-page mx-auto isolate">
      <div className="pt-nav py-10 px-4 flex-col gap-4">
        <h1 className="flex flex-col text-6xl font-bold max-w-[12ch] pt-12 | sm:text-7xl | md:text-8xl | lg:text-9xl">
          Main Headline Here
        </h1>
        <p className="flex flex-col text-lg max-w-[60ch] text-left">
          <span className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            veniam repellat laboriosam asperiores eaque cupiditate, optio fugiat
            in consequatur quasi tenetur cum consectetur corrupti quod vel ullam
            eligendi?
          </span>{" "}
        </p>
        <div className="flex flex-wrap gap-4 mt-8 | md:rounded-full md:flex-row">
          <button className="bg-foreground text-background px-4 py-1">
            Do Something
          </button>
          <button className="bg-foreground text-background px-4 py-1">
            Get in Contact
          </button>
        </div>
      </div>
      <div className="hidden lg:block mt-nav h-[calc(100vh-var(--navbar-height)-2rem)] w-1/2 rounded-3xl min-h-[500px] ml-auto mr-4 relative">
        <div className="h-full w-full relative rounded-3xl overflow-hidden">
          <Image
            className="object-cover h-full"
            src={hero}
            alt="Hero Image"
            priority
          />
        </div>
        {/* <div className="w-1/2 h-1/2 bg-slate-800/20 absolute bottom-0 translate-y-1/2 left-1/4 -z-10 rounded-3xl"></div>
        <div className="w-1/4 h-1/4 bg-slate-800/70 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 -z-10 rounded-3xl"></div> */}
      </div>
    </section>
  );
};
