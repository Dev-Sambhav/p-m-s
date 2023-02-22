import styled from "styled-components";

const Wrapper = styled.div`
  .user-list {
    width: 13.2rem;
    height: 26.563rem;
    background-color: rgba(0, 0, 0, 0.7);
    color: var(--white);
    position: fixed;
    bottom: 64px;
    right: 55px;
    border-radius: 10px;
    border-bottom-right-radius: 25px;
    padding: 1.5rem;
    z-index: 2;
    opacity: 1;
    transition: var(--transition);
    overflow: hidden;
  }
  .no-user-list {
    display: none;
  }
  .user-list .title {
    /* color: var(--black); */
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 2px solid #eee;
    font-size: 1.2em;
    margin-bottom: 0.7rem;
  }
  .user-content {
    /* color: var(--black); */
    overflow-y: scroll;
    height: 50vh;
    margin-top: -.5rem;
  }
  .user-logo {
    width: 35px;
    border-radius: 50%;
    margin-right: 1rem;
  }
  .user-list .user-list-item {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 20px auto;
    gap: 12px;
  }
  .user-list .online-user {
    display: inline-block;
    margin-right: 10px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #0ebb50;
    margin-top: 2px;
  }
  .user-box {
    width: 55px;
    height: 55px;
    background-color: var(--primary-500);
    position: fixed;
    bottom: 30px;
    right: 30px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    z-index: 3;
  }
  .user-box:hover {
    background-color: var(--primary-700);
  }
  .user-icon {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
  }

  .user-icon i {
    font-size: 35px;
    color: var(--light-white);
    transition: all 0.2s ease-in-out;
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  .user-content::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .user-content {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  @media (max-width: 600px) {
    .user-box {
      right: 20px;
      bottom: 30px;
    }
    .user-list {
      right: 50px;
    }
    .user-logo {
      width: 35px;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }
`;

export default Wrapper;
