import React from 'react';
import './App.css';
import adsv1 from '../Media/videos/Ad12.mp4';
import adsp1 from '../Media/pics/adsp1.jpg'

export default function Ad1() {
  const showVideo=0;

  return (
    <div className='main_ads'>
      {showVideo ? (
        <video 
          id="ads"
          autoPlay 
          loop
          muted
          preload="auto"
        >
          <source src={adsv1} type="video/mp4" />
          <source src={adsv1} type="video/webm" />
          <source src={adsv1} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div id='adsImage'>
            <img src={adsp1} alt='adsp1' id="ads" />
            <div id='ads1OverImage'></div>
            <div id='ads1details'>
              <label>
                Watch Latest Movies,   Streming Now
              </label>
              <button type='submit'>Watch the film</button>
            </div>
        </div>
      )}

    </div>
  );
}
