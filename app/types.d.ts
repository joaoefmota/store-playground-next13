export interface Review {
  rate: number;
  count: number;
}

export interface Product {
  id: Number;
  title: String;
  price: Number;
  category: String;
  description: String;
  image: String;
  rating: [{ rate: number; count: number }];
}
export interface Cart {
  id: Number;
  userId: Number;
  date: Date;
  products: [{ productId: Number; quantity: Number }];
}
