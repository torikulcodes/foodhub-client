import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Car } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="max-w-[1800px] mx-auto px-2 pb-3">
      <h3 className="global_heading text-center py-3">About FoodHub</h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Image */}
        <div className="relative w-full rounded-md overflow-hidden">
          <Image
            className="object-cover transition-transform duration-300 hover:scale-105 rounded-md"
            fill
            alt="About FoodHub"
            src="https://i.postimg.cc/yd2CGPHZ/2304-i201-009-s-m004-c13-cloud-kitchen-isometric.jpg"
          />
        </div>

        {/* Card */}
        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
          <CardTitle>Fresh, Healthy & Reliable</CardTitle>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              At FoodHub, we are passionate about delivering fresh, natural, and
              high-quality foods directly from trusted farms to your doorstep.
              Every product is carefully sourced and inspected to ensure maximum
              freshness and taste.
            </p>
            <p>
              Our commitment goes beyond just delivering food — we focus on
              promoting healthy lifestyles and providing an enjoyable, seamless
              shopping experience for every customer.
            </p>
            <p>
              With optimized logistics and dedicated customer support, FoodHub
              ensures fast, safe, and reliable delivery every time.
            </p>
          </CardContent>
          <CardTitle>Our Mission & Vision</CardTitle>
          <CardContent className="text-muted-foreground">
            <p>
              Our mission at FoodHub is to revolutionize the way people access
              fresh and healthy food by leveraging technology and efficient
              logistics. We envision a world where everyone has easy access to
              nutritious food options that support their well-being and
              lifestyle.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
