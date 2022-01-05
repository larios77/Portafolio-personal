import React from 'react'
import { UilMessage } from '@iconscout/react-unicons'
import { Container, ProjectBg, ContainerProject } from './styles'

function Projects() {
  return (
    <>
      <Container>
        <ProjectBg>
          <ContainerProject>
            <div>
              <h2 className="project__title">Tienes un nuevo proyecto?</h2>
              <p className="project__description">no dude en contactarme.</p>
              <a href="#contact" className="button button--flex button--white">
                Contáctame
                <UilMessage className="project__icon button__icon" />
              </a>
            </div>
          </ContainerProject>
        </ProjectBg>
      </Container>
    </>
  )
}
export default Projects
