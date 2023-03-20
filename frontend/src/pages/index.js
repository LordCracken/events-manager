import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const Root = () => (
  <>
    <MainNavigation />
    <Outlet />
  </>
);

export default Root;
