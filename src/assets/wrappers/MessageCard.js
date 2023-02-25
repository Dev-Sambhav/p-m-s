import styled from "styled-components";

const Wrapper = styled.div`
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

`;

export default Wrapper;
