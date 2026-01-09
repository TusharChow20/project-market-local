import Hero from "@/components/pages/Home/Hero";
import CategoryCarousel from "@/components/pages/Home/CategoryCarousel";
import Image from "next/image";
import FeaturedProducts from "@/components/pages/Home/FeaturedProducts";
import BestSellers from "@/components/pages/Home/BestSellers";

export default function Home() {
  return (
    <div className="max-w-7xl">
      <Hero></Hero>
      <CategoryCarousel />

      <FeaturedProducts />
      <BestSellers></BestSellers>
    </div>
  );
}
