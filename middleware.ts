// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // If LOCKDOWN is not active, allow normal site
  if (process.env.LOCKDOWN !== "1") {
    return NextResponse.next();
  }

  const { pathname } = req.nextUrl;

  // Allow these paths to go through:
  // 1. The maintenance page itself (so we can show it)
  // 2. Next.js internals like /_next and static assets
  // 3. Public assets like /favicon.ico, /robots.txt, etc.
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
    "/og", // if you have OG images under /public/og/...
    "/assets",
    "/images",
    "/public",
  ];

  const isAllowed = allowedPrefixes.some((prefix) =>
    pathname.startsWith(prefix),
  );

  if (isAllowed) {
    return NextResponse.next();
  }

  // Everything else gets rewritten to /maintenance
  const url = req.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.rewrite(url);
}

// Run on everything
export const config = {
  matcher: "/:path*",
};
