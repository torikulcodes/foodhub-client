"use client";

import { ChartColumnStacked, House, UserRoundPen } from "lucide-react";
import React from "react";

export default function MobileMenu() {
  const menuItem = [
    {
      id: 1,
      name: "Home",
      icon: House,
    },
    {
      id: 2,
      name: "Category",
      icon: ChartColumnStacked,
    },
    {
      id: 3,
      name: "Profile",
      icon: UserRoundPen,
    },
  ];
  return (
    <div className="relative p-2.5 flex md:hidden">
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <div className="bg-white backdrop-blur-2xl w-full flex  justify-center items-center border-t-2 border-red-400 p-3">
          <div className="flex items-center justify-around w-full">
            {menuItem.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <item.icon  size={20} className="text-gray"/>
                <span className="text-xs">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
