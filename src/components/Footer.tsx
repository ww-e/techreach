
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
          
        
          
        
          
         
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tech-gray text-sm mb-4 md:mb-0">
            © 2025 TechBridge. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
