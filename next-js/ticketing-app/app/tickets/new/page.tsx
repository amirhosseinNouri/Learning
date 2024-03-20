import dynamic from 'next/dynamic';
import React from 'react';

const TicketForm = dynamic(() => import('@/components/ticket-form'), {
  ssr: false,
});

const NewTicketPage = () => {
  return (
    <div>
      <TicketForm />
    </div>
  );
};

export default NewTicketPage;
