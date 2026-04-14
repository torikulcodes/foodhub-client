import CartPage from "@/components/modules/customer/cartItem";
import { cartService } from "@/service/cart.service";
import React from "react";

export default async function Page() {
  const response = await cartService.getCartItems();
  const cartItems = response?.data?.items || [];

  return (
    <main>
      {/* Pass the extracted array as a prop */}
      <CartPage initialItems={cartItems} />
    </main>
  );
}