"use client";

import { deleteItemAction } from "@/actions/cart.action";
import Image from "next/image";
import React, { useState } from "react";

// --- Types ---
export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface CartItemData {
  id: string;
  cartId: string;
  productId: string;
  quantity: number;
  product: Product;
}

interface CartPageProps {
  initialItems: CartItemData[];
}

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 0,
  }).format(amount);
};

export default function CartPage({ initialItems }: CartPageProps) {
  const [cartItems, setCartItems] = useState<CartItemData[]>(initialItems);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  // --- Handlers ---
  const handleIncrement = (itemId: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecrement = (itemId: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const handleRemove = async (itemId: string) => {
    const previousItems = [...cartItems];
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));

    const result = await deleteItemAction(itemId);

    if (result.error) {
      alert(result.error.message);
      setCartItems(previousItems);
    }
  };

  const handleCreateOrder = () => {
    const orderData = {
      cartId: cartItems[0]?.cartId || "unknown",
      items: cartItems.map((item) => ({
        id: item.id,
        productId: item.productId,
        name: item.product.name,
        quantity: item.quantity,
        unitPrice: item.product.price,
        totalPrice: item.product.price * item.quantity,
      })),
      totalAmount,
      orderDate: new Date().toISOString(),
    };

    console.log("Order Created:", orderData);
    alert(`✅ Order placed!\nTotal: ${formatCurrency(totalAmount)}`);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center global_width">
        <div className="w-full text-center bg-white rounded-3xl shadow-sm border border-gray-100 p-10">
          <div className="text-7xl mb-6">🛒</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Your cart is empty
          </h2>
          <button
            onClick={() => window.location.assign("/")}
            className="w-full inline-flex justify-center items-center py-3 border border-transparent text-base font-medium rounded-xl text-white bg-pink-600 hover:bg-pink-700 transition-colors shadow-sm"
          >
            Browse Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen global_width">
      <div className="my-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
          Checkout Cart
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          You have{" "}
          <span className="font-semibold text-gray-700">{totalItems}</span>{" "}
          {totalItems === 1 ? "item" : "items"} ready.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 w-full rounded-2xl border-2 border-pink-300 overflow-hidden">
          <ul className="divide-y-8 divide-gray-100">
            {cartItems.map((item) => (
              <li key={item.id} className="p-3 sm:p-6  transition-colors">
                <div className="flex gap-5 items-center sm:items-start">
                  <div className="relative w-22 h-22 flex-shrink-0 rounded-2xl overflow-hidden bg-gray-50">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="w-full">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {item.product.name}
                    </h3>
                    <div className="flex justify-between w-full">
                      <p className="text-orange-600 font-semibold text-md mt-1">
                        {formatCurrency(item.product.price)}
                      </p>

                      <div>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-gray-900">
                            {formatCurrency(item.product.price * item.quantity)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="text-red-600 hover:text-red-700 transition-colors sm:block hidden cursor-pointer"
                          >
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>

                          <div className="flex items-center border border-gray-200 rounded-lg p-1 bg-white">
                            <button
                              onClick={() => handleDecrement(item.id)}
                              className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-50 hover:bg-gray-100 text-gray-600 font-medium"
                            >
                              -
                            </button>
                            <span className="w-10 text-center font-medium text-gray-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleIncrement(item.id)}
                              className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-50 hover:bg-gray-100 text-gray-600 font-medium"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-[380px] lg:sticky lg:top-8">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">
              Order Summary
            </h2>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span className="text-gray-900">
                  {formatCurrency(totalAmount)}
                </span>
              </div>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-extrabold text-gray-900">Total</span>
                  <span className="font-extrabold text-orange-600">
                    {formatCurrency(totalAmount)}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={handleCreateOrder}
              className="w-full mt-8 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
