import styled from "styled-components";

const Wrapper = styled.div`
  .project-list {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 20px;
    /* max-height: 55vh; */
    /* overflow-y: scroll; */
  }
  /* custom scrollbar */
  /* .project-list::-webkit-scrollbar {
    width: 20px;
  }
  .project-list::-webkit-scrollbar-track {
    background-color: transparent;
  }
  .project-list::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  .project-list::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  } */

  .project-list .project-info {
    background-color: var(--white);
    padding: 16px;
    border-radius: var(--borderRadius);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
    text-decoration: none;
    color: var(--black);
    transition: all 0.3s ease-in-out;
  }
  .project-info:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-4);
  }
  .project-list h5 {
    color: var(--heading-color);
    font-weight: 600;
  }
  .project-list p {
    color: var(--text-color);
    font-size: 0.9em;
  }
  .project-list .assigned-to {
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid #eee;
  }
  .project-list ul {
    margin: 10px 0;
    display: flex;
  }
  .project-list li {
    margin-right: 10px;
  }
  .project-list .avatar {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 600px) {
    .project-list {
      max-height: 55vh;
      overflow-y: scroll;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    .project-list::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .project-list {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  }
`;

export default Wrapper;
