import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden pt-20">

      {/* ================= SUVRO BACKGROUND LETTERS ================= */}
<div className="relative max-w-[1700px] mx-auto px-6 mt-4">
  <div className="relative h-[360px] grid grid-cols-5 items-end">

    {/* Shared letter style */}
    {["S", "U", "V", "R"].map((char) => (
      <div
        key={char}
        className="flex justify-center items-end"
      >
        <span
          className="text-[300px] font-extrabold leading-none text-black/5"
          style={{ lineHeight: "0.9" }}
        >
          {char}
        </span>
      </div>
    ))}

    {/* O = IMAGE */}
    <div className="flex justify-center items-end">
      <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] mb-[8px]">
        <div className="absolute inset-0 rounded-full border-[10px] border-red-600" />
        <img
          src="/images/suvro-logo.webp"
          alt="Suvro Ghosh"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>

  </div>
</div>

      {/* ================= CONTENT BELOW ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT COLUMN */}
          <div className="max-w-xl flex flex-col justify-center">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              <span className="block text-black">SUVRO</span>
              <span className="block text-red-600">GHOSH</span>
            </h1>

            <p className="mt-6 text-gray-600">Caliber Tech Solutions</p>
            <p className="text-black font-medium">Founder & CEO</p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="max-w-xl flex items-center">
            <div className="relative bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl px-8 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">

              {/* CUT CORNER */}
              <span className="absolute -top-4 -right-4 w-20 h-20 bg-red-600 rotate-45" />

              <p className="relative z-10 text-gray-700 leading-relaxed mb-8">
                Transforming the structural steel industry with 30+ years of
                expertise in design, manufacturing, and engineering excellence.
              </p>

              <div className="relative z-10 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-red-600 transition-colors"
                >
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-black text-black hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};