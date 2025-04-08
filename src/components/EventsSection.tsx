
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Web Development Workshop",
      date: "June 15, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Online",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Workshop"
    },
    {
      id: 2,
      title: "Tech Career Fair",
      date: "July 8, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Tech Hub Convention Center",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Career"
    },
    {
      id: 3,
      title: "AI & Machine Learning Hackathon",
      date: "August 22-23, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Innovation Campus",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Hackathon"
    }
  ];

  return (
    <section className="bg-yellow-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Upcoming Events
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-tech-blue mb-4">
            Join Our Tech Events
          </h2>
          <p className="text-tech-gray text-lg">
            Expand your knowledge and network with our diverse range of tech events, workshops, and meetups.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-3 left-3 bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {event.category}
                </div>
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-tech-blue mb-3">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-tech-gray">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-tech-gray">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-tech-gray">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-50">
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-tech-blue hover:bg-tech-navy text-white">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
