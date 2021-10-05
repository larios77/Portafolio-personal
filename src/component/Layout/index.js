import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Skills from '../Skills/skills'
import QualificationTabs from '../qualification/qualificationTabs'
import Services from '../Services/services'
import CarrouselPortfolio from '../Portfolio/portfolioCarrousel'
import NewProjects from '../Projects/projects'
import TestimonialsCarrousel from '../Testimonial/testimonialsCarrousel'
import Contact from '../Contact/Contact'
import Footer from '../Footer/footer'
import './style.css'

function Layout() {
  return (
    <div>
      <Header />
      <div className="main">
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
    </div>
  )
}
export default Layout
