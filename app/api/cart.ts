import { Cart } from "../types";
import { getProductById } from "./products";

export const getCart = async (): Promise<Cart> => {
  const fetchCart = async () => {
    try {
      const response = await fetch(
        "https://fake-store-api.mock.beeceptor.com/api/carts"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return await fetchCart();
};

export const addToCart = async (productId: number): Promise<Cart> => {
  const product = await getProductById(productId);
  if (!product) {
    throw new Error("Product not found");
  }
  try {
    const response = await fetch(
      "https://fake-store-api.mock.beeceptor.com/api/carts",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: productId,
          quantity: 1,
        }),
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
  return getCart();
};

export const removeFromCart = async (productId: number): Promise<Cart> => {
  try {
    const response = await fetch(
      "https://fake-store-api.mock.beeceptor.com/api/carts",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: productId,
        }),
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
  return getCart();
};