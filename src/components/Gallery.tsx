import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import GalleryLightbox from "./GalleryLightbox";

// Import images
import maasaiMara from "@/assets/maasai-mara.jpg";
import amboseli from "@/assets/amboseli.jpg";
import lakeNakuru from "@/assets/lake-nakuru.jpg";
import dianiBeach from "@/assets/diani-beach.jpg";

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allImages = [
    { src: maasaiMara, alt: "Wildebeest migration", category: "Wildlife" },
    { src: amboseli, alt: "Elephants and Mt. Kilimanjaro", category: "Wildlife" },
    { src: lakeNakuru, alt: "Flamingos at Lake Nakuru", category: "Wildlife" },
    { src: dianiBeach, alt: "Diani Beach", category: "Beaches" },
  ];

  const categories = ["All", "Wildlife", "Landscapes", "Beaches", "Culture", "Experiences"];

  const images = selectedCategory === "All"
    ? allImages
    : allImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-32 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="text-primary" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Safari Gallery
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience the beauty of Kenya through the lenses of travelers and our guides.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "text-primary border-primary hover:bg-primary hover:text-white"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-xl aspect-square group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 delay-${index * 75} ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.src})` }}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white px-2 text-center">
                <Camera className="mb-2" size={32} />
                <p className="text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => {
              setSelectedCategory("All");
              setCurrentImageIndex(0);
              setLightboxOpen(true);
            }}
          >
            View Full Gallery
          </Button>
        </div>

        {/* Lightbox */}
        <GalleryLightbox
          images={images}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />

        {/* Story Section */}
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Moments Captured by Our Guests
          </h3>
          <p className="text-lg text-muted-foreground">
            Every photograph tells a story — the thrill of spotting a lion on the hunt, 
            the peace of a sunset over the savannah, or the laughter shared with local communities.  
            Our guests’ memories are what make Ngenybor Tours truly special.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
