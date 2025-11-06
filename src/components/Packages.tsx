import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Users, MapPin, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Packages = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const packages = [
    {
      name: "3-Day Maasai Mara Safari",
      price: "$450",
      duration: "3 Days / 2 Nights",
      groupSize: "2-6 People",
      description: "Experience the iconic Maasai Mara with thrilling game drives and luxury tented camps.",
      features: [
        "Airport transfers included",
        "Luxury tented camp accommodation",
        "All meals and park fees",
        "Professional guide",
        "Twice-daily game drives",
        "Visit to local Maasai village",
      ],
      popular: false,
    },
    {
      name: "5-Day Amboseli & Tsavo Adventure",
      price: "$850",
      duration: "5 Days / 4 Nights",
      groupSize: "2-8 People",
      description: "Combine Amboseli’s elephant herds with the rugged landscapes of Tsavo.",
      features: [
        "Amboseli and Tsavo National Parks",
        "Mount Kilimanjaro views",
        "4x4 safari vehicle",
        "All park entry fees",
        "Guided nature walks",
        "Photography sessions with local experts",
      ],
      popular: false,
    },
    {
      name: "7-Day Kenya Highlights Safari",
      price: "$1,250",
      duration: "7 Days / 6 Nights",
      groupSize: "2-6 People",
      description: "See Kenya’s best parks in one unforgettable adventure.",
      features: [
        "Maasai Mara, Amboseli & Lake Nakuru",
        "Lodge and camp accommodation",
        "All meals and park fees",
        "4x4 safari vehicle with window seat",
        "Cultural village visit",
        "Hot air balloon optional add-on",
      ],
      popular: false,
    },
  ];

  return (
    <section id="packages" className="py-20 md:py-40 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Safari Packages
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our handcrafted safari experiences — whether you’re a first-time visitor or a returning explorer, we have something for every traveler.
          </p>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 sm:gap-y-16 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative min-h-[620px] md:h-[620px] flex flex-col justify-between overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 delay-${index * 100} ${
                pkg.popular ? "border-primary border-2" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl mb-2 flex items-center gap-2">
                  <MapPin size={18} className="text-primary" /> {pkg.name}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">{pkg.description}</CardDescription>
                <div className="pt-4">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                    {pkg.price}
                    <span className="text-sm sm:text-base text-muted-foreground font-normal"> / person</span>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} />
                      <span>{pkg.groupSize}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="text-accent shrink-0 mt-1" size={16} />
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

        {/* Extra Info Section */}
        <div className="mt-24 md:mt-32 text-center max-w-5xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Why Choose Our Safari Packages?</h3>
          <p className="text-base sm:text-lg text-muted-foreground mb-10">
            At Ngenybor Tours & Safaris, we don’t just offer tours — we craft unforgettable journeys. 
            Our safaris are led by passionate local guides, designed around sustainability, and tailored to match your comfort, curiosity, and sense of adventure.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-10">
            <div className="flex flex-col items-center max-w-[250px]">
              <Star className="text-primary mb-2" size={32} />
              <p className="font-semibold text-base sm:text-lg">Top-rated Guides</p>
              <p className="text-sm text-muted-foreground text-center">
                Our guides are certified professionals with deep local knowledge.
              </p>
            </div>
            <div className="flex flex-col items-center max-w-[250px]">
              <Check className="text-primary mb-2" size={32} />
              <p className="font-semibold text-base sm:text-lg">All-Inclusive Packages</p>
              <p className="text-sm text-muted-foreground text-center">
                Transparent pricing — no hidden costs, all meals and park fees included.
              </p>
            </div>
            <div className="flex flex-col items-center max-w-[250px]">
              <Users className="text-primary mb-2" size={32} />
              <p className="font-semibold text-base sm:text-lg">Personalized Experiences</p>
              <p className="text-sm text-muted-foreground text-center">
                From private tours to group safaris, we tailor experiences to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
