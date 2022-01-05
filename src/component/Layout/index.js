import React from 'react'
import AppBar from '../AppBar/index'
import Hero from '../Hero/index'
import About from '../About/index'
import Skills from '../Skills/index'
import QualificationTabs from '../qualification/index'
import Services from '../Services/index'
import CarrouselPortfolio from '../Portfolio/index'
import NewProjects from '../Projects/index'
import TestimonialsCarrousel from '../Testimonial/index'
import Contact from '../Contact/index'
import Footer from '../Footer/index'
import './style.css'

function Layout() {
  return (
    <>
      <div className="main">
        <AppBar />
        <Hero />
        <About />
        <Skills />
        <QualificationTabs />
        <Services />
        <CarrouselPortfolio />
        <NewProjects />
        <TestimonialsCarrousel />
        <Contact />
      </div>
      <Footer />
    </>
  )
}
export default Layout
