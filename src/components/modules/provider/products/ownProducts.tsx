"use client";

import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";
import {
  Filter,
  MoreHorizontal,
  MoreHorizontalIcon,
  Search,
  X,
} from "lucide-react"; // X আইকন যুক্ত করা হয়েছে মডাল ক্লোজ করার জন্য
import { Card } from "@/components/ui/card";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  discount: number;
  isActive: boolean;
  description: string;
  stock: number;
  categoryId: string;
  providerId: string;
  createdAt: string;
  updatedAt: string;
}

interface OwnProductsProps {
  products: Product[];
  categories: { id: string; name: string }[];
  meta?: {
    page: number;
    total: number;
    totalPages: number;
    limit: number;
  };
}

export default function OwnProducts({
  products,
  categories,
  meta,
}: OwnProductsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // ফিল্টার সেকশন দেখানোর জন্য স্টেট
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // ১. হ্যান্ডেল সার্চ (Debounce)
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) params.set("searchTerm", term);
    else params.delete("searchTerm");
    router.replace(`${pathname}?${params.toString()}`);
  }, 500);

  // লিমিট চেঞ্জ হ্যান্ডলার
  const handleLimitChange = (val: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    params.set("limit", val);
    router.replace(`${pathname}?${params.toString()}`);
    setIsFilterOpen(false); // ভ্যালু সিলেক্ট করার পর মডেল বন্ধ হবে
  };

  // ক্যাটাগরি চেঞ্জ হ্যান্ডলার
  const handleCategoryChange = (val: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (val && val !== "all") params.set("categoryId", val);
    else params.delete("categoryId");
    router.replace(`${pathname}?${params.toString()}`);
    setIsFilterOpen(false); // ভ্যালু সিলেক্ট করার পর মডেল বন্ধ হবে
  };

  // পেজ চেঞ্জ হ্যান্ডলার
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="p-4 border rounded-lg global_width">
      <h3 className="font-semibold py-4 scroll-m-20 text-2xl tracking-tight">
        Your Products
      </h3>
      {/* টপ বার: সার্চ এবং ফিল্টার বাটন */}
      <div className="flex items-end justify-end gap-4 mb-4">
        <div className="flex items-center flex-1 max-w-md gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search product..."
              defaultValue={searchParams.get("searchTerm")?.toString()}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-9 h-10"
            />
          </div>
          <Button
            variant={isFilterOpen ? "default" : "outline"}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 h-10"
          >
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {/* টগল ফিল্টার মডেল (ক্যাটাগরি ও লিমিট) */}

      {isFilterOpen && (
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <Button
              variant={isFilterOpen ? "default" : "outline"}
              className="flex items-center gap-2 h-10"
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>

          {/* side="top" দেওয়ার কারণে এটি উপর থেকে স্মুথভাবে নিচে নামবে */}
          <SheetContent
            side="top"
            className="w-full flex justify-center border-b shadow-xl p-0"
          >
            <Card className="w-full max-w-md border-none shadow-none p-6 bg-white">
              <SheetHeader className="mb-4">
                <SheetTitle className="flex items-center gap-2 text-gray-800">
                  <Filter className="h-4 w-4" /> Filter & Settings
                </SheetTitle>
              </SheetHeader>

              <div className="space-y-6">
                {/* ক্যাটাগরি ফিল্টার */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Category
                  </label>
                  <Select
                    defaultValue={searchParams.get("categoryId") || "all"}
                    onValueChange={handleCategoryChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* লিমিট ফিল্টার */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Items per page
                  </label>
                  <Select
                    defaultValue={searchParams.get("limit") || "10"}
                    onValueChange={handleLimitChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </SheetContent>
        </Sheet>
      )}

      {/* টেবিল */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.length > 0 ? (
              products.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={40}
                      height={40}
                      className="rounded object-cover h-10 w-10 border"
                    />
                  </TableCell>
                  <TableCell>{p.name}</TableCell>
                  <TableCell>${p.price}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${p.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                    >
                      {p.stock} in stock
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 p-0"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>

                      {/* align="end" দিলে মেনুটি ডান দিক থেকে সমান হয়ে খুলবে */}
                      <DropdownMenuContent
                        align="end"
                        className="bg-white border dark:bg-gray-700 rounded-md shadow-md min-w-[120px] p-2"
                      >
                        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 text-start dark:hover:bg-gray-600 p-1">
                          <Link href={`/provider-dashboard/products/${p.id}`}>
                            Details
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 text-red-600 text-start p-1">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-12 text-gray-400"
                >
                  No products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* পেজিনেশন */}
      {meta && meta.totalPages > 1 && (
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-4">
          <p className="text-sm text-gray-500 italic">
            Showing page <strong>{meta.page}</strong> of{" "}
            <strong>{meta.totalPages}</strong> ({meta.total} total items)
          </p>
          <Pagination className="justify-end w-auto mx-0">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (meta.page > 1) handlePageChange(meta.page - 1);
                  }}
                  className={
                    meta.page <= 1
                      ? "pointer-events-none opacity-40"
                      : "cursor-pointer hover:bg-gray-100"
                  }
                />
              </PaginationItem>

              {/* পেজ নাম্বারগুলো (অপশনাল: বড় ডাটার জন্য) */}
              {[...Array(meta.totalPages)].map((_, index) => (
                <PaginationItem key={index} className="hidden md:block">
                  <Button
                    variant={meta.page === index + 1 ? "outline" : "ghost"}
                    size="sm"
                    onClick={() => handlePageChange(index + 1)}
                    className="w-9 h-9"
                  >
                    {index + 1}
                  </Button>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (meta.page < meta.totalPages)
                      handlePageChange(meta.page + 1);
                  }}
                  className={
                    meta.page >= meta.totalPages
                      ? "pointer-events-none opacity-40"
                      : "cursor-pointer hover:bg-gray-100"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
