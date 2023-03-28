import { Form, NavLink } from 'react-router-dom';
import NewsletterSignup from './NewsletterSignup';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="" className={({ isActive }) => (isActive ? classes.active : null)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="events" className={({ isActive }) => (isActive ? classes.active : null)}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="newsletter"
              className={({ isActive }) => (isActive ? classes.active : null)}
            >
              Newsletter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="auth?mode=login"
              className={({ isActive }) => (isActive ? classes.active : null)}
            >
              Authentication
            </NavLink>
          </li>
          <li>
            <Form action="/logout" method="post">
              <button>Logout</button>
            </Form>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
