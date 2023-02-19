import { useState } from "react";
import { FormRow } from "../components";
import { useAuthContext } from "../hooks/useAuthContext";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useProfile } from "../hooks/useProfile";
import { projectAuth } from "../firebase/config";

const Profile = () => {
  const { user } = useAuthContext();
  const [name, setName] = useState(user?.displayName);
  const [email, setEmail] = useState(user?.email);
  const { updateProfile, isLoading } = useProfile("users");
  const [isOpen, setIsOpen] = useState(false);
  // const [photoURL, setPhotoURL] = useState(user?.photoURL);

  // handle click
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cu = projectAuth.currentUser;
    const updatesData = {
      displayName: name,
      online: true,
      photoURL: cu.photoURL,
    };
    if (cu.uid === user.uid) {
      await updateProfile(user.uid, updatesData);
    } else {
      console.log("user is not valid");
    }
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        {isOpen && (
          <div className="alert-box">
            <div className="content">
              <div className="icon">
                <i className="fa fa-check"></i>
              </div>
              <div className="title">Success!!</div>
              <div className="description">Profile updated successfully!</div>
              <button className="btn dismiss-btn" onClick={handleClick}>DISMISS</button>
            </div>
          </div>
        )}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
            labelText="Name"
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            labelText="Email"
          />
          {isLoading && (
            <button className="btn btn-block" disabled={true}>
              Saving...
            </button>
          )}
          {!isLoading && (
            <button className="btn btn-block" type="submit">
              Save Changes
            </button>
          )}
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
