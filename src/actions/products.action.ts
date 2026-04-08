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
