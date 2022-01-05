import React from 'react'
import Modal from '../Modal/Modal.component'
import { UilTimes } from '@iconscout/react-unicons'
import { UilCheckCircle } from '@iconscout/react-unicons'
import { ServicesModalUl, ServicesModalLi, TitleModal } from './styles'

function ModalServices({ closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <UilTimes className="services__modal-close" onClick={closeModal} />
      <div>
        <TitleModal>
          Frontend
          <br />
          developer
        </TitleModal>
        <ServicesModalUl>
          <ServicesModalLi>
            <UilCheckCircle className="services__modal-icon" />
            <p>Desarrollo la interfaz de usuario</p>
          </ServicesModalLi>
          <ServicesModalLi>
            <UilCheckCircle className="services__modal-icon" />
            <p>Desarrollo de paginas web</p>
          </ServicesModalLi>
          <ServicesModalLi>
            <UilCheckCircle className="services__modal-icon" />
            <p>prototipado de aplicación</p>
          </ServicesModalLi>
          <ServicesModalLi>
            <UilCheckCircle className="services__modal-icon" />
            <p>Creo interacciones de elementos ux</p>
          </ServicesModalLi>
        </ServicesModalUl>
      </div>
    </Modal>
  )
}
export default ModalServices
