import { Route, Routes } from 'react-router-dom';

import EventsPage from './Events';
import EventDetailPage from './EventDetail';
import EditEventPage from './EditEvent';
import NewEventPage from './NewEvent';

import EventsNavigation from '../../components/EventsNavigation';

const EventsRoot = () => (
  <>
    <EventsNavigation />
    <Routes>
      <Route index element={<EventsPage />} />
      <Route path=":eventId" element={<EventDetailPage />}>
        <Route path="edit" element={<EditEventPage />} />
      </Route>
      <Route path="new" element={<NewEventPage />} />
    </Routes>
  </>
);

export default EventsRoot;
