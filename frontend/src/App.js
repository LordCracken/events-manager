import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import MainNavigation from './components/MainNavigation';

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=":eventId" element={<EventDetailPage />}>
            <Route path="edit" element={<EditEventPage />} />
          </Route>
          <Route path="new" element={<NewEventPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
