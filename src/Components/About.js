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
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All
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
