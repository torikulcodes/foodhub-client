"use client";

import { useEffect, useState } from "react";
import { getMyProfile } from "@/actions/provider.action";
import { ProfileFormData } from "@/types/profile.type";
import ProfileForm from "./profile-form";
import ProfileDisplay from "./profile-display";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function ProfilePage() {
  const [profile, setProfile] = useState<ProfileFormData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await getMyProfile();
        if (result.error) {
          // Profile doesn't exist yet
          setProfile(null);
        } else {
          setProfile(result.data);
          setIsEditing(false);
        }
      } catch (err) {
        setError("Failed to load profile");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFormSuccess = () => {
    // Refresh profile data
    const fetchUpdatedProfile = async () => {
      const result = await getMyProfile();
      if (!result.error) {
        setProfile(result.data);
        setIsEditing(false);
      }
    };
    fetchUpdatedProfile();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
  console.log(error)
  }

  // No profile exists - show create form
  if (!profile) {
    return (
      <div className="max-w-2xl mx-auto">
        <ProfileForm onSuccess={handleFormSuccess} />
      </div>
    );
  }

  // Profile exists - show display or edit form
  return (
    <div className="global_width mx-auto">
      {isEditing ? (
        <ProfileForm
          initialData={profile}
          isEditing={true}
          onSuccess={handleFormSuccess}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <ProfileDisplay profile={profile} onEditClick={handleEditClick} />
      )}
    </div>
  );
}

