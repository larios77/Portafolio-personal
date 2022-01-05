import styled from 'styled-components'

export const Container = styled.section`
  padding: 2rem 0 4rem;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    .hero__container {
      row-gap: 5rem;
    }
  }
  @media screen and (min-width: 1300px) {
    .hero__container {
      row-gap: 4rem;
    }
  }
`
export const HeroContent = styled.div`
  grid-template-columns: 0.5fr 3fr;
  padding-top: 6rem;
  align-items: center;
  display: grid;
  gap: 1.5rem;
  .hero__social {
    display: grid;
    grid-template-columns: max-content;
    row-gap: 1rem;
  }
  .hero__social-icon {
    font-size: 1.25rem;
    color: #5785e0;
  }
  .hero__social-icon:hover {
    color: ${({ color, theme }) => (color ? color : theme.iconHover)};
  }
  .hero__img {
    width: 220px;
    display: flex;
    justify-content: center;
  }
  .hero__blob-img {
    width: 220px;
  }
  .hero__description {
    text-align: center;
  }
  @media screen and (min-width: 568px) {
    grid-template-columns: max-content 1fr 1fr;
    .hero__img {
      order: 1;
      justify-self: center;
    }
    @media screen and (min-width: 768px) {
      column-gap: 2rem;
      .hero__img {
        width: 300px;
      }
      .hero__blob-img {
        width: 300px;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .hero__social {
      transform: translateX(-6rem);
    }
  }
  @media screen and (min-width: 1300px) {
    .hero__img {
      width: 350px;
    }
    .hero__blob-img {
      width: 350px;
      object-fit: cover;
    }
    padding-top: 4rem;
  }
`
export const HeroData = styled.div`
  width: 80%;
  margin: 0 auto;
  grid-column: 1/3;
  & a {
    display: flex;
    justify-content: center;
    transition: 0.3s;
  }
  a:hover {
    background: ${({ theme }) => theme.buttonHover};
  }
  & a:hover .button__icon {
    transform: translateX(0.25rem);
  }
  .content__typed {
    margin: 14px auto;
    text-align: center;
    font-size: 1.2rem;
  }
  @media screen and (min-width: 375px) {
    a {
      max-width: 70%;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 568px) {
    grid-column: initial;
    width: 90%;
    a {
      max-width: 90%;
    }
  }
  @media screen and (min-width: 768px) {
    a {
      max-width: 70%;
      margin: 0;
    }
    .content__typed {
      text-align: left;
    }
  }
`
export const TitleHero = styled.span`
  font-size: 1.2rem;
  color: ${({ color, theme }) => (color ? color : theme.secondaryText)};
  font-family: 'Public Sans', sans-serif;
`
export const SubTitleHero = styled.h3`
  ont-size: 1.5rem;
  text-align: center;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`
export const HeroScroll = styled.div`
  display: none;
  .hero__scroll-button {
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
    transition: 0.3s;
  }
  .hero__scroll-button:hover {
    transform: translateY(0.25rem);
  }
  .hero__scroll-mouse {
    font-size: 2rem;
    transition: all 0.25s linear;
  }
  .hero__scroll-name {
    font-size: 0.813rem;
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
    font-weight: 500;
    margin-right: 0.25rem;
  }
  .hero__scroll-arrow {
    font-size: 1.25rem;
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  }
  @media screen and (min-width: 768px) {
    display: block;

    .hero__scroll-button {
      margin-left: 4rem;
    }
  }
`
