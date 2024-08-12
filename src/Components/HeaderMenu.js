import React, {useState} from 'react'
import './App.css';
import dpicon from '../Media/pics/dpicon1.png';
import search from '../Media/pics/search.png';
import cart from '../Media/pics/bag1.png';

export default function HeaderMenu() {

    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
      setIsActive(!isActive);
    };

  return (
    <div className='header'>
      <img src={dpicon} alt='dp' id='dpicon'/>
      <div className={`listitems ${isActive ? 'active' : ''}`}>
        <ul>
            <li>Store</li>
            <li>Mobiles</li>
            <li>Laptops</li>
            <li>Watches</li>
            <li>Headsets</li>
            <li>Tv & Home</li>
            <li>Entertainment</li>
            <li>Accessories</li>
            <li>Support</li>
        </ul>

        
      </div>

      <div className={`ham-menu ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>

      <div id='search_cart'>
            <img src={search} alt='search' id='search'/>
            <img src={cart} alt='cart' id='cart'/>
        </div>

      
    </div>
  )
}
