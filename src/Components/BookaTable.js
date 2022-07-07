import React from "react";
import "../ComponentCss/BookaTableCss.css";
import {
  Col,
  Container,
  Row,
  Form,
  InputGroup,
  Button,
  Card,
} from "react-bootstrap";
import { useState } from "react";
import Btn from "./Btn";

const BookaTable = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Container>
        <Row>
       
          <Col md={6}>
            <h2 style={{ fontFamily: "Dancing Script, cursive" }}>
              Book A Table
            </h2>
            <br />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Your Name"
                    style={{
                      padding: "10px",
                      paddingLeft: "30px",
                      fontSize: "20px",
                      border: "1px solid black",
                      marginBottom: "20px",
                    }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Phone Number"
                    style={{
                      padding: "10px",
                      paddingLeft: "30px",
                      fontSize: "20px",
                      border: "1px solid black",
                      marginBottom: "20px",
                    }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Control
                    required
                    type="email"
                    placeholder="Your Email"
                    style={{
                      padding: "10px",
                      paddingLeft: "30px",
                      fontSize: "20px",
                      border: "1px solid black",
                      marginBottom: "20px",
                    }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Select
                    aria-label="Default select example"
                    required
                    style={{
                      padding: "10px",
                      paddingLeft: "30px",
                      fontSize: "20px",
                      border: "1px solid black",
                      marginBottom: "20px",
                    }}
                  >
                    <option>How Many Persons</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="2">4</option>
                    <option value="3">5</option>
                  </Form.Select>

                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Control
                    required
                    type="date"
                    placeholder="Your Email"
                    style={{
                      padding: "10px",
                      paddingLeft: "30px",
                      fontSize: "20px",
                      border: "1px solid black",
                      marginBottom: "20px",
                    }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Btn value="BOOK NOW"  />
              </Row>
            </Form>
          </Col>
          <Col md={6}>
            <br />
            <br />
            <br />
            <Card style={{ width: "100%", borderRadius: "20px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14564.512388699506!2d79.59405369999999!3d24.13213915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shi!2sin!4v1657032080471!5m2!1shi!2sin"
                frameborder="0"
                width="100%"
                height={340}
                style={{ borderRadius: "20px" }}
                allowfullscreen
              ></iframe>
            </Card>
          </Col>
        
        </Row>
      </Container>
    </>
  );
};

export default BookaTable;
