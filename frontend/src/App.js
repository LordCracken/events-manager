import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import MainNavigation from './components/MainNavigation';

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="events/*" element={<EventsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
