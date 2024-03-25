import React from 'react';
import prisma from '@/prisma/db';
import DataTable from './components/data-table';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import Pagination from '@/components/pagination';

interface TicketsPageSearchParams {
  page: string;
}

interface TicketsPageProps {
  searchParams: TicketsPageSearchParams;
}

const FIRST_PAGE = 1;

export default async function TicketsPage({ searchParams }: TicketsPageProps) {
  const pageSize = 10;
  const currentPage = parseInt(searchParams.page) || FIRST_PAGE;

  const tickets = await prisma.ticket.findMany({
    take: pageSize,
    skip: (currentPage - 1) * pageSize,
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
      <DataTable tickets={tickets} />
      <Pagination
        itemCount={ticketCount}
        pageSize={pageSize}
        currentPage={currentPage}
      />
    </div>
  );
}
