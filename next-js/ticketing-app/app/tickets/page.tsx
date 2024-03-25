import React from 'react';
import prisma from '@/prisma/db';
import DataTable from './components/data-table';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import Pagination from '@/components/pagination';

export default async function TicketsPage() {
  const tickets = await prisma.ticket.findMany();

  return (
    <div>
      <Link
        href="/tickets/new"
        className={buttonVariants({ variant: 'default' })}
      >
        New Ticket
      </Link>
      <DataTable tickets={tickets} />
      <Pagination itemCount={26} pageSize={10} currentPage={1} />
    </div>
  );
}
