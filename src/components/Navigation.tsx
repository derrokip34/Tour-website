import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage =
    location.pathname === "/" || location.pathname === "/home";

  // Handle scroll-based navbar color (only for home page)
  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true); // always solid on other pages
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/destinations", label: "Destinations" },
    { href: "/packages", label: "Packages" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg text-foreground"
            : "bg-transparent text-white"
          : "bg-white shadow-md text-foreground"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className={`text-2xl font-bold ${
              isHomePage && !isScrolled ? "text-white" : "text-primary"
            }`}
          >
            Ngenybor Tours
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-colors ${
                  isHomePage && !isScrolled
                    ? "text-white hover:text-primary"
                    : "text-foreground hover:text-primary"
                } ${
                  location.pathname === link.href
                    ? "text-primary font-semibold"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${
              isHomePage && !isScrolled ? "text-white" : "text-foreground"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 w-full text-white font-semibold"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
