import styled from "styled-components";

const Wrapper = styled.div`
  .create-form {
    /* overflow-y: scroll; */
    margin: 0 auto;
    width: 60vw;
    max-width: var(--max-width);
    min-height: 100vh;
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
  }

  .create-form .btn {
    margin-top: 1rem;
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
