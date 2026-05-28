// src/middleware.ts
//
// Fixes malformed Google Ads landing page URLs caused by a misconfigured
// tracking template. The bug produces URLs like:
//
//   /page?https://www.isoprotech.be/page&gad_source=1&gclid=ABC
//
// The full page URL is duplicated as the first query parameter. This breaks
// GA4 attribution and inflates bounce metrics. We strip the duplicate URL
// segment and redirect to the clean version while keeping all valid params
// (gclid, gbraid, gad_source, gad_campaignid, utm_*).
//
// Fix in Google Ads: Campaign → Settings → Tracking → Tracking template
// Change: {lpurl}?{lpurl}&gad_source=...
// To:     {lpurl}?gad_source=...

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { search, pathname } = request.nextUrl;

  // Detect malformed pattern: query string starts with a full URL
  if (search.startsWith('?https://') || search.startsWith('?http://')) {
    // Split query string on '&', drop any segment that is itself a URL
    const rawParams = search.slice(1); // strip leading '?'
    const cleanParams = rawParams
      .split('&')
      .filter(
        (segment) =>
          !segment.startsWith('https://') && !segment.startsWith('http://')
      );

    const cleanSearch = cleanParams.length > 0 ? `?${cleanParams.join('&')}` : '';
    const cleanUrl = new URL(
      pathname + cleanSearch,
      request.nextUrl.origin
    );

    return NextResponse.redirect(cleanUrl, {
      status: 302, // temporary — remove once Google Ads is fixed
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // All routes except Next.js internals and static assets
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)).*)',
  ],
};
