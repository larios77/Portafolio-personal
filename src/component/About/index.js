import React from 'react'
import about from '../../img/perfil.png'
import { UilDownloadAlt } from '@iconscout/react-unicons'
import { UilArrowUp } from '@iconscout/react-unicons'
import {
  AboutContainer,
  AboutInfo,
  TitleInfo,
  SubTitleInfo,
  ButtonAbout,
  DescriptionText,
} from './styles'
import { Typography } from '../Typography/index'

function About() {
  function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)
  return (
    <>
      <AboutContainer id="about">
        <Typography value="Acerca de" variant="title" />
        <Typography value="Mi introducción" variant="subtitle" />

        <div className="about__container container grid">
          <img src={about} alt="about me" />
          <div>
            <DescriptionText>
              Soy un desarrollador que desea aprender todos los días y dar lo
              mejor de mí en cada trabajo, disfruto ser responsable y trabajar
              en equipo, eso me define como desarrollador.
            </DescriptionText>
            <AboutInfo>
              <div>
                <TitleInfo>01+</TitleInfo>
                <SubTitleInfo>
                  Año de <br />
                  experiencia
                </SubTitleInfo>
              </div>
              <div>
                <TitleInfo>05+</TitleInfo>
                <SubTitleInfo>
                  Projectos <br />
                  Completados
                </SubTitleInfo>
              </div>
              <div>
                <TitleInfo>01+</TitleInfo>
                <SubTitleInfo>
                  Compañias <br />
                  donde trabajé
                </SubTitleInfo>
              </div>
            </AboutInfo>
            <ButtonAbout>
              <a
                href="https://drive.google.com/file/d/1b5m-tqtnjKYWqACLAt0Dg-OtpSt3s3Mg/view?usp=drivesdk"
                target="_blank"
                rel="noreferrer"
              >
                Descargar CV
                <UilDownloadAlt className="button__icon" />
              </a>
            </ButtonAbout>
          </div>
        </div>
        {/* <!--==================== SCROLL TOP ====================--> */}

        <a href="#home" className="scrollup" id="scroll-up">
          <UilArrowUp className="scrollup__icon" />
        </a>
      </AboutContainer>
    </>
  )
}
export default About
