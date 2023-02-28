import styled from "styled-components";

const Wrapper = styled.div`
  .title {
    font-family: var(--headingFont);
    font-weight: 500;
    margin: -1rem 0;
  }
  .about-container {
    margin: 2rem auto;
    padding-bottom: 0;
  }
  /* custom scrollbar */
  .about-container::-webkit-scrollbar {
    width: 20px;
  }
  .about-container::-webkit-scrollbar-track {
    background-color: transparent;
  }
  .about-container::-webkit-scrollbar-thumb {
    background-color: #a8bbbf;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  .about-container::-webkit-scrollbar-thumb:hover {
    background-color: var(--grey-400);
  }
  .about-card {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--white);
    border-radius: var(--largeBorderRadius);
    gap: 40px;
    padding: 0.7rem;
    margin-bottom: 0.7rem;
    box-shadow: var(--shadow-3);
    flex-wrap: wrap;
  }
  .mob-about-card{
    display: none;
  }
  .about-left .about-img {
    width: 150px;
    border-radius: 100%;
  }
  .about-title {
    margin-bottom: 0px;
  }
  .about-description {
    margin: 0.2rem 0;
  }
  @media (max-width: 972px) {
    .about-card{
        display: none;
    }
    .mob-about-card {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: var(--white);
      border-radius: var(--largeBorderRadius);
      gap: 20px;
      padding: 1rem;
      margin-bottom: 0.7rem;
      box-shadow: var(--shadow-3);
      flex-wrap: wrap;
    }
  }
`;
export default Wrapper;
