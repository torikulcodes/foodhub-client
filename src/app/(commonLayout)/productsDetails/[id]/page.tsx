/* eslint-disable @typescript-eslint/no-explicit-any */
import AddToCartButton from "@/components/modules/customer/addToCartButton";
import AllProductAsCustomer from "@/components/modules/product/allProductAsCustomer";
import { productsService } from "@/service/products.service";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }: any) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const res = await productsService.getProductById(id);
  if (!res?.data) return notFound();

  const product = res.data;
  const finalPrice = product?.data.discount
    ? Math.round(product?.data.price * (1 - product?.data.discount / 100))
    : product?.data.price;

  const diets = product?.data.diets?.map((d: any) => d.diet) ?? [];
  const categoryId = product?.data?.categoryId || product?.data?.category?.id;


  const productsRes = await productsService.getAllProduct(
    "",
    categoryId,
    "all",
    "1",
    "10",
  );

  const relatedProducts = productsRes.data?.data || [];

  const filteredRelatedProducts = relatedProducts.filter(
    (item: any) => item.id !== id,
  );

  return (
    <>
      <main className="max-w-[1500px] mx-auto p-2 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  overflow-hidden">
          {/* Image */}
          <div className="relative min-h-[320px] w-full bg-gray-50">
            <Image
              src={product?.data.image}
              alt={product?.data.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            {product?.data.discount > 0 && (
              <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-medium px-3.5 py-1">
                {product?.data.discount}% off
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5 p-6 md:pl-2">
            <div>
              <p className="text-xs text-gray-400 mb-1">
                Provide By {product?.data.provider?.name}
              </p>
              <h1 className="text-2xl font-semibold text-gray-900 leading-snug">
                {product?.data.name}
              </h1>
              <small> {product?.data?.category?.name}</small>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-xl font-semibold text-pink-600">
                ৳{finalPrice}
              </span>
              {product?.data?.discount > 0 && (
                <span className="text-sm text-gray-400 line-through">
                  ৳{product?.data.price}
                </span>
              )}
            </div>

            {/* Diet & Category tags */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-green-50 text-green-800 px-2.5 py-1 rounded-full">
                {product?.data.category?.name}
              </span>
              {diets.map((diet: any) => (
                <span
                  key={diet.id}
                  className="text-xs bg-teal-50 text-teal-800 px-2.5 py-1 rounded-full"
                >
                  {diet.name}
                </span>
              ))}
            </div>

            <hr className="border-pink-200" />

            {/* Add to Cart / Buy Now — client component */}
            <AddToCartButton product={product?.data} finalPrice={finalPrice} />
          </div>
        </div>

        {/* Description */}
        <div className="py-8">
          <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wide mb-1">
            Description
          </p>
          {product?.data.description ? (
            <p className="text-sm text-gray-500 leading-relaxed">
              {product?.data.description}
            </p>
          ) : (
            <p className="text-sm text-gray-400 italic">
              No description provided.
            </p>
          )}
        </div>
      </main>
      <AllProductAsCustomer initialProducts={filteredRelatedProducts} />
    </>
  );
}
