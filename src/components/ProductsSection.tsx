import catGenerator from "@/assets/cat-generator.jpg";
import catEngine from "@/assets/cat-engine.jpg";
import catEarthmoving from "@/assets/cat-earthmoving.jpg";
import catUndercarriage from "@/assets/cat-undercarriage.jpg";
import catGet from "@/assets/cat-get.jpg";
import catAutomobile from "@/assets/cat-automobile.jpg";
import catOil from "@/assets/cat-oil.jpg";
import catFilters from "@/assets/cat-filters.jpg";
import catDrill from "@/assets/cat-drill.jpg";

const products = [
  {
    name: "Generator Parts",
    description: "Spare parts for generators and power solutions.",
    image: catGenerator,
  },
  {
    name: "Engine Parts",
    description: "Diesel engine components and accessories.",
    image: catEngine,
  },
  {
    name: "Earthmoving & Dumper Parts",
    description: "Heavy earthmoving equipment parts.",
    image: catEarthmoving,
  },
  {
    name: "Undercarriage Parts",
    description: "Tracks, rollers, idlers, sprockets and more.",
    image: catUndercarriage,
  },
  {
    name: "Ground Engaging Tools",
    description: "Buckets, teeth, tips, adapters and cutting edges.",
    image: catGet,
  },
  {
    name: "Automobile Parts",
    description: "Automotive components and spare parts.",
    image: catAutomobile,
  },
  {
    name: "Engine Oil & Grease",
    description: "Lubricants and industrial greases.",
    image: catOil,
  },
  {
    name: "Filtration Solutions",
    description: "Filters for fuel, oil, air, and hydraulic systems.",
    image: catFilters,
  },
  {
    name: "Drill Rigs & Crusher Parts",
    description: "Equipment for drilling and crushing operations.",
    image: catDrill,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Our Products</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-foreground">
            Product Categories
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Premium solutions from top-notch brands worldwide — built to perform, engineered to last.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-card rounded overflow-hidden border-glow-red cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold uppercase tracking-wider text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold uppercase text-foreground mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
