import type { GetServerSideProps } from 'next';
import type { Event } from '@/types';
import { useState } from 'react';
import { useRouter } from 'next/router';

type EventsProps = {
  events: Event[];
};

type EventsQueryParams = {
  category: string;
};

const Events = ({ events }: EventsProps) => {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);

  const router = useRouter();

  const fetchSportEvents = async () => {
    const response = await fetch(
      'http://localhost:4000/events?category=sports',
    );
    const data = (await response.json()) as Event[];
    setFilteredEvents(data);
    router.push('/events?category=sports', undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportEvents}>Sport events</button>
      <h1>List of events</h1>
      {filteredEvents.map((event) => (
        <div key={event.id}>
          <h2>
            {event.id} {event.title} {event.date} | {event.category}
          </h2>
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  EventsProps,
  EventsQueryParams
> = async (context) => {
  const { query } = context;
  const category = query?.category ? 'category=sports' : '';
  const response = await fetch(`http://localhost:4000/events?${category}`);
  const data = (await response.json()) as Event[];

  return {
    props: {
      events: data,
    },
  };
};

export default Events;
