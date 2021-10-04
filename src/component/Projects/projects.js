import React from 'react'
import { UilMessage } from '@iconscout/react-unicons'
import './projects.css'

function Projects() {
  return (
    <div>
      {/* <!--==================== PROJECT IN MIND ====================--> */}
      <section className="project section">
        <div className="project__bg">
          <div className="project__container container grid">
            <div className="project__data">
              <h2 className="project__title">Tienes un nuevo proyecto?</h2>
              <p className="project__description">no dude en contactarme.</p>
              <a href="#contact" className="button button--flex button--white">
                Contáctame
                <UilMessage className="project__icon button__icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Projects
