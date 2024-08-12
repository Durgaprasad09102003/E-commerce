import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import HeaderMenu from './HeaderMenu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element= {<HeaderMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
