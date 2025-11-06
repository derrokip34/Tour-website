import { useState, useEffect } from "react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import maasaiMara from "@/assets/maasai-mara.jpg";
import amboseli from "@/assets/amboseli.jpg";
import lakeNakuru from "@/assets/lake-nakuru.jpg";
import dianiBeach from "@/assets/diani-beach.jpg";

const Gallery = () => {
  const images = [
    { src: maasaiMara, alt: "Wildebeest migration" },
    { src: amboseli, alt: "Elephants and Mt. Kilimanjaro" },
    { src: lakeNakuru, alt: "Flamingos at Lake Nakuru" },
    { src: dianiBeach, alt: "Diani Beach" },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // for slide animation

  const prevImage = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setDirection(1);
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 4s
  useEffect(() => {
    const timer = setInterval(() => nextImage(), 4000);
    return () => clearInterval(timer);
  }, [index]);

  // Animation variants
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      transition: { duration: 1.2, ease: "easeInOut" },
    }),
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="text-primary" size={28} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Safari Gallery
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the beauty of Kenya through our captured safari moments.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg h-[250px] sm:h-[350px] md:h-[450px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={index}
              src={images[index].src}
              alt={images[index].alt}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Caption */}
        <div className="mt-4 text-muted-foreground text-sm font-medium">
          {images[index].alt}
        </div>

        {/* Description */}
        <div className="mt-12 max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
          <p>
            Every photograph tells a story — the thrill of spotting a lion on the hunt,
            the calm of a sunset over the savannah, or the laughter shared on the trail.
            These are the unforgettable moments of Ngenybor Tours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
