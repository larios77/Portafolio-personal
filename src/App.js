import React from 'react'
import Header from './component/Header/Header'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Skills from './component/Skills/skills'
import QualificationTabs from './component/qualification/qualificationTabs'
import Services from './component/Services/services'
import CarrouselPortfolio from './component/Portfolio/portfolioCarrousel'
import NewProjects from './component/Projects/projects'
import TestimonialsCarrousel from './component/Testimonial/testimonialsCarrousel'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/footer'
import './App.css'

function App() {
  return (
    <div className="App">
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

export default App
