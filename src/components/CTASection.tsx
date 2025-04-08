
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-tech-blue py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-yellow-400"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium mb-6">
            Join Our Community Today
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Accelerate Your Tech Career?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Connect with peers, mentors, and opportunities that will help you grow and thrive in the tech industry.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg px-8">
              Become a Member
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
