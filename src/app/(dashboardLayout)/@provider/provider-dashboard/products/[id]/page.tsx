/* eslint-disable @typescript-eslint/no-explicit-any */

import ProductDetailCard from "@/components/modules/provider/products/productDetails";
import { productsService } from "@/service/products.service";

export default async function ProductDetails({ params }: any) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const productsRes = await productsService.getProductById(id);

  console.log("id", id);
  console.log("details data", productsRes.data);

  return (
    <div>
      <ProductDetailCard product={productsRes.data?.data}></ProductDetailCard>
    </div>
  );
}
