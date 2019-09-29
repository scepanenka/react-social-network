import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.navItem}><NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink> </div>
      <div className={s.navItem}><NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink> </div>
      <div className={s.navItem}><NavLink to='/news' activeClassName={s.activeLink}>News</NavLink> </div>
      <div className={s.navItem}><NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink> </div>
      <div className={s.navItem}><NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink> </div>
    </nav>
  )
};

export default NavBar;
