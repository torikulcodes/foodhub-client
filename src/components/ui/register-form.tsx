"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(4, "This field is required"),
  email: z.string().email(),
  password: z.string().min(6, "Minimum length 6"),
  image: z.string().or(z.literal("")),
});

type RegisterFormValues = z.infer<typeof formSchema>;

export function Registerform({ ...props }: React.ComponentProps<typeof Card>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", password: "", image: "" },
  });

  const onSubmit = async (value: RegisterFormValues) => {
    const toastId = toast.loading("creating user");
    try {
      const { data, error } = await authClient.signUp.email(value);

      console.log(data, error);
      if (error) {
        toast.error(error.message, { id: toastId });
        return;
      }
      toast.success("user created successfully", { id: toastId });
    } catch (err) {
      toast.error("something went wrong please try again", { id: toastId });
    }
  };

  return (
    <Card className="max-w-md mx-auto" {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* name */}
            <Field data-invalid={!!errors.name}>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input type="text" id="name" {...register("name")} />
              {errors.name && (
                <FieldError
                  errors={[{ message: errors.name.message as string }]}
                />
              )}
            </Field>

            {/* email */}
            <Field data-invalid={!!errors.email}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input type="email" id="email" {...register("email")} />
              {errors.email && (
                <FieldError
                  errors={[{ message: errors.email.message as string }]}
                />
              )}
            </Field>

            <Field data-invalid={!!errors.password}>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input type="password" id="password" {...register("password")} />
              {errors.password && (
                <FieldError
                  errors={[{ message: errors.password.message as string }]}
                />
              )}
            </Field>

            {/* image */}
            <Field data-invalid={!!errors.image}>
              <FieldLabel htmlFor="image">Image Url</FieldLabel>
              <Input type="url" id="image" {...register("image")} />
              {errors.image && (
                <FieldError
                  errors={[{ message: errors.image.message as string }]}
                />
              )}
            </Field>

            <Field>
              <Button type="submit">Create Account</Button>

              <FieldDescription className="px-6 text-center">
                Already have an account? <Link href="/login">Sign in</Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
