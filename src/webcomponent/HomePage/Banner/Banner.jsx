import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';

function Banner() {
  return (
    <>
    <div className="banner position-relative">
        <video width="100%" autoPlay loop muted className='position-relative'>
  <source src="banner.mp4" type="video/mp4" width='100%'/>
  </video>

  <div className="text-center text-white position-absolute start-0 w-100" style={{top:"20%"}}>
  <img src="logo192.png" alt="logo" width={120} className='logorotate my-3'/>
  <div className="rocket">
    <span></span>
    <img src='rocket.png' alt='rocket'/>
  </div>
  <div className="letter">
    <p>Welcome to REACT- A New Era of FrontEnd</p>
  </div>
    
    <h2 className='my-3'>Learn React Once and Write Everywhere</h2>
    <Button variant="primary" className='my-3'>Learn React</Button>
    <Button variant="secondary" className='ms-3'>Learn Redux</Button>
    </div>
    </div>
    </>
  );
}

export default Banner;


 
