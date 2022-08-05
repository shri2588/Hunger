import React from 'react'
import '../ComponentCss/NavbarCompCss.css'
import { Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap'
import { BsPersonFill , BsSearch , BsCartCheck} from 'react-icons/bs'

const NavbarComp = () => {
  return (
    <>
        <Navbar  fixed="top" expand="lg" style={{ background:'black'}}>
      <Container>
        <Navbar.Brand href="#home">
          <h3 style={{ color:'white',fontFamily: "Dancing Script, cursive" }}>
           Hunger Street
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse>
          <Nav className="justify-content-end flex-grow-1" id="nav-container">
          <Nav style={{ marginRight:'60px',fontSize:'18px' }}>
            <Nav.Link href="#home" style={{color:'#FFBE33',margin:'0px 10px'}} className="NavLinks">HOME</Nav.Link>
            <Nav.Link href="#link" style={{color:'white',margin:'0px 10px'}} className="Nav-Links"> MENU</Nav.Link>
            <Nav.Link href="#link" style={{color:'white',margin:'0px 10px'}} className="Nav-Links">ABOUT</Nav.Link>
            <Nav.Link href="#link" style={{color:'white',margin:'0px 10px'}} className="Nav-Links">BOOK TABLE</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#link" style={{color:'white',margin:'0px 0px',fontSize:'20px'}} className="Nav-Links"><BsPersonFill /></Nav.Link>
            <Nav.Link href="#link" style={{color:'white',margin:'0px 0px',fontSize:'20px'}} className="Nav-Links"><BsCartCheck /></Nav.Link>
            <Nav.Link href="#link" style={{color:'white',marginRight:'10px',fontSize:'20px'}} className="Nav-Links"><BsSearch /></Nav.Link>
            <Button variant="warning" style={{ color:'white',fontWeight:600 }}>Place Order</Button>
          </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarComp