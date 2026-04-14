import { Base_URL } from "@/helper/function/baseUrl";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const cartService = {
  addToCart: async (productId: string, qty: number) => {
    console.log(productId, qty, "currently");

    
    const cookieStore = await cookies();
    try {
      const response = await fetch(`${Base_URL}cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify([{ productId, quantity: qty }]),
      });

      if (!response.ok) {
        const text = await response.text();
        return {
          data: null,
          error: { message: text || "Failed add to cart" },
        };
      }

      revalidatePath("/");
      revalidatePath("/cart");

      const data = await response.json();
      return { data, error: null };
    } catch (err) {
      console.error("CART SERVICE ERROR:", err);
      return {
        data: null,
        error: { message: "Something went wrong" },
      };
    }
  },

  getCartItems: async () => {
    try {
      const cookieStore = await cookies();
      const response = await fetch(`${Base_URL}cart`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        next: { tags: ["cart"] },
      });

      const resData = await response.json();

      if (!response.ok) {
        return {
          data: null,
          error: { message: resData.message || "Failed to fetch cart items" },
        };
      }

      return { data: resData.data, error: null };
    } catch (err) {
      console.error("GET CART ERROR:", err);
      return { data: null, error: { message: "Something went wrong" } };
    }
  },

  deleteCartItem: async (itemId: string) => {
    const cookieStore = await cookies();
    try {
      const response = await fetch(`${Base_URL}cart/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
      });

      const resData = await response.json();

      if (!response.ok) {
        return {
          data: null,
          error: { message: resData.message || "Failed to delete item" },
        };
      }

      revalidatePath("/cart");
      revalidatePath("/");

      return { data: resData.data, error: null };
    } catch (err) {
      console.error("DELETE CART ERROR:", err);
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
};
