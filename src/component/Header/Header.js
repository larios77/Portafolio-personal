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
import './Header.css'

function Header() {
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
    <div>
      {/* <!--==================== HEADER ====================--> */}
      <header className="header" id="header">
        <nav className="nav container">
          <div>
            <div>
              <div className="nav__menu-icon">
                <a href="/" className="nav__logo">
                  <UilArrow className="nav__icon-logo" />
                </a>
                <div className="nav__btns">
                  <div className="nav__toggle" id="nav-toggle">
                    {menu ? (
                      <UilTimes onClick={() => NavbarMenu('nav__menu')} />
                    ) : (
                      <UilApps onClick={() => NavbarMenu('active')} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={menu ? 'active' : 'nav__menu'} id="nav-menu">
              <ul className="nav__list grid">
                <li className={menu ? 'nav__item' : 'nav__menu'}>
                  <a href="#home" onClick={handleClick} className="nav__link">
                    <UilEstate className="nav__icon" />
                    Home
                  </a>
                </li>
                <li className={menu ? 'nav__item' : 'nav__menu'}>
                  <a href="#about" onClick={handleClick} className="nav__link">
                    <UilUser className="nav__icon" />
                    About
                  </a>
                </li>
                <li className={menu ? 'nav__item' : 'nav__menu'}>
                  <a href="#skills" onClick={handleClick} className="nav__link">
                    <UilFileAlt className="nav__icon" />
                    Skills
                  </a>
                </li>
                <li className={menu ? 'nav__item' : 'nav__menu'}>
                  <a
                    href="#services"
                    onClick={handleClick}
                    className="nav__link"
                  >
                    <UilBriefcaseAlt className="nav__icon" />
                    Services
                  </a>
                </li>
                <li className={menu ? 'nav__item' : 'nav__menu'}>
                  <a
                    href="#portfolio"
                    onClick={handleClick}
                    className="nav__link"
                  >
                    <UilScenery className="nav__icon" />
                    Portfolio
                  </a>
                </li>
                <li className={menu ? 'nav__item' : 'nav__menu'}>
                  <a
                    href="#contact"
                    onClick={handleClick}
                    className="nav__link"
                  >
                    <UilMessage className="nav__icon" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
export default Header
