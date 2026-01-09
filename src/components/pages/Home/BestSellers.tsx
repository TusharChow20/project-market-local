// components/pages/Home/BestSellers.tsx

"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Eye, Star, TrendingUp } from "lucide-react";
import { TProduct } from "@/types";
import { initialBestSellers } from "@/features/bestSellers/bestSellersData";

const BestSellers: React.FC = () => {
  const handleAddToCart = (product: TProduct) => {
    console.log("Add to cart:", product);
  };

  const handleAddToWishlist = (product: TProduct) => {
    console.log("Add to wishlist:", product);
  };

  const handleQuickView = (product: TProduct) => {
    console.log("Quick view:", product);
  };

  return (
    <div className="w-full py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Best Sellers
              </h2>
            </div>
            <p className="text-gray-600">
              Our customers&apos; favorite picks this month
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-8">
          {initialBestSellers.map((product) => (
            <Card
              key={product.id}
              className="group border-none shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 md:h-56 bg-gray-100 overflow-hidden">
                  {/* Placeholder gradient - Replace with actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Product Image</span>
                  </div>

                  {/* <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  /> */}

                  {/* Best Seller Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" />
                      {product.badge}
                    </span>
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.discount}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleAddToWishlist(product)}
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-all"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleQuickView(product)}
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-all"
                      aria-label="Quick view"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-all"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-900">
                      {product.rating}
                    </span>
                    <span className="text-xs text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
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
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-12 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
          >
            View All Best Sellers
            <TrendingUp className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
