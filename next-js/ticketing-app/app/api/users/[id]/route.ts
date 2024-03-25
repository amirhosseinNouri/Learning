import prisma from '@/prisma/db';
import { userSchema } from '@/validation-schemas/user';
import { NextRequest, NextResponse } from 'next/server';
import bcryptj from 'bcryptjs';

interface UpdateUserProps {
  params: { id: string };
}

export async function PATCH(request: NextRequest, { params }: UpdateUserProps) {
  const body = await request.json();
  const validation = userSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  if (body.password && body.password !== '') {
    const hashedPassword = await bcryptj.hash(body.password, 10);
    body.password = hashedPassword;
  } else {
    delete body.password;
  }

  if (user.username !== body.username) {
    const duplicateUsername = await prisma.user.findUnique({
      where: { username: body.username },
    });

    if (duplicateUsername) {
      return NextResponse.json(
        { error: 'Duplicate username' },
        { status: 409 },
      );
    }
  }

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: { ...body },
  });

  return NextResponse.json(updatedUser);
}
