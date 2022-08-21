import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Challenge1 from './components/Challenge1'
import Challenge2 from './components/Challenge2';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/challenge1' element={<Challenge1 />} />
        <Route path='/Challenge2' element={<Challenge2 />} />

      </Routes>

    </div>
  );
}

export default App;
