import { useEffect, useRef, useState } from "react";
import factoryImg from "@/assets/factory.jpg";

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Machines Delivered" },
  { value: 20, suffix: "+", label: "Countries Served" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const duration = 2000;
          const step = Math.ceil(target / (duration / 16));
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl md:text-5xl font-black text-primary">
        {count}{suffix}
      </span>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded">
            <img
              src={factoryImg}
              alt="Mechton International equipment showroom"
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-foreground mb-6">
              Your Trusted Partner in Heavy Equipment
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mechton International is a premium global seller of heavy equipment and industrial machinery. 
              We bring you product solutions from the world's most trusted brands — ensuring performance, 
              durability, and reliability for every project.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From excavators and loaders to cranes and power generators, we are your one-stop destination 
              for high-functioning machinery that helps your industry grow and thrive on the global stage.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
