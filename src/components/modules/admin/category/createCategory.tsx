"use client";

import { createCategory } from "@/actions/category.action";
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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";


const categorySchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),

  image: z.string().url("Invalid image url").optional().or(z.literal("")),

  description: z.string().optional(),
});

type CategoryFormValues = z.infer<typeof categorySchema>;

/* ---------------- COMPONENT ---------------- */
export function CreateCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      image: "",
      description: "",
    },
  });

  const onSubmit = async (data: CategoryFormValues) => {
    const toastId = toast.loading("Creating category...");

    try {
      const res = await createCategory({
        name: data.name.trim(),
        image: data.image || undefined,
        description: data.description || undefined,
      });

      if (res.error) {
        let message = res.error.message;

        try {
          const parsed = JSON.parse(res.error.message);
          message = parsed.message || message;
        } catch (err) {}

        toast.error(message, { id: toastId });
        return;
      }

      toast.success("Category created successfully", { id: toastId });
      reset();
    } catch (err) {
      toast.error("Something went wrong, please try again", { id: toastId });
    }
  };

  return (
    <div className="w-full global_width mx-auto">
      <Card >
        <CardHeader>
          <CardTitle>Create Category</CardTitle>
          <CardDescription>
            Fill the form below to create a new category
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form id="create-category" onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup className="grid grid-cols-2 gap-4">
              {/* Name */}
              <Field data-invalid={!!errors.name}>
                <FieldLabel>Name</FieldLabel>
                <Input
                  type="text"
                  placeholder="Category Name"
                  {...register("name")}
                />
                {errors.name && (
                  <FieldError errors={[{ message: errors.name.message }]} />
                )}
              </Field>

              {/* Image */}
              <Field data-invalid={!!errors.image}>
                <FieldLabel>Thumbnail (image url)</FieldLabel>
                <Input
                  type="url"
                  placeholder="Image url"
                  {...register("image")}
                />
                {errors.image && (
                  <FieldError errors={[{ message: errors.image.message }]} />
                )}
              </Field>

              {/* Description */}
              <Field className="col-span-2 row-span-10" data-invalid={!!errors.description}>
                <FieldLabel>Description</FieldLabel>
                <Textarea className="h-full"
                  placeholder="Write description"
                  {...register("description")}
                />
              </Field>
            </FieldGroup>
          </form>
        </CardContent>

        <CardFooter>
          <Button
            form="create-category"
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </CardFooter>
      </Card>
     
    </div>
  );
}
