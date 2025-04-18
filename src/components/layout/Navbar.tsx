import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 backdrop-blur-sm ${
        isScrolled
          ? "bg-white/90 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/9317c2c4-4ff9-4c43-a494-b84a93cc2c73.png" 
            alt="Loofinity" 
            className="h-10 md:h-12" 
          />
          <span className={`text-2xl font-bold ${
            isScrolled ? "text-loofinity-teal" : "text-white"
          }`}>
            Loofinity
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/" className="px-3 py-2 rounded-md text-black hover:text-loofinity-teal">
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-3 py-2 rounded-md flex items-center text-black hover:text-loofinity-teal">
                Products <ChevronDown size={16} className="ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/products/toilets" className="w-full">
                  Mobile Toilets
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/products/chemicals" className="w-full">
                  Cleaning Chemicals
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/rental" className="px-3 py-2 rounded-md text-black hover:text-loofinity-teal">
            Rental
          </Link>
          
          <Link to="/services" className="px-3 py-2 rounded-md text-black hover:text-loofinity-teal">
            Services
          </Link>
          
          <Link to="/about" className="px-3 py-2 rounded-md text-black hover:text-loofinity-teal">
            About Us
          </Link>
          
          <Link to="/contact" className="px-3 py-2 rounded-md text-black hover:text-loofinity-teal">
            Contact
          </Link>
        </div>

        <div className="hidden md:block">
          <Link to="/rental">
            <Button className="bg-loofinity-accent hover:bg-amber-500">
              <Phone size={18} className="mr-2" /> 
              <span className="text-[#F2FCE2]">Get a Quote</span>
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} className={isScrolled ? "text-gray-700" : "text-white"} />
          ) : (
            <Menu size={24} className={isScrolled ? "text-gray-700" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg w-full py-4 px-6 absolute top-16">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-gray-700 hover:text-loofinity-teal hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products/toilets"
              className="px-3 py-2 rounded-md text-gray-700 hover:text-loofinity-teal hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mobile Toilets
            </Link>
            <Link
              to="/products/chemicals"
              className="px-3 py-2 rounded-md text-gray-700 hover:text-loofinity-teal hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cleaning Chemicals
            </Link>
            <Link
              to="/rental"
              className="px-3 py-2 rounded-md text-gray-700 hover:text-loofinity-teal hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rental
            </Link>
            <Link
              to="/services"
              className="px-3 py-2 rounded-md text-gray-700 hover:text-loofinity-teal hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 rounded-md text-gray-700 hover:text-loofinity-teal hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 rounded-md text-gray-700 hover:text-loofinity-teal hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-loofinity-accent hover:bg-amber-500 text-white">
              <Phone size={18} className="mr-2" /> Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
