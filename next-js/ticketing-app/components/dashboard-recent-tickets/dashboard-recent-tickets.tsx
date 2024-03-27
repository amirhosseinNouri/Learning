import { Prisma } from '@prisma/client';
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '../ui/card';
import TicketStatusBadge from '../ticket-status-badge';
import Link from 'next/link';
import TicketPriority from '../ticket-priority';

type TicketWithUser = Prisma.TicketGetPayload<{
  include: { assignedToUser: true };
}>;

interface DashboardRecentTickets {
  tickets: TicketWithUser[];
}

const DashboardRecentTickets = ({ tickets }: DashboardRecentTickets) => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recently Updated</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="flex items-center">
              <TicketStatusBadge status={ticket.status} />
              <div className="ml-4">
                <Link href={`/tickets/${ticket.id}`} className="space-y-1">
                  <p>{ticket.title}</p>
                  <p>{ticket.assignedToUser?.name || 'Unassigned'}</p>
                </Link>
              </div>
              <div className="ml-auto font-medium">
                <TicketPriority priority={ticket.priority} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardRecentTickets;
