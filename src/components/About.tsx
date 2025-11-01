import { Award, Heart, Users, Globe2, Leaf, Compass } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import aboutImage from "@/assets/about-safari.jpg"; // Add a nice photo here

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const features = [
    {
      icon: Award,
      title: "10+ Years Experience",
      description:
        "Expertly crafted safari experiences across East Africa with unmatched attention to detail.",
    },
    {
      icon: Heart,
      title: "Sustainable Tourism",
      description:
        "Committed to preserving wildlife and supporting local communities for a better tomorrow.",
    },
    {
      icon: Users,
      title: "Locally Owned",
      description:
        "Authentic experiences led by passionate guides who call these lands home.",
    },
  ];

  const values = [
    {
      icon: Globe2,
      title: "Global Reach, Local Expertise",
      description:
        "We bring the world to Africa, offering globally recognized service while maintaining deep local roots.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Practices",
      description:
        "Every journey we organize respects nature — we minimize our footprint and maximize impact.",
    },
    {
      icon: Compass,
      title: "Tailored Adventures",
      description:
        "Whether you’re seeking luxury lodges or rugged expeditions, we customize every safari to your taste.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Ngenybor Tours & Safaris
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A locally owned tour operator passionate about showcasing the beauty
            of East Africa while promoting sustainable tourism.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-700 hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
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

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={aboutImage}
              alt="Safari Adventure"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Our Story
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded over a decade ago, Ngenybor Tours & Safaris began with a
              simple dream — to share the breathtaking beauty of Africa with the
              world. What started as a small, family-run operation has grown
              into a trusted brand known for authentic experiences, attention to
              detail, and deep respect for nature.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the sweeping plains of the Maasai Mara to the tranquil shores
              of Lake Nakuru, we’ve guided adventurers, families, and explorers
              from all corners of the globe — each journey uniquely designed to
              create lasting memories.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Our Core Values
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every trip we organize is guided by our values — sustainability,
            integrity, and a deep love for Africa’s wildlife and culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5 mx-auto">
                  <Icon className="text-primary" size={28} />
                </div>
                <h4 className="text-lg font-bold mb-3 text-center text-foreground">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-center">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Join Us on the Adventure of a Lifetime
          </h3>
          <p className="text-muted-foreground mb-8">
            Discover the heart of Africa with a team that knows it best. Let’s
            create your next unforgettable journey together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition"
          >
            Plan Your Safari
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
