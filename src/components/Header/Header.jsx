import React from 'react';
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      < img src="https://i.dlpng.com/static/png/1235530-free-icons-png-vector-icon-smiley-smiley-png-1024_1024_preview.png" alt="logo" className={s.logo} />
      <span>My social network</span>
    </header>
  )
};

export default Header;
