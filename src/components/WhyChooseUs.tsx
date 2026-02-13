import { Shield, Award, Globe, Wrench } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Top Brand Partners",
    description: "We source exclusively from the world's most trusted heavy equipment manufacturers.",
  },
  {
    icon: Award,
    title: "Certified Quality",
    description: "Every machine meets rigorous international quality and safety certifications.",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "Seamless logistics and delivery to 20+ countries across 5 continents.",
  },
  {
    icon: Wrench,
    title: "After-Sales Support",
    description: "Comprehensive service, spare parts, and technical support for every machine we sell.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-foreground">
            The Mechton Advantage
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center group p-8 rounded bg-card border-glow-red"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold uppercase text-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
