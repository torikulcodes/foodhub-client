import { Registerform } from "@/components/ui/register-form";
import { GalleryVerticalEnd } from "lucide-react";

import Image from "next/image";

export default function Register() {
  return (
    <div className="grid max-w-[1800px] mx-auto px-2 lg:grid-cols-2 mt-4">
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full">
          <Registerform />
        </div>
      </div>

      <div className="relative w-full rounded-md overflow-hidden lg:block">
        <Image
          src="https://i.postimg.cc/YqwhQdYc/register-now-vector-banner-free-registration-megaphone-announcement-button-loudspeaker-origami-speec.webp"
          alt="Image"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105 rounded-md dark:brightness-[0.8] dark:grayscale-30 hover:dark:brightness-90"
        />
      </div>
    </div>
  );
}