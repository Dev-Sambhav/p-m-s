import styled from "styled-components";

const Wrapper = styled.div`
  .project-details {
    margin-top: -40px;
    display: grid;
    grid-template-columns: 4fr 2fr;
    align-items: start;
    grid-gap: 50px;
  }

  .project-details .assigned-users p {
    color: var(--text-color);
    font-size: 0.9em;
  }

  /* project summary */
  .project-summary {
    background-color: #fff;
    padding: 40px;
    border-radius: var(--largeBorderRadius);
    padding-bottom: 20px;
  }

  .project-title {
    margin-top: -25px;
  }
  .project-summary .due-date {
    margin: 10px 0;
    font-size: 0.9em;
    color: var(--title-color);
  }
  .project-summary .details {
    margin: 30px 0;
    margin-top: 20px;
    color: var(--text-color);
    line-height: 1.8em;
    font-size: 0.9em;
  }
  .project-summary h4 {
    color: var(--text-color);
    font-size: 0.9em;
  }
  .project-summary .assigned-users {
    display: flex;
    margin-top: 20px;
  }
  .project-summary .assigned-users .avatar {
    margin-right: 10px;
  }
  .project-summary .assigned-users p {
    text-align: center;
  }
  .project-summary .btn {
    margin-bottom: 20px;
  }

  /* project comments */
  .project-chat {
    overflow-y: scroll;
    max-height: 55vh;
    /* margin-top: 40px; */
  }

  /* custom scrollbar */
  .project-chat::-webkit-scrollbar {
    width: 20px;
  }
  .project-chat::-webkit-scrollbar-track {
    background-color: transparent;
  }
  .project-chat::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  .project-chat::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }

  .project-comments label {
    margin-bottom: 0px;
  }
  .project-comments textarea {
    min-height: 40px;
  }

  /* comment list */
  .project-comments h4,
  .summary-title {
    color: var(--black);
    margin-top: 40px;
    margin-left: 5px;
  }
  .project-comments li {
    padding: 5px 12px 12px;
    border-radius: var(--borderRadius);
    border: 1px solid #f2f2f2;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
    background: var(--white);
  }
  .comment-author {
    display: flex;
    align-items: center;
    gap: 7px;
    color: var(--textColor);
  }
  .comment-author .avatar {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .comment-date {
    color: var(--textColor);
    font-size: 0.9em;
    margin-top: -20px;
  }
  .comment-date p {
    margin-bottom: 0px !important;
    color: var(--grey-500);
  }
  .comment-content {
    color: var(--textColor);
    font-size: 0.9em;
    margin-top: -10px;
  }
  .comment-content p {
    margin-bottom: 0px !important;
  }
  .comment-box {
    min-width: 284px;
    min-height: 108px !important;
    border: none;
    outline: none;
    padding: var(--small-pad);
    margin: var(--small-margin);
  }

  @media (max-width: 600px) {
    .project-details {
      display: flex;
      flex-wrap: wrap;
    }
    .project-comments {
      margin-top: -20px;
    }
    .project-chat {
      overflow-y: scroll;
      max-height: 50vh;
    }

    .add-comment {
      margin-top: 3rem;
    }
  }
`;

export default Wrapper;
