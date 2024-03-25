import prisma from '@/prisma/db';
import { userSchema } from '@/validation-schemas/user';
import { NextRequest, NextResponse } from 'next/server';
import bcryptj from 'bcryptjs';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = userSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const duplicate = await prisma.user.findUnique({
    where: { username: body.username },
  });

  if (duplicate) {
    return NextResponse.json(
      { message: 'Duplicate username' },
      { status: 409 },
    );
  }

  const hashedPassword = await bcryptj.hash(body.password, 10);

  const newUser = await prisma.user.create({
    data: { ...body, password: hashedPassword },
  });

  return NextResponse.json(newUser, { status: 201 });
}
