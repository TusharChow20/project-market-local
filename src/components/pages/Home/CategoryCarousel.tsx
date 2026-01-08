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
import {
  Smartphone,
  Sparkles,
  Shirt,
  Home,
  Watch,
  Gamepad2,
  Book,
  Utensils,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { TCategory } from "@/types";

const CategoryCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const categories: TCategory[] = [
    {
      id: 1,
      name: "Tech Products",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      count: "2.5k+ items",
    },
    {
      id: 2,
      name: "Beauty Products",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-pink-500 to-rose-600",
      count: "1.8k+ items",
    },
    {
      id: 3,
      name: "Fashion",
      icon: <Shirt className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      count: "3.2k+ items",
    },
    {
      id: 4,
      name: "Home & Living",
      icon: <Home className="w-8 h-8" />,
      color: "from-emerald-500 to-emerald-600",
      count: "1.5k+ items",
    },
    {
      id: 5,
      name: "Watches",
      icon: <Watch className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      count: "890+ items",
    },
    {
      id: 6,
      name: "Gaming",
      icon: <Gamepad2 className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      count: "1.2k+ items",
    },
    {
      id: 7,
      name: "Books",
      icon: <Book className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
      count: "950+ items",
    },
    {
      id: 8,
      name: "Food & Drinks",
      icon: <Utensils className="w-8 h-8" />,
      color: "from-teal-500 to-teal-600",
      count: "780+ items",
    },
  ];

  return (
    <div className="w-full py-12 px-4 bg-gradient-to-b from-white to-gray-50">
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
            {categories.map((category: TCategory) => (
              <CarouselItem
                key={category.id}
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden">
                  <CardContent className="p-0">
                    <div
                      className={`relative bg-linear-to-br ${category.color} p-6 h-40 flex flex-col items-center justify-center text-white transition-transform group-hover:scale-105`}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
                      <div className="relative z-10 flex flex-col items-center space-y-3">
                        <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-all">
                          {category.icon}
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
