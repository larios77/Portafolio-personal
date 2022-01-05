import styled from 'styled-components'

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  z-index: 99;
  transition: 0.3s;
`
export const ModalContent = styled.div`
  position: relative;
  background: ${({ theme }) => theme.header};
  padding: 1.5rem;
  border-radius: 0.5rem;
`
