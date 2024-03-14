import { NextRequest } from 'next/server';
import { comments } from './data';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const query = searchParams.get('search');
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;

  return Response.json({ data: { comments: filteredComments } });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const comment = { id: comments.length + 1, text: payload.text };
  comments.push(comment);
  return new Response(JSON.stringify({ data: { comment } }), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 201,
  });
}
