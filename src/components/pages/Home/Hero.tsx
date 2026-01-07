"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const heroSlides = [
    {
      id: 1,
      image: "/hero-1.png",
      alt: "Hero Banner 1",
    },
    {
      id: 2,
      image: "/hero-2.png",
      alt: "Hero Banner 2",
    },
    {
      id: 3,
      image: "/hero-3.png",
      alt: "Hero Banner 3",
    },
  ];

  return (
    <div className="relative max-w-6xl mx-auto ">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[40vh] md:h-[50vh] max-h-[50vh] w-full overflow-hidden rounded-xl md:rounded-2xl">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-contain"
                  priority={slide.id === 1}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 md:left-8 bg-white/80 backdrop-blur-md border-white/50 cursor-pointer text-black hover:bg-white hover:text-black" />
        <CarouselNext className="right-4 md:right-8 bg-white/80 backdrop-blur-md border-white/50 cursor-pointer text-black hover:bg-white hover:text-black" />
      </Carousel>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className="h-2 rounded-full bg-white/70 transition-all"
            style={{ width: index === 0 ? "32px" : "16px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
