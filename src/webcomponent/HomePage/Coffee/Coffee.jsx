import React from 'react';
import './Coffee.css';

function Coffee() {
  return (
    <>
    <div className="anim">
    <h2 data-text="Let's have a Coffee before starting our journey!!!">Let's have a Coffee before starting our journey!!!</h2>
    </div>
    <div className="coffee">
    <video width="100%" height="350px" autoPlay loop muted className='position-relative'>
  <source src="coffee.mp4" type="video/mp4" width='100%'/>
  </video>
    </div>
    </>
  );
}

export default Coffee;