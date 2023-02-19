import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";
import { useAuthContext } from "../../hooks/useAuthContext";
import Wrapper from "../../assets/wrappers/RegisterPage";
import signup_logo from "../../assets/images/signup.svg";

import { FormRow } from "../../components";

const initialState = {
  displayName: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [values, setValues] = useState(initialState);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, isLoading } = useSignup();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  // handling on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(values.email, values.password, values.displayName, thumbnail);
  };

  // handle change
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  // checking thumbnail file on every change whether it is image or not
  const handleFileChange = (e) => {
    setThumbnail(null);
    setThumbnailError(null);
    let selectedFile = e.target.files[0]; // it will return only first selected file
    console.log(selectedFile);
    if (!selectedFile) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selectedFile.type.includes("image")) {
      setThumbnailError("Please select a image file");
      return;
    }
    if (selectedFile.size > 100000) {
      setThumbnailError("Image size must be less than 100kb");
      return;
    }

    // if there is no error
    setThumbnail(selectedFile);
    console.log("Thumbnail updated");
  };
  return (
    <Wrapper className="full-page">
      <div className="signup-left">
        <img src={signup_logo} alt="signup-logo" />
      </div>
      <div className="line"></div>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Register</h3>
        <FormRow
          type="text"
          name="displayName"
          handleChange={handleChange}
          value={values.displayName == null ? '' : values.displayName}
          labelText="Display Name:"
        />
        <FormRow
          type="email"
          name="email"
          handleChange={handleChange}
          value={values.email == null ? '' : values.email}
          labelText="Email:"
        />
        <FormRow
          type="password"
          name="password"
          handleChange={handleChange}
          value={values.password == null ? '' : values.password}
          labelText="Password:"
        />
        <FormRow
          type="file"
          name="file"
          handleFileChange={handleFileChange}
          labelText="Profile Thumbnail:"
        />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
        {isLoading && (
          <button className="btn btn-block" disabled={true}>
            Signing...
          </button>
        )}
        {!isLoading && (
          <button className="btn btn-block" disabled={isLoading}>
            Sign Up
          </button>
        )}
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Signup;
