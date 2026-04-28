import Footer from "@/components/layout/footer";
import MobileMenu from "@/components/layout/mobile-menu";
import { Navbar } from "@/components/layout/navbar";
import { cartService } from "@/service/cart.service";
import { userService } from "@/service/user.service";
import React from "react";

export const dynamic = "force-dynamic";

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await userService.getSession();
  const cartItem = await cartService.getCartItems();
  // console.log(session)
  return (
    <div
      suppressHydrationWarning
      className="bg-pink-50 pb-20 sm:pb-0 min-h-screen flex flex-col"
    >
      <Navbar
        data={session.data}
        cartItem={cartItem.data?.totalCount}
        className="sticky top-0 z-50"
      ></Navbar>
      <main className="flex-1"> {children}</main>
      {/* <MobileMenu /> */}
    </div>
  );
}
