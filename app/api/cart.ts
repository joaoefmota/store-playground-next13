import { Cart } from "../types";
import { getProductById } from "./products";

const cart: Cart = {
  cart_id: 1,
  user_id: 1,
  items: [],
};

export const getCart = async (): Promise<Cart> => {
  return cart;
};

export const addToCart = async (productId: number): Promise<Cart> => {
  const product = await getProductById(productId);
  if (product) {
    cart.items.push({
      product_id: product.product_id,
      quantity: 1,
    });
  }
  return cart;
};

export const clearCart = async (): Promise<Cart> => {
  cart.items = [];
  return cart;
};
