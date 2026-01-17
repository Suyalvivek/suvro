import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/TiltCard";

export const HeroSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-20
        bg-white
        dark:bg-black
        bg-[url('/images/hero-bg-red2peg')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50 dark:from-black/60 dark:via-black/50 dark:to-black/70 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.25),transparent_45%)] pointer-events-none" />

      {/* ================= SUVRO BACKGROUND LETTERS ================= */}
<div className="relative z-10 w-full overflow-hidden mt-4">
  <div className="relative z-10 max-w-[1400px] mx-auto px-6">
    <div className="grid grid-cols-5 items-end h-[300px] gap-6">
      {["S", "U", "V", "R"].map((char) => (
        <span
          key={char}
          className="
            text-[220px]
            xl:text-[260px]
            font-extrabold
            text-black/15
            dark:text-white/20
            select-none
            leading-none
            text-center
          "
        >
          {char}
        </span>
      ))}

      {/* O = IMAGE */}
      <div className="relative w-[220px] h-[220px] xl:w-[260px] xl:h-[260px] mx-auto">
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
<div className="max-w-xl flex flex-col justify-center relative">

  {/* Accent vertical line */}
  <span className="absolute -left-6 top-2 h-[180px] w-[3px] bg-red-600 rounded-full" />

  <h1 className="text-6xl sm:text-7xl font-extrabold leading-[1.05] tracking-tight">
    <span className="block text-black dark:text-white font-semibold">
      SUVRO
    </span>
    <span className="block text-red-600 mt-1">
      GHOSH
    </span>
  </h1>

  <div className="mt-6 space-y-1">
    <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
      Caliber Tech Solutions
    </p>
    <p className="text-base font-semibold text-black dark:text-white">
      Founder & CEO
    </p>
  </div>
</div>
          {/* RIGHT COLUMN */}
          {/* RIGHT COLUMN */}
<div className="max-w-xl flex items-center">
  <TiltCard
    className="
      relative
      rounded-2xl
      px-8 py-8
      overflow-hidden
      border
      border-red-500/40
      bg-gradient-to-br
      from-black/70
      via-black/60
      to-black/70
      backdrop-blur-xl
      shadow-[0_0_40px_rgba(220,38,38,0.35)]
      dark:shadow-[0_0_60px_rgba(220,38,38,0.45)]
      cursor-pointer
    "
  >
    {/* Neon red glow outline */}
    <div className="absolute inset-0 rounded-2xl ring-1 ring-red-500/30 pointer-events-none" />

    {/* Decorative red wave (optional, static SVG-like effect) */}
    <div className="absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full bg-red-600/20 blur-3xl" />

    {/* Cut corner */}
    <span className="absolute -top-4 -right-4 w-20 h-20 bg-red-600 rotate-45" />

    {/* Content */}
    <p className="relative z-10 text-white font-bold text-lg leading-relaxed mb-8">
      Transforming the structural steel industry with 30+ years of
      expertise in design, manufacturing, and engineering excellence.
    </p>

    <div className="relative z-10 flex flex-wrap gap-4">
      <Button
        size="lg"
        onClick={() =>
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
          })
        }
        className="
          bg-red-600
          text-white
          hover:bg-red-700
          shadow-[0_0_20px_rgba(220,38,38,0.6)]
          transition-all
        "
      >
        Contact Me
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="
          border-black
          text-black
          hover:bg-black
          hover:text-white
          dark:border-white/40
          dark:text-white
          dark:hover:bg-white/10
          dark:hover:border-red-500
          transition-all
        "
      >
        Learn More
      </Button>
    </div>
  </TiltCard>
</div>

        </div>
      </div>
    </section>
  );
};