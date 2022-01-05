import { Title, SubTitle } from './styles'
import PropTypes from 'prop-types'

export const Typography = ({ value, variant }) => {
  switch (variant.toLowerCase()) {
    case 'title':
      return <Title>{value}</Title>

    case 'subtitle':
      return <SubTitle>{value}</SubTitle>
    default:
      return <p>{value}</p>
  }
}
Typography.propTypes = {
  value: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}
