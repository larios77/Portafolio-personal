import React from 'react'
import Modal from '../Modal/Modal.component'
import { UilTimes } from '@iconscout/react-unicons'
import { UilCheckCircle } from '@iconscout/react-unicons'
import './modalService.css'

function ModalServices({ closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <UilTimes className="services__modal-close" onClick={closeModal} />
      <div className="services__modal">
        <div className="services__modal-content">
          <h4 className="services__modal-title">
            Frontend
            <br />
            developer
          </h4>
          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <UilCheckCircle className="services__modal-icon" />
              <p>Desarrollo la interfaz de usuario</p>
            </li>
            <li className="services__modal-service">
              <UilCheckCircle className="services__modal-icon" />
              <p>Desarrollo de paginas web</p>
            </li>
            <li className="services__modal-service">
              <UilCheckCircle className="services__modal-icon" />
              <p>prototipado de aplicación</p>
            </li>
            <li className="services__modal-service">
              <UilCheckCircle className="services__modal-icon" />
              <p>Creo interacciones de elementos ux</p>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  )
}
export default ModalServices
