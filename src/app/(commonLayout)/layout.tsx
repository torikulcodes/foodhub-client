import Footer from "@/components/layout/footer";
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
    <div suppressHydrationWarning>
      <Navbar data={session.data} className="sticky top-0 z-50 w-full backdrop-blur-2xl"></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
}
