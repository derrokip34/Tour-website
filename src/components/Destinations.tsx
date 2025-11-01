import { MapPin, Compass, Mountain, Sun } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import maasaiMara from "@/assets/maasai-mara.jpg";
import amboseli from "@/assets/amboseli.jpg";
import lakeNakuru from "@/assets/lake-nakuru.jpg";
import dianiBeach from "@/assets/diani-beach.jpg";
import kenyaLandscape from "@/assets/kenya-landscape.jpg"; // Add a new scenic image

const Destinations = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const destinations = [
    {
      name: "Maasai Mara",
      description: "Wildebeest Migration & Big Five",
      image: maasaiMara,
      highlights:
        "Witness the Great Migration and spot lions, elephants, and more.",
    },
    {
      name: "Amboseli",
      description: "Iconic Elephants & Mt. Kilimanjaro Views",
      image: amboseli,
      highlights:
        "Stunning elephant herds with Africa's highest peak as a backdrop.",
    },
    {
      name: "Lake Nakuru",
      description: "Flamingos & Rhino Sanctuary",
      image: lakeNakuru,
      highlights:
        "Millions of pink flamingos and one of Kenya’s best rhino sanctuaries.",
    },
    {
      name: "Diani Beach",
      description: "White Sands & Indian Ocean Breeze",
      image: dianiBeach,
      highlights:
        "Pristine beaches perfect for relaxation after an unforgettable safari.",
    },
  ];

  const highlights = [
    {
      icon: Compass,
      title: "Diverse Landscapes",
      text: "From savannas to tropical beaches, Kenya offers a perfect blend of adventure and serenity.",
    },
    {
      icon: Mountain,
      title: "Rich Wildlife",
      text: "Home to Africa’s Big Five and countless bird species — a paradise for nature lovers.",
    },
    {
      icon: Sun,
      title: "All-Year Adventure",
      text: "Kenya’s warm climate and seasonal migrations make it a year-round destination.",
    },
  ];

  return (
    <section id="destinations" className="py-24 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Top Safari Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore Kenya’s most breathtaking wildlife reserves and pristine
            beaches. Each destination offers something unique — from majestic
            landscapes to vibrant cultures.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 h-96 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${destination.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={20} className="text-secondary" />
                  <span className="text-secondary font-semibold">
                    {destination.description}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-2">
                  {destination.name}
                </h3>
                <p className="text-white/90 text-sm">
                  {destination.highlights}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Visit Kenya Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <div
            className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <img
              src={kenyaLandscape}
              alt="Kenya Landscape"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Why Visit Kenya?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kenya isn’t just a destination — it’s a journey through nature’s
              greatest masterpieces. Whether you’re watching elephants under the
              shadow of Kilimanjaro or relaxing on white sands by the Indian
              Ocean, every moment feels cinematic.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond the wildlife, Kenya’s people, culture, and traditions bring
              warmth and depth to every experience. It’s where adventure meets
              authenticity — and where memories last a lifetime.
            </p>
          </div>
        </div>

        {/* Highlights Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`bg-card p-8 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-5 mx-auto">
                  <Icon className="text-primary" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">
                  {item.title}
                </h4>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Explore Kenya’s Wonders?
          </h3>
          <p className="text-muted-foreground mb-8">
            From savannah plains to turquoise waters, we’ll help you craft the
            perfect safari adventure.
          </p>
          <a
            href="/packages"
            className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition"
          >
            View Safari Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
