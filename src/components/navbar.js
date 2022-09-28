/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from './planet.png';

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <NavLink className="brand" to="/">
          <img src={planet} alt="logo" className="brand-logo" />
          <span className="brand-name">Space Travelers' Hub </span>
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink className="nav-item" to="/rockets">Rockets</NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/missions">Missions</NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/profile">My Profile</NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
