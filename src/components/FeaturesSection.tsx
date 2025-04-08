
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Users, Calendar, BookOpen, Globe, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-yellow-600" />,
      title: "Vibrant Community",
      description: "Connect with like-minded tech enthusiasts, share ideas, and collaborate on projects."
    },
    {
      icon: <Code className="h-8 w-8 text-yellow-600" />,
      title: "Skill Development",
      description: "Access workshops, tutorials, and resources to enhance your technical skills."
    },
    {
      icon: <Calendar className="h-8 w-8 text-yellow-600" />,
      title: "Exclusive Events",
      description: "Participate in hackathons, webinars, and networking events with industry experts."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-yellow-600" />,
      title: "Learning Resources",
      description: "Discover curated learning paths and resources tailored to your tech journey."
    },
    {
      icon: <Globe className="h-8 w-8 text-yellow-600" />,
      title: "Global Network",
      description: "Connect with a diverse community of professionals from around the world."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Career Acceleration",
      description: "Get mentorship, job referrals, and opportunities to fast-track your tech career."
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Why Join Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-tech-blue mb-4">
            Empowering Your Tech Journey
          </h2>
          <p className="text-tech-gray text-lg">
            TechBridge offers everything you need to grow in your tech career, from community support to practical learning experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 hover:border-yellow-200 hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="mb-2">
                  {feature.icon}
                </div>
                <CardTitle className="text-tech-blue text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-tech-gray text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
