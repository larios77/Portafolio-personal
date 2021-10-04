import React, { useEffect } from 'react'
import { UilLinkedinAlt } from '@iconscout/react-unicons'
import { UilMouseAlt } from '@iconscout/react-unicons'
import { UilArrowDown } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'
import photoPerfil from '../../img/imagesfonrt.jpeg'
import Typed from 'typed.js'
import './Hero.css'

function Hero() {
  useEffect(() => {
    new Typed('.typed', {
      stringsElement: '#strings', // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
      startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
      shuffle: false, // Alterar el orden en el que escribe las palabras.
      backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true, // Repetir el array de strings
      loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
      showCursor: true, // Mostrar cursor palpitanto
      // contentType: 'html', // 'html' o 'null' para texto sin formato
    })
  }, [])
  return (
    <div>
      {/* <!--==================== Hero ====================--> */}
      <section className="hero section" id="home">
        <div className="hero__container container grid">
          <div className="hero__content grid">
            <div className="hero__social">
              <a
                href="https://www.linkedin.com/in/frankie-yaset-benda%C3%B1a-larios-292603215/"
                target="_blank"
                rel="noreferrer"
                className="hero__social-icon"
              >
                <UilLinkedinAlt />
              </a>
              <a
                href="https://www.facebook.com/frankieyaset.bendanalarios"
                target="_blank"
                rel="noreferrer"
                className="hero__social-icon"
              >
                <UilFacebookF />
              </a>
              <a
                href="https://github.com/larios77"
                target="_blank"
                rel="noreferrer"
                className="hero__social-icon"
              >
                <UilGithubAlt />
              </a>
            </div>
            <div className="hero__img">
              <img
                className="hero__blob-img"
                src={photoPerfil}
                // x="15"
                alt="foto de perfil"
              />
            </div>
            <div className="hero__data">
              <h3 className="hero__subtitle">Hola,soy Frankie Larios</h3>
              <div className="content__typed">
                <span className="typed hero__title"></span>
              </div>
              <a href="#contact" className="button button--flex button__hero">
                Contáctame
                <UilMessage className="button__icon" />
              </a>
            </div>
          </div>
          <div id="strings">
            <h1>Desarrollador Front-end</h1>
          </div>
          <div className="hero__scroll">
            <a href="#about" className="hero__scroll-button button--flex">
              <UilMouseAlt className="hero__scroll-mouse" />
              <span className="hero__scroll-name">Scroll down</span>
              <UilArrowDown className="hero__scroll-arrow" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Hero
