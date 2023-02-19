import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .alert-box {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
    z-index: 99;
    opacity: 1;
  }

  .content {
    background: var(--white);
    border-radius: var(--borderRadius);
    padding: 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 300px;
  }
  .content .icon {
    margin: 5px 0px;
    width: 50px;
    height: 50px;
    border: 2px solid #34f234;
    text-align: center;
    display: inline-block;
    border-radius: 50%;
    line-height: 60px;
  }

  .content .icon i.fa {
    font-size: 30px;
    color: #34f234;
  }

  .content .title {
    margin: 5px 0px;
    font-size: 1.9rem;
    font-weight: 600;
  }
  .content .description {
    color: #222;
    font-size: 15px;
    padding: 5px;
  }
  .content .dismiss-btn {
    margin-top: 15px;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
