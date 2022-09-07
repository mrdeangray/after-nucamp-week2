import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Challenge1 from './components/Challenge1'
import Challenge2 from './components/Challenge2';
import Challenge3 from './components/Challenge3';
import Archives from './pages/Archives';
import ArchiveSearch from './pages/ArchiveSearch';
import Active from './pages/Active';
// import Challenge7 from './components/Challenge7';
import Challenge7 from './components/Challenge7-Crystal';
// import Challenge8 from './components/Challenge8';
import Challenge8 from './components/Challenge8-Crystal';

import Challenge9 from './components/Challenge9-Dean';
import Challenge10Dean from './components/Challenge10-Dean';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/challenge1' element={<Challenge1 />} />
        <Route path='/Challenge2' element={<Challenge2 />} />
        <Route path='/Challenge3' element={<Challenge3 />} />
        <Route path='/archives' element={<Archives />} />
        <Route path='/archivesearch' element={<ArchiveSearch />} />
        <Route path='/active' element={<Active />} />
        <Route path='/Challenge7' element={<Challenge7 />} />
        <Route path='/Challenge8' element={<Challenge8 />} />
        <Route path='/Challenge9' element={<Challenge9 />} />
        <Route path='/Challenge10' element={<Challenge10Dean />} />

      </Routes>

    </div>
  );
}

export default App;
