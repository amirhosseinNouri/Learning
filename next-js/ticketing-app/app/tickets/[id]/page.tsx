import prisma from '@/prisma/db';
import React from 'react';
import TicketDetails from './components/ticket-details';

interface UpdateTicketPageProps {
  params: {
    id: string;
  };
}

const UpdateTicketPage = async ({ params }: UpdateTicketPageProps) => {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });

  const users = await prisma.user.findMany();

  if (!ticket) {
    return <p className="text-destructive">Ticket not found</p>;
  }

  return <TicketDetails ticket={ticket} users={users} />;
};

export default UpdateTicketPage;
