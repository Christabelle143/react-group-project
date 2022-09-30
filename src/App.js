import React from 'react';
import './index.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Missions from './components/missions';
import Rockets from './components/rockets';
import Myprofile from './components/profile';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <div className="page">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/profile" element={<Myprofile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
