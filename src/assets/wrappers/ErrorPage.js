import styled from 'styled-components'

const Wrapper = styled.main`
  text-align: center;
  img {
    max-width: 550px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }

  @media (max-width: 600px){
    img{
      max-width: 300px;
    }
  }
`

export default Wrapper
