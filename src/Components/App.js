import React from 'react';
import './App.css';
import HeaderMenu from './HeaderMenu';
import Ad1 from './Ad1';
import Content1 from './Content1';

function App() {
  return (
<<<<<<< HEAD
    <div className='App'>   
      <HeaderMenu className='component'/>
      <Ad1 className='component'/>
      <Content1 className='component'/>
=======
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='durgaprasad09102003.github.io/E-commerce/' element = {<HeaderMenu />} />
          <Route path='durgaprasad09102003.github.io/E-commerce/home/' element= {<HeaderMenu />} />
        </Routes>
      </BrowserRouter>
>>>>>>> c462b2cbc05a757872172e9d0f59250514911410
    </div>
  );
}

export default App;
