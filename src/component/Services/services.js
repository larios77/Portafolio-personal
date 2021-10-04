import React from 'react'
import ModalServices from '../modalServices/modalServices'
import useModal from '../../hook/useModal'
import { UilArrow } from '@iconscout/react-unicons'
import { UilArrowRight } from '@iconscout/react-unicons'
import './services.css'

function Services() {
  const { modalIsOpen, openModal, closeModal } = useModal()

  return (
    <div>
      {/* <!--==================== SERVICES ====================--> */}
      <section className="services section" id="services">
        <h2 className="section__title">Servicios</h2>
        <span className="section__subtitle">Lo que ofrezco</span>
        <div className="services__container container grid">
          {/* <!--==================== SERVICES 1====================--> */}
          <div className="services__content">
            <div>
              <UilArrow className="services__icon" />
              <h3 className="services__title">
                Frontend
                <br />
                developer
              </h3>
            </div>

            <button
              type="button"
              onClick={openModal}
              className="button button--flex button--small button--link services__button"
            >
              Ver más
              <UilArrowRight className="button__icon" />
            </button>
            {modalIsOpen && <ModalServices closeModal={closeModal} />}
          </div>
        </div>
      </section>
    </div>
  )
}
export default Services
