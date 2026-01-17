

export const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/10 rounded-lg"></div>

          <div className="relative rounded-lg shadow-xl overflow-hidden bg-black aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/?autoplay=0&autohide=1&modestbranding=1&rel=0&mute=1&showinfo=0&controls=0&disablekb=0&enablejsapi=1&iv_load_policy=3&playsinline=1&origin=https%3A%2F%2Fsuvroghosh.com&widgetid=1&forigin=https%3A%2F%2Fsuvroghosh.com%2F&aoriginsup=1&vf=6"
              title="Suvro Ghosh Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        
        <div>
          <div className="mb-8 text-center lg:text-left">
            <span className="inline-block bg-red-600 text-white px-6 py-2 text-sm sm:text-base font-semibold tracking-wide uppercase">
              About Me
            </span>

            <div className="w-14 h-[3px] bg-red-600 mx-auto lg:mx-0 mt-3 mb-4"></div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              30+ Years of Engineering Excellence
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The founder and the CEO of Caliber Tech Solutions Pvt. Ltd, a structural steel design and detailing
              company, has massive achievements as an entrepreneur. He has over 30 years of experience in the service,
              manufacturing, and engineering space.
            </p>
            <p>
              Made his way up the ladder of success by the immense amount of hard work and delivering high-quality
              services through both his initiatives, Caliber Tech Solutions Pvt Ltd and Caliber Tech Solutions LLC.
            </p>
            <p>
              Formally trained in management skills and has experience of various greenfield projects during his
              career. For the past several years, he has been utilizing his experience to grow and establish his own
              ventures in India and United States.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">30+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">3</p>
              <p className="text-sm text-muted-foreground">Global Offices</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">ISO</p>
              <p className="text-sm text-muted-foreground">9001:2015</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
