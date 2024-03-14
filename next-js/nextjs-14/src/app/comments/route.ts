import { comments } from './data';

export async function GET() {
  return Response.json(comments);
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
