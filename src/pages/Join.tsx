
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const JoinPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-[#ecc719] text-tech-blue px-3 py-1 rounded-full text-sm font-medium mb-4">
              Volunteer With Us
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-alfa text-tech-blue mb-8">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Help us bridge the digital divide by sharing your knowledge and skills with seniors in your community.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg border-t-8 border-tech-blue">
            <h2 className="text-2xl font-bold text-tech-blue mb-6">Volunteer Application</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-tech-gray mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ecc719]" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-tech-gray mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ecc719]" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-tech-gray mb-1">Email Address</label>
                <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ecc719]" />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-tech-gray mb-1">Phone Number</label>
                <input type="tel" id="phone" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ecc719]" />
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-tech-gray mb-1">Tell us about your experience</label>
                <textarea id="experience" rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ecc719]"></textarea>
              </div>
              
              <Button className="w-full bg-tech-blue hover:bg-tech-darkblue text-[#ecc719] py-3">Submit Application</Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JoinPage;
