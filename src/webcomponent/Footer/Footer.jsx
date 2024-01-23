import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  const data = [
    {
      title: "Learn React",
      subtitles: [
        "Quick Start",
        "Installation",
        "Describing the UI",
        "Adding Interactivity",
        "Managing State",
        "Escape Hatches"
      ]
    },
    {
      title: "API Reference",
      subtitles: [
        "React APIs",
        "React DOM APIs"
      ]
    },
    {
      title: "Community",
      subtitles: [
        "Code of Conduct",
        "Meet the Team",
        "Docs Contributors",
        "Acknowledgements"
      ]
    },
    {
      title: "More",
      subtitles: [
        "Blog",
        "React Native",
        "Privacy",
        "Terms"
      ]
    }
  ]
  const Box = ({ data }) => {
    return (
      <>
        <Col>
          <div>
            <ul>
              <li>{data.title}</li>
              <ul>
                {data.subtitles.map((subtitle, subIndex) => (
                  <li key={subIndex}>{subtitle}</li>
                ))}
              </ul>
            </ul>
          </div>
        </Col>
      </>
    );
  }




  return (
    <section>
      <Container className='container'>
        <Row>
          {
            data.map((item, index) => {
              return <Box data={item} key={index} />
            })
          }
        </Row>
      </Container>
    </section>
  );
}
export default Footer;




