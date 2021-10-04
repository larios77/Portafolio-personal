import React, { useState, useRef } from 'react'
import { UilPhone } from '@iconscout/react-unicons'
import { UilEnvelope } from '@iconscout/react-unicons'
import { UilMapMarker } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import emailjs from 'emailjs-com'
import './contact.css'

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
    <div>
      {/* <!--==================== CONTACT ME ====================--> */}
      <section className="contact section" id="contact">
        <h2 className="section__title">Contáctame</h2>
        <span className="section__subtitle">Ponerse en contacto</span>

        <div className="contact__container container grid">
          <div>
            <div className="contact__information">
              <UilPhone className="contact__icon" />
              <div>
                <h3 className="contact__title">Llámame</h3>
                <span className="contact__subtitle">7661-9211</span>
              </div>
            </div>
            <div className="contact__information">
              <UilEnvelope className="contact__icon" />
              <div>
                <h3 className="contact__title">Email</h3>
                <span className="contact__subtitle">
                  frankieyasetbendanalarios@gmail.com
                </span>
              </div>
            </div>
            <div className="contact__information">
              <UilMapMarker className="contact__icon" />
              <div>
                <h3 className="contact__title">Ubicación</h3>
                <span className="contact__subtitle">Nicaragua - Managua</span>
              </div>
            </div>
          </div>
          <form className="contact__form grid" ref={form} onSubmit={sendEmail}>
            <div className="contact__inputs grid">
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
            </div>
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
          </form>
        </div>
      </section>
    </div>
  )
}
export default Contact
