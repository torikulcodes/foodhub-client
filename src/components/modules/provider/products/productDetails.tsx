"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Eye, Package, Tag, Box, BeanOff } from "lucide-react";
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
    views: number;
    category: {
      name: string;
    };
    diets: { diet: Diet }[];
  };
}

export default function ProductDetailCard({ product }: ProductDetailsProps) {
  const discountedPrice = product.price * (1 - product.discount / 100);

  return (
    <Card className="w-full global_width overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="relative aspect-video w-full overflow-hidden bg-muted flex-1">
          <div className="absolute inset-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="transition-transform hover:scale-105 duration-300"
            />
          </div>
          {!product.isActive && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80">
              <Badge variant="destructive" className="text-lg px-4 py-2">
                Inactive
              </Badge>
            </div>
          )}
          {product.discount > 0 && (
            <p className="absolute left-0 top-0 bg-red-500 hover:bg-red-600 text-white border-0 px-4 py-1.5 text-sm font-semibold rounded-0">
              {product.discount}% OFF
            </p>
          )}
        </div>

        <CardContent className="p-6 flex-1">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  {product.name}
                </h2>
                <Badge variant="secondary" className="mt-1">
                  {product.category.name}
                </Badge>
              </div>
              <div className="text-right">
                {product.discount > 0 ? (
                  <>
                    <p className="text-3xl font-bold text-primary">
                      ${discountedPrice.toFixed(2)}
                    </p>
                    <p className="text-sm text-muted-foreground line-through">
                      ${product.price.toFixed(2)}
                    </p>
                  </>
                ) : (
                  <p className="text-3xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </p>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground">{product.description}</p>

            <Separator />

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {/* stock */}
              <div className="flex items-center justify-center gap-2">
                <div>
                  <div className="text-sm font-medium flex items-center gap-2.5">
                    {" "}
                    <Box className="h-5 w-5 text-muted-foreground" />
                    Stock
                  </div>
                  <p
                    className={`text-lg font-semibold text-center ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    {product.stock > 0 ? product.stock : "Out of stock"}
                  </p>
                </div>
              </div>

              {/* views */}
              <div className="flex items-center justify-center gap-2">
                <div>
                  <div className="text-sm font-medium flex items-center gap-2.5">
                    {" "}
                    <Eye className="h-5 w-5 text-muted-foreground" />
                    Views
                  </div>
                  <p className="text-lg font-semibold text-center">
                    {product?.views}
                  </p>
                </div>
              </div>

              {/* category */}
              <div className="flex items-center justify-center gap-2">
                <div>
                  <div className="text-sm font-medium flex items-center gap-2.5">
                    {" "}
                    <Package className="h-5 w-5 text-muted-foreground" />
                    Category
                  </div>
                  <p className="text-lg font-semibold text-center">
                    {product.category.name}
                  </p>
                </div>
              </div>

              {/* status */}
              <div className="flex items-center justify-center gap-2">
                <div>
                  <div className="text-sm font-medium flex items-center gap-2.5">
                    {" "}
                    <Tag className="h-5 w-5 text-muted-foreground" />
                    Status
                  </div>
                  <Badge variant={product.isActive ? "default" : "secondary"}>
                    {product.isActive ? "Active" : "Inactive"}
                  </Badge>
                </div>
              </div>
            </div>
            <Separator />

            <div>
   
                <p className="font-semibold">Diets Supported</p>
          

              <div className="flex flex-wrap gap-3">
                {product.diets.map((diet) => (
                  <Badge
                    key={diet.diet.id}
                    variant="secondary"
                    className="mt-1"
                  >
                    {diet.diet.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
