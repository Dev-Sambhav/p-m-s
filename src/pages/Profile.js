import {useState} from "react";
import {FormRow} from "../components";
import { useAuthContext } from "../hooks/useAuthContext";
import Wrapper from "../assets/wrappers/DashboardFormPage";

const Profile = () => {
  const {user} = useAuthContext();
  const [name, setName] = useState(user?.displayName);
  const [email, setEmail] = useState(user?.email);
  // const [photoURL, setPhotoURL] = useState(user?.photoURL);

  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={(e)=>setName(e.target.value)}
            labelText='Name'
          />
          <FormRow
            type='email'
            name='email'
            value={email}
            handleChange={(e)=>setEmail(e.target.value)}
            labelText='Email'
          />
          <button className="btn btn-block" type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </Wrapper>
  )
}
export default Profile