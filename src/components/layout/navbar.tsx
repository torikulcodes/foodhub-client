/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  ExternalLink,
  Headset,
  Home,
  LayoutGrid,
  Mail,
  Menu,
  Phone,
  Search,
  ShoppingCart,
  User,
  UserRoundPen,
} from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ModeToggle } from "./modeToggle";
import Image from "next/image";
import { UserSessionResponse } from "@/types/user.type";
import { ProfileDropdown } from "./profile-dropdown";
import { Card } from "../ui/card";
import { Roles } from "@/constans/roles";
import { useScrollStore } from "@/helper/globalState/scroll";
import { Input } from "../ui/input";
import { useFilterStore } from "@/helper/globalState/searchAndFilter";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    src: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
  data?: UserSessionResponse;
  cartItem?: any;
}

const Navbar = ({
  menu = [
    {
      title: "Meals",
      url: "/meals",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Dashboard",
      url: "/provider-dashboard",
    },
  ],
  auth = {
    login: { title: "Login", url: "/login" },
    signup: { title: "Sign up", url: "/register" },
  },
  className,
  data,
  cartItem,
}: Navbar1Props) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const showSearchbar = useScrollStore((state) => state.showNavbar);
  const { searchTerm, setSearchTerm } = useFilterStore();

  const [open, setOpen] = useState(false);

  console.log(cartItem);

  return (
    <section className={cn("relative w-full", className)}>
      {/* desktop Menu */}
      <div>
        <div className="items-center justify-between bg-pink-600 shadow p-3">
          <Sheet open={open} onOpenChange={setOpen}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <SheetTrigger asChild>
                  <Menu className="size-6 hidden sm:flex" color="white" />
                </SheetTrigger>
                <p className="font-['Playwrite_IE'] text-white">FOODHUB BD</p>
              </div>

              {showSearchbar ? (
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600" />
                  <Input
                    value={searchTerm} // <-- ADD THIS
                    onChange={(e) => setSearchTerm(e.target.value)} // <-- ADD THIS
                    placeholder="Search product..."
                    className="pl-9 h-10 border-0 bg-white rounded-3xl md:w-[400px] text-gray-700 font-semibold"
                  />
                </div>
              ) : (
                ""
              )}

              <div className="sm:flex gap-5 hidden mr-4">
                <div className="flex flex-col justify-center items-center text-white font-semibold cursor-pointer">
                  <UserRoundPen size={18} />
                  <p>Profile</p>
                </div>
                <Link
                  href="/customer-dashboard/cart"
                  className="flex relative flex-col justify-center items-center text-white font-semibold cursor-pointer"
                >
                  <ShoppingCart size={18} />
                  <p>Cart</p>
                  {cartItem > 0 && (
                    <span className="bg-white w-6 h-6 text-pink-600 rounded-full flex justify-center items-center absolute -right-3 -top-2 text-xs">
                      {cartItem}
                    </span>
                  )}
                </Link>
              </div>
            </div>

            <SheetContent
              side="left"
              className="overflow-y-auto flex flex-col justify-between py-2"
            >
              <div>
                <SheetHeader>
                  <SheetTitle className="text-red-500 font-semibold border-b pb-2 border-red-200">
                    FOODHUB
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-2"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  {/* 
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <Link href={auth.login.url}>{auth.login.title}</Link>
                    </Button>
                    <Button asChild>
                      <Link href={auth.signup.url}>{auth.signup.title}</Link>
                    </Button>
                    <Button>Logout</Button>
                  </div> */}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {/* helpline */}
                <div className="flex justify-between bg-red-50 items-center p-1">
                  <div className="flex items-center   gap-2.5">
                    <Headset size={20} color="red" />
                    <p className="font-semibold text-sm">FoodHub Helpline</p>
                  </div>
                  <ExternalLink size={20} className="text-gray-600" />
                </div>
                {/* email */}
                <div className="flex justify-between bg-red-50 items-center p-1">
                  <div className="flex items-center   gap-2.5">
                    <Mail size={20} color="red" />
                    <p className="font-semibold text-sm">
                      mdtorikul908765@gmail.com
                    </p>
                  </div>
                  <ExternalLink size={20} className="text-gray-600" />
                </div>
                {/* phone */}
                <div className="flex justify-between bg-red-50 items-center p-1">
                  <div className="flex items-center   gap-2.5">
                    <Phone size={20} color="red" />
                    <p className="font-semibold text-sm">01330111785</p>
                  </div>
                  <ExternalLink size={20} className="text-gray-600" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* mobile menu */}

      <div className="fixed bottom-2 left-2 right-2 z-[999]  border-2 border-pink-600 p-4 rounded-[300px] bg-white sm:hidden flex justify-around items-end gap-4">
        <Link
          href="/"
          className={`flex flex-col cursor-pointer hover:scale-105 duration-300  items-center justify-center font-semibold ${
            isActive("/") ? "text-pink-600" : "text-gray-400"
          }`}
        >
          <Home size={18} />
          <p className="text-xs">Home</p>
        </Link>

        <Link
          href="/customer-dashboard/cart"
          className={`flex relative flex-col cursor-pointer hover:scale-105 duration-300  items-center justify-center font-semibold ${
            isActive("/customer-dashboard/cart")
              ? "text-pink-600"
              : "text-gray-400"
          }`}
        >
          <ShoppingCart size={18} />

          <p className="text-xs">Cart</p>

          {cartItem > 0 && (
            <span className="absolute -right-2 -top-2 w-5 h-5 bg-pink-600 text-white text-xs rounded-full flex items-center justify-center">
              {cartItem}
            </span>
          )}
        </Link>

        <div
          className={`flex flex-col items-center hover:scale-105 duration-300 cursor-pointer  justify-center font-semibold `}
          onClick={() => setOpen(!open)}
        >
          <LayoutGrid size={18} />
          <p className="text-xs">Category</p>
        </div>

        <Link
          href="/customer-dashboard/profile"
          className={`flex flex-col items-center cursor-pointer hover:scale-105 duration-300 justify-center font-semibold ${
            isActive("/customer-dashboard/profile")
              ? "text-pink-600"
              : "text-gray-400"
          }`}
        >
          <User size={18} />
          <p className="text-xs">Profile</p>
        </Link>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        asChild
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        <Link href={item.url}>{item.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export { Navbar };
