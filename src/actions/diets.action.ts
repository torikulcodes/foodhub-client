"use server";
import { dietsService } from "@/service/diets.service";
import { CreateDiets } from "@/types/product.type";
import { revalidatePath } from "next/cache";

export const createDiets = async (data: CreateDiets) => {
  const res = await dietsService.createDiets(data);

  if (!res.error) {

    revalidatePath("/provider-dashboard/dietary-preferences");
  }

  return res;
};
