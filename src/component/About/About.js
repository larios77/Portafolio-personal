import React from 'react'
import about from '../../img/perfil.png'
import { UilDownloadAlt } from '@iconscout/react-unicons'
import { UilArrowUp } from '@iconscout/react-unicons'
import './About.css'

function About() {
  function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 560 viewport height,
    //add the show-scroll class to the a tag with the scroll-up class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)
  return (
    <div>
      {/* <!--==================== ABOUT ====================--> */}
      <section className="about section" id="about">
        <h2 className="section__title">Acerca de</h2>
        <span className="section__subtitle">Mi introducción</span>

        <div className="about__container container grid">
          <img src={about} className="about__img" alt="about me" />

          <div className="about__data">
            <p className="about__description">
              Soy un desarrollador que desea aprender todos los días y dar lo
              mejor de mí en cada trabajo, disfruto ser responsable y trabajar
              en equipo, eso me define como desarrollador.
            </p>
            <div className="about__info">
              <div>
                <span className="about__info-title">01+</span>
                <span className="about__info-name">
                  Año de <br />
                  experiencia
                </span>
              </div>
              <div>
                <span className="about__info-title">05+</span>
                <span className="about__info-name">
                  Projectos <br />
                  Completados
                </span>
              </div>
              <div>
                <span className="about__info-title">01+</span>
                <span className="about__info-name">
                  Compañias donde <br />
                  trabajé
                </span>
              </div>
            </div>
            <div className="about__buttons">
              <a
                href="https://drive.google.com/file/d/1iJ0hR1EGYqCzfB2hmBurvFLPXHOwE29u/view?usp=drivesdk"
                target="_blank"
                rel="noreferrer"
                className="button button--flex button__about"
              >
                Descargar CV
                <UilDownloadAlt className="button__icon" />
              </a>
            </div>
          </div>
        </div>
        {/* <!--==================== SCROLL TOP ====================--> */}

        <a href="#home" className="scrollup" id="scroll-up">
          <UilArrowUp className="scrollup__icon" />
        </a>
      </section>
    </div>
  )
}
export default About
