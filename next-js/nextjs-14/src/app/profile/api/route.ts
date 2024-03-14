import { NextRequest } from 'next/server';
import { cookies, headers } from 'next/headers';

export async function GET(request: NextRequest) {
  const requestHeaders = headers();
  const theme = cookies().get('theme');
  console.log({ theme });

  cookies().set('theme', 'light');
  return new Response('Profile');
}
