import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';

const EventsPage = () => (
  <>
    <EventsNavigation />
    <Outlet />
  </>
);

export default EventsPage;
