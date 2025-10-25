import { MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import maasaiMara from "@/assets/maasai-mara.jpg";
import amboseli from "@/assets/amboseli.jpg";
import lakeNakuru from "@/assets/lake-nakuru.jpg";
import dianiBeach from "@/assets/diani-beach.jpg";

const Destinations = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const destinations = [
    {
      name: "Maasai Mara",
      description: "Wildebeest Migration & Big Five",
      image: maasaiMara,
      highlights: "Witness the Great Migration and spot lions, elephants, and more",
    },
    {
      name: "Amboseli",
      description: "Iconic Elephants & Mt. Kilimanjaro Views",
      image: amboseli,
      highlights: "Stunning elephant herds with Africa's highest peak as backdrop",
    },
    {
      name: "Lake Nakuru",
      description: "Flamingos & Rhino Sanctuary",
      image: lakeNakuru,
      highlights: "Millions of pink flamingos and protected rhino populations",
    },
    {
      name: "Diani Beach",
      description: "White Sands & Indian Ocean Breeze",
      image: dianiBeach,
      highlights: "Pristine beaches perfect for relaxation after safari adventures",
    },
  ];

  return (
    <section id="destinations" className="py-20 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Top Safari Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore Kenya's most breathtaking wildlife reserves and pristine beaches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 h-96 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
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
                  <span className="text-secondary font-semibold">{destination.description}</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">{destination.name}</h3>
                <p className="text-white/90 text-sm">{destination.highlights}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
