import React from 'react'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import './footer.css'

function Footer() {
  return (
    <div>
      {/* <!--==================== FOOTER ====================--> */}
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Frankie</h1>
              <span className="footer__subtitle">Frontend developer</span>
            </div>
            <ul className="footer__links">
              <li>
                <a href="#services" className="footer__link">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#contact" className="footer__link">
                  Contáctame
                </a>
              </li>
            </ul>

            <div className="footer__socials">
              <a
                href="https://www.facebook.com/frankieyaset.bendanalarios"
                className="footer__social"
                target="_blank"
                rel="noreferrer"
              >
                <UilFacebookF />
              </a>
              <a
                href="https://www.instagram.com/frankie_larios7/"
                className="footer__social"
                target="_blank"
                rel="noreferrer"
              >
                <UilInstagram />
              </a>
              <a
                href="https://github.com/larios77"
                className="footer__social"
                target="_blank"
                rel="noreferrer"
              >
                <UilGithubAlt />
              </a>
            </div>
          </div>
          <p className="footer__copy">
            &#169; Frankie. Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  )
}
export default Footer
