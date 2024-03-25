'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Status } from '@prisma/client';

const STATUSES: { label: string; value?: string }[] = [
  { label: 'Open / Started' },
  { label: 'Open', value: Status.OPEN },
  { label: 'Started', value: Status.STARTED },
  { label: 'Closed', value: Status.CLOSED },
];

const StatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleStatusChange = (status: Status) => {
    const params = new URLSearchParams();
    params.append('status', status);

    const query = params.size ? `?${params.toString()}` : '0';
    router.push(`/tickets${query}`);
  };

  return (
    <Select
      defaultValue={searchParams.get('status') || ''}
      onValueChange={(status) => handleStatusChange(status as Status)}
    >
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Filter by status..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {STATUSES.map((status) => (
            <SelectItem key={status.value || '0'} value={status.value || '0'}>
              {status.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default StatusFilter;
