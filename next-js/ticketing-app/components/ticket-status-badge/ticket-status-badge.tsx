import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Status, Ticket } from '@prisma/client';

interface TicketStatusBadgeProps {
  status: Ticket['status'];
}

type StatusColor = 'bg-red-400' | 'bg-blue-400' | 'bg-green-400';

type StatusDetails = {
  label: string;
  color: StatusColor;
};

const MAP_STATUS_TO_DETAILS: Record<
  TicketStatusBadgeProps['status'],
  StatusDetails
> = {
  OPEN: { label: 'Open', color: 'bg-red-400' },
  STARTED: { label: 'Started', color: 'bg-blue-400' },
  CLOSED: { label: 'Closed', color: 'bg-green-400' },
};

const TicketStatusBadge = ({ status }: TicketStatusBadgeProps) => {
  return (
    <Badge
      className={`${MAP_STATUS_TO_DETAILS[status].color} text-background hover:${MAP_STATUS_TO_DETAILS[status].color}`}
    >
      {MAP_STATUS_TO_DETAILS[status].label}
    </Badge>
  );
};

export default TicketStatusBadge;
