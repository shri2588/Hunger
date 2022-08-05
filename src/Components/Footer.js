import React from 'react'
import '../ComponentCss/FooterCss.css'
import { Col, Container, Row } from 'react-bootstrap'
import { ImLocation2 ,ImMail} from 'react-icons/im'
import { BsFillTelephoneFill,BsFacebook,BsTwitter,BsLinkedin,BsInstagram,BsPinterest } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
        <div id='Footer-div'>

            <Container>
                <Row>
                    <Col md={4}>
                        <center>
                            <p className='heading'>
                                Contact Us
                            </p>
                            <p>
                                <ImLocation2 />&nbsp; Location
                            </p>
                            <p>
                                <BsFillTelephoneFill />&nbsp; Call +91-62609XXXXX
                            </p>
                            <p>
                                <ImMail />&nbsp; demo@gamil.com
                            </p>
                        </center>
                    </Col>
                    <Col md={4}>
                        <center>
                            <p className='heading'>
                            Hunger Street
                            </p>
                            <p>
                            Our mission is to inspire healthier communities by connecting people to real food
                            </p>
                            <h4>
                                <BsFacebook /> <BsTwitter /> <BsLinkedin /> <BsInstagram /> <BsPinterest />
                            </h4>
                        </center>
                    </Col>
                    <Col md={4}>
                        <center>
                            <p className='heading'>
                            Opening Hours
                            </p>
                            <p>Everyday</p>
                            <p>10.00 Am -10.00 Pm</p>
                        </center>
                    </Col>
                    <Col md={12}>
                        <br /><br /><br />
                        <center>
                            <p>© 2022 All Rights Reserved By Softseekers Infotech Pvt. Ltd.</p>
                        </center>
                    </Col>
                    <Col md={12}>
                        <br />
                       
                    </Col>
                </Row>
            </Container>

        </div>
    </>
  )
}

export default Footer