"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Diet {
  name: string;
  id: string;
}

interface ProductDetailsProps {
  product: {
    name: string;
    price: number;
    image: string;
    discount: number;
    isActive: boolean;
    description: string;
    stock: number;
    category: {
      name: string;
    };
    diets: { diet: Diet }[];
  };
}

export default function ProductDetailCard({ product }: ProductDetailsProps) {
  return (
    <div className="flex justify-center my-10 px-4">
      <Card className="max-w-4xl w-full shadow-lg border border-gray-200">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <Image
              src={product?.image}
              alt={product?.name}
              fill
              className="object-cover rounded-t-md md:rounded-l-md md:rounded-tr-none"
            />
          </div>

          {/* Product Info */}
          <CardContent className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold">{product?.name}</CardTitle>
                <CardDescription className="text-gray-600">
                  {product?.description}
                </CardDescription>
              </CardHeader>

              <div className="flex items-center gap-4 mt-4">
                <span className="text-xl font-semibold text-green-600">
                  ${product?.price}
                </span>
                {product?.discount > 0 && (
                  <Badge variant="destructive">-{product?.discount}%</Badge>
                )}
                <Badge variant={product?.isActive ? "default" : "outline"}>
                  {product?.isActive ? "Available" : "Inactive"}
                </Badge>
              </div>

              <div className="mt-4">
                <p className="text-gray-700 font-medium">Category: {product?.category.name}</p>
                <p className="text-gray-700 font-medium">Stock: {product?.stock}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {product?.diets?.map((d, idx) => (
                  <Badge key={idx} variant="secondary">
                    {d.diet.name}
                  </Badge>
                ))}
              </div>
            </div>

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-all">
              Add to Cart
            </button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}