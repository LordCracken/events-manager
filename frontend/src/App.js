import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages';
import HomePage from './pages/Home';
import AuthenticationPage from './pages/Authentication';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
import EventsRoot from './pages/events';
import EventsPage, { loader as eventsLoader } from './pages/events/Events';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/events/EventDetail';
import EditEventPage from './pages/events/EditEvent';
import NewEventPage from './pages/events/NewEvent';
import ErrorPage from './pages/Error';

import { action as manipulateEventAction } from './components/EventForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'auth', element: <AuthenticationPage /> },
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
              { index: true, element: <EventDetailPage />, action: deleteEventAction },
              { path: 'edit', element: <EditEventPage />, action: manipulateEventAction },
            ],
          },
          { path: 'new', element: <NewEventPage />, action: manipulateEventAction },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
