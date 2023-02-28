import styled from "styled-components";

const Wrapper = styled.div`
  .create-form {
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 60vw;
    max-width: var(--max-width);
    min-height: 100vh !important;
  }

  .create-form .page-title{
    text-align: center;
  }

  .create-form .form-text {
    height: 128px;
    width: 100%;
    border: none;
    background-color: var(--backgroundColor);
    border-radius: var(--borderRadius);
    color: var(--textColor);
    padding: .5rem;
  }


  @media (max-width: 600px) {
    .create-form {
      width: var(--fluid-width);
    }
    .create-form .form-text {
      height: 136px;
      border: none;
      background-color: var(--backgroundColor);
    }
  }
`;

export default Wrapper;
