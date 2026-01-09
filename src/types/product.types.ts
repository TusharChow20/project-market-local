export interface TProduct {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  discount: string;
  badge: string;
  description?: string;
  category?: string;
  sizes?: string[];
  colors?: string[];
  inStock?: boolean;
}