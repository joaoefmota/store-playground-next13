import { useFetch } from "../hooks/useFetch";
import { Product, Review } from "../types";

export const getProducts = async (): Promise<Product[]> => {
  const { data, error } = useFetch<Product[]>(
    "https://fakestoreapi.com/products"
  );

  if (error) {
    throw new Error(error.message);
  }
  if (!data) {
    throw new Error("No data found");
  }
  return data;
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
