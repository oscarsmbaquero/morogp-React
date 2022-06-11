import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div class="header">
      <Menu>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/list">
          <span>Pilots</span>
        </Link>
        <Link to="/motos">
          <span>Motos</span>
        </Link>
        <Link to="/circuits">
          <span>Circuitos</span>
        </Link>
        <Link to="/form">
          <span>Formulario</span>
        </Link>
        <Link to="/profile">
        <span>Perfil</span>
      </Link>
      </Menu>
    </div>
  )
}

export default Sidebar