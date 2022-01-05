import styled from 'styled-components'

export const Container = styled.section`
  padding: 2rem 0 4rem;
`
export const ContactContent = styled.div`
  max-width: 768px;
  display: grid;
  gap: 1.5rem;
  row-gap: 3rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
  }
`
export const ContactInfo = styled.div`
  display: flex;
  margin-bottom: 2rem;
  .contact__icon {
    font-size: 2rem;
    color: #5785e0;
    margin-right: 0.75rem;
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  }
  span {
    font-size: 0.875rem;
    color: #9fa3ad;
  }
`
export const FormContent = styled.form`
  width: 94%;
  display: grid;
  gap: 1.5rem;

  .message {
    background-color: #3fcc3f;
    color: #fff;
    padding: 8px;
    border-radius: 0px 10px 10px 10px;
  }
  .contact__label {
    font-size: 0.813rem;
    color: #232529;
  }
  .contact__content {
    background-color: #eef2fc;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem 0.25rem;
    border: 1px solid #5785e0;
  }
  .contact__input {
    width: 100%;
    background-color: #eef2fc;
    color: #6a707c;
    font-family: 'Poppins', sans-serif;
    font-size: 0.938rem;
    border: none;
    outline: none;
    padding: 0.25rem 0.5rem 0.5rem 0;
  }
  textarea {
    resize: none;
  }
  .button__message {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
  }
  .button__message:hover {
    background: ${({ theme }) => theme.buttonHover};
  }
  .button__message:hover .button__icon {
    transform: translateX(0.25rem);
  }
  @media screen and (min-width: 375px) {
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    width: 460px;
  }
`
export const ContainerInput = styled.div`
  display: grid;
  gap: 1.5rem;
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
