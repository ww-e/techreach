
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Get In Touch
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-alfa text-tech-blue mb-8">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Have questions about our program? Want to learn more about how we can help? Reach out to us today.
            </p>
          </div>
        </div>
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
