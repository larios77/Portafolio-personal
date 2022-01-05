import styled from 'styled-components'

export const Container = styled.section`
  padding: 2rem 0 4rem;
`

export const ServicesContainer = styled.div`
  display: grid;
  gap: 1.5em;
  max-width: 768px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  @media screen and (min-width: 568px) {
    margin: 0 auto;
    width: 70%;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
  @media screen and (min-width: 1300px) {
    width: 40%;
  }
`
export const ServicesContent = styled.div`
  position: relative;
  background: ${({ theme }) => theme.header};
  padding: 3.5rem 0.5rem 1.25rem 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 8px ${({ theme }) => theme.boxShadow};
  transition: all 0.25s linear;
  &:hover {
    box-shadow: 0 4px 12px ${({ theme }) => theme.boxShadow};
  }
  .services__icon {
    display: block;
    font-size: 1.5rem;
    color: #5785e0;
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 768px) {
    padding: 4rem 0 2rem 2.5rem;
    .services__icon {
      font-size: 2.5rem;
    }
    .services__modal-content {
      width: 400px;
    }
  }
`
export const ServicesTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
`
export const ButtonServices = styled.button`
  cursor: pointer;
  font-size: 0.9rem;
  outline: none;
  border: none;
  padding: 0.75rem 1rem;
  background-color: transparent;
  color: #5785e0;
  display: inline-flex;
  align-items: center;
  &:hover .button__icon {
    transform: translateX(0.25rem);
  }
`
