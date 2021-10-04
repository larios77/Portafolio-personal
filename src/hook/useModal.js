import { useState } from 'react'

export default function useModal() {
  //Estado que gesytiona el modal
  const [modal, setModal] = useState({
    visible: false,
    data: null,
  })
  //funccion que permiter habiltar el modal
  //'data' puede ser usado como props
  //'visible' sirve para mostrar el modal
  const openModal = ({ data = null } = {}) => setModal({ visible: true, data })
  //funcion que permite cerrar el modal
  const closeModal = () => setModal({ visible: false })

  return {
    modalIsOpen: modal.visible,
    modalData: modal.data,
    openModal,
    closeModal,
  }
}
