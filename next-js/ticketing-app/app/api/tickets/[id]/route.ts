import { NextRequest, NextResponse } from 'next/server';
import { ticketSchema } from '@/validation-schemas/ticket';
import prisma from '@/prisma/db';

interface UpdateTicketProps {
  params: { id: string };
}

export async function PATCH(
  request: NextRequest,
  { params }: UpdateTicketProps,
) {
  const body = await request.json();
  const validation = ticketSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!ticket) {
    return NextResponse.json({ error: 'Ticket not found' }, { status: 404 });
  }

  const updatedTicket = await prisma.ticket.update({
    where: { id: ticket.id },
    data: { ...body },
  });

  return NextResponse.json(updatedTicket, { status: 204 });
}
