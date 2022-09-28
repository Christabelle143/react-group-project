import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Missions from './components/missions';
import Rockets from './components/rockets';
import Myprofile from './components/profile';
import NavLink from './components/navbar';

function App() {
  return (
    <>
      <Router>
        <div>
          <NavLink />
          <div>
            <Routes>
              <Route path="/rockets" exact element={<Rockets />} />
              <Route path="/missions" element={<Missions />} />
              <Route path="/profile" element={<Myprofile />} />
            </Routes>
          </div>
        </div>
      </Router>
      ,
    </>
  );
}
export default App;
