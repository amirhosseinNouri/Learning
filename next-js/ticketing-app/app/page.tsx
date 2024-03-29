import React from 'react';
import prisma from '@/prisma/db';
import DashboardRecentTickets from '@/components/dashboard-recent-tickets';
import DashboardCharts from '@/components/dashboard-charts';

export default async function Dashboard() {
  const tickets = await prisma.ticket.findMany({
    where: {
      NOT: [{ status: 'CLOSED' }],
    },
    orderBy: {
      updatedAt: 'desc',
    },
    skip: 0,
    take: 5,
    include: {
      assignedToUser: true,
    },
  });

  const groupTicket = await prisma.ticket.groupBy({
    by: ['status'],
    _count: {
      id: true,
    },
  });

  const data = groupTicket.map((item) => ({
    name: item.status,
    total: item._count.id,
  }));

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 px-2">
        <div>
          <DashboardRecentTickets tickets={tickets} />
        </div>
        <div>
          <DashboardCharts data={data} />
        </div>
      </div>
    </div>
  );
}
