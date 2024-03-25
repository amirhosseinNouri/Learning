'use client';
import React from 'react';
import { Button } from '../ui/button';
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { FIRST_PAGE, ONE_PAGE } from './pagination.constants';
import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: PaginationProps) => {
  const pageCount = Math.ceil(itemCount / pageSize);

  const router = useRouter();
  const searchParams = useSearchParams();

  if (pageCount <= ONE_PAGE) {
    return null;
  }

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className='mt-4'>
      <div>
        <Button
          variant="outline"
          disabled={currentPage === FIRST_PAGE}
          onClick={() => changePage(FIRST_PAGE)}
        >
          <ChevronFirst />
        </Button>
        <Button
          variant="outline"
          disabled={currentPage === FIRST_PAGE}
          onClick={() => changePage(currentPage - ONE_PAGE)}
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="outline"
          disabled={currentPage === pageCount}
          onClick={() => changePage(currentPage + ONE_PAGE)}
        >
          <ChevronRight />
        </Button>
        <Button
          variant="outline"
          disabled={currentPage === pageCount}
          onClick={() => changePage(pageCount)}
        >
          <ChevronLast />
        </Button>
      </div>

      <div>
        <p>
          Page {currentPage} of {pageCount}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
