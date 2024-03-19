import React from 'react';
import prisma from '@/prisma/db';
import DataTable from './components/data-table';

export default async function TicketsPage() {
  const tickets = await prisma.ticket.findMany();

  return (
    <div>
      <DataTable tickets={tickets} />
    </div>
  );
}
