import React from "react";

export default function AllProductForUser() {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover relative w-full h-[500px]"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/sX5sgV9k/homepage-promotion.png')",
      }}
    >
      <div className="absolute inset-0 bg-red-500/30 backdrop-blur-sm"></div>

      <div className="relative text-white p-5">allProductForUser</div>
    </div>
  );
}