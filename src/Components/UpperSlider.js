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
           
              <h1 style={{ color: 'white' }}>Fast Food Restaurant</h1>
               <p style={{ color: 'white' }} > Here’s what you need to know before getting started with the 
                ki r=rosj jjsworfsoj Navbar</p>
           
              <Button variant="warning" style={{ color: 'white' }}> Order Online</Button>{' '}
          
            </Col>
            </Row>
          </div>
          <div>
          <Row>
          <Col md={6} style={{marginTop:200, padding:10, paddingLeft:30}}>
           
              <h1 style={{ color: 'white' }}>Fast Food Restaurant</h1>
               <p style={{ color: 'white' }} > Here’s what you need to know before getting started with the 
                ki r=rosj jjsworfsoj Navbar</p>
           
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