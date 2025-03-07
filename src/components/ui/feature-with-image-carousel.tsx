import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

const slides = [
  {
    image: "/slider/1.png",
  },
  {
    image: "/slider/2.png",
  },

];

function Feature() {
  return (
    <div className="w-full py-12 md:py-20 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-center gap-8 md:gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div className="text-white">
              <Badge>Experience</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-2xl md:text-3xl lg:text-5xl tracking-tighter font-regular text-left">
                20+ Years of Industry Excellence
              </h2>
              <p className="text-base md:text-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                With decades of experience across Eastern Europe, Western Europe, and America, 
                we bring unparalleled expertise to help beauty professionals succeed.
              </p>
            </div>
          </div>
          <div className="w-full max-w-full px-2 md:px-6">
            <Carousel className="w-full">
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-md aspect-video bg-muted">
                      <Image 
                        src={slide.image} 
                        alt={`Slide ${index + 1}`} 
                        fill 
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature }; 