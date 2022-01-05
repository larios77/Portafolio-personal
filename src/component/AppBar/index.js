import React, { useState } from 'react'
import { UilTimes } from '@iconscout/react-unicons'
import { UilApps } from '@iconscout/react-unicons'
import { UilEstate } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilFileAlt } from '@iconscout/react-unicons'
import { UilBriefcaseAlt } from '@iconscout/react-unicons'
import { UilScenery } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import { UilArrow } from '@iconscout/react-unicons'
import ToggleDarkmode from '../ToggleDarkmode/index'
import { Header, Nav, NavMenuIcon, NavBtns, NavToggle, NavList } from './styles'

function AppBar() {
  const [menu, setMenu] = useState(false)
  const NavbarMenu = mode => {
    if (mode === 'active') {
      setMenu(true)
    } else if (mode === 'nav__menu') {
      setMenu(false)
    }
  }
  const handleClick = () => {
    setMenu(false)
  }
  return (
    <>
      <Header id="header">
        <Nav>
          <NavMenuIcon>
            <a href="/">
              <UilArrow />
            </a>

            <NavBtns>
              <ToggleDarkmode />
              <NavToggle id="nav-toggle">
                {menu ? (
                  <UilTimes
                    onClick={() => NavbarMenu('nav__menu')}
                    className="close__icon"
                  />
                ) : (
                  <UilApps onClick={() => NavbarMenu('active')} />
                )}
              </NavToggle>
            </NavBtns>
          </NavMenuIcon>
          <div className={menu ? 'active' : 'nav__menu'} id="nav-menu">
            <NavList>
              <li className={menu ? 'nav__item' : 'nav__menu'}>
                <a href="#home" onClick={handleClick}>
                  <UilEstate className="nav__icon" />
                  Home
                </a>
              </li>
              <li className={menu ? 'nav__item' : 'nav__menu'}>
                <a href="#about" onClick={handleClick}>
                  <UilUser className="nav__icon" />
                  About
                </a>
              </li>
              <li className={menu ? 'nav__item' : 'nav__menu'}>
                <a href="#skills" onClick={handleClick}>
                  <UilFileAlt className="nav__icon" />
                  Skills
                </a>
              </li>
              <li className={menu ? 'nav__item' : 'nav__menu'}>
                <a href="#services" onClick={handleClick}>
                  <UilBriefcaseAlt className="nav__icon" />
                  Services
                </a>
              </li>
              <li className={menu ? 'nav__item' : 'nav__menu'}>
                <a href="#portfolio" onClick={handleClick}>
                  <UilScenery className="nav__icon" />
                  Portfolio
                </a>
              </li>
              <li className={menu ? 'nav__item' : 'nav__menu'}>
                <a href="#contact" onClick={handleClick}>
                  <UilMessage className="nav__icon" />
                  Contact
                </a>
              </li>
            </NavList>
          </div>
        </Nav>
      </Header>
    </>
  )
}
export default AppBar
