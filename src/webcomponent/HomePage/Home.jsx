import React from 'react';
import Courses from './Courses/Courses';
import Banner from './Banner/Banner';
import Coffee from './Coffee/Coffee';
import './Home.css';
import Journey from './Journey/Journey';
import Benefit from './Benefits/Benefit';
import Service from './Service/Service';
import Community from './Community/Community';



function Home() {
  return (
   <>
   <Banner/>
   <Courses/>
   <Coffee/>
   <Journey/>
   <Benefit/>
   <Service/>
   <Community/>
   </>
  );
}

export default Home;