import styled from "styled-components";

const Wrapper = styled.div`
  .feedback-form {
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 60vw;
    max-width: var(--max-width);
  }
  .feedback-form .page-title {
    text-align: center;
  }

  .feedback-form .form-text {
    height: 128px;
    width: 100%;
    border: none;
    background-color: var(--backgroundColor);
    border-radius: var(--borderRadius);
    color: var(--textColor);
  }

  @media (max-width: 600px) {
    .feedback-form {
      width: var(--fluid-width);
    }
    .feedback-form .form-text {
      height: 136px;
      border: none;
      background-color: var(--backgroundColor);
    }
  }
`;
export default Wrapper;
