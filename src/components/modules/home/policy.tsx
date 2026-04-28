import React from "react";
import Image from "next/image";

export default function Policy() {
  const policyData = [
    {
      id: "1",
      title: "Cash on Delivery",
      image: "/image-1.png",
      color: "bg-green-100 text-green-600",
    },
    {
      id: "2",
      title: "Natural Foods",
      image: "/image-2.png",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      id: "3",
      title: "48H Delivery",
      image: "/image-3.png",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "4",
      title: "Best Price",
      image: "/image-4.png",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="global_width">
      <div className="flex items-center justify-center gap-1 sm:gap-3 w-full">
        {policyData.map((item) => (
          <div key={item.id} className="bg-white rounded-sm px-2 w-full">
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-10 h-10 mb-1">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center sm:text-sm sm:font-semibold text-[8px] pb-1.5">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
