import { LuArrowRight, LuGraduationCap } from "react-icons/lu";

export const HeroOne = () => {
  return (
    <section className="bg-[url('/contruction-hero.webp')] bg-cover bg-center min-h-screen w-full max-w-page mx-auto isolate">
      <div className="flex w-screen h-screen">
        <div className="bg-zinc-950/70 px-12 h-screen max-w-4xl flex flex-col justify-center gap-4 gap-y-0 border-r-2 border-r-white">
          <h1 className="relative text-4xl sm:text-5xl md:text-7xl font-bold border-t-2 border-b-2 border-white bg-accent/50 py-4 -mx-12 px-14">
            <div className="absolute top-0 right-1/4 w-[2px] h-32 bg-white -translate-y-full"></div>
            Residential & Commercial Construction
          </h1>

          <div className="relative flex flex-col gap-4 px-4 py-8 w-fit border-l-2 border-white">
            <p className="text-xl max-w-[40ch]">
              Generic Construction Co. has been building our neighborhoods for
              the past 10 years. We pride ourselves in construction quality and
              superb customer service.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex gap-x-2 items-center px-3 py-1 rounded-lg text-lg transition-colors outline outline-1 outline-zinc-500 bg-zinc-500 hover:bg-accent hover:outline-white">
                Get a Quote
                <LuArrowRight />
              </button>
              <button className="flex gap-x-2 items-center px-3 py-1 rounded-lg text-lg transition-colors outline outline-1 outline-zinc-500 bg-zinc-500 hover:bg-accent hover:outline-white">
                Learn more
                <LuGraduationCap />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
