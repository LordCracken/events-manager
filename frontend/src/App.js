import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Root from './pages';
import HomePage from './pages/Home';
import EventsRoot from './pages/events';
import EventsPage, { loader as eventsLoader } from './pages/events/Events';
import EventDetailPage from './pages/events/EventDetail';
import EditEventPage from './pages/events/EditEvent';
import NewEventPage from './pages/events/NewEvent';
import ErrorPage from './pages/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="events/*" element={<EventsRoot />}>
        <Route index loader={eventsLoader} element={<EventsPage />} />
        <Route path=":eventId" element={<EventDetailPage />}>
          <Route path="edit" element={<EditEventPage />} />
        </Route>
        <Route path="new" element={<NewEventPage />} />
      </Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
