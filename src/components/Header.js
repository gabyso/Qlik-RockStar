import React from 'react';
import Search from './Search';
import CurrentTime from './CurrentTime';

const Header = () => {
  return (
    <nav id="navbar">
      <div className="logo">
        <h1><span className="text-heading">
          <i className="fas fa-headphones-alt"></i> Qlik</span> RockStar
        </h1>
      </div>
      <div className="search">
        <Search />
      </div>
      <div className="current">
        <CurrentTime />
      </div>
    </nav>
  );
};

export default Header;