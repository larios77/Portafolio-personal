import styled from 'styled-components'

export const Container = styled.section`
  padding: 2rem 0 4rem;
  .slides .slick-prev,
  .slick-next {
    position: absolute;
    top: 50%;
    z-index: 1;
  }
  .slides .slick-prev {
    left: -10px;
  }
  .slides .slick-next {
    right: 10px;
  }
  .slides .slick-prev:before {
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  }
  .slides .slick-next:before {
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  }
  .slick-dots li button:before {
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  }
`
export const ContainerPortfolio = styled.div`
  overflow: initial;
  max-width: 768px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
`
export const ContentPortfolio = styled.div`
  padding: 0 1.5rem;
  display: grid;
  gap: 1.5rem;
  & img {
    border-radius: 0.5rem;
    justify-self: center;
  }
  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  }
  p {
    margin-bottom: 0.75rem;
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  }
  @media screen and (min-width: 425px) {
    h3 {
      text-align: center;
    }
    p {
      width: 80%;
      margin: 10px auto;
      text-align: justify;
    }
  }
  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 768px) {
    align-items: center;
    & img {
      width: 320px;
    }
  }
  @media screen and (min-width: 1024px) {
    column-gap: 5rem;
  }
`
export const ButtonContainer = styled.div`
  a {
    margin: 16px auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
  }
  a:hover {
    background: ${({ theme }) => theme.buttonHover};
  }
  a:hover .button__icon {
    transform: translateX(0.25rem);
  }

  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
  }
  a {
    margin: 16px 4px;
    width: auto;
  }
`
