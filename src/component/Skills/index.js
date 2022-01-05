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
import {
  ContainerSkills,
  HeaderSkills,
  TitleSkills,
  SkillsList,
  ContentSkills,
  Container,
} from './styles'
import { Typography } from '../Typography/index'

function Skills() {
  return (
    <>
      <Container id="skills">
        <Typography value="Skills" variant="title" />
        <Typography value="Tecnologias que domino" variant="subtitle" />

        <ContainerSkills>
          {/* <!--==================== SKILLS 1====================--> */}
          <div>
            <details>
              <HeaderSkills>
                <UilBracketsCurly className="skills__icon" />
                <div>
                  <TitleSkills>Frontend developer</TitleSkills>
                </div>
                <UilAngleDown className="skills__arrow" />
              </HeaderSkills>
              <SkillsList className=" grid">
                <ContentSkills>
                  <FaHtml5 className="skills__icon-tecnology" />
                  <p>Html</p>
                </ContentSkills>
                <ContentSkills>
                  <FaCss3Alt className="skills__icon-tecnology" />
                  <p>Css</p>
                </ContentSkills>
                <ContentSkills>
                  <FaJsSquare className="skills__icon-tecnology" />
                  <p>JavaScript</p>
                </ContentSkills>
                <ContentSkills>
                  <FaReact className="skills__icon-tecnology" />
                  <p>React js</p>
                </ContentSkills>
                <ContentSkills>
                  <FaGithub className="skills__icon-tecnology" />
                  <p>Github</p>
                </ContentSkills>
                <ContentSkills>
                  <FaSass className="skills__icon-tecnology" />
                  <p>Sass</p>
                </ContentSkills>
                <ContentSkills>
                  <FaBootstrap className="skills__icon-tecnology" />
                  <p>Bootstrap</p>
                </ContentSkills>
              </SkillsList>
            </details>
          </div>
          {/* <!--==================== SKILLS 2====================--> */}
          <div>
            <details>
              <HeaderSkills>
                <UilSwatchbook className="skills__icon" />
                <div>
                  <TitleSkills>Designer</TitleSkills>
                </div>
                <UilAngleDown className="skills__arrow" />
              </HeaderSkills>
              <SkillsList className=" grid">
                <ContentSkills>
                  <FaFigma className="skills__icon-tecnology" />
                  <p>Figma</p>
                </ContentSkills>
              </SkillsList>
            </details>
          </div>
        </ContainerSkills>
      </Container>
    </>
  )
}
export default Skills
