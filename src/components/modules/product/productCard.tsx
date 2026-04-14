// ProductCard.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  discount: number;
  image: string;
  stock: number;
  category?: string;
  diets: { id: string; name: string }[];
}

export function ProductCard({ product }: { product: Product }) {
  const finalPrice = Math.round(product.price * (1 - product.discount / 100));

  return (
    <div className="group bg-white border border-gray-100 rounded-t-sm overflow-hidden transition-colors duration-300 flex flex-col h-full">
      {/* Image */}
      <div className="relative w-full h-36 sm:h-40 overflow-hidden bg-gray-50 flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 16vw"
          className="object-cover transition-transform duration-400 group-hover:scale-105"
        />
        {product.discount > 0 && (
          <span className="absolute top-0 left-0 bg-pink-500 text-white text-[11px] font-medium px-2 py-0.5">
            {product.discount}% off
          </span>
        )}
      </div>

      <div className="p-2.5 pb-3 flex-grow">
        <p className="font-medium text-sm text-gray-900 line-clamp-2 mb-0.5">
          {product.name}
        </p>
        <p className="text-[11px] text-gray-400 mb-2">{product.category}</p>

        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-pink-600">
              ৳{finalPrice}
            </span>
            {product.discount > 0 && (
              <span className="text-[11px] text-gray-400 line-through">
                ৳{product.price}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Link href={`/productsDetails/${product.id}`}>
          {" "}
          <Button
            className="w-full cursor-pointer bg-pink-500 hover:bg-pink-600 rounded-none text-white h-10 transition-colors duration-500"
            disabled={product.stock <= 0}
          >
            {product.stock > 0 ? "Buy Now" : "Out of Stock"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
