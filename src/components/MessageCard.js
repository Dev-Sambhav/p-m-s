import Wrapper from "../assets/wrappers/MessageCard";
const MessageCard = ({description,handleClick}) => {
  return (
    <Wrapper>
      <div className="alert-box">
        <div className="content">
          <div className="icon">
            <i className="fa fa-check"></i>
          </div>
          <div className="title">Success!!</div>
          <div className="description">{description}</div>
          <button className="btn dismiss-btn" onClick={handleClick}>
            DISMISS
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default MessageCard;
