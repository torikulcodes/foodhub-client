import { Base_URL } from "@/helper/function/baseUrl";
import { CreateDiets } from "@/types/product.type";
import { cookies } from "next/headers";

export const dietsService = {
  createDiets: async (categoryData: CreateDiets) => {
    try {
      const cookieStore = await cookies();

      const response = await fetch(`${Base_URL}diets`, {
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

  getAllDiets: async () => {
    try {
      const cookieStore = await cookies();
      const response = await fetch(`${Base_URL}diets`, {
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
      });

   
      if (!response.ok) {
        const text = await response.text(); 
        return {
          data: null,
          error: { message: text || "Failed to fetch categories" },
        };
      }

      const data = await response.json();
      return { data, error: null };
    } catch (err) {
      return {
        data: null,
        error: { message: "Something went wrong" },
      };
    }
  },
}; 
