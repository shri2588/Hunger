import React from "react";
import { Card, Image, Row, Col ,Container} from "react-bootstrap";
import { BsCartDashFill } from 'react-icons/bs'

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
    <Container>

    
       <Row>
                
        {menuData.map((curElem) => {
          const { id, name, category, image, description,price } = curElem;

          return (
            <>
            <Col md={4}>
                <br />
                  <Card style={{ background:'#222831',border:'none',}}>
                    <Card style={{ background:'#F1F2F3',height:'250px',borderBottomLeftRadius:'60px' }}>
                    <center>
                    <Image
                      variant="top"
                      src={image}
                      width="180"
                      roundedCircle
                      className="mx-auto d-block"
                      style={{marginTop:40}}
                    />
                    </center>
                    </Card>

                    <Card.Body>
                        <h4 style={{ color:'white' }}>{name}</h4>
                        <p style={{ color:'white' }}>{description}</p>
                    
                    </Card.Body>
                  </Card>
                  </Col>
            </>
          );
        })}
              </Row>
              </Container>
              </>
  );
};

export default MenuCard;
