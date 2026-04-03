"use server";
import { ProfileFormData } from "@/schema/profile.schema";
import { Base_URL } from "@/helper/function/baseUrl";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const createProfile = async (data: ProfileFormData) => {
  try {
    const cookieStore = await cookies();
    const response = await fetch(`${Base_URL}providerProfile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const text = await response.text();
      return {
        data: null,
        error: { message: text || "Failed to create profile" },
      };
    }

    const result = await response.json();
    // API returns { status, message, data: {...} }
    // Unwrap to just the profile data
    revalidatePath("/provider-dashboard/profile");
    return { data: result.data, error: null };
  } catch (err) {
    console.error("CREATE PROFILE ERROR:", err);
    return {
      data: null,
      error: { message: "Something went wrong" },
    };
  }
};

export const updateProfile = async (data: ProfileFormData) => {
  try {
    const cookieStore = await cookies();
    const response = await fetch(`${Base_URL}providerProfile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const text = await response.text();
      return {
        data: null,
        error: { message: text || "Failed to update profile" },
      };
    }

    const result = await response.json();
    // API returns { status, message, data: {...} }
    // Unwrap to just the profile data
    revalidatePath("/provider-dashboard/profile");
    return { data: result.data, error: null };
  } catch (err) {
    console.error("UPDATE PROFILE ERROR:", err);
    return {
      data: null,
      error: { message: "Something went wrong" },
    };
  }
};

export const getMyProfile = async () => {
  try {
    const cookieStore = await cookies();
    const response = await fetch(`${Base_URL}providerProfile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
      },
    });

    if (!response.ok) {
      const text = await response.text();
      return {
        data: null,
        error: { message: text || "Failed to fetch profile" },
      };
    }

    const result = await response.json();
    // API returns { status, message, data: {...} }
    // Unwrap to just the profile data
    return { data: result.data, error: null };
  } catch (err) {
    console.error("GET PROFILE ERROR:", err);
    return {
      data: null,
      error: { message: "Something went wrong" },
    };
  }
};
