import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import { Footer } from './footer/footer'
import SectionThree from './SectionThree'
// //import Dash from "../pages/Dash"
// import Main from "../pages/Main"

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Slider />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Footer />
    </div>
  )
}

 export default Homepage