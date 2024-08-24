import React from 'react'
import './App.css';
import iphone1 from '../Media/pics/iphone1.jpg';

export default function Content1() {
  return (
    <div className='content1'>
      <img src={iphone1} alt='iphone' />
      <div class='adbtns'>
        <button type='submit' id='button1'>Learn more</button>
        <button type='submit' id='button2'>Shop&nbsp;iphone</button>
      </div>
      <h1 id='Latest'>Updated Features</h1>
      <h1 id='Designs'>Creative &nbsp;Designs</h1>
    </div>
  )
}
