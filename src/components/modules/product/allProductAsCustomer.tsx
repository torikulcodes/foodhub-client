"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useFilterStore } from "@/helper/globalState/searchAndFilter";
import { fetchProductsAction } from "@/actions/products.action";

import { Loader2 } from "lucide-react";
import { ProductSkeleton } from "./productSkeleton";
import { ProductCard } from "./productCard";
import { usePathname } from "next/navigation";

interface diest {
  id: string;
  name: string;
}
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  discount: number;
  isActive: boolean;
  description: string;
  stock: number;
  diets: diest[];
  categoryId: string;
  providerId: string;
}

interface OwnProductsProps {
  initialProducts: Product[];
  categories?: { id: string; name: string }[];
  diets?: { id: string; name: string }[];
}

export default function AllProductAsCustomer({
  initialProducts,
  categories,
  diets,
}: OwnProductsProps) {
  const { searchTerm, categoryId, dietId, setCategoryId, setDietId } =
    useFilterStore();

  const [products, setProducts] = useState<Product[]>(initialProducts || []);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const isProductDetailPage = pathname.includes("/productsDetails/");

  const isInitialMount = useRef(true);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (isProductDetailPage) return;

    const delayDebounce = setTimeout(async () => {
      setLoading(true);
      const res = await fetchProductsAction(searchTerm, categoryId, dietId, 1);

      if (res.data?.data) {
        setProducts(res.data.data);
        setPage(1);
        setHasMore(
          res.data.meta ? res.data.meta.page < res.data.meta.totalPages : false,
        );
      } else {
        setProducts([]);
        setHasMore(false);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, categoryId, dietId]);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const nextPage = page + 1;
    const res = await fetchProductsAction(
      searchTerm,
      categoryId,
      dietId,
      nextPage,
    );

    if (res.data?.data && res.data.data.length > 0) {
      setProducts((prev) => [...prev, ...res.data.data]);
      setPage(nextPage);
      setHasMore(
        res.data.meta ? res.data.meta.page < res.data.meta.totalPages : false,
      );
    } else {
      setHasMore(false);
    }
    setLoading(false);
  }, [page, loading, hasMore, searchTerm, categoryId, dietId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1 },
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [loadMore, hasMore, loading]);

  return (
    <div className="mx-auto global_width">
      <div
        className={
          isProductDetailPage
            ? `hidden`
            : `flex flex-col sm:flex-row gap-4 mb-8 justify-end`
        }
      >
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="border p-2 rounded-md font-medium text-gray-700"
        >
          <option value="all">All Categories</option>

          {categories?.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <select
          value={dietId}
          onChange={(e) => setDietId(e.target.value)}
          className="border p-2 rounded-md font-medium text-gray-700"
        >
          <option value="all">All Diets</option>

          {diets?.map((diet) => (
            <option key={diet.id} value={diet.id}>
              {diet.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-1 md:gap-2">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}

        {loading &&
          Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)}
      </div>

      {/* Infinite Scroll Trigger */}
      <div
        ref={observerRef}
        className="w-full py-10 flex flex-col items-center justify-center mt-4"
      >
        {loading && (
          <div className="flex items-center gap-2 text-gray-500">
            <Loader2 className="h-6 w-6 animate-spin text-pink-700" />
            <span>Loading more...</span>
          </div>
        )}
        {!hasMore && products.length > 0 && (
          <p className="text-gray-400 italic">
            {`You've reached the end of the list`}
          </p>
        )}
      </div>
    </div>
  );
}
