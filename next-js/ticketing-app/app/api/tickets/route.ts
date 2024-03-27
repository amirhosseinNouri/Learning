import { NextRequest, NextResponse } from 'next/server';
import { ticketSchema } from '@/validation-schemas/ticket';
import prisma from '@/prisma/db';
import { getServerSession } from 'next-auth';
import options from '@/app/api/auth/[...nextauth]/options';

export async function POST(request: NextRequest) {
  const session = await getServerSession(options);

  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const body = await request.json();
  const validation = ticketSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const newTicket = await prisma.ticket.create({
    data: { ...body },
  });

  return NextResponse.json(newTicket, { status: 201 });
}
