import styled from 'styled-components'

export const ServicesModalUl = styled.ul`
  row-gap: 1rem;
  display: grid;
  gap: 1.5rem;
`
export const ServicesModalLi = styled.li`
  display: flex;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
`
export const TitleModal = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
`
