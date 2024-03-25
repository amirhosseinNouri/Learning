'use client';
import { TICKET_STATUS } from '@/constants/ticket';
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
import { ExtractObjectValues } from '@/types';

type Status = { label: string; value?: string };

type StatusValue = ExtractObjectValues<typeof TICKET_STATUS>;

const STATUSES: Status[] = [
  { label: 'Open / Started' },
  { label: 'Open', value: TICKET_STATUS.Open },
  { label: 'Started', value: TICKET_STATUS.Started },
  { label: 'Closed', value: TICKET_STATUS.Closed },
];

const StatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleStatusChange = (status: StatusValue) => {
    const params = new URLSearchParams();
    params.append('status', status);

    const query = params.size ? `?${params.toString()}` : '0';
    router.push(`/tickets${query}`);
  };

  return (
    <Select
      defaultValue={searchParams.get('status') || ''}
      onValueChange={(status) => handleStatusChange(status as StatusValue)}
    >
      <SelectTrigger>
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
