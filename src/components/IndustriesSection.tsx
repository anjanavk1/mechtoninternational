import { Factory, Droplets, Zap, Pickaxe, Building2, Ship } from "lucide-react";

const industries = [
  { icon: Building2, name: "Construction" },
  { icon: Pickaxe, name: "Mining" },
  { icon: Droplets, name: "Oil & Gas" },
  { icon: Zap, name: "Power & Energy" },
  { icon: Ship, name: "Marine & Ports" },
  { icon: Factory, name: "Manufacturing" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Sectors</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-foreground">
            Industries We Serve
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group flex items-center gap-4 p-6 rounded bg-card border-glow-red cursor-pointer"
            >
              <industry.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300 shrink-0" />
              <span className="font-bold uppercase tracking-wider text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
