import React from 'react';
import './products.css';
import prod1 from '../Media/pics/mac book m2.png';
import prod2 from '../Media/pics/apple vision.png';
import prod3 from '../Media/pics/phone-tab-mac 2.png';
import prod4 from '../Media/pics/apple watch 2.png';
import prod5 from '../Media/pics/Apple-Card.png';
import prod6 from '../Media/pics/apple ear pods.png';

export default function Products() {
  return (
    <div className='products'>
        <div className='prod p1'>
            <div>
              <h2>MacBook Air</h2>
              <p>Lean.Mean.M3 machine</p>
            </div>

            <div class='probtns'>
                <button type='submit' id='prodbtn1'>Learn more</button>
                <button type='submit' id='prodbtn2'>Buy</button>
            </div>
            <div id='prodimg'>
              <img src={prod1} alt='' />
            </div>
        </div>
        <div className='prod p2'>
          <div id='prodimg'>
            <img src={prod2} alt='' />
          </div>

          <div class='probtns'>
              <button type='submit' id='prodbtn1'>Learn more</button>
              <button type='submit' id='prodbtn2'>Buy</button>
          </div>

          <div>
            <h2>Apple Vision Pro</h2>
            <p>The era of spatial computing is here</p>
          </div>
          
        </div>

        <div className='prod p3'>
          <div id='prodimg'>
            <img src={prod3} alt='' />
          </div>

          <div class='probtns'>
              <button type='submit' id='prodbtn1'>Learn more</button>
              <button type='submit' id='prodbtn2'>Buy</button>
          </div>

          <div>
            <h2>Apple Intelligence</h2>
            <p>AI for the rest of us.</p>
          </div>

        </div>
        <div className='prod p4'>
          <div>
            <h2>Apple Watch</h2>
            <p>Smarter.Brighter.Mightier</p>
          </div>

          <div class='probtns'>
              <button type='submit' id='prodbtn1'>Learn more</button>
              <button type='submit' id='prodbtn2'>Buy</button>
          </div>
          <div id='prodimg'>
            <img src={prod4} alt='' />
          </div>
        </div>

      
        <div className='prod p5'>
          <div>
            <h2>Apple Card</h2>
            <p>Get 3% CashBack Everytime</p>
          </div>

          <div class='probtns'>
              <button type='submit' id='prodbtn1'>Learn more</button>
              <button type='submit' id='prodbtn2'>Buy</button>
          </div>
          <div id='prodimg'>
            <img src={prod5} alt='' />
          </div>
        </div>
        <div className='prod p6'>
          <div id='prodimg'>
            <img src={prod6} alt='' />
          </div>

          <div class='probtns'>
              <button type='submit' id='prodbtn1'>Learn more</button>
              <button type='submit' id='prodbtn2'>Buy</button>
          </div>

          <div>
            <h2>Apple Vision Pro</h2>
            <p>The era of spatial computing is here</p>
          </div>
        </div>
      
    </div>
  )
}
