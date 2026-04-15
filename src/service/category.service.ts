import { Base_URL } from "@/helper/function/baseUrl";
import { CreateCategory } from "@/types/product.type";
import { cookies } from "next/headers";

export const categoryService = {
  createCategory: async (categoryData: CreateCategory) => {
    try {
      const cookieStore = await cookies();

      const response = await fetch(`${Base_URL}/category`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(categoryData),
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

  getAllCategory: async () => {
    try {
      const cookieStore = await cookies();
      const response = await fetch(`${Base_URL}/category`, {
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
