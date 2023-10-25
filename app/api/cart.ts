import { Cart } from "../types";
import { getProductById } from "./products";

export const getAllCarts = async (): Promise<Cart> => {
  const fetchCart = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return await fetchCart();
};

export const getCart = async (cartId: number): Promise<Cart> => {
  const fetchCart = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/carts/${cartId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return await fetchCart();
};

export const addToCart = async (
  productId: number,
  cartId: number
): Promise<Cart> => {
  const product = await getProductById(productId);
  if (!product) {
    throw new Error("Product not found");
  }
  const cart = await getCart(cartId);
  const productInCart = cart.products.find((p) => p.productId === productId);

  const updatedCart = () => {
    return productInCart
      ? (productInCart.quantity as number)++
      : cart.products.push({ productId, quantity: 1 });
  };

  try {
    const response = await await fetch(
      `https://fakestoreapi.com/carts/${cartId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCart),
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
  return getCart(cartId);
};

export const removeFromCart = async (
  productId: number,
  cartId: number
): Promise<Cart> => {
  try {
    const response = await fetch(`https://fakestoreapi.com/carts/${cartId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: productId,
      }),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
  return getCart(cartId);
};
