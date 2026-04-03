"use client";


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { UserSessionResponse } from "@/types/user.type";
import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

export function ProfileDropdown({ data }: { data?: UserSessionResponse }) {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await authClient.signOut(); 

      router.push("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="profile image" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-56" align="end">
        <DropdownMenuGroup>

          {/* <DropdownMenuItem>
            <BadgeCheckIcon />
            Account
          </DropdownMenuItem> */}

          <DropdownMenuItem>
            <CreditCardIcon />
        <Link href="/customer-dashboard">Dashboard</Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <BellIcon />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
