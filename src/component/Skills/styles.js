import styled from 'styled-components'

export const Container = styled.section`
  padding: 2rem 0 4rem;
`
export const ContainerSkills = styled.div`
  row-gap: 0;
  display: grid;
  gap: 1.5rem;
  max-width: 768px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
  }
`
export const HeaderSkills = styled.summary`
  display: flex;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  .skills__icon,
  .skills__arrow {
    font-size: 2rem;
    color: #5785e0;
  }
  .skills__icon {
    margin-right: 0.75rem;
  }
  .skills__arrow {
    margin-left: auto;
    transition: 0.4s;
  }
`
export const TitleSkills = styled.h1`
  font-size: 1.25rem;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
`
export const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (min-width: 375px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`
export const ContentSkills = styled.div`
  box-shadow: 0 -1px 4px ${({ theme }) => theme.boxShadow};
  padding: 6px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 -1px 8px ${({ theme }) => theme.boxShadow};
  }
  .skills__icon-tecnology {
    font-size: 32px;
    color: ${({ color, theme }) => (color ? color : theme.secondaryText)};
  }
  p {
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  }
`
