import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Courses.css';

function Courses() {
        const course = [{
            icon : "fa-brands fa-react",
            title : "ReactJS",
            subtitle : "24x7 Hrs Support"
        },
        {
            icon : "fa-solid fa-infinity",
            title : "Flux",
            subtitle : "24x7 Hrs Support"
        },
        {
            icon : "fa-solid fa-cloud-arrow-down",
            title : "Redux",
            subtitle:"24x7 Hrs Support"
        },
        {
            icon : "fa-brands fa-react",
            title : "React Native",
            subtitle : "24x7 Hrs Support"
        },
        {
            icon : "fa-brands fa-js",
            title : "JavaScript",
            subtitle : "24x7 Hrs Support"
        },
    ];

const Box = ({course}) => {

    return (
       <>
       <Col className='text-center py-4 px-5 shadow border my-3 mx-2 rounded bg-white'>
       <div className="icon-box">
        <i className={course.icon}></i>
       </div>
       <h5>{course.title}</h5>
       <p className='fw-bold'>{course.subtitle}</p>
       </Col>
       </>
      );
}
       
       
 return(
    <section className='comp bg-white'>
    <Container className='container'>
        <Row>
            {
              course.map((item,index)=>{
                return<Box course={item}key={index}/>
              })
            }
        </Row>
    </Container>
    </section>
 );
}

export default Courses;