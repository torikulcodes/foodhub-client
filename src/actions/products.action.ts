"use server";
import { productsService } from "@/service/products.service";
import { CreateProducts } from "@/types/product.type";
import { revalidatePath } from "next/cache";

export const createProducts = async (data: CreateProducts) => {
  const res = await productsService.createProduct(data);

  if (!res.error) {
    revalidatePath("/provider-dashboard/products");
  }

  return res;
};

export async function fetchProductsAction(
  searchTerm?: string,
  categoryId?: string,
  dietId?: string,
  page: number = 1
) {
  // সার্ভিস কল করে ডাটা নিয়ে আসছি
  const res = await productsService.getAllProduct(
    searchTerm,
    categoryId,
    dietId,
    page.toString(),
    "10" // প্রতিবার ১০টি করে প্রোডাক্ট আসবে
  );
  return res;
}