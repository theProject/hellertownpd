// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Only lock down when env is active
  if (process.env.LOCKDOWN !== "1") {
    return NextResponse.next();
  }

  const { pathname } = req.nextUrl;

  // allow framework internals + assets so maintenance page can style
  const allowedPrefixes = [
    "/maintenance",
    "/_next",
    "/favicon",
    "/favicon.ico",
    "/robots.txt",
    "/sitemap.xml",
    "/icon",
    "/apple-touch-icon",
    "/android-chrome",
    "/og",
    "/assets",
    "/images",
    "/public",
  ];

  const isAllowed = allowedPrefixes.some((prefix) =>
    pathname.startsWith(prefix)
  );

  if (isAllowed) {
    return NextResponse.next();
  }

  // rewrite everything else to /maintenance
  const url = req.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: "/:path*",
};
