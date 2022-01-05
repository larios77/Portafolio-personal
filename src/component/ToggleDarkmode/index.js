import React, { useContext } from 'react'
import { AppContext } from '../../store/index'
import sunIcon from '../../img/icon-sun.svg'
import MoonIcon from '../../img/icon-moon.svg'

function ToggleButton() {
  const { isDarkModeActive, disableDarkMode, activateDarkMode } =
    useContext(AppContext)
  return (
    <>
      {isDarkModeActive ? (
        <img src={sunIcon} alt="sunIcon" onClick={disableDarkMode} />
      ) : (
        <img src={MoonIcon} alt="MoonIcon" onClick={activateDarkMode} />
      )}
    </>
  )
}
export default ToggleButton
