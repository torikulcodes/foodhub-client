/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { dietsService } from "@/service/diets.service";
import { categoryService } from "@/service/category.service";
import { createProducts } from "@/actions/products.action";

const productsSchema = z.object({
  name: z.string().min(2).max(50),
  price: z.coerce.number().min(0),
  discount: z.coerce.number().min(0).optional(),
  stock: z.coerce.number().min(0).optional(),
  categoryId: z.string().min(1),
  image: z.string().url(),
  diets: z.array(z.string()).optional(),
  description: z.string().optional(),
});

type ProductFormValues = z.infer<typeof productsSchema>;

interface CreateProductFormProps {
  categories: any[];
  diets: any[];
}

export function CreateProductForm({
  categories,
  diets,
}: CreateProductFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productsSchema) as any,
  });

  const selectedDiets = watch("diets") || [];

  const onSubmit = async (data: ProductFormValues) => {
    const toastId = toast.loading("Creating product...");

    try {
      const res = await createProducts(data);

      if (res.error) {
        toast.error(res.error.message, { id: toastId });
        return;
      }

      toast.success("Product created successfully", { id: toastId });
      reset();
    } catch {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <div className="w-full global_width mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Create Product</CardTitle>
          <CardDescription>Add a new meal/product</CardDescription>
        </CardHeader>

        <CardContent>
          <form id="product-form" onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup className="grid grid-cols-2 gap-4">
              {/* Name */}
              <Field data-invalid={!!errors.name}>
                <FieldLabel>Name</FieldLabel>
                <Input {...register("name")} />
                <FieldError errors={[{ message: errors.name?.message }]} />
              </Field>

              {/* Price */}
              <Field data-invalid={!!errors.price}>
                <FieldLabel>Price</FieldLabel>
                <Input type="number" {...register("price")} />
                <FieldError errors={[{ message: errors.price?.message }]} />
              </Field>

              {/* Discount */}
              <Field>
                <FieldLabel>Discount</FieldLabel>
                <Input type="number" {...register("discount")} />
              </Field>

              {/* Stock */}
              <Field>
                <FieldLabel>Stock</FieldLabel>
                <Input type="number" {...register("stock")} />
              </Field>

              {/* Category */}
              <Field data-invalid={!!errors.categoryId}>
                <FieldLabel>Category</FieldLabel>

                <Select
                  value={watch("categoryId")}
                  onValueChange={(value) =>
                    setValue("categoryId", value, { shouldValidate: true })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>

                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FieldError
                  errors={[{ message: errors.categoryId?.message }]}
                />
              </Field>

              {/* Image */}
              <Field data-invalid={!!errors.image}>
                <FieldLabel>Image URL</FieldLabel>
                <Input {...register("image")} />
                <FieldError errors={[{ message: errors.image?.message }]} />
              </Field>

              {/* Diets */}
              <Field className="col-span-2">
                <FieldLabel>Diets</FieldLabel>
                <div className="flex flex-wrap gap-3">
                  {diets.map((diet) => (
                    <label key={diet.id} className="flex items-center gap-2">
                      <Checkbox
                        checked={selectedDiets.includes(diet.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setValue("diets", [...selectedDiets, diet.id]);
                          } else {
                            setValue(
                              "diets",
                              selectedDiets.filter((d) => d !== diet.id),
                            );
                          }
                        }}
                      />
                      {diet.name}
                    </label>
                  ))}
                </div>
              </Field>

              {/* Description */}
              <Field className="col-span-2">
                <FieldLabel>Description</FieldLabel>
                <Textarea {...register("description")} />
              </Field>
            </FieldGroup>
          </form>
        </CardContent>

        <CardFooter>
          <Button
            type="submit"
            form="product-form"
            className="w-full"
            disabled={
              isSubmitting ||
              !watch("categoryId") ||
              !watch("name") ||
              !watch("price") ||
              !watch("image")
            }
          >
            {isSubmitting ? "Submitting..." : "Create Product"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
