import { NextRequest, NextResponse } from 'next/server';
import { ticketPatchSchema } from '@/validation-schemas/ticket';
import prisma from '@/prisma/db';

interface UpdateTicketProps {
  params: { id: string };
}

export async function PATCH(
  request: NextRequest,
  { params }: UpdateTicketProps,
) {
  const body = await request.json();
  const validation = ticketPatchSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!ticket) {
    return NextResponse.json({ error: 'Ticket not found' }, { status: 404 });
  }

  if (body.assignedToUserId) {
    body.assignedToUserId = parseInt(body.assignedToUserId);
  }

  const updatedTicket = await prisma.ticket.update({
    where: { id: ticket.id },
    data: { ...body },
  });

  return NextResponse.json(updatedTicket);
}

export async function DELETE(
  request: NextRequest,
  { params }: UpdateTicketProps,
) {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!ticket) {
    return NextResponse.json({ error: 'Ticket not found' }, { status: 404 });
  }

  await prisma.ticket.delete({ where: { id: ticket.id } });

  return NextResponse.json({ message: 'Ticket deleted' });
}
