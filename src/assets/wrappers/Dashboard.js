import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard-area {
    margin-top: -1rem;
    margin-bottom: 20px;
  }

  .project-filter {
    margin: 30px auto;
    /* width: 100%; */
  }
  .project-filter nav {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    background-color: var(--primary-500);
    color: var(--white);
    border-radius: 4px;
  }
  .project-filter p {
    font-size: 0.9em;
    text-align: center;
    margin: auto 0;
  }
  .project-filter button {
    background: transparent;
    border: 0;
    color: var(--light-white);
    cursor: pointer;
    font-size: 0.9em;
  }

  .project-filter button.active {
    color: #f0f4f8;
    font-weight: bold;
  }
  @media (max-width: 600px) {
    .project-filter nav{
        row-gap: 12px;
    }
  }
`;

export default Wrapper;
