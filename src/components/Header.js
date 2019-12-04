import React from 'react';
import Search from './Search';
import Clock from './Clock';
import Logo from './Logo';

const Header = () => {
  return (
    <nav id="navbar">
      <Logo />
      <Search />
      <Clock />
    </nav>
  );
};

export default Header;