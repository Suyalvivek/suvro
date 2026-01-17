
import {  Building2, PenTool, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
export const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Steel Structure Design",
      description: "Comprehensive structural steel design services for residential, commercial, and industrial projects with precision engineering."
    },
    {
      icon: PenTool,
      title: "Steel Structure Detailing",
      description: "Accurate and detailed drawings that ensure seamless fabrication and erection of steel structures."
    },
    {
      icon: Wrench,
      title: "Steel Structure and Piping Fabrication",
      description: "End-to-end fabrication solutions for steel structures and industrial piping systems."
    }
  ];
  
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block bg-red-600 text-white px-6 py-2 text-sm sm:text-base font-semibold tracking-wide uppercase">
            Our Services
          </span>

          <div className="w-14 h-[3px] bg-red-600 mx-auto mt-3 mb-4"></div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Comprehensive Steel Solutions
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            We provide faster and accurate structural steel design and detailing solutions for all types of projects
            across the world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};