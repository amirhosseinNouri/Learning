import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  //   return NextResponse.redirect(new URL('/', request.url));
  if (request.nextUrl.pathname === '/profile') {
    return NextResponse.redirect(new URL('/hello', request.url));
  }
};

// export const config = {
//   matcher: '/profile',
// };
