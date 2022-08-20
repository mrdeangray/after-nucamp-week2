import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Challenge1 from './components/Challenge1';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='challenge1' element={<Challenge1 />} />

      </Routes>

    </div>
  );
}

export default App;
