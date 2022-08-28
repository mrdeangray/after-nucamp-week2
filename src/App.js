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
import Challenge7 from './components/Challenge7';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/challenge1' element={<Challenge1 />} />
        <Route path='/Challenge2' element={<Challenge2 />} />
        <Route path='/Challenge3' element={<Challenge3 />} />
        <Route path='/Challenge7' element={<Challenge7 />} />
        <Route path='/archives' element={<Archives />} />
        <Route path='/archivesearch' element={<ArchiveSearch />} />
        <Route path='/active' element={<Active />} />


      </Routes>

    </div>
  );
}

export default App;
