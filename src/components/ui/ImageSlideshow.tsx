
import React from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ImageSlideshowProps {
  images: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
  className?: string;
  autoplay?: boolean;
  interval?: number;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({ 
  images,
  className,
  autoplay = true,
  interval = 5000
}) => {
  return (
    <Carousel
      className={cn("w-full", className)}
      opts={{
        align: "start",
        loop: true
      }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="relative">
            <div className="aspect-[16/9] overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {(image.title || image.description) && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                  {image.title && (
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  )}
                  {image.description && (
                    <p className="text-sm">{image.description}</p>
                  )}
                </div>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};

export default ImageSlideshow;
