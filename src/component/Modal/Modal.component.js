import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ children }) {
  const handleClick = e => {
    e.stopPropagation()
  }

  //Deshabilitar el scroll cuando se cargue el modal
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return ReactDOM.createPortal(
    <div className="modal__overlay">
      <div className="modal__content" onClick={handleClick}>
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}
