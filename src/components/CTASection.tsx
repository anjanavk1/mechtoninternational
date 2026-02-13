const CTASection = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-foreground mb-6">
          Partner With <span className="text-primary">Industry Leaders</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Ready to power your next project? Connect with Mechton International for premium heavy equipment
          solutions from the world's best brands.
        </p>
        <a
          href="mailto:info@mechtoninternational.com"
          className="inline-block px-10 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm rounded glow-red hover:scale-105 transition-transform duration-300"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
};

export default CTASection;
