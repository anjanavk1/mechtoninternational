import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Store", path: "/store" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-black tracking-widest uppercase text-foreground block leading-none">
                MECHTON
              </span>
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
                International
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted international partner for premium heavy equipment and machinery from the world's leading brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@mechtoninternational.com" className="hover:text-primary transition-colors">
                  info@mechtoninternational.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span>
                  Meydan Grandstand, 6th floor,<br />
                  Meydan Road, Nad Al Sheba,<br />
                  Dubai, U.A.E.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mechton International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
