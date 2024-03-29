import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages';
import HomePage from './pages/Home';
import AuthenticationPage, { action as authAction } from './pages/Authentication';
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

import { action as logoutAction } from './pages/Logout';
import { action as manipulateEventAction } from './components/EventForm';
import { checkAuthLoader, tokenLoader } from './util/auth';

const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'auth', element: <AuthenticationPage />, action: authAction },
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
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      { path: 'logout', action: logoutAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
