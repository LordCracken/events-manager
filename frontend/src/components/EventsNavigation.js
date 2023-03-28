import { NavLink, useRouteLoaderData } from 'react-router-dom';
import classes from './EventsNavigation.module.css';

const EventsNavigation = () => {
  const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="" className={({ isActive }) => (isActive ? classes.active : null)} end>
              All Events
            </NavLink>
          </li>
          {token && (
            <li>
              <NavLink to="new" className={({ isActive }) => (isActive ? classes.active : null)}>
                New Event
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default EventsNavigation;
