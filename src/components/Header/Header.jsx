import React from 'react';
import s from './Header.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        < img className={s.logo} src="https://i.dlpng.com/static/png/1235530-free-icons-png-vector-icon-smiley-smiley-png-1024_1024_preview.png" alt="logo" />
      </div>
      <div className={s.title}>My social network</div>
    </header>
  )
};

export default Header;
