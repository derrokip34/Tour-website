import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "Nairobi, Kenya",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+254 722 790 407 895", "+254 733 223 413"],
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@ngenybor@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-foreground leading-tight">
            Plan Your Dream Safari
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Get in touch with us to start planning your unforgettable African adventure
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">
              Contact Information
            </h3>
            <div className="space-y-4 sm:space-y-6 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="flex items-start gap-4 p-4 sm:p-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <Icon className="text-primary" size={22} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1 text-foreground">
                          {item.title}
                        </h4>
                        {Array.isArray(item.details) ? (
                          item.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm sm:text-base">
                              {detail}
                            </p>
                          ))
                        ) : (
                          <p className="text-muted-foreground text-sm sm:text-base">
                            {item.details}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-md">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">
                  Send Us a Message
                </h3>
                <form className="space-y-4">
                  <Input placeholder="Your Name" className="h-12 text-base" />
                  <Input type="email" placeholder="Your Email" className="h-12 text-base" />
                  <Input placeholder="Subject" className="h-12 text-base" />
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-[140px] sm:min-h-[160px] resize-none text-base"
                  />
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 text-base"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
