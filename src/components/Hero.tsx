import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-safari.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:h-screen flex flex-col items-center justify-center overflow-hidden text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: "scroll", // fixed causes mobile issues
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="uppercase tracking-widest text-primary font-semibold mb-3 text-sm sm:text-base">
          Kenya’s Premier Safari Experience
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 animate-fade-in leading-tight">
          Discover Africa’s Untamed Beauty
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Experience Kenya’s majestic landscapes, diverse wildlife, and rich
          cultures with expertly crafted safari tours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-6 sm:px-8 py-4"
            onClick={() =>
              document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Safaris
            <ArrowRight className="ml-2" size={18} />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/50 text-white text-base sm:text-lg px-6 sm:px-8 py-4"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Us
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center max-w-md mx-auto">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-primary">+50</h3>
            <p className="text-white/80 text-sm sm:text-base">Destinations</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-primary">10K+</h3>
            <p className="text-white/80 text-sm sm:text-base">Happy Travelers</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-primary">5★</h3>
            <p className="text-white/80 text-sm sm:text-base">TripAdvisor Rating</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
