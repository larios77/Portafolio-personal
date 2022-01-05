import React from 'react'
import ModalServices from '../modalServices/index'
import useModal from '../../hook/useModal'
import { UilArrow } from '@iconscout/react-unicons'
import { UilArrowRight } from '@iconscout/react-unicons'
import {
  Container,
  ServicesContainer,
  ServicesContent,
  ServicesTitle,
  ButtonServices,
} from './styles'
import { Typography } from '../Typography/index'

function Services() {
  const { modalIsOpen, openModal, closeModal } = useModal()

  return (
    <>
      {/* <!--==================== SERVICES ====================--> */}
      <Container id="services">
        <Typography value="Servicios" variant="title" />
        <Typography value="Lo que ofrezco" variant="subtitle" />
        <ServicesContainer>
          {/* <!--==================== SERVICES 1====================--> */}
          <ServicesContent>
            <div>
              <UilArrow className="services__icon" />
              <ServicesTitle>
                Frontend
                <br />
                developer
              </ServicesTitle>
            </div>
            <ButtonServices
              type="button"
              onClick={openModal}
              className="button button--flex button--small button--link services__button"
            >
              Ver más
              <UilArrowRight className="button__icon" />
            </ButtonServices>
            {modalIsOpen && <ModalServices closeModal={closeModal} />}
          </ServicesContent>
        </ServicesContainer>
      </Container>
    </>
  )
}
export default Services
