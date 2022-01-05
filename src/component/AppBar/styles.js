import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: ${({ theme }) => theme.header};
  box-shadow: 0 -1px 4px ${({ theme }) => theme.boxShadow};
  transition: all 0.25s linear;
  @media screen and (min-width: 768px) {
    top: 0;
    bottom: initial;
    padding: 0 1rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`
export const Nav = styled.nav`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  & a {
    color: #232529;
    font-weight: 500;
    display: flex;
    transition: 0.3s;
  }
  & a:hover {
    color: #5785e0;
  }

  @media screen and (min-width: 768px) {
    column-gap: 1rem;
    .nav__menu {
      display: flex;
      justify-content: flex-end;
      padding-bottom: 8px;
    }
  }
  @media screen and (max-width: 767px) {
    .nav__menu {
      display: none;
    }
    .active {
      position: fixed;
      top: 6%;
      left: 0;
      width: 100%;
      background: ${({ theme }) => theme.header};
      padding: 2rem 1.5rem 3rem;
      box-shadow: 0px 3px 4px ${({ theme }) => theme.boxShadow};
      border-radius: 0 0 1.5rem 1.5rem;
      transition: all 0.25s linear;
    }
  }
`
export const NavMenuIcon = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  }
  a:hover {
    color: ${({ color, theme }) => (color ? color : theme.iconHover)};
  }
  @media screen and (min-width: 768px) {
    & a {
      position: absolute;
      top: 20px;
      left: auto;
    }
  }
  @media screen and (min-width: 1100px) {
    & a {
      position: absolute;
      top: 20px;
      left: 100px;
    }
  }
  @media screen and (min-width: 1200px) {
    & a {
      left: 150px;
    }
  }
  @media screen and (min-width: 1300px) {
    & a {
      left: 200px;
    }
  }
`
export const NavBtns = styled.div`
  display: flex;
  align-items: center;
  & img {
    cursor: pointer;
    margin-right: 1rem;
  }

  @media screen and (min-width: 768px) {
    & img {
      position: absolute;
      top: 28%;
      left: 90%;
    }
  }
  @media screen and (min-width: 1024px) {
    & img {
      left: 80%;
    }
  }
  @media screen and (min-width: 1300px) {
    & img {
      left: 79%;
    }
  }
`
export const NavToggle = styled.div`
  display: flex;
  font-size: 1.1rem;
  cursor: pointer;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  transition: 0.3s;
  & :hover {
    font-size: 1.1rem;
    cursor: pointer;
    color: ${({ color, theme }) => (color ? color : theme.iconHover)};
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavList = styled.ul`
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  display: grid;
  gap: 1.5rem;
  & a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.9rem;
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
    font-weight: 500;
  }
  & a:hover {
    color: ${({ color, theme }) => (color ? color : theme.iconHover)};
  }
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 2rem;
    margin-right: 5rem;
    & .nav__icon {
      display: none;
    }
  }
  @media screen and (min-width: 1024px) {
    margin-right: 10rem;
  }
  @media screen and (min-width: 1024px) {
    margin-right: 18rem;
  }
`
