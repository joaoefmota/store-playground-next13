import { Product, Review } from "../types";

export const fetchProducts = async () => {
  try {
    const response = await fetch(
      "https://fake-store-api.mock.beeceptor.com/api/products"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async (): Promise<Product[]> => {
  return await fetchProducts();
};

export const addReview = async (
  id: number,
  review: {
    user_id: number;
    rating: number;
    comment: string;
    text: string;
  }
): Promise<Review[] | undefined> => {
  const product = await getProductById(id);
  if (product) {
    product.reviews.push(review);
  }
  return product?.reviews;
};

export const getProductById = async (
  id: number
): Promise<Product | undefined> =>
  getProducts().then((products) => products.find((p) => p.product_id === id));
