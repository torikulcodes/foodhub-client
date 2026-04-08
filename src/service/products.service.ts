import { Base_URL } from "@/helper/function/baseUrl";
import { CreateProducts } from "@/types/product.type";
import { cookies } from "next/headers";

export const productsService = {
  createProduct: async (productData: CreateProducts) => {
    try {
      const cookieStore = await cookies();

      const response = await fetch(`${Base_URL}products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        const text = await response.text();
        return {
          data: null,
          error: { message: text || "Failed to create category" },
        };
      }

      const data = await response.json();
      return { data, error: null };
    } catch (err) {
      console.error("CATEGORY SERVICE ERROR:", err);
      return {
        data: null,
        error: { message: "Something went wrong" },
      };
    }
  },

  getAllProduct: async () => {
    try {
      const cookieStore = await cookies();
      const response = await fetch(`${Base_URL}products`, {
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
      });

      // যদি response.ok না হয়, অর্থাৎ 4xx বা 5xx status
      if (!response.ok) {
        const text = await response.text(); // backend থেকে message
        return {
          data: null,
          error: { message: text || "Failed to fetch categories" },
        };
      }

      // সফল হলে JSON data return
      const data = await response.json();
      return { data, error: null };
    } catch (err) {
      console.log("get category error", err);
      return {
        data: null,
        error: { message: "Something went wrong" },
      };
    }
  },

  getOwnProduct: async () => {
    try {
      const cookieStore = await cookies();
      const response = await fetch(`${Base_URL}products/my-products`, {
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
      });

      // যদি response.ok না হয়, অর্থাৎ 4xx বা 5xx status
      if (!response.ok) {
        const text = await response.text(); // backend থেকে message
        return {
          data: null,
          error: { message: text || "Failed to fetch categories" },
        };
      }

      // সফল হলে JSON data return
      const data = await response.json();
      return { data, error: null };
    } catch (err) {
      console.log("get category error", err);
      return {
        data: null,
        error: { message: "Something went wrong" },
      };
    }
  },

  getProductById: async (id: string) => {
    try {
      const cookieStore = await cookies();
      const response = await fetch(`${Base_URL}products/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
      });

      // যদি response.ok না হয়, অর্থাৎ 4xx বা 5xx status
      if (!response.ok) {
        const text = await response.text(); // backend থেকে message
        return {
          data: null,
          error: { message: text || "Failed to fetch categories" },
        };
      }

      // সফল হলে JSON data return
      const data = await response.json();
      return { data, error: null };
    } catch (err) {
      console.log("get category error", err);
      return {
        data: null,
        error: { message: "Something went wrong" },
      };
    }
  },
  
}; 
