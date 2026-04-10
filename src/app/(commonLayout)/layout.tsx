import Footer from "@/components/layout/footer";
import MobileMenu from "@/components/layout/mobile-menu";
import { Navbar } from "@/components/layout/navbar";
import { userService } from "@/service/user.service";
import React from "react";

export const dynamic = "force-dynamic";

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await userService.getSession();

  // console.log(session)
  return (
    <div suppressHydrationWarning className="bg-red-50">
      <Navbar data={session.data} className="sticky top-0 z-50 w-full backdrop-blur-2xl "></Navbar>
      {children}
      <Footer></Footer>
      <MobileMenu/>
    </div>
  );
}
