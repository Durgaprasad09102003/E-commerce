import React from 'react';
import './products.css';
import devara from  '../Media/pics/movies/devara.jpg';
import OG from  '../Media/pics/movies/OG.jpg';
import Spirit from  '../Media/pics/movies/Spirit.jpg';

export default function Ad2() {
  return (
    <div>
    <div className="slider-wrapper">
    <div className="slider">
      <img
        id="slide-1"
        src={OG}
        alt=""
      />
      <img
        id="slide-2"
        src={devara}
        alt=""
      />
      <img
        id="slide-3"
        src={Spirit}
        alt=""
      />
      
    </div>
    <div id='ads2OverImage'></div>
    <div className="slider-nav">
      <a href="#slide-1" aria-label="Slide 1"></a>
      <a href="#slide-2" aria-label="Slide 2"></a>
      <a href="#slide-3" aria-label="Slide 3"></a>
    </div>
  </div>

    </div>
  )
}
