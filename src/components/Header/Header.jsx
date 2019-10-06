import React from 'react';
import s from './Header.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        < img className={s.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="logo" />
      </div>
      <div className={s.title}>My social network</div>
    </header>
  )
};

export default Header;
