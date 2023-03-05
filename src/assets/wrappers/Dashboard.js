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
    position: relative;
    display: inline-block;
    border: 0;
    border-radius: 20px;
    color: var(--black);
    cursor: pointer;
    font-size: 1em;
    margin-left: 10px;
    overflow: hidden;
    transition: all 0.3s;
    z-index: 1;
    padding: .5rem;
  }

  .project-filter button::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: var(--primary-500);
    transition: all 0.3s;
    border-radius: 20px;
    z-index: -1;
  }
  .project-filter button::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--white);
    z-index: -2;
  }

  .project-filter button:hover {
    color: var(--white);
  }
  .project-filter button:hover:before {
    width: 100%;
  }
  
  
  .project-filter button.active {
    font-weight: bold;
    font-size: 1em;
    color: var(--grey-900);
  }
  .project-filter button.active:hover{
    color: var(--white);
  }
  @media (max-width: 600px) {
    .project-filter nav {
      justify-content: normal;
      row-gap: 10px;
    }
    .dashboard-area {
      height: 0vh !important;
    }
  }
`;

export default Wrapper;
