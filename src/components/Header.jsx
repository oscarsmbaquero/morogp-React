import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
    </header>
  )
}

export default Header;