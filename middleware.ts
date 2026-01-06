import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  // "www" ile başlayan istekleri "www" olmayan hale çevir
  if (host && host.startsWith('www.muratdemirotokurtarma.com')) {
    return NextResponse.redirect(
      new URL(`https://muratdemirotokurtarma.com${request.nextUrl.pathname}`, request.url),
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};