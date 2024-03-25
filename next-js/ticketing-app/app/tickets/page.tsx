import React from 'react';
import prisma from '@/prisma/db';
import DataTable from './components/data-table';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import Pagination from '@/components/pagination';
import StatusFilter from '@/components/status-filter';

interface TicketsPageSearchParams {
  page: string;
}

interface TicketsPageProps {
  searchParams: TicketsPageSearchParams;
}

const FIRST_PAGE = 1;
const PAGE_SIZE = 10;

export default async function TicketsPage({ searchParams }: TicketsPageProps) {
  const currentPage = parseInt(searchParams.page) || FIRST_PAGE;

  const tickets = await prisma.ticket.findMany({
    take: PAGE_SIZE,
    skip: (currentPage - 1) * PAGE_SIZE,
  });

  const ticketCount = await prisma.ticket.count();

  return (
    <div>
      <Link
        href="/tickets/new"
        className={buttonVariants({ variant: 'default' })}
      >
        New Ticket
      </Link>
      <StatusFilter />
      <DataTable tickets={tickets} />
      <Pagination
        itemCount={ticketCount}
        pageSize={PAGE_SIZE}
        currentPage={currentPage}
      />
    </div>
  );
}
