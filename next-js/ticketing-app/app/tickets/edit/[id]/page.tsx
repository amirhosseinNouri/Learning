import React from 'react';
import dynamic from 'next/dynamic';
import prisma from '@/prisma/db';

interface UpdateTicketPageProps {
  params: {
    id: string;
  };
}

const TicketForm = dynamic(() => import('@/components/ticket-form'), {
  ssr: false,
});

const UpdateTicketPage = async ({ params }: UpdateTicketPageProps) => {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!ticket) {
    return <p className="text-destructive">Ticket not found!</p>;
  }

  return <TicketForm ticket={ticket} />;
};

export default UpdateTicketPage;
