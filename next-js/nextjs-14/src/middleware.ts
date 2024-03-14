import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  const response = NextResponse.next();

  const theme = response.cookies.get('theme');

  if (!theme) {
    response.cookies.set('theme', 'dark');
  }

  response.headers.set('x-custom-header', 'custom value');

  return response;

  //   return NextResponse.redirect(new URL('/', request.url));
  if (request.nextUrl.pathname === '/profile') {
    return NextResponse.redirect(new URL('/hello', request.url));
  }
};

// export const config = {
//   matcher: '/profile',
// };
