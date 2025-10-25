import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryLightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const GalleryLightbox = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) => {
  if (!isOpen || currentIndex < 0) return null;

  const currentImage = images[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
            aria-label="Close"
          >
            <X size={24} />
          </Button>

          {/* Previous Button */}
          <Button
            onClick={onPrev}
            variant="ghost"
            size="icon"
            className="absolute left-4 z-50 text-white hover:bg-white/20 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </Button>

          {/* Image */}
          <div className="w-full h-full flex items-center justify-center p-16">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Next Button */}
          <Button
            onClick={onNext}
            variant="ghost"
            size="icon"
            className="absolute right-4 z-50 text-white hover:bg-white/20 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </Button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryLightbox;
