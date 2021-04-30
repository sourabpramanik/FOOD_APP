
import * as React from "react"
import Email from "./Email/Email"
import Foods from "./Foods/Foods"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Hero from "./Hero/Hero"
import Stats from "./Stats/Stats"
import {GlobalStyles} from './styles/globalStyles'
import Testimonial from "./Testimonial/Testimonial"


const Layout = () => {
 

  return (
    <>
      <GlobalStyles/>
      <Header />
      <Hero/> 
      <Foods Heading="Mesmerizing Foods For You"/>
      <Testimonial/>
      <Stats/>
      <Email/>
      <Footer/>
    </>
  )
}

export default Layout
