import { Route, Routes } from 'react-router-dom';

import AllEventsPage from './AllEvents';
import EventDetailPage from './EventDetail';
import EditEventPage from './EditEvent';
import NewEventPage from './NewEvent';

import EventsNavigation from '../../components/EventsNavigation';

const EventsPage = () => (
  <>
    <EventsNavigation />
    <Routes>
      <Route index element={<AllEventsPage />} />
      <Route path=":eventId" element={<EventDetailPage />}>
        <Route path="edit" element={<EditEventPage />} />
      </Route>
      <Route path="new" element={<NewEventPage />} />
    </Routes>
  </>
);

export default EventsPage;
