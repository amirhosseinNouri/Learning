import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  return NextResponse.redirect(new URL('/', request.url));
};

export const config = {
  matcher: '/profile',
};
