
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="autosite_logo.webp" 
              alt="Autosite Logo" 
              className="w-10 h-10 brightness-0 invert filter" 
            />
            <span className="text-2xl font-bold text-white ">Autosite</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a   href="#services" className="nav-link text-gray-300 font-medium">Services</a>
            <a href="#features" className="nav-link text-gray-300 font-medium">Features</a>
            <a href="#testimonials" className="nav-link text-gray-300 font-medium">Testimonials</a>
            <a href="#contact" className="nav-link text-gray-300 font-medium">Contact</a>
          </nav>

         <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://calendly.com/guptaritik67856/30min"
            className="h-10 inline-flex items-center px-4 py-2 bg-gray-700 border border-gray-600 rounded-full text-blue-400 text-sm "
          >
            Book Appointment
          </a>
          </div>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#services" className="nav-link text-gray-300">Services</a>
              <a href="#features" className="nav-link text-gray-300">Features</a>
              <a href="#testimonials" className="nav-link text-gray-300">Testimonials</a>
              <a href="#contact" className="nav-link text-gray-300">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-300 hover:bg-gray-800">Login</Button>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
