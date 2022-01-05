import React from 'react'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import {
  Container,
  FooterBg,
  FooterContainer,
  FooterLinks,
  FooterSocial,
} from './styles'

function Footer() {
  return (
    <>
      <Container>
        <FooterBg>
          <FooterContainer>
            <div>
              <h1>Frankie</h1>
              <span>Frontend developer</span>
            </div>
            <FooterLinks>
              <li>
                <a href="#services">Servicios</a>
              </li>
              <li>
                <a href="#portfolio">Portafolio</a>
              </li>
              <li>
                <a href="#contact">Contáctame</a>
              </li>
            </FooterLinks>

            <FooterSocial>
              <a
                href="https://www.facebook.com/frankieyaset.bendanalarios"
                target="_blank"
                rel="noreferrer"
              >
                <UilFacebookF />
              </a>
              <a
                href="https://www.instagram.com/frankie_larios7/"
                target="_blank"
                rel="noreferrer"
              >
                <UilInstagram />
              </a>
              <a
                href="https://github.com/larios77"
                target="_blank"
                rel="noreferrer"
              >
                <UilGithubAlt />
              </a>
            </FooterSocial>
          </FooterContainer>
          <p>&#169; Frankie. Todos los derechos reservados</p>
          <a
            className="link__footer"
            href="http://www.freepik.com"
            target="_blank"
            rel="noreferrer"
          >
            Designed by stories / Freepik
          </a>
        </FooterBg>
      </Container>
    </>
  )
}
export default Footer
