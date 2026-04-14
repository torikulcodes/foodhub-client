"use client";

import { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useScrollStore } from "@/helper/globalState/scroll";
import { useFilterStore } from "@/helper/globalState/searchAndFilter";

export default function BannerAndSearch() {
  const triggerRef = useRef(null);
  const setShowNavbar = useScrollStore((state) => state.setShowNavbar);
  const { searchTerm, setSearchTerm } = useFilterStore(); // <-- ADD THIS

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // search bar cross করলে navbar show
        setShowNavbar(!entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, [setShowNavbar]);

  return (
    <div
      className="bg-center bg-no-repeat bg-cover relative w-full h-[500px]"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/sX5sgV9k/homepage-promotion.png')",
      }}
    >
      <div className="absolute inset-0 bg-pink-600/70 backdrop-blur-sm"></div>

      <div className="absolute text-white flex flex-col justify-center items-center h-full w-full">
        <h2 className="text-2xl font-bold text-center">
          Bangladesh Fruits online
        </h2>

        <p className="text-center text-5xl sm:text-7xl font-bold">
          Organic Fruits
        </p>

        {/* ✅ THIS IS THE TRIGGER */}
        <div ref={triggerRef} className="mt-10 w-full flex justify-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600" />
            <Input
              value={searchTerm} // <-- ADD THIS
              onChange={(e) => setSearchTerm(e.target.value)} // <-- ADD THIS
              placeholder="Search product..."
              className="pl-9 h-10 border-0 bg-white rounded-3xl w-[300px] sm:w-[500px] text-gray-700 font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
