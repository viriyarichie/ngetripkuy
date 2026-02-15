import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '../../utils';
import { SiTiktok } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-4">ngetripkuy</h3>
          <p className="text-gray-400 mb-6">
            Explore the hidden gems of Derawan Island with us. Unforgettable journeys, minimalist style.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/_ngetripkuy_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-primary transition-colors"><Instagram /></a>
            <a href="https://www.tiktok.com/@ngetripkuy" className="hover:text-primary transition-colors mt-0.5" aria-label="TikTok"><SiTiktok size={20}/></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-400 hover:text-primary">About Us</Link></li>
            <li><Link to="/tours" className="text-gray-400 hover:text-primary">Our Tours</Link></li>
            <li><Link to="/destinations" className="text-gray-400 hover:text-primary">Destinations</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-bold mb-4">Support</h4>
          <ul className="space-y-2">
            <li><Link to="/tips" className="text-gray-400 hover:text-primary">Travel Tips</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-primary">FAQs</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-primary">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-400">
              <Phone size={18} className="text-primary" />
              <span>+62 811-5929-789</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <Mail size={18} className="text-primary" />
              <span>ngetripkuy@gmailcom</span>
            </li>
            <li className="flex items-start gap-3 text-gray-400">
              <MapPin size={18} className="text-primary mt-1" />
              <span>Tarakan, North Kalimantan, Indonesia</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ngetripkuy. All rights reserved.
      </div>
    </footer>
  );
}
