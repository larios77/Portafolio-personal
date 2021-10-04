import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import portfolio1 from '../../img/calculator.png'
import portfolio2 from '../../img/jobs.png'
import portfolio3 from '../../img/landing.png'
import portfolio4 from '../../img/todoList.png'
import portfolio5 from '../../img/rickAndMortyAPI.png'
import { UilArrowRight } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'
import './portfolio.css'

function CarrouselPortfolio() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    arrows: true,
    className: 'slides',
  }
  return (
    <div>
      <div className="content__carrousel">
        {/* <!--==================== PORTFOLIO ====================--> */}
        <section className="portfolio section" id="portfolio">
          <h2 className="section__title">Portafolio</h2>
          <span className="section__subtitle">Trabajo mas reciente</span>
          <div className="portfolio__container container">
            <Slider {...settings}>
              <div>
                {/* <!--==================== PORTFOLIO 1====================--> */}
                <div className="portfolio__content grid">
                  <img
                    src={portfolio1}
                    alt="portfolio1"
                    className="portfolio__img"
                  />
                  <div className="portfolio__data">
                    <h3 className="portfolio__title">
                      Calculadora de porcentaje
                    </h3>
                    <p className="portfolio__description">
                      Es una calculadora para obtener el porcentaje y el número
                      de gente
                    </p>
                    <div className="portfolio__content-button">
                      <a
                        href="https://calculador-de-porcentaje.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="button button--flex button--small portfolio__button"
                      >
                        Demo
                        <UilArrowRight className="button__icon" />
                      </a>
                      <a
                        href="https://github.com/larios77/calculador-de-porcentaje"
                        target="_blank"
                        rel="noreferrer"
                        className="button button--flex button--small portfolio__button"
                      >
                        Ir al Código
                        <UilGithubAlt className="button__icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* <!--==================== PORTFOLIO 2====================--> */}
                <div className="portfolio__content grid">
                  <img
                    src={portfolio2}
                    alt="portfolio2"
                    className="portfolio__img"
                  />
                  <div className="portfolio__data">
                    <h3 className="portfolio__title">Lista de trabajos</h3>
                    <p className="portfolio__description">
                      lista de trabajos, con buscador de categorías
                    </p>
                    <a
                      href="https://jobs-kappa.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="button button--flex button--small portfolio__button"
                    >
                      Demo
                      <UilArrowRight className="button__icon" />
                    </a>
                    <a
                      href="https://github.com/larios77/jobs"
                      target="_blank"
                      rel="noreferrer"
                      className="button button--flex button--small portfolio__button"
                    >
                      Ir al Código
                      <UilGithubAlt className="button__icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  {/* <!--==================== PORTFOLIO 3====================--> */}
                  <div className="portfolio__content grid">
                    <img
                      src={portfolio3}
                      alt="portfolio3"
                      className="portfolio__img"
                    />
                    <div className="portfolio__data">
                      <h3 className="portfolio__title">Landing Bookmark</h3>
                      <p className="portfolio__description">
                        es un sitio web adaptable, hecho en react js
                      </p>
                      <div className="portfolio__content-button">
                        <a
                          href="https://landing-page-larios77.vercel.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="button button--flex button--small portfolio__button"
                        >
                          Demo
                          <UilArrowRight className="button__icon" />
                        </a>
                        <a
                          href="https://github.com/larios77/Landing-page"
                          target="_blank"
                          rel="noreferrer"
                          className="button button--flex button--small portfolio__button"
                        >
                          Ir al Código
                          <UilGithubAlt className="button__icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* <!--==================== PORTFOLIO 4====================--> */}
                <div className="portfolio__content grid">
                  <img
                    src={portfolio4}
                    alt="portfolio4"
                    className="portfolio__img"
                  />
                  <div className="portfolio__data">
                    <h3 className="portfolio__title">Todo List</h3>
                    <p className="portfolio__description">
                      una aplicación de tareas pequeñas, agregar y eliminar, con
                      modo oscuro
                    </p>
                    <div className="portfolio__content-button">
                      <a
                        href="https://todo-list-amber.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="button button--flex button--small portfolio__button"
                      >
                        Demo
                        <UilArrowRight className="button__icon" />
                      </a>
                      <a
                        href="https://github.com/larios77/TodoList"
                        target="_blank"
                        rel="noreferrer"
                        className="button button--flex button--small portfolio__button"
                      >
                        Ir al Código
                        <UilGithubAlt className="button__icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* <!--==================== PORTFOLIO 5====================--> */}
                <div className="portfolio__content grid">
                  <img
                    src={portfolio5}
                    alt="portfolio5"
                    className="portfolio__img"
                  />
                  <div className="portfolio__data">
                    <h3 className="portfolio__title">Api Rick and Morty</h3>
                    <p className="portfolio__description">
                      consumo de api rick y morty, y representado en tarjetas y
                      un buscador para las tarjetas
                    </p>
                    <div className="portfolio__content-button">
                      <a
                        href="https://api-rick-and-morty-psi.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="button button--flex button--small portfolio__button"
                      >
                        Demo
                        <UilArrowRight className="button__icon" />
                      </a>
                      <a
                        href="https://github.com/larios77/Api-rick-and-morty"
                        target="_blank"
                        rel="noreferrer"
                        className="button button--flex button--small portfolio__button"
                      >
                        Ir al Código
                        <UilGithubAlt className="button__icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </div>
    </div>
  )
}
export default React.memo(CarrouselPortfolio)
