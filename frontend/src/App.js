import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import EventsRoot from './pages/events';
import MainNavigation from './components/MainNavigation';

function App() {
  const getEventsData = async () => {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      console.error('Something went wrong');
    } else {
      const resData = await response.json();
      return resData.events;
    }
  };

  return (
    <>
      <MainNavigation />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="events/*" loader={getEventsData} element={<EventsRoot />}></Route>
      </Routes>
    </>
  );
}

export default App;
