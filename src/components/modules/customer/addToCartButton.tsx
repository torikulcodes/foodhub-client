/* eslint-disable @typescript-eslint/no-explicit-any */
// components/AddToCartButton.tsx
"use client";

import { addToCart } from "@/actions/cart.action";
import { useState } from "react";
import { toast } from "sonner";

export default function AddToCartButton({ product, finalPrice }: any) {
  const [qty, setQty] = useState(1);

  const handleAddToCart = async () => {
    const result = await addToCart(product.id, qty);

    if (result?.error) {
      let displayMessage = result.error.message;

      try {
        const parsedError = JSON.parse(result.error.message);
        displayMessage = parsedError.message || "Something went wrong";
      } catch (e) {
        displayMessage = result.error.message;
      }

      toast.error(displayMessage);
      return;
    }

    if (result?.data) {
      toast.success("Product added to cart successfully!");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 mt-auto">
        {/* Qty selector */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">Qty</span>
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="w-9 h-9 bg-gray-50 hover:bg-gray-100 text-lg text-gray-700 transition-colors"
            >
              −
            </button>
            <span className="w-10 text-center text-sm font-medium text-gray-800 border-x border-gray-200">
              {qty}
            </span>
            <button
              onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
              className="w-9 h-9 bg-gray-50 hover:bg-gray-100 text-lg text-gray-700 transition-colors"
            >
              +
            </button>
          </div>
          <span className="text-sm text-gray-400">৳{qty * finalPrice}</span>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleAddToCart}
            className="h-11 rounded-xl text-sm font-medium bg-pink-50 text-pink-700 border border-pink-200 hover:bg-pink-100 transition-colors"
          >
            Add to cart
          </button>
          <button className="h-11 rounded-xl text-sm font-medium bg-pink-600 text-white hover:bg-pink-700 transition-colors">
            Buy now
          </button>
        </div>
      </div>
    </>
  );
}
