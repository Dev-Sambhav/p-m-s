import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard-area {
    margin-top: -1rem;
    margin-bottom: 20px;
    width: 100%;
    font-family: var(--bodyFont);
    font-weight: 500;
  }
  .project-filter {
    margin: 5px auto;
  }
  .project-filter nav {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    color: var(--black);
    border-radius: 4px;
    background-color: var(--white);
  }
  .project-filter p {
    font-size: 0.9em;
    text-align: center;
    margin: auto 0;
  }
  .project-filter button {
    background: transparent;
    border: 0;
    color: var(--black);
    cursor: pointer;
    font-size: 0.9em;
    margin-left: 10px
  }

  .project-filter button.active {
    font-weight: bold;
    font-size: 1em;
  }
  @media (max-width: 600px) {
    .project-filter nav {
      justify-content: normal;
      row-gap: 10px;
    }
  }
`;

export default Wrapper;
