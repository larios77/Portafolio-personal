import styled from 'styled-components'

export const Container = styled.section`
  text-align: center;
  padding: 2rem 0 4rem;
`
export const ProjectBg = styled.div`
  background: ${({ theme }) => theme.card};
  transition: all 0.25s linear;
  padding-top: 1rem;
`
export const ContainerProject = styled.div`
  max-width: 768px;
  display: grid;
  gap: 1.5rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    color: #fff;
  }
  p {
    color: #fff;
  }
`
