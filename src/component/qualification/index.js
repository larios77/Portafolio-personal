import React from 'react'
import { UilGraduationCap } from '@iconscout/react-unicons'
import { UilBriefcaseAlt } from '@iconscout/react-unicons'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import {
  Container,
  ContainerQualification,
  TitleQualification,
  SubtitleQualification,
  CalendarQualification,
  SectionQualification,
} from './Styles'
import { Typography } from '../Typography/index'

function QualificationTabs() {
  return (
    <Tabs>
      <Container>
        <Typography value="Calificación" variant="title" />
        <Typography value="Mi viaje personal" variant="subtitle" />

        <ContainerQualification>
          <TabList className="qualification__tabs">
            <Tab
              className="qualification__button button--flex qualification__active"
              data-target="#education"
            >
              <UilGraduationCap className="qualification__icon" />
              Educación
            </Tab>
            <Tab
              className="qualification__button button--flex"
              data-target="#work"
            >
              <UilBriefcaseAlt className="qualification__icon" />
              Trabajo
            </Tab>
          </TabList>
          <SectionQualification>
            {/* <!--==================== QUALIFICATION CONTENT 1====================--> */}
            <div
              className="qualification__content qualification__active"
              data-content
              id="education"
            >
              {/* <!--==================== QUALIFICATION 1====================--> */}
              <TabPanel className="qualification__data">
                <div>
                  <TitleQualification>Ingeniero de sistemas</TitleQualification>
                  <SubtitleQualification>
                    Nicaragua - (UdeM)Universidad
                  </SubtitleQualification>
                  <CalendarQualification>
                    <UilGraduationCap />
                    2018-2021
                  </CalendarQualification>
                </div>
              </TabPanel>
              {/* <!--==================== QUALIFICATION CONTENT 2====================--> */}
              <div
                className="qualification__content qualification__active"
                data-content
                id="work"
              >
                {/* <!--==================== QUALIFICATION 2====================--> */}
                <TabPanel className="qualification__data">
                  <div>
                    <TitleQualification>Front-end Developer</TitleQualification>
                    <SubtitleQualification>Aly System</SubtitleQualification>
                    <CalendarQualification>
                      <UilGraduationCap />
                      0.3-0.9 2021
                    </CalendarQualification>
                  </div>
                </TabPanel>
              </div>
            </div>
          </SectionQualification>
        </ContainerQualification>
      </Container>
    </Tabs>
  )
}
export default QualificationTabs
