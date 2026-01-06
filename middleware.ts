import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  const env = process.env.NODE_ENV;

  // Sadece production ortamında ve 'www' olmayan domainde çalışır (localhost hariç)
  if (env === 'production' && host === 'muratdemirotokurtarma.com') {
    return NextResponse.redirect(
      new URL(`https://www.muratdemirotokurtarma.com${request.nextUrl.pathname}`, request.url),
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Tüm request path'leri ile eşleşir, ancak şunlar hariç:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};