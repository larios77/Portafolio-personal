import React, { useState, useRef } from 'react'
import { UilPhone } from '@iconscout/react-unicons'
import { UilEnvelope } from '@iconscout/react-unicons'
import { UilMapMarker } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import emailjs from 'emailjs-com'
import {
  Container,
  ContactContent,
  ContactInfo,
  FormContent,
  ContainerInput,
} from './styles'
import { Typography } from '../Typography/index'

function Contact() {
  const [result, setResult] = useState(false)
  const form = useRef()
  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_1cyvyuu',
        'template_l1lgxh9',
        form.current,
        'user_OxFnWJhU3N8AMUy2bNdM6'
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    e.target.reset()
    setResult(true)
  }
  // hide result

  setTimeout(() => {
    setResult(false)
  }, 5000)
  return (
    <>
      <Container id="contact">
        <Typography value="Contáctame" variant="title" />
        <Typography value="Ponerse en contacto" variant="subtitle" />
        <ContactContent>
          <div>
            <ContactInfo>
              <UilPhone className="contact__icon" />
              <div>
                <h3>Llámame</h3>
                <span>7661-9211</span>
              </div>
            </ContactInfo>
            <ContactInfo>
              <UilEnvelope className="contact__icon" />
              <div>
                <h3>Email</h3>
                <span>lariosfrankie0@gmail.com</span>
              </div>
            </ContactInfo>
            <ContactInfo>
              <UilMapMarker className="contact__icon" />
              <div>
                <h3>Ubicación</h3>
                <span>Managua - Nicaragua</span>
              </div>
            </ContactInfo>
          </div>
          <FormContent ref={form} onSubmit={sendEmail}>
            <ContainerInput>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="contact__input"
                  name="name"
                  required
                />
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Email
                </label>
                <input
                  type="email"
                  className="contact__input"
                  name="email"
                  required
                />
              </div>
            </ContainerInput>
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Mensaje
              </label>
              <textarea
                className="contact__input"
                required
                name="message"
                cols="0"
                rows="7"
              ></textarea>
            </div>
            <button
              type="submit"
              className="button button--flex button__message"
            >
              Enviar mensaje
              <UilMessage className="button__icon" />
            </button>
            <div className="message__success">
              {result ? (
                <p className="message">
                  Tu mensaje ha sido exitoso. Me pondré en contacto con usted
                  pronto
                </p>
              ) : null}
            </div>
          </FormContent>
        </ContactContent>
      </Container>
    </>
  )
}
export default Contact
