import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <ul className={styles.nav}>
      <li className={styles.itemNav}>
        <NavLink exact to="/" className={styles.navLink}>
          Home
        </NavLink>
      </li>
      <li className={styles.itemNav}>
        <NavLink to="/movies" className={styles.navLink}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
