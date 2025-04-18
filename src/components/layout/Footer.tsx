
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-loofinity-teal text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/9317c2c4-4ff9-4c43-a494-b84a93cc2c73.png" 
                alt="Loofinity" 
                className="h-12 mr-3" 
              />
              <h3 className="text-xl font-bold">Loofinity</h3>
            </div>
            <p className="mb-4 text-loofinity-light">
              Premium mobile toilet solutions for events, construction sites, and more. Quality, cleanliness, and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-loofinity-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-loofinity-accent">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-loofinity-accent">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-loofinity-light pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-loofinity-light hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products/toilets" className="text-loofinity-light hover:text-white">
                  Mobile Toilets
                </Link>
              </li>
              <li>
                <Link to="/products/chemicals" className="text-loofinity-light hover:text-white">
                  Cleaning Chemicals
                </Link>
              </li>
              <li>
                <Link to="/rental" className="text-loofinity-light hover:text-white">
                  Rental Options
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-loofinity-light hover:text-white">
                  Maintenance Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-loofinity-light hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-loofinity-light hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-loofinity-light pb-2">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>
                  123 Sanitation Drive,<br />
                  Clean City, CL 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@loofinity.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>
                  Monday - Friday: 8am - 6pm<br />
                  Saturday: 9am - 4pm<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-loofinity-light pb-2">
              Stay Updated
            </h4>
            <p className="mb-4 text-loofinity-light">
              Subscribe to our newsletter for news and special offers.
            </p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 rounded-l-md flex-grow focus:outline-none text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-loofinity-accent hover:bg-amber-500 text-white px-4 py-2 rounded-r-md"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-loofinity-light pt-4 text-center">
          <p className="text-sm text-loofinity-light">
            &copy; {new Date().getFullYear()} Loofinity. All rights reserved. Premium Mobile Toilet Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
