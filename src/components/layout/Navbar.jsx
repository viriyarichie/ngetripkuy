import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "../../utils";
import logo from "../../assets/images/logo.png";
// adsasdf;adfasfsdaf

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tours", path: "/tours" },
    { name: "Destinations", path: "/destinations" },
    { name: "Travel Tips", path: "/tips" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold font-sans tracking-tighter">
          <img
            src={logo} //load logo
            alt="Logo"
            className="h-10 w-auto object-contain scale-[3.4] origin-left"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "font-medium transition-colors hover:text-primary",
                scrolled ? "text-gray-600" : "text-white/90",
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant={scrolled ? "primary" : "white"}
            size="sm"
            className="ml-4"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-60 transition-transform duration-300 transform md:hidden flex flex-col items-center justify-center gap-8",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-2xl font-bold text-gray-800 hover:text-primary"
          >
            {link.name}
          </Link>
        ))}
        <div className="flex items-center justify-center">
          <a
            href="https://wa.me/628115929789?text=Hi%20I%20want%20to%20book%20a%20trip"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <Button size="lg">Contact Us</Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
