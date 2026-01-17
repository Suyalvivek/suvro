// Projects Section


export const ProjectsSection = () => {
  const projects = [
    {
      title: "Offshore Oil Platform",
      category: "Industrial",
      image: "/images/projects/industrial.webp",
    },
    {
      title: "Commercial Construction",
      category: "Commercial",
      image: "/images/projects/commercial.webp",
    },
    {
      title: "High-Rise Development",
      category: "Residential",
      image: "/images/projects/residential.webp",
    },
  ];
  
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex flex-col items-center">
            <span className="bg-red-600 text-white px-10 py-3 text-base font-extrabold tracking-wide uppercase">
              Our Work
            </span>

            <span className="mt-3 h-[3px] w-16 bg-red-600 self-start"></span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            Latest Projects
          </h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Explore our portfolio of structural steel projects spanning residential, commercial, and industrial sectors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative h-96 rounded-lg overflow-hidden group cursor-pointer bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* <p className="text-primary text-sm font-medium mb-1">{project.category}</p> */}
                {/* <h3 className="text-xl font-semibold text-white">{project.title}</h3> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
