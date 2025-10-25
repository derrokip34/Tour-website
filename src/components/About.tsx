import { Award, Heart, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const features = [
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Expertly crafted safari experiences across East Africa",
    },
    {
      icon: Heart,
      title: "Sustainable Tourism",
      description: "Committed to preserving wildlife and supporting local communities",
    },
    {
      icon: Users,
      title: "Locally Owned",
      description: "Authentic experiences led by passionate local guides",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Ngenybor Tours & Safaris
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A locally owned tour operator passionate about showcasing the beauty of East Africa 
            while promoting sustainable tourism
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
            <div
              key={index}
              className={`bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-700 hover:-translate-y-2 delay-${index * 150} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
