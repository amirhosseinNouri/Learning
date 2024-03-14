import { comments } from '../data';

type Context = {
  params: {
    id: string;
  };
};

export async function GET(_: Request, { params }: Context) {
  const comment = comments.find((comment) => comment.id === Number(params.id));

  if (!comment) {
    return new Response(
      JSON.stringify({ data: { message: 'Comment not found' } }),
      { status: 404 },
    );
  }

  return new Response(JSON.stringify({ data: { comment } }), { status: 200 });
}

export async function PATCH(request: Request, { params }: Context) {
  const commentIndex = comments.findIndex(
    (comment) => comment.id === Number(params.id),
  );

  if (commentIndex === -1) {
    return new Response(
      JSON.stringify({ data: { message: 'Comment not found' } }),
      { status: 404 },
    );
  }

  const payload = await request.json();

  const updatedComment = { ...comments[commentIndex], text: payload.text };

  comments.splice(commentIndex, 1, updatedComment);

  return new Response(JSON.stringify({ data: { comment: updatedComment } }), {
    status: 204,
  });
}

export async function DELETE(_: Request, { params }: Context) {
  const commentIndex = comments.findIndex(
    (comment) => comment.id === Number(params.id),
  );

  if (commentIndex === -1) {
    return new Response(
      JSON.stringify({ data: { message: 'Comment not found' } }),
      { status: 404 },
    );
  }

  comments.splice(commentIndex, 1);

  return new Response(null, {
    status: 204,
  });
}
