import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
  .signup-left img{
    width: 400px;

  }
  .line{
    min-height: 50vh;
    border: 1px solid #555555;
    margin: 0 2rem;
  }
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
    /* margin-left: 35rem; */
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
    font-size: .9rem;
    margin-left: 5px;
  }

  .login-icon{
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .social-btn{
    padding: var(--small-pad);
    border: 2px solid var(--primary-500);
  }

  @media (max-width: 972px) {
    .signup-left img, .line {
      display: none;
    }
    .login-icon{
      gap: 10px;
    }
  }
`
export default Wrapper
