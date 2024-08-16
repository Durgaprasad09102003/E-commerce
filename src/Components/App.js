import React from 'react';
import './App.css';
import HeaderMenu from './HeaderMenu';
import Ad1 from './Ad1';
import Content1 from './Content1';

function App() {
  return (
    <div className='App'>   
      <HeaderMenu className='component'/>
      <Ad1 className='component'/>
      <Content1 className='component'/>
    </div>
  );
}

export default App;
