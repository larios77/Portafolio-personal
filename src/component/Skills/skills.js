import React from 'react'
import { UilBracketsCurly } from '@iconscout/react-unicons'
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilSwatchbook } from '@iconscout/react-unicons'
import {
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaJsSquare,
  FaFigma,
  FaGithub,
  FaSass,
  FaBootstrap,
} from 'react-icons/fa'
import './skills.css'

function Skills() {
  return (
    <div>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Tecnologias que domino</span>

        <div className="skills__container container grid">
          {/* <!--==================== SKILLS 1====================--> */}
          <div>
            <details>
              <summary className="skills__header">
                <UilBracketsCurly className="skills__icon" />
                <div>
                  <h1 className="skills__title">Frontend developer</h1>
                </div>
                <UilAngleDown className="skills__arrow" />
              </summary>
              <div className="skills__list grid">
                <div className="skills__content">
                  <FaHtml5 className="skills__icon-tecnology" />
                  <p>Html</p>
                </div>
                <div className="skills__content">
                  <FaCss3Alt className="skills__icon-tecnology" />
                  <p>Css</p>
                </div>
                <div className="skills__content">
                  <FaJsSquare className="skills__icon-tecnology" />
                  <p>JavaScript</p>
                </div>
                <div className="skills__content">
                  <FaReact className="skills__icon-tecnology" />
                  <p>React js</p>
                </div>
                <div className="skills__content">
                  <FaGithub className="skills__icon-tecnology" />
                  <p>Github</p>
                </div>
                <div className="skills__content">
                  <FaSass className="skills__icon-tecnology" />
                  <p>Sass</p>
                </div>
                <div className="skills__content">
                  <FaBootstrap className="skills__icon-tecnology" />
                  <p>Bootstrap</p>
                </div>
              </div>
            </details>
          </div>
          {/* <!--==================== SKILLS 2====================--> */}
          <div>
            <details>
              <summary className="skills__header">
                <UilSwatchbook className="skills__icon" />
                <div>
                  <h1 className="skills__title">Designer</h1>
                </div>
                <UilAngleDown className="skills__arrow" />
              </summary>
              <div className="skills__list grid">
                <div className="skills__content">
                  <FaFigma className="skills__icon-tecnology" />
                  <p>Figma</p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Skills
