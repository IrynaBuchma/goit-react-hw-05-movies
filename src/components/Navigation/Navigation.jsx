import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={css.nav}>
            <NavLink
              exact
              to="/"
              className={css.link}
              activeClassName={css.activeLink}
            >
                Home
            </NavLink>

            <NavLink
              exact
              to="/movies"
              className={css.link}
              activeClassName={css.activeLink}
            >
                Movies
            </NavLink>
        </nav>
    )
}