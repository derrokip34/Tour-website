import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Packages = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const packages = [
    {
      name: "3-Day Maasai Mara Safari",
      price: "$450",
      duration: "3 Days / 2 Nights",
      groupSize: "2-6 People",
      description: "Experience the iconic Maasai Mara with game drives and wildlife viewing",
      features: [
        "Airport transfers included",
        "Luxury tented camp accommodation",
        "All meals and park fees",
        "Professional guide",
        "Game drives twice daily",
      ],
    },
    {
      name: "7-Day Kenya Highlights Safari",
      price: "$1,250",
      duration: "7 Days / 6 Nights",
      groupSize: "2-6 People",
      description: "Comprehensive tour of Kenya's best parks and wildlife reserves",
      features: [
        "Maasai Mara, Amboseli & Lake Nakuru",
        "Lodge and camp accommodation",
        "All meals and park fees",
        "4x4 safari vehicle",
        "Cultural village visit",
      ],
      popular: true,
    },
    {
      name: "10-Day Safari & Beach Holiday",
      price: "$1,800",
      duration: "10 Days / 9 Nights",
      groupSize: "2-6 People",
      description: "Ultimate Kenya experience combining safari adventure with beach relaxation",
      features: [
        "5 days safari, 5 days beach",
        "Mix of camps and beach resort",
        "All meals and activities",
        "Water sports at Diani Beach",
        "Sunset dhow cruise",
      ],
    },
  ];

  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Safari Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Carefully crafted safari experiences for every budget and preference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 delay-${index * 100} ${
                pkg.popular ? "border-primary border-2" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-base">{pkg.description}</CardDescription>
                <div className="pt-4">
                  <div className="text-4xl font-bold text-primary mb-4">
                    {pkg.price}
                    <span className="text-base text-muted-foreground font-normal"> / person</span>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span>{pkg.groupSize}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="text-accent shrink-0 mt-1" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    pkg.popular ? "bg-primary hover:bg-primary/90" : ""
                  }`}
                  size="lg"
                >
                  Book This Safari
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
