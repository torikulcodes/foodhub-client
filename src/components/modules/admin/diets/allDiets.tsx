"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/helper/ui/formatDate";
import { Diets } from "@/types/product.type";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MoreHorizontalIcon } from "lucide-react";
import React from "react";

export default function AllDiets({ data }: { data: Diets[] }) {
  console.log(data);
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="my-3">
        <CardContent>
          <Table className="">
            <TableCaption>A list of category</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Created Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item?.name}</TableCell>

                  <TableCell>{formatDate(item.createdAt)}</TableCell>

                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontalIcon className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent  align="end">
                        <DropdownMenuItem  className="focus:bg-muted hover:bg-muted outline-none ring-0 border-0 p-1 rounded-sm">View</DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-muted hover:bg-muted outline-none ring-0 border-0 p-1 rounded-sm">Edit</DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-muted hover:bg-muted outline-none ring-0 border-0 p-1 rounded-sm text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
