import { Product, Review } from "../types";

export const getProducts = async (): Promise<Product[]> => {
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return await fetchProducts();
};

export const getProductById = async (
  id: number
): Promise<Product | undefined> => {
  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return await fetchProduct();
};

export const addReview = async (
  id: number,
  review: {
    rate: number;
    count: number;
  }
): Promise<Review[] | undefined> => {
  const product = await getProductById(id);
  if (product) {
    product.rating.push(review);
  }
  return product?.rating;
};

