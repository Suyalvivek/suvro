
import {  ArrowRight} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CompanySection = () => (
  <section id="company" className="py-24 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        {/* Section Label */}
        <div className="inline-block bg-red-600 px-6 py-2 mb-4">
          <p className="text-white font-bold tracking-widest uppercase text-sm">
            Caliber Tech Solutions
          </p>
        </div>

        {/* Accent line */}
        <div className="w-16 h-[3px] bg-red-600 mx-auto mb-6"></div>

        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Your Partner for Structural Steel Design and Detailing
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Founded in 2005, Caliber Tech Solutions® is a technology-driven structural steel design and detailing
          company having offices in India, US and UK. Caliber Tech Solutions® is an ISO 9001:2015 certified company.
          We provide faster and accurate structural steel design and detailing solutions for all types of residential,
          commercial, and industrial projects across the World.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div
          className="relative h-80 rounded-lg overflow-hidden group bg-cover bg-center"
          style={{ backgroundImage: "url(/images/global.webp)" }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Global Operations</h3>
            <p className="text-gray-200 text-sm">Offices in India, US, and UK serving clients worldwide</p>
          </div>
        </div>
        
        <div
          className="relative h-80 rounded-lg overflow-hidden group bg-cover bg-center"
          style={{ backgroundImage: "url(/images/suvro-3.webp)" }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Quality Certified</h3>
            <p className="text-gray-200 text-sm">ISO 9001:2015 certified for excellence in every project</p>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <Button
          size="lg"
          asChild
          className="bg-black text-white hover:bg-red-600 hover:text-white transition-colors"
        >
          <a href="#contact">
            Work With Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);
