export interface Review {
  user_id: number;
  rating: number;
  comment: string;
}

export interface Product {
  product_id: number;
  name: string;
  description: string;
  price: number;
  unit: number;
  image: string;
  discount: number;
  availability: boolean;
  brand: string;
  category: string;
  rating: number;
  reviews: [{ user_id: number; rating: number; comment: string }];
}
export interface Cart {
  cart_id: number;
  user_id: number;
  items: { product_id: number; quantity: number }[];
}
