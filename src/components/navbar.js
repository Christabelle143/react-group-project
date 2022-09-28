import React from 'react';
import { Link } from 'react-router-dom';
import planet from './planet.png';
function Navlink() {
  return (
    <div>
      <nav>
      <div>
      <img src={planet} alt="logo" />
    </div>
        <ul>
          <li>
            <Link to="/rockets">Rockets</Link>
          </li>
          <li>
            <Link to="/missions">Missions</Link>
          </li>
          <li>
            <Link to="/profile">Myprofile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navlink;
