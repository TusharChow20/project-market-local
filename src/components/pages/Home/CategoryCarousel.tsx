"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { useAppSelector } from "@/store/hooks";
import { getIcon } from "@/lib/iconMapper";

const CategoryCarousel: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const categories = useAppSelector((state) => state.categories.items);
  const loading = useAppSelector((state) => state.categories.loading);

  if (loading) {
    return (
      <div className="w-full py-12 px-4 text-center">Loading categories...</div>
    );
  }

  return (
    <div className="w-full py-12 px-4 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Shop by Category
            </h2>
            <p className="text-gray-600">Explore our wide range of products</p>
          </div>
        </div>

        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {categories.map((category) => (
              <CarouselItem
                key={category.id}
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden">
                  <CardContent className="p-0">
                    <div
                      className={`relative bg-gradient-to-br ${category.color} p-6 h-40 flex flex-col items-center justify-center text-white transition-transform group-hover:scale-105`}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
                      <div className="relative z-10 flex flex-col items-center space-y-3">
                        <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-all">
                          {/* ✅ Convert icon name to component */}
                          {getIcon(category.icon, "w-8 h-8")}
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold text-base mb-1">
                            {category.name}
                          </h3>
                          <p className="text-xs text-white/90">
                            {category.count}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-white shadow-lg hover:bg-gray-50" />
          <CarouselNext className="hidden md:flex -right-4 bg-white shadow-lg hover:bg-gray-50" />
        </Carousel>
      </div>
    </div>
  );
};

export default CategoryCarousel;
