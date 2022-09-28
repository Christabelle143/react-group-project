import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from './planet.png';

function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <img src={planet} alt="logo" />
        </div>
        <ul>
          <li>
            <NavLink to="/rockets">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/missions">Missions</NavLink>
          </li>
          <li>
            <NavLink to="/profile">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
