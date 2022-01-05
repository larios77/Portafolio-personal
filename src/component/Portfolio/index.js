import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import portfolio1 from '../../img/calculator.png'
import portfolio2 from '../../img/jobs.png'
import portfolio3 from '../../img/space.png'
import portfolio4 from '../../img/todoList.png'
import portfolio5 from '../../img/rickAndMortyAPI.png'
import { UilArrowRight } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'
import {
  Container,
  ContainerPortfolio,
  ContentPortfolio,
  ButtonContainer,
} from './styles'
import { Typography } from '../Typography/index'

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
    <>
      <Container id="portfolio">
        <Typography value="Portafolio" variant="title" />
        <Typography value="Trabajo mas reciente" variant="subtitle" />
        <ContainerPortfolio>
          <Slider {...settings}>
            {/* <!--==================== PORTFOLIO 1====================--> */}
            <div>
              <ContentPortfolio>
                <img src={portfolio1} alt="portfolio1" />
                <div>
                  <h3>Calculadora de porcentaje</h3>
                  <p>
                    Es una calculadora para obtener el porcentaje y el número de
                    gente
                  </p>
                  <ButtonContainer>
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
                  </ButtonContainer>
                </div>
              </ContentPortfolio>
            </div>
            {/* <!--==================== PORTFOLIO 2====================--> */}
            <div>
              <ContentPortfolio>
                <img src={portfolio2} alt="portfolio2" />
                <div>
                  <h3>Lista de trabajos</h3>
                  <p>lista de trabajos, con buscador de categorías</p>
                  <ButtonContainer>
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
                  </ButtonContainer>
                </div>
              </ContentPortfolio>
            </div>
            <div>
              {/* <!--==================== PORTFOLIO 3====================--> */}
              <ContentPortfolio>
                <img src={portfolio3} alt="portfolio3" />
                <div>
                  <h3>Space</h3>
                  <p>
                    es un sitio web adaptable, hecho en react js y
                    react-router-dom
                  </p>
                  <ButtonContainer>
                    <a
                      href="https://space-larios77.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="button button--flex button--small portfolio__button"
                    >
                      Demo
                      <UilArrowRight className="button__icon" />
                    </a>
                    <a
                      href="https://github.com/larios77/Space"
                      target="_blank"
                      rel="noreferrer"
                      className="button button--flex button--small portfolio__button"
                    >
                      Ir al Código
                      <UilGithubAlt className="button__icon" />
                    </a>
                  </ButtonContainer>
                </div>
              </ContentPortfolio>
            </div>
            {/* <!--==================== PORTFOLIO 4====================--> */}
            <div>
              <ContentPortfolio>
                <img src={portfolio4} alt="portfolio4" />
                <div>
                  <h3>Todo List</h3>
                  <p>
                    una aplicación de tareas pequeñas, agregar y eliminar, con
                    modo oscuro
                  </p>
                  <ButtonContainer>
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
                  </ButtonContainer>
                </div>
              </ContentPortfolio>
            </div>
            {/* <!--==================== PORTFOLIO 5====================--> */}
            <div>
              <ContentPortfolio>
                <img src={portfolio5} alt="portfolio5" />
                <div>
                  <h3>Api Rick and Morty</h3>
                  <p>
                    consumo de api rick y morty, y representado en tarjetas y un
                    buscador para las tarjetas
                  </p>
                  <ButtonContainer>
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
                  </ButtonContainer>
                </div>
              </ContentPortfolio>
            </div>
          </Slider>
        </ContainerPortfolio>
      </Container>
    </>
  )
}
export default React.memo(CarrouselPortfolio)
