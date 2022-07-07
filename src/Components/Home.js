import React from 'react'
import About from './About'
import BookaTable from './BookaTable'
import FeedBack from './FeedBack'
import Footer from './Footer'
import NavbarComp from './NavbarComp'
import '../ComponentCss/HomeCss.css'
import UpperSlider from './UpperSlider'
import { Container } from 'react-bootstrap'
import OfferCards from './OfferCards'
import Menu from './Menu'

const Home = () => {
  return (
    <>
      <div id='Header-Container' >
        <Container>
          <NavbarComp />
          <UpperSlider />
        </Container>
      </div>
      <OfferCards />
      <Menu />
      <About />
      <BookaTable />
     
      <Footer />
    </>
  )
}

export default Home