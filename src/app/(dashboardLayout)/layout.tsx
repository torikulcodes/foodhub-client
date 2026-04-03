import { AppSidebar } from "@/components/layout/app-sidebar";
import { ModeToggle } from "@/components/layout/modeToggle";
import { ProfileDropdown } from "@/components/layout/profile-dropdown";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Roles } from "@/constans/roles";
import { userService } from "@/service/user.service";

export const dynamic = "force-dynamic";

export default async function DashBoardLayout({
  admin,
  customer,
  provider,
}: {
  admin: React.ReactNode;
  customer: React.ReactNode;
  provider: React.ReactNode;
}) {
  const { data } = await userService.getSession();
  const userInfo = data?.user;

  if (!userInfo || !userInfo.role) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Unauthorized or no session available.</p>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar user={userInfo} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />

          <BreadcrumbList>
            <ModeToggle></ModeToggle>
            <ProfileDropdown data={data} />
          </BreadcrumbList>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {userInfo.role === Roles.ADMIN ? (
            admin
          ) : userInfo.role === Roles.CUSTOMER ? (
            customer
          ) : userInfo.role === Roles.PROVIDER ? (
            provider
          ) : (
            <div>Unauthorized</div>
          )}
      
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
