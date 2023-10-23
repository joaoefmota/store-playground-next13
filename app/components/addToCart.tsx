"use client";
import React, { FunctionComponent } from "react";
import { Cart } from "../types";
import { useCart } from "../context/CartContext";

interface addToCartProps {
  addToCartAction: () => Promise<Cart>;
}

const AddToCart: FunctionComponent<addToCartProps> = ({ addToCartAction }) => {
  const [_, setCart] = useCart();
  return (
    <button
      className="mt-6 px-8 py-2 text-lg font-bold text-white bg-blue-800 rounded-lg"
      onClick={async () => {
        setCart(await addToCartAction());
      }}
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
