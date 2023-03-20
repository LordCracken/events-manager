import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import EventsRoot from './pages/Events';
import MainNavigation from './components/MainNavigation';

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="events/*" element={<EventsRoot />}></Route>
      </Routes>
    </>
  );
}

export default App;
