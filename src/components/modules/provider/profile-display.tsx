"use client";

import { ProfileFormData } from "@/types/profile.type";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit2 } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileDisplayProps {
  profile: ProfileFormData;
  onEditClick: () => void;
}

export default function ProfileDisplay({
  profile,
  onEditClick,
}: ProfileDisplayProps) {
  return (
    <div className="space-y-6">
      {/* Cover Image */}
      {profile.coverImage && (
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-lg bg-muted">
          <Image
            src={profile.coverImage}
            alt="Cover"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Profile Header Card */}
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {profile.logo && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full relative w-40 h-40"
                >
                  <Avatar className="w-full h-full">
                    <AvatarImage
                      src={profile.logo}
                      alt={`${profile.name} logo`}
                    />
                    <AvatarFallback>
                      {profile.name?.slice(0, 2).toUpperCase() || "NA"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              )}
              <div className="flex flex-col justify-center items-center md:items-start md:justify-start">
                <CardTitle className="text-3xl md:text-start text-center">
                  {profile.name}
                </CardTitle>
                <CardDescription className="my-1 md:text-start text-center">
                  {profile.address}
                </CardDescription>
                {profile.workingHours && (
                  <Badge
                    variant="secondary"
                   
                  >
                    {profile.workingHours}
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <Button
            onClick={onEditClick}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <Edit2 className="h-4 w-4" />
            Edit
          </Button>
        </div>
      </CardHeader>

      {/* Profile Details Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Description */}
        {profile.description && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {profile.description}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Contact Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase">
                Phone
              </p>
              <p className="text-sm font-medium">{profile.phone}</p>
            </div>
            {profile.address && (
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase">
                  Address
                </p>
                <p className="text-sm font-medium">{profile.address}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Stats */}
        {/* <Card>
          <CardHeader>
            <CardTitle className="text-lg">Stats & Ratings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Rating</span>
              </div>
              <span className="text-sm font-medium">{profile?.rating?.toFixed(1) || "N/A"}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Reviews</span>
              </div>
              <span className="text-sm font-medium">{profile.reviewCount || 0}</span>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
}
