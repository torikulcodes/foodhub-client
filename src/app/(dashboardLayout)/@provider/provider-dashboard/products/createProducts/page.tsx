import { CreateProductForm } from "@/components/modules/provider/products/createProducts";
import OwnProducts from "@/components/modules/provider/products/ownProducts";
import { categoryService } from "@/service/category.service";
import { dietsService } from "@/service/diets.service";
import { productsService } from "@/service/products.service";
import React from "react";

export default async function page() {
  const catRes = await categoryService.getAllCategory();
  const { data } = await dietsService.getAllDiets();

  const products = await productsService.getAllProduct();
  return (
    <div>
      <CreateProductForm
        categories={catRes.data.data || []}
        diets={data.data || []}
      ></CreateProductForm>

      <OwnProducts products={products.data || []}></OwnProducts>
    </div>
  );
}
