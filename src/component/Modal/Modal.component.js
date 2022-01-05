import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ContainerModal, ModalContent } from './styles'

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
    <ContainerModal>
      <ModalContent onClick={handleClick}>{children}</ModalContent>
    </ContainerModal>,
    document.getElementById('modal')
  )
}
