import { Ticket } from '@prisma/client';
import React from 'react';

interface TicketDetailsProps {
  ticket: Ticket;
}

const TicketDetails = ({ ticket }: TicketDetailsProps) => {
  return (
    <div>
      <p>{ticket.title}</p>

      <p>{ticket.description}</p>
    </div>
  );
};

export default TicketDetails;
