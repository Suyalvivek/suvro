import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
// Footer

export const Footer = () => (
  <footer className="bg-black text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img
            src="/images/suvro-logo.webp"
            alt="Suvro Ghosh Logo"
            className="w-12 h-12 rounded-full object-contain"
          />
          <div>
            <p className="font-semibold">Suvro Ghosh</p>
            <p className="text-sm text-white/70">CEO, Caliber Tech Solutions Pvt Ltd</p>
          </div>
        </div>
        
        <nav className="flex items-center gap-6">
          <a href="#about" className="text-sm text-white/70 hover:text-background transition-colors">About</a>
          <a href="#company" className="text-sm text-white/70 hover:text-background transition-colors">Company</a>
          <a href="#services" className="text-sm text-white/70 hover:text-background transition-colors">Services</a>
          <a href="#contact" className="text-sm text-white/70 hover:text-background transition-colors">Contact</a>
        </nav>
      </div>

      <div className="flex items-center justify-center gap-6 mt-6">
        {[
          { href: "https://www.facebook.com/suvro09", icon: Facebook },
          { href: "https://www.instagram.com/suvroghosh/", icon: Instagram },
          { href: "https://x.com/suvroghosh", icon: Twitter },
          { href: "https://suvroghosh.com/Your%20https://www.linkedin.com/in/suvro-ghosh-structural-engineering-and-steel-fabrication-b3946516/https://www.linkedin.com/in/suvro-ghosh-structural-engineering-and-steel-fabrication-b3946516/URL", icon: Linkedin },
        ].map(({ href, icon: Icon }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:text-red-600 transition-colors
                       after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2
                       after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300
                       hover:after:w-6"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
      
      <div className="border-t border-white/20 mt-8 pt-8 text-center">
        <p className="text-sm text-white/70">Copyright © 2025 Suvro Ghosh. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);