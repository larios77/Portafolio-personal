import React from 'react'
import { UilGraduationCap } from '@iconscout/react-unicons'
import { UilBriefcaseAlt } from '@iconscout/react-unicons'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import './qualificationTabs.css'

function QualificationTabs() {
  return (
    <Tabs>
      <section className="qualification section">
        <h2 className="section__title">Calificación</h2>
        <span className="section__subtitle">Mi viaje personal</span>

        <div className="qualification__container container">
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
          <div className="qualification__sections">
            {/* <!--==================== QUALIFICATION CONTENT 1====================--> */}
            <div
              className="qualification__content qualification__active"
              data-content
              id="education"
            >
              {/* <!--==================== QUALIFICATION 1====================--> */}
              <TabPanel className="qualification__data">
                <div>
                  <span className="qualification__rounder"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    Ingeniero de sistemas
                  </h3>
                  <span className="qualification__subtitle">
                    Nicaragua - (UdeM)Universidad
                  </span>
                  <div className="qualification__calendar">
                    <UilGraduationCap />
                    2018-2021
                  </div>
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
                    <span className="qualification__rounder"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">
                      Front-end Developer
                    </h3>
                    <span className="qualification__subtitle">Aly System</span>
                    <div className="qualification__calendar">
                      <UilGraduationCap />
                      0.3-0.9 2021
                    </div>
                  </div>
                </TabPanel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Tabs>
  )
}
export default QualificationTabs
