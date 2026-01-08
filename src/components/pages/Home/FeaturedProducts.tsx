"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import Image from "next/image";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Half-Sleeve T-shirt",
      price: 29.99,
      originalPrice: 49.99,
      rating: 4.5,
      reviews: 128,
      image: "/product-1.jpg",
      discount: "40% OFF",
      badge: "Trending",
    },
    {
      id: 2,
      name: "Designer Short Sleeve",
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 256,
      image: "/product-2.jpg",
      discount: "33% OFF",
      badge: "Hot",
    },
    {
      id: 3,
      name: "Sports T-shirt",
      price: 34.99,
      originalPrice: 54.99,
      rating: 4.6,
      reviews: 189,
      image: "/product-3.jpg",
      discount: "36% OFF",
      badge: "New",
    },
    {
      id: 4,
      name: "Polo Shirt",
      price: 44.99,
      originalPrice: 69.99,
      rating: 4.7,
      reviews: 342,
      image: "/product-4.jpg",
      discount: "35% OFF",
      badge: "Best Seller",
    },
    {
      id: 5,
      name: "Cut & Stitch Polo",
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.9,
      reviews: 421,
      image: "/product-5.jpg",
      discount: "37% OFF",
      badge: "Premium",
    },
    {
      id: 6,
      name: "Half Sleeve Raglan",
      price: 32.99,
      originalPrice: 52.99,
      rating: 4.4,
      reviews: 167,
      image: "/product-6.jpg",
      discount: "38% OFF",
      badge: "Popular",
    },
    {
      id: 7,
      name: "Designer Full Sleeve",
      price: 54.99,
      originalPrice: 89.99,
      rating: 4.8,
      reviews: 298,
      image: "/product-7.jpg",
      discount: "39% OFF",
      badge: "Trending",
    },
    {
      id: 8,
      name: "Football Jerseys",
      price: 64.99,
      originalPrice: 99.99,
      rating: 4.9,
      reviews: 512,
      image: "/product-8.jpg",
      discount: "35% OFF",
      badge: "Hot",
    },
  ];

  return (
    <div className="w-full py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Featured Products
            </h2>
            <p className="text-gray-600">Check out our most popular items</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group border-none shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 md:h-64 bg-gray-100 overflow-hidden">
                  {/* Placeholder gradient - Replace with actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Product Image</span>
                  </div>

                  {/* <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  /> */}

                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.discount}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.badge}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-12 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
          >
            View All Products
            <Eye className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
