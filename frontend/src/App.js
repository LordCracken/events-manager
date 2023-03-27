import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages';
import HomePage from './pages/Home';
import EventsRoot from './pages/events';
import EventsPage, { loader as eventsLoader } from './pages/events/Events';
import EventDetailPage, { loader as eventDetailLoader } from './pages/events/EventDetail';
import EditEventPage from './pages/events/EditEvent';
import NewEventPage from './pages/events/NewEvent';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetailPage /> },
              { path: 'edit', element: <EditEventPage /> },
            ],
          },
          { path: 'new', element: <NewEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
