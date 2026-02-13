import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Store", path: "/store" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled || location.pathname !== "/" ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex flex-col leading-none">
          <span className="text-2xl font-black tracking-widest uppercase text-foreground">
            MECHTON
          </span>
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
            International
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.path}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${isActive(l.path) ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="px-5 py-2 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wider rounded hover:glow-red transition-all duration-300"
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <ul className="flex flex-col items-center gap-4 py-6">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors ${isActive(l.path) ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-2 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wider rounded"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
