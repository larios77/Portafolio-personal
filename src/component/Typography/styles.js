import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 2.25rem;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  font-weight: 600;
  text-align: center;
`
export const SubTitle = styled.span`
  display: block;
  font-size: 0.813rem;
  margin-bottom: 3rem;
  text-align: center;
  color: ${({ color, theme }) => (color ? color : theme.secondaryText)};
`
