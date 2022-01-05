import styled from 'styled-components'

export const Container = styled.section`
  padding: 2rem 0 4rem;
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
  .slick-dots li button:before {
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  }
`
export const TestimonialContent = styled.div`
  max-width: 768px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  .testimonial__description {
    margin-bottom: 2.5rem;
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  }
  @media screen and (min-width: 568px) {
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    width: 70%;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`
export const TestimonialData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  .testimonial__header {
    display: flex;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 0.75rem;
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  }
  span {
    font-size: 0.813rem;
    color: #9fa3ad;
  }
  .testimonial__icon-start {
    color: ${({ color, theme }) => (color ? color : theme.iconHover)};
  }
`
