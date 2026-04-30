import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  let isAuthenticated = false;
  let isAdmin = false;
  let isProvider = false;
  let isCustomer = false;

  const cookieStore = await cookies();
  const res = await fetch(`${process.env.AUTH_URL}/get-session`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  const data = await res.json();

  if (!data || !data.user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (data && data.user) {
    isAuthenticated = true;
    if (data.user.role === "ADMIN") {
      isAdmin = true;
    }
    if (data.user.role === "PROVIDER") {
      isProvider = true;
    }
    if (data.user.role === "CUSTOMER") {
      isCustomer = true;
    }
  }

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    isAdmin &&
    (pathName.startsWith("/customer-dashboard") ||
      pathName.startsWith("/provider-dashboard"))
  ) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }

  if (isProvider && pathName.startsWith("/admin-dashboard")) {
    const url = request.nextUrl.clone();
    url.pathname = "/provider-dashboard";
    return NextResponse.redirect(url);
  }

  if (
    isCustomer &&
    (pathName.startsWith("/provider-dashboard") ||
      pathName.startsWith("/admin-dashboard"))
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin-dashboard/:path*",
    "/provider-dashboard/:path*",
    "/customer-dashboard/:path*",
  ],
};
