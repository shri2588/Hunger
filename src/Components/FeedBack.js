import React from "react";
import { Container } from "react-bootstrap";
import FeedbackSlider from "./FeedbackSlider";

const FeedBack = () => {
  return (
    <>
    <br /><br />
      <Container>
        <center>
          <h2 style={{ fontFamily: "Dancing Script, cursive" }}>
            What Says Our Customers
          </h2>
        </center>
        <FeedbackSlider />
      </Container>
    </>
  );
};

export default FeedBack;
