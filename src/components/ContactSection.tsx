
import { Mail, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-tech-blue mb-20 rounded-xl border border-tech-darkblue" aria-labelledby="contact-heading">
      <div className="absolute bottom-0 right-10 w-48 h-48 bg-[#ecc719]/20 rounded-full blur-3xl"></div>
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-[#ecc719] text-tech-blue px-3 py-1 rounded-full text-sm font-medium mb-4">
            Contact Us
          </div>
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-alfa text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Have questions or want to learn more about our programs? 
            Reach out to us - we'd love to hear from you!
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a 
              href="mailto:techreachgroup@gmail.com"
              className="flex items-center gap-4 px-8 py-6 bg-white rounded-lg hover:shadow-md transition-all border-2 border-[#ecc719] hover:border-yellow-300 w-full max-w-md justify-center accessible-focus"
              aria-label="Email us at techreachgroup@gmail.com"
            >
              <Mail className="h-6 w-6 text-tech-blue" aria-hidden="true" />
              <span className="text-foreground text-lg">techreachgroup@gmail.com</span>
            </a>
            
            <a 
              href="https://instagram.com/techreachplus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-8 py-6 bg-white rounded-lg hover:shadow-md transition-all border-2 border-[#ecc719] hover:border-yellow-300 w-full max-w-md justify-center accessible-focus"
              aria-label="Follow us on Instagram @techreachplus"
            >
              <Instagram className="h-6 w-6 text-tech-blue" aria-hidden="true" />
              <span className="text-foreground text-lg">@techreachplus</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
