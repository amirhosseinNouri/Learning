import TicketPriority from '@/components/ticket-priority';
import TicketStatusBadge from '@/components/ticket-status-badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDate } from '@/utils/date';
import { Ticket } from '@prisma/client';
import Link from 'next/link';
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { TicketsPageSearchParams } from '../../page';

interface DataTableSearchParams extends TicketsPageSearchParams {}

interface DataTableProps {
  tickets: Ticket[];
  searchParams: DataTableSearchParams;
}

const DataTable = ({ tickets, searchParams }: DataTableProps) => {
  return (
    <div className="w-full mt-5">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Link href={{ query: { ...searchParams, orderBy: 'title' } }}>
                  Title
                </Link>
                {'title' === searchParams.orderBy && (
                  <ArrowDown className="inline p-1" />
                )}
              </TableHead>
              <TableHead>
                <div className="flex justify-center items-center">
                  <Link
                    href={{ query: { ...searchParams, orderBy: 'status' } }}
                  >
                    Status
                  </Link>
                  {'status' === searchParams.orderBy && (
                    <ArrowDown className="inline p-1" />
                  )}
                </div>
              </TableHead>
              <TableHead>
                <div className="flex flex-row justify-center items-center">
                  <Link
                    href={{ query: { ...searchParams, orderBy: 'priority' } }}
                  >
                    Priority
                  </Link>
                  {'priority' === searchParams.orderBy && (
                    <ArrowDown className="inline p-1" />
                  )}
                </div>
              </TableHead>
              <TableHead>
                <Link
                  href={{ query: { ...searchParams, orderBy: 'createdAt' } }}
                >
                  Created At
                </Link>
                {'createdAt' === searchParams.orderBy && (
                  <ArrowDown className="inline p-1" />
                )}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets
              ? tickets.map((ticket) => (
                  <TableRow key={ticket.id} data-href="/">
                    <TableCell>
                      <Link href={`/tickets/${ticket.id}`}>{ticket.title}</Link>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <TicketStatusBadge status={ticket.status} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-row justify-center">
                        <TicketPriority priority={ticket.priority} />
                      </div>
                    </TableCell>
                    <TableCell>{formatDate(ticket.createdAt)}</TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
