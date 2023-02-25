import { useState } from "react";
// css
import Wrapper from "../../assets/wrappers/Feedback";
import SendFeedback from "./SendFeedback";
import { FormRow, MessageCard } from "../../components";
const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
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
    setName(""); 
    setEmail(""); 
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
      />
      <FormRow
        type="email"
        name="email"
        handleChange={(e)=>setEmail(e.target.value)}
        value={email}
        labelText="Email:"
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
