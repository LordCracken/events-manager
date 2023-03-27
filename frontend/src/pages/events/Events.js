import { json, useLoaderData } from 'react-router-dom';
import EventsList from '../../components/EventsList';

const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
};

export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return json({ message: 'Could not fetch events.' }, { status: 500 });
  } else {
    return response;
  }
};

export default EventsPage;
