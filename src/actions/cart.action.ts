"use server";

import { cartService } from "@/service/cart.service";
import { revalidatePath } from "next/cache";

export const addToCart = async (productId: string, qty: number) => {

  console.log(productId,qty,"cart action")
  const res = await cartService.addToCart(productId, qty);

  if (!res.error) {
    revalidatePath("/provider-dashboard/categories");
  }

  return res;
};

export async function deleteItemAction(itemId: string) {
  return await cartService.deleteCartItem(itemId);
}
