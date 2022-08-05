import React, { Component } from "react";
import Slider from "react-slick";
import Btn from './Btn'
import { Button, Row, Col } from "react-bootstrap";

const UpperSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    arrows: false,
  };
  return (
    <>

      <div>
        <Slider {...settings}>
          <div>
          <Row>
          <Col md={6} style={{marginTop:200, padding:10, paddingLeft:30}}>
           
              <h1 style={{ color: 'white' }}>Foodies Welcome Here.</h1>
               <p style={{ color: 'white' }} > A place where food, design, and ambiance come together to create a memorable experience.
             </p>
           
              <Button variant="warning" style={{ color: 'white' }}> Order Online</Button>{' '}
          
            </Col>
            </Row>
          </div>
          <div>
          <Row>
          <Col md={6} style={{marginTop:200, padding:10, paddingLeft:30}}>
           
              <h1 style={{ color: 'white' }}>We are always here to serve you.</h1>
               <p style={{ color: 'white' }} > A modern restaurant with a menu that will make your mouth water.
                </p>
           
              <Button variant="warning" style={{ color: 'white' }}> Order Online</Button>{' '}
          
            </Col>
            </Row>
          </div>

        </Slider>
      </div>

    </>
  )
}

export default UpperSlider