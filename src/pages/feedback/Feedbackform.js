import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
// css
import Wrapper from "../../assets/wrappers/Feedback";
import SendFeedback from "./SendFeedback";
import { FormRow, MessageCard } from "../../components";
const Feedback = () => {
  const {user} = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const [name,setName] = useState(user?.displayName);
  const [email,setEmail] = useState(user?.email);
  const [message,setMessage] = useState("");

  const handleClick = ()=>{
    setIsOpen(!isOpen);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const feedback = {
      name,
      email,
      message,
    }
    SendFeedback(feedback);
    // clear field
    setMessage("");
    // open the message box
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
    <form className="form feedback-form" onSubmit={handleSubmit}>
      <h4 className="page-title">Feedback</h4>
      {isOpen && (
          <MessageCard
            description="Thank you for your Feedback 🙂"
            handleClick={(handleClick)}
          />
        )}
      <FormRow
        type="text"
        name="name"
        handleChange={(e)=>setName(e.target.value)}
        value={name}
        labelText="Name:"
        readOnly="true"
      />
      <FormRow
        type="email"
        name="email"
        handleChange={(e)=>setEmail(e.target.value)}
        value={email}
        labelText="Email:"
        readOnly="true"
      />
      <div className="form-row">
            <label htmlFor={message} className="form-label">
              Message
            </label>
            <textarea
              required
              onChange={(e)=>setMessage(e.target.value)}
        value={message}
              className="form-text"
            ></textarea>
          </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
    </Wrapper>
  );
};
export default Feedback;
