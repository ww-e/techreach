
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-yellow-600 rounded-md flex items-center justify-center">
                <span className="font-bold text-white">TB</span>
              </div>
              <span className="font-bold text-xl text-tech-blue">TechReach</span>
            </Link>
  
            <div className="flex space-x-4">
             
            </div>
          </div>
          
          <div>
            <h3 className="text-tech-blue font-semibold mb-4">Programs</h3>
            <ul className="space-y-3 text-tech-gray">
              <li><Link to="/programs" className="hover:text-yellow-600">Mentorship</Link></li>
              <li><Link to="/programs" className="hover:text-yellow-600">Workshops</Link></li>
              <li><Link to="/programs" className="hover:text-yellow-600">Hackathons</Link></li>
              <li><Link to="/programs" className="hover:text-yellow-600">Career Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-tech-blue font-semibold mb-4">Community</h3>
            <ul className="space-y-3 text-tech-gray">
              <li><Link to="/community" className="hover:text-yellow-600">Forums</Link></li>
              <li><Link to="/community" className="hover:text-yellow-600">Discord</Link></li>
              <li><Link to="/community" className="hover:text-yellow-600">Meetups</Link></li>
              <li><Link to="/community" className="hover:text-yellow-600">Success Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-tech-blue font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-tech-gray">
              <li><Link to="/about" className="hover:text-yellow-600">About Us</Link></li>
              <li><Link to="/partners" className="hover:text-yellow-600">Partners</Link></li>
              <li><Link to="/blog" className="hover:text-yellow-600">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-600">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tech-gray text-sm mb-4 md:mb-0">
            © 2025 TechBridge. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-tech-gray">
            <Link to="/privacy" className="hover:text-yellow-600">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-yellow-600">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-yellow-600">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
