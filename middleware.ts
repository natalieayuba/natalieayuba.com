import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true') {
    return NextResponse.redirect(new URL('/under-construction', request.url));
  }
}

export const config = {
  matcher:
    '/((?!under-construction|api|_next/static|_next/image|favicon.ico).*)',
};
