import React from "react";
import "../ComponentCss/AboutCss.css";
import aboutimg from "../img/about-img.png";
import { Button, Col, Container, Row , Image} from "react-bootstrap";
import Btn from "./Btn";

const About = () => {
  return (
    <>
      <div id="About-div">
        <Container>
          <Row>
            <Col md={6}>
              <center>
                <Image className="img-fluid" src={aboutimg} alt="" width={400} />
              </center>
            </Col>
            <Col md={6}>
              <div id="about-right-div">
                <p className="heading">We Are Hunger Street</p>
                <p>
                We are a tight-knit, fun-loving, devoted team of local cooks spreading the gospel of good times and good food in Sagar.  We offer limited capacity onsite events in our restaurant kitchen space. And worry not, our krewe will travel to your destination of choice – from hotel ballrooms to private kitchens – to entertain groups of all sizes. We cook, we tell stories, we deliver informative culinary demonstrations and lectures, but most of all … we treat every event like you’re a guest at our dinner table. Join us!
                </p>
                <Btn value="Read more..."></Btn>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
    </>
  );
};

export default About;
