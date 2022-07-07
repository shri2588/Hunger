import React from "react";
import { Container,Row,Col,Card,Button,Image } from "react-bootstrap";
import img1 from '../img/o1.jpg'
import img2 from '../img/o2.jpg'
import { BsCartDashFill } from 'react-icons/bs'



const OfferCards = () => {
  return (
    <>
    <br /><br /><br />
      <Container>
        <Row>
          <Col md={6}>
            <Card style={{ width: "100%" ,background:'#222831',marginTop:10}}>
              
              <Card.Body>
                <Row>
                    <Col md={4}>
                    <Image variant="left" src={img1} className="mx-auto d-block" roundedCircle style={{ border:'4px solid yellow', width:160, height:160 }}/>
                    </Col>
                    <Col md={8} >
                        <br />
                        <h3 style={{ color:'white' }}>Tasty Thursdays</h3>
                      
                        <Button  variant="warning" style={{ color:'white' }}>Order Now  <BsCartDashFill /></Button>{' '}
                    </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
          <Card style={{ width: "100%" ,background:'#222831', marginTop:10}}>
              
              <Card.Body>
                <Row>
                    <Col md={4}>
                    <Image variant="left" src={img2}  roundedCircle style={{ border:'4px solid yellow', width:160, height:160 }}/>
                    </Col>
                    <Col md={8}>
                        <br />
                        <h3 style={{ color:'white' }}>Pizza Days</h3>
                      
                        <Button variant="warning" style={{ color:'white' }}>Order Now  <BsCartDashFill /></Button>{' '}
                    </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br /><br /><br />
    </>
  );
};

export default OfferCards;
