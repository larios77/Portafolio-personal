import styled from 'styled-components'
export const Container = styled.footer`
  padding-top: 2rem;
`
export const FooterBg = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 2rem 0 3rem;
  transition: all 0.25s linear;

  p {
    font-size: 0.9rem;
    text-align: center;
    color: #fff;
    margin-top: 3rem;
  }
  .link__footer {
    width: 300px;
    color: #fff;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    font-size: 0.8rem;
  }
  .link__footer:hover {
    color: #b6cdfc;
  }
  @media screen and (min-width: 768px) {
    padding: 3rem 0 3.5rem;
    p {
      margin-top: 4.5rem;
    }
  }
`
export const FooterContainer = styled.div`
  max-width: 768px;
  row-gap: 3.5rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
    color: #fff;
  }
  span {
    font-size: 0.813rem;
    color: #fff;
  }
  @media screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 768px) {
    padding: 0 1rem;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
  }
  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`
export const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  margin: 1rem 0;
  a {
    color: #fff;
  }
  a:hover {
    color: #b6cdfc;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 2rem;
    margin: 0;
  }
`
export const FooterSocial = styled.div`
  a {
    font-size: 1.25rem;
    color: #fff;
    margin-right: 1.5rem;
  }
  a:hover {
    color: #b6cdfc;
  }
  @media screen and (min-width: 768px) {
    justify-self: flex-end;
  }
`
