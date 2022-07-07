import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import img1 from "../img/client1.jpg";
import img2 from "../img/client2.jpg";

const FeedbackSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
    <br /><br />
      <div>
        <Slider {...settings}>
          <div>
            <div style={{ padding: "20px" }}>
              <Card style={{ width: "100%", background: "#222831" }}>
                <Card.Body>
                  <p style={{ color: "white" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                  <h3 style={{ color: "white" }}>
                    <sub>Mike Hamell</sub>
                  </h3>
                  <h4 style={{ color: "white" }}>
                    <sub>magna aliqua</sub>
                  </h4>
                </Card.Body>
              </Card>
              <br />
             
            </div>
          </div>

          <div>
            <div style={{ padding: "20px" }}>
              <Card style={{ width: "100%", background: "#222831" }}>
                <Card.Body>
                  <p style={{ color: "white" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                  <h3 style={{ color: "white" }}>
                    <sub>Moana Michell</sub>
                  </h3>
                  <h4 style={{ color: "white" }}>
                    <sub>magna aliqua</sub>
                  </h4>
                </Card.Body>
              </Card>
              <br />
             
            </div>
          </div>

          <div>
          <div style={{ padding: "20px" }}>
              <Card style={{ width: "100%", background: "#222831" }}>
                <Card.Body>
                  <p style={{ color: "white" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                  <h3 style={{ color: "white" }}>
                    <sub>Moana Michell</sub>
                  </h3>
                  <h4 style={{ color: "white" }}>
                    <sub>magna aliqua</sub>
                  </h4>
                </Card.Body>
              </Card>
              <br />
             
            </div>
          </div>


          <div>
          <div style={{ padding: "20px" }}>
              <Card style={{ width: "100%", background: "#222831" }}>
                <Card.Body>
                  <p style={{ color: "white" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                  <h3 style={{ color: "white" }}>
                    <sub>Moana Michell</sub>
                  </h3>
                  <h4 style={{ color: "white" }}>
                    <sub>magna aliqua</sub>
                  </h4>
                </Card.Body>
              </Card>
              <br />
             
            </div>
          </div>

        </Slider>
      </div>
      <br /><br />
    </>
  );
};

export default FeedbackSlider;
