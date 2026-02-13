import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-tight text-foreground opacity-0 animate-fade-up">
            Powering Industries.
            <br />
            <span className="text-primary">Global Reach.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            The international premium seller of heavy equipment &amp; machinery with product solutions from top-notch brands all over the world.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#products"
              className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm rounded hover:glow-red transition-all duration-300"
            >
              Explore Products
            </a>
            <a
              href="#cta"
              className="px-8 py-4 border-2 border-primary text-primary font-bold uppercase tracking-wider text-sm rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
