import React from 'react';
import classes from './Navbar.module.scss';
import navList from '../../constants/NavBar/navList';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={classes.appNavbar}>
            <ul className={classes['appNavbar__list']}>
                {
                    navList.map(item => (
                        <li key={item.id}
                            className={classes['appNavbar__item']}>
                            <NavLink to={item.route}
                               className={classes['appNavbar__link']}
                            >
                                { item.text }
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavBar;
