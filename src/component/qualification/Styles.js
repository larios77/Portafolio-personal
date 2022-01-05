import styled from 'styled-components'

export const Container = styled.section`
  padding: 2rem 0 4rem;
`

export const ContainerQualification = styled.div`
  max-width: 768px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  .qualification__tabs {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2rem;
  }
  .qualification__button {
    font-size: 1.125rem;
    font-weight: 500;
    cursor: pointer;
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
    transition: 0.3s;
  }
  .qualification__button:hover {
    color: ${({ color, theme }) => (color ? color : theme.iconHover)};
  }
  .qualification__icon {
    font-size: 1.8rem;
    margin-right: 0.25rem;
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  }
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    .qualification__tabs {
      justify-content: center;
    }
    .qualification__button {
      margin: 0 1rem;
    }
  }
`
export const SectionQualification = styled.div`
  border-radius: 8px;
  padding: 10px 0;
  box-shadow: 0 -1px 8px ${({ theme }) => theme.boxShadow} inset;
  .qualification__data {
    display: flex;
    justify-content: center;
  }
  @media screen and (min-width: 568px) {
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 0.6fr;
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
    grid-template-columns: 0.5fr;
  }
`
export const TitleQualification = styled.h3`
  font-size: 0.938rem;
  font-weight: 500;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
`
export const SubtitleQualification = styled.span`
  display: inline-block;
  font-size: 0.813rem;
  margin: 8px 0;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
`
export const CalendarQualification = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #9fa3ad;
`
