"use client";

import {
  ExternalLink,
  Headset,
  Mail,
  Menu,
  Phone,
  Search,
  ShoppingCart,
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
      url: "/customer-dashboard",
    },
  ],
  auth = {
    login: { title: "Login", url: "/login" },
    signup: { title: "Sign up", url: "/register" },
  },
  className,
  data,
}: Navbar1Props & { data?: UserSessionResponse }) => {
  const showSearchbar = useScrollStore((state) => state.showNavbar);
  const { searchTerm, setSearchTerm } = useFilterStore();

  return (
    <section className={cn("relative", className)}>
      {/* desktop Menu */}
      <div>
        <div className="items-center justify-between bg-pink-700 shadow p-4">
          <Sheet>
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

              <div className="sm:flex gap-5 hidden ">
                <div className="flex flex-col justify-center items-center text-white font-semibold cursor-pointer">
                  <p>Profile</p>
                  <UserRoundPen size={20} />
                </div>
                <div className="flex flex-col justify-center items-center text-white font-semibold cursor-pointer">
                  <p>Cart</p>
                  <ShoppingCart size={20} />
                </div>
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
