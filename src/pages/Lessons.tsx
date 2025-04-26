import { Smartphone, Video, Shield, Mail, Share2 } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import Navbar from "@/components/Navbar";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: 'general',
    name: 'General Functions',
    icon: <Smartphone />,
    color: 'text-blue-700',
    bgColor: 'bg-blue-100',
  },
  {
    id: 'communication',
    name: 'Communication Tools',
    icon: <Video />,
    color: 'text-purple-700',
    bgColor: 'bg-purple-100',
  },
  {
    id: 'safety',
    name: 'Internet Safety',
    icon: <Shield />,
    color: 'text-red-700',
    bgColor: 'bg-red-100',
  },
  {
    id: 'google',
    name: 'Google Services',
    icon: <Mail />,
    color: 'text-green-700',
    bgColor: 'bg-green-100',
  },
  {
    id: 'social',
    name: 'Social Media',
    icon: <Share2 />,
    color: 'text-yellow-700',
    bgColor: 'bg-yellow-100',
  },
];

const lessons = [
  { id: 'g1', title: 'iPhone Basics', category: 'general', description: 'Learn the fundamentals of using an iPhone, from navigating the home screen to managing settings.' },
  { id: 'g2', title: 'Android Basics', category: 'general', description: 'Get started with Android devices, understanding the interface and essential features.' },
  { id: 'c1', title: 'Google Meet', category: 'communication', description: 'Learn how to join and host video meetings with Google Meet.' },
  { id: 'c2', title: 'FaceTime', category: 'communication', description: 'Make video calls with friends and family using Apple\'s FaceTime.' },
  { id: 'c3', title: 'Gmail', category: 'communication', description: 'Set up and use Gmail for email communication.' },
  { id: 'c4', title: 'WhatsApp', category: 'communication', description: 'Send messages, make calls, and share photos using WhatsApp.' },
  { id: 'c5', title: 'iMessage', category: 'communication', description: 'Master Apple\'s messaging app for texting, photos, and videos.' },
  { id: 'c6', title: 'Facebook Messenger', category: 'communication', description: 'Connect with friends and family through Facebook\'s messaging platform.' },
  { id: 's1', title: 'Scam Calls', category: 'safety', description: 'Learn to identify and protect yourself from telephone scams.' },
  { id: 's2', title: 'Safe Browsing Practices', category: 'safety', description: 'Navigate the web safely with these essential browsing practices.' },
  { id: 's3', title: 'Phishing', category: 'safety', description: 'Recognize and avoid phishing attempts in emails and websites.' },
  { id: 's4', title: 'Passwords', category: 'safety', description: 'Create and manage strong passwords to protect your accounts.' },
  { id: 's5', title: 'VPN', category: 'safety', description: 'Understand how VPNs work and when to use them for privacy.' },
  { id: 's6', title: 'Ad Blockers', category: 'safety', description: 'Set up and use ad blockers to improve your browsing experience.' },
  { id: 'gs1', title: 'Gmail', category: 'google', description: 'Master email management with Gmail\'s features and organization tools.' },
  { id: 'gs2', title: 'Google Drive', category: 'google', description: 'Store, share, and collaborate on files with Google Drive.' },
  { id: 'gs3', title: 'Google Calendar', category: 'google', description: 'Schedule and manage your appointments with Google Calendar.' },
  { id: 'gs4', title: 'Google Meet', category: 'google', description: 'Connect through video calls and meetings with Google Meet.' },
  { id: 'gs5', title: 'Google Maps', category: 'google', description: 'Navigate and explore locations with Google Maps.' },
  { id: 'gs6', title: 'Google Translate', category: 'google', description: 'Break language barriers with Google Translate.' },
  { id: 'gs7', title: 'Google Sheets', category: 'google', description: 'Create and manage spreadsheets with Google Sheets.' },
  { id: 'sm1', title: 'Facebook', category: 'social', description: 'Connect with friends and family on the world\'s largest social network.' },
  { id: 'sm2', title: 'Instagram', category: 'social', description: 'Share photos and videos with friends and followers on Instagram.' },
  { id: 'sm3', title: 'WhatsApp', category: 'social', description: 'Chat and connect with contacts through WhatsApp messaging.' },
  { id: 'sm4', title: 'Twitter', category: 'social', description: 'Stay updated with news and trends on Twitter.' },
  { id: 'sm5', title: 'Staying Safe on Social Media', category: 'social', description: 'Learn best practices for protecting your privacy on social platforms.' },
];

const LessonsPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeLessonId, setActiveLessonId] = useState(null);

  const filteredLessons = activeCategory
    ? lessons.filter((lesson) => lesson.category === activeCategory)
    : lessons;

  const activeLesson = lessons.find((lesson) => lesson.id === activeLessonId);

  return (
    <section className="bg-white">
          <Navbar />

      <div className="container px-4 mx-auto py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-[#ecc719] text-tech-blue px-3 py-1 rounded-full text-sm font-medium mb-4">
            Technology Education
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-alfa text-tech-blue mb-8">
            Our Technology Lessons
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Explore our curriculum designed to empower seniors with essential technology skills for the digital age.
          </p>
        </div>

        <div className="mb-10">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="outline"
              className={`px-4 py-2 rounded-full text-base font-medium transition-colors ${
                activeCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background hover:bg-muted'
              }`}
              onClick={() => setActiveCategory(null)}
            >
              All Lessons
            </Button>

            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                className={`px-4 py-2 rounded-full text-base font-medium transition-colors flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background hover:bg-muted'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center ${category.bgColor} ${category.color}`}
                >
                  {category.icon}
                </span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson) => {
            const category = categories.find((c) => c.id === lesson.category);
            return (
              <Card
                key={lesson.id}
                className="border border-muted shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                onClick={() => setActiveLessonId(lesson.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${category?.bgColor} ${category?.color}`}
                    >
                      {category?.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-foreground">{lesson.title}</h3>
                      <Badge variant="outline" className={`${category?.color} ${category?.bgColor} mt-1`}>
                        {category?.name}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg line-clamp-3">{lesson.description}</p>
                  <Button
                    variant="link"
                    className="mt-4 text-primary hover:text-primary/80 text-base font-medium pl-0"
                  >
                    View lesson
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {activeLesson && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveLessonId(null)}
          >
            <Card
              className="max-w-2xl w-full rounded-lg shadow-lg animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-medium text-foreground mb-2">{activeLesson.title}</h3>
                <Badge
                  className={`mb-4 ${categories.find((c) => c.id === activeLesson.category)?.color} ${categories.find(
                    (c) => c.id === activeLesson.category
                  )?.bgColor}`}
                >
                  {categories.find((c) => c.id === activeLesson.category)?.name}
                </Badge>
                <p className="text-muted-foreground text-lg mb-6">{activeLesson.description}</p>
                <div className="bg-muted/50 p-4 rounded-lg border border-border">
                  <p className="text-muted-foreground text-base">
                    This lesson is available for virtual instruction. Register for a class using our lesson sign up form.
                  </p>
                </div>
              </CardContent>
              <div className="bg-muted/30 p-4 flex justify-end border-t">
                <Button
                  className="text-primary-foreground bg-primary hover:bg-primary/90 text-lg px-6 py-3"
                  onClick={() => setActiveLessonId(null)}
                >
                  Close
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default LessonsPage;
