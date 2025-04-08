
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "TechBridge has been instrumental in my growth as a developer. The community support and learning resources have helped me land my dream job.",
      author: "Sarah Johnson",
      role: "Frontend Developer",
      company: "TechCorp"
    },
    {
      id: 2,
      quote: "The mentorship I received through TechBridge's network completely changed my career trajectory. I'm now working at a top tech company!",
      author: "Michael Chen",
      role: "Software Engineer",
      company: "InnovateTech"
    },
    {
      id: 3,
      quote: "As someone transitioning into tech, TechBridge provided me with the guidance and resources I needed. The community is incredibly supportive.",
      author: "Priya Patel",
      role: "Data Scientist",
      company: "DataDrive"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-tech-blue mb-4">
            What Our Community Says
          </h2>
          <p className="text-tech-gray text-lg">
            Hear from members who have transformed their careers with TechBridge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="bg-gradient-to-b from-white to-yellow-50 border-yellow-100">
              <CardContent className="pt-6">
                <QuoteIcon className="h-8 w-8 text-yellow-500 mb-4" />
                <p className="text-tech-gray mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-700 font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-tech-blue">{testimonial.author}</div>
                    <div className="text-sm text-tech-gray">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
