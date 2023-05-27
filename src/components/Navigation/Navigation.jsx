import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={css.nav}>
            <NavLink
              to="/"
              className={css.link}
              activeclassname={css.activeLink}
            >
                Home
            </NavLink>

            <NavLink
              to="/movies"
              className={css.link}
              activeclassname={css.activeLink}
            >
                Movies
            </NavLink>
        </nav>
    )
}