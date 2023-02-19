import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2.5rem 0;
  }
  .user-list {
    width: 13.2rem;
    height: 26.563rem;
    background: rgba(0, 0, 0, 0.7);
    background-color: var(--light-white);
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
  .title{
    color: var(--black);
    text-align: center;
    margin-bottom:.7rem !important;
  }
  .user-logo{
    width: 35px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .user-content{
    color: var(--black);
    overflow-y: scroll;
    height: 50vh;
  }
  .user-list-item{
    width: 100%;
    display: flex;
    gap: 12px;
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
    width: 60px;
    height: 60px;
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
  .user-icon:hover {
    width: 60px;
    height: 60px;
  }
  .user-icon i {
    font-size: 35px;
    color: var(--light-white);
    transition: all 0.2s ease-in-out;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
  @media (max-width: 600px) {
    .user-box{
      right: 20px;
      bottom: 30px;
    }
    .user-list{
      right: 50px;
    }
    .user-logo{
    width: 35px;
    border-radius: 50%;
    margin-right: 15px;
  }
  }
`;
export default Wrapper;
