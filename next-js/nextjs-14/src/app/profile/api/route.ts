import { NextRequest } from 'next/server';
import { headers } from 'next/headers';

export async function GET(request: NextRequest) {
  const requestHeaders = headers();
  console.log(requestHeaders.get('Authorization'));
  return new Response('Profile');
}
