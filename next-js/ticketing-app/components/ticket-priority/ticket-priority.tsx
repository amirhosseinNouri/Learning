import { Ticket } from '@prisma/client';
import { Flame } from 'lucide-react';
import React from 'react';

interface TicketPriorityProps {
  priority: Ticket['priority'];
}

type PriorityLevel = 1 | 2 | 3;

type PriorityDetails = { label: string; level: PriorityLevel };

const MAP_PRIORITY_TO_DETAILS: Record<
  TicketPriorityProps['priority'],
  PriorityDetails
> = {
  HIGH: { label: 'High', level: 3 },
  MEDIUM: { label: 'Medium', level: 2 },
  LOW: { label: 'Low', level: 1 },
};

const TicketPriority = ({ priority }: TicketPriorityProps) => {
  return (
    <div className="flex justify-between ">
      <Flame
        className={`${
          MAP_PRIORITY_TO_DETAILS[priority].level >= 1
            ? 'text-red-500'
            : 'text-muted'
        }`}
      />
      <Flame
        className={`${
          MAP_PRIORITY_TO_DETAILS[priority].level >= 2
            ? 'text-red-500'
            : 'text-muted'
        }`}
      />
      <Flame
        className={`${
          MAP_PRIORITY_TO_DETAILS[priority].level >= 3
            ? 'text-red-500'
            : 'text-muted'
        }`}
      />
    </div>
  );
};

export default TicketPriority;
