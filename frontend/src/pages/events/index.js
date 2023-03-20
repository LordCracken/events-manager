import { Outlet } from 'react-router-dom';

import EventsNavigation from '../../components/EventsNavigation';

const EventsRoot = () => (
  <>
    <EventsNavigation />
    <Outlet />
  </>
);

export default EventsRoot;
