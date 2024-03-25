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

interface DataTableProps {
  tickets: Ticket[];
}

const DataTable = ({ tickets }: DataTableProps) => {
  return (
    <div className="w-full mt-5">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>
                <div className="flex justify-center">Status</div>
              </TableHead>
              <TableHead>
                <div className="flex flex-row justify-center">Priority</div>
              </TableHead>
              <TableHead>Created At</TableHead>
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
