export interface DressOption {
  id: string;
  name: string;
  category: "kurtas" | "jodhpuris" | "jackets" | "blazers" | "indo-western" | "accessories";
  price: number;
  originalPrice: number;
  tag?: "Bestseller" | "Trending" | "Royal Pick" | "Under ₹999" | "Wedding Special";
  fabric: string;
  colors: string[];
  sizes: string[];
  description: string;
  modelImage: string;
  thumbnail: string;
  inStock: boolean;
}

export interface ModelShowcase {
  id: string;
  modelName: string;
  category: "kurtas" | "jodhpuris" | "jackets" | "blazers" | "indo-western" | "accessories";
  subtitle: string;
  dresses: DressOption[];
}

export interface Product {
  id: string;
  name: string;
  category: "kurtas" | "jodhpuris" | "jackets" | "blazers" | "indo-western" | "accessories";
  price: number;
  originalPrice: number;
  tag?: "Bestseller" | "Trending" | "Royal Pick" | "Under ₹999" | "Wedding Special";
  fabric: string;
  colors: string[];
  sizes: string[];
  description: string;
  image: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: "all" | "kurtas" | "jodhpuris" | "jackets" | "blazers" | "indo-western" | "accessories";
  description: string;
  startingPrice: number;
  iconName: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  occasion: string;
  comment: string;
  outfit: string;
}
