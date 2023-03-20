import { useLoaderData } from 'react-router-dom';
import EventsList from '../../components/EventsList';

const EventsPage = () => {
  const events = useLoaderData();

  return <EventsList events={events} />;
};

export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    console.error('Something went wrong');
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export default EventsPage;