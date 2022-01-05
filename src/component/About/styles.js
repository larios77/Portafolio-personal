import styled from 'styled-components'

export const AboutContainer = styled.section`
  padding: 2rem 0 4rem;
  & img {
    width: 200px;
    border-radius: 0.5rem;
    justify-self: center;
    align-self: center;
    box-shadow: 0 2px 8px ${({ theme }) => theme.boxShadow};
  }
  & p {
    text-align: center;
    margin-bottom: 2.5rem;
  }
  .scrollup {
    display: flex;
    align-items: center;
    position: fixed;
    right: 1rem;
    bottom: -20%;
    background: ${({ theme }) => theme.bgSecondary};
    padding: 0.4rem;
    border-radius: 0.4rem;
    z-index: 10;
    transition: 0.3s;
  }
  .scrollup:hover {
    background: ${({ theme }) => theme.buttonHover};
  }
  .scrollup__icon {
    font-size: 1.5rem;
    color: #fff;
  }
  /* Show scroll */
  .show-scroll {
    bottom: 3rem;
  }
  @media screen and (min-width: 568px) {
    .about__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 768px) {
    column-gap: 5rem;
    & img {
      width: 300px;
    }
  }
`
export const DescriptionText = styled.p`
  text-align: initial;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
`
export const AboutInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2.5rem;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`
export const TitleInfo = styled.span`
  display: block;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
`
export const SubTitleInfo = styled.span`
  font-size: 0.75rem;
  display: block;
  text-align: center;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
`
export const ButtonAbout = styled.div`
  display: flex;
  justify-content: center;
  & a {
    display: inline-block;
    background: ${({ theme }) => theme.bgSecondary};
    color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    outline: none;
    border: none;
    display: inline-flex;
    align-items: center;
    transition: 0.3s;
  }
  & a:hover {
    background: ${({ theme }) => theme.buttonHover};
  }
  &:hover .button__icon {
    transform: translateX(0.25rem);
  }
  @media screen and (min-width: 768px) {
    justify-content: initial;
  }
`
