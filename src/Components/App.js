import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import HeaderMenu from './HeaderMenu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='durgaprasad09102003.github.io/E-commerce/' element={<Navigate to='durgaprasad09102003.github.io/E-commerce/home/' />} />
          <Route path='durgaprasad09102003.github.io/E-commerce/home/' element= {<HeaderMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
