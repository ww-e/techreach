
import { Monitor, Users, Heart } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white shadow-md p-8 rounded-lg border-t-4 border-tech-blue hover:border-[#ecc719] transition-colors">
    <div className="w-16 h-16 bg-tech-blue rounded-full flex items-center justify-center mb-6 text-[#ecc719]">
      {icon}
    </div>
    <h3 className="text-xl font-medium text-tech-blue mb-4">{title}</h3>
    <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
  </div>
);

const MissionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-[#ecc719] text-tech-blue px-3 py-1 rounded-full text-sm font-medium mb-4">
            Our Purpose
          </div>
          <h2 className="text-3xl md:text-4xl font-alfa text-tech-blue mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tech Reach is a youth-led initiative committed to bridging the digital divide for seniors. We provide interactive virtual lessons that teach essential technology skills, helping them navigate devices, stay connected, and confidently engage in the digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Monitor size={32} aria-hidden="true" />}
            title="Interactive Learning"
            description="Our curriculum is designed to provide hands-on, practical technology education through engaging virtual sessions."
          />
          <FeatureCard 
            icon={<Users size={32} aria-hidden="true" />}
            title="Youth-Led Teaching"
            description="Our team of dedicated young volunteers are passionate about making technology accessible to all generations."
          />
          <FeatureCard 
            icon={<Heart size={32} aria-hidden="true" />}
            title="Building Connections"
            description="We help seniors stay connected with loved ones and participate confidently in today's digital society."
          />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
