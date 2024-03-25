import React from 'react';
import prisma from '@/prisma/db';
import DataTable from './components/data-table';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import Pagination from '@/components/pagination';
import StatusFilter from '@/components/status-filter';
import { Status } from '@prisma/client';

interface TicketsPageSearchParams {
  page: string;
  status: Status;
}

interface TicketsPageProps {
  searchParams: TicketsPageSearchParams;
}

const FIRST_PAGE = 1;
const PAGE_SIZE = 10;

export default async function TicketsPage({ searchParams }: TicketsPageProps) {
  const currentPage = parseInt(searchParams.page) || FIRST_PAGE;

  const status = Object.values(Status).includes(searchParams.status)
    ? searchParams.status
    : undefined;

  let where = {};

  if (status) {
    where = { status };
  } else {
    where = {
      NOT: [{ status: Status.CLOSED }],
    };
  }

  const ticketCount = await prisma.ticket.count({ where });
  const tickets = await prisma.ticket.findMany({
    where,
    take: PAGE_SIZE,
    skip: (currentPage - 1) * PAGE_SIZE,
  });

  return (
    <div>
      <div className="flex gap-2">
        <Link
          href="/tickets/new"
          className={buttonVariants({ variant: 'default' })}
        >
          New Ticket
        </Link>
        <StatusFilter />
      </div>
      <DataTable tickets={tickets} />
      <Pagination
        itemCount={ticketCount}
        pageSize={PAGE_SIZE}
        currentPage={currentPage}
      />
    </div>
  );
}
