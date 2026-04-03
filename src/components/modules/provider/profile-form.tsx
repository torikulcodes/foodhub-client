"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema, type ProfileFormData } from "@/schema/profile.schema";
import { createProfile, updateProfile } from "@/actions/provider.action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface ProfileFormProps {
  initialData?: ProfileFormData;
  isEditing?: boolean;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function ProfileForm({
  initialData,
  isEditing = false,
  onSuccess,
  onCancel,
}: ProfileFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: initialData || {
      name: "",
      logo: "",
      coverImage: "",
      description: "",
      phone: "",
      address: "",
      workingHours: "",
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const action = isEditing ? updateProfile : createProfile;
      const result = await action(data);

      if (result.error) {
        setErrorMessage(result.error.message || "Something went wrong");
      } else {
        const message = isEditing ? "Profile updated successfully!" : "Profile created successfully!";
        setSuccessMessage(message);
        if (!isEditing) {
          form.reset();
        }
        onSuccess?.();
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{isEditing ? "Edit Profile" : "Create Profile"}</CardTitle>
        <CardDescription>
          {isEditing
            ? "Update your restaurant profile information"
            : "Set up your restaurant profile to get started"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {successMessage && (
              <div className="rounded-md bg-green-50 p-4 text-sm text-green-800 border border-green-200">
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="rounded-md bg-red-50 p-4 text-sm text-red-800 border border-red-200">
                {errorMessage}
              </div>
            )}

            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Restaurant Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your restaurant name"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Logo */}
            <FormField
              control={form.control}
              name="logo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logo URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/logo.png"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormDescription>Direct link to your restaurant logo</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Cover Image */}
            <FormField
              control={form.control}
              name="coverImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cover Image URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/cover.png"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormDescription>Cover photo for your restaurant</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your restaurant (cuisine, specialties, etc.)"
                      {...field}
                      disabled={isLoading}
                      rows={4}
                    />
                  </FormControl>
                  <FormDescription>Minimum 10 characters</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+1 (555) 000-0000"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Address */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your restaurant address"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Working Hours */}
            <FormField
              control={form.control}
              name="workingHours"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Working Hours</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., 09:00 AM - 10:00 PM"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormDescription>Operating hours of your restaurant</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isEditing ? "Updating..." : "Creating..."}
                  </>
                ) : isEditing ? (
                  "Update Profile"
                ) : (
                  "Create Profile"
                )}
              </Button>
              {onCancel && (
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={onCancel}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
