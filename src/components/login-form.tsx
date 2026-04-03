"use client";

import { cn } from "@/lib/utils";
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
import * as z from "zod";
import Link from "next/link";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Minimum length 6"),
});

type LoginFormValues = z.infer<typeof formSchema>;

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });
  const onSubmit = async (value: LoginFormValues) => {
    const toastId = toast.loading("logging in");

    try {
      const { data, error } = await authClient.signIn.email(value);

      console.log(data, error);
      if (error) {
        toast.error(error.message, { id: toastId });
        return;
      }
      toast.success("user logged in successfully", { id: toastId });

      // ✅ redirect on success
      router.push("/customer-dashboard");
    } catch (err) {
      toast.error("something went wrong please try again", { id: toastId });
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
    
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="scroll-m-20 text-xl font-semibold tracking-tight">Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FieldGroup>
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
                  <Input
                    type="password"
                    id="password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <FieldError
                      errors={[{ message: errors.password.message as string }]}
                    />
                  )}
                </Field>
                <Field>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Logging in..." : "Login"}
                  </Button>

                  <FieldDescription className="text-center">
                    Don&apos;t have an account?{" "}
                    <Link href="/register">Sign up</Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
     
    </div>
  );
}
