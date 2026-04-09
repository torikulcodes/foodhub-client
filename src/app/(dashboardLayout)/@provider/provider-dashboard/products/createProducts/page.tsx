// src/app/(dashboardLayout)/@provider/provider-dashboard/products/createProducts/page.tsx

import { CreateProductForm } from "@/components/modules/provider/products/createProducts";
import OwnProducts from "@/components/modules/provider/products/ownProducts";
import { categoryService } from "@/service/category.service";
import { dietsService } from "@/service/diets.service";
import { productsService } from "@/service/products.service";

export default async function CreateProduct({
  searchParams,
}: {
  searchParams: Promise<{
    searchTerm?: string;
    categoryId?: string;
    page?: string;
    limit?: string; 
  }>;
}) {
  const params = await searchParams;
  const searchTerm = params.searchTerm || "";
  const categoryId = params.categoryId || "";
  const currentPage = params.page || "1";
  const limit = params.limit || "10"; 

  const catRes = await categoryService.getAllCategory();
  const { data: dietData } = await dietsService.getAllDiets();

  const productsRes = await productsService.getOwnProduct(
    searchTerm,
    categoryId,
    currentPage,
    limit 
  );

  return (
    <div className="space-y-8">
      <CreateProductForm
        categories={catRes.data.data || []}
        diets={dietData.data || []}
      />

      <OwnProducts
        products={productsRes.data?.data?.data || []} 
        categories={catRes.data.data || []}
        meta={productsRes.data?.data?.meta} 
      />
    </div>
  );
}