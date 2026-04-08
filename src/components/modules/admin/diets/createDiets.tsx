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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { createDiets } from "@/actions/diets.action";


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
export function CreateDiets() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (data: CategoryFormValues) => {
    const toastId = toast.loading("Creating category...");

    try {
      const res = await createDiets({
        name: data.name.trim(),
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
    <div className="w-full max-w-4xl mx-auto">
      <Card >
        <CardHeader>
          <CardTitle>Create Category</CardTitle>
          <CardDescription>
            Fill the form below to create a new category
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form id="create-category" onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
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


              {/* Description */}
              <Field data-invalid={!!errors.description}>
                <FieldLabel>Description</FieldLabel>
                <Textarea
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
