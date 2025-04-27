
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-40 w-full border-b shadow-sm">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
  <span className="font-bold text-xl text-tech-blue mr-10">TechReach</span>
</Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/" className="font-medium text-tech-blue transition-colors hover:text-yellow-600">
              Home
            </Link>
            <Link to="/programs" className="font-medium text-tech-gray transition-colors hover:text-yellow-600">
              Programs
            </Link>
            <Link to="https://form.jotform.com/251145559793063" className="font-medium text-tech-gray transition-colors hover:text-yellow-600">
              Lesson Sign Up
            </Link>
            <Link to="/team" className="font-medium text-tech-gray transition-colors hover:text-yellow-600">
              Team
            </Link>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSekIPo5lawREN-tN-san_5Xdtyi9w3iX6_AKaEt0NnaXskYmA/viewform" className="font-medium text-tech-gray transition-colors hover:text-yellow-600">
              Join
            </Link>
            <Link to="/contact" className="font-medium text-tech-gray transition-colors hover:text-yellow-600">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex">
          <a href = "/contact" className="flex items-center">
            <Button variant="outline" className="mr-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50">
              Contact
            </Button>
            </a>
            <a href = "https://docs.google.com/forms/d/e/1FAIpQLSekIPo5lawREN-tN-san_5Xdtyi9w3iX6_AKaEt0NnaXskYmA/viewform" className="flex items-center">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
              Join Now
            </Button>
            </a>
          </div>
          <button 
            className="flex md:hidden" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b p-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="font-medium text-tech-blue hover:text-yellow-600">
              Home
            </Link>
            <Link to="/programs" className="font-medium text-tech-gray hover:text-yellow-600">
              Programs
            </Link>
            <Link to="/community" className="font-medium text-tech-gray hover:text-yellow-600">
              Community
            </Link>
            <Link to="/events" className="font-medium text-tech-gray hover:text-yellow-600">
              Events
            </Link>
            <Link to="/about" className="font-medium text-tech-gray hover:text-yellow-600">
              About
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <a href="/contact" className="font-medium text-tech-gray hover:text-yellow-600">
              <Button variant="outline" className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-50">
                Contact
              </Button>
              </a>
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                Join Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
