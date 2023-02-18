import { useState, useEffect } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useGoogle } from "../../hooks/useGoogle";
import { useFacebook } from "../../hooks/useFacebook";
import signin_logo from "../../assets/images/signin.svg";

// styles
import Wrapper from "../../assets/wrappers/RegisterPage";
import { FormRow } from "../../components";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [values, setValues] = useState(initialState);
  const { login, isLoading, error } = useLogin();
  const { googleSignIn } = useGoogle();
  const { facebookSignIn } = useFacebook();
  const navigate = useNavigate();
  const { user, alert} = useAuthContext();
  // let inputError = "";

  // handle change
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    login(values.email, values.password);
  };

  // handle google login
  const handleGoogleLogin = () => {
    googleSignIn();
    console.log("Google Login Successful");
  };

  // handle facebook login
  const handleFacebookLogin = () => {
    facebookSignIn();
    console.log("Facebook Login Successful");
  };

  // redirect to user once login successful
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <div className="signup-left">
        <img src={signin_logo} alt="signup-logo" />
      </div>
      <div className="line"></div>
      <form className="form">
        <h3>Login</h3>
        <FormRow
          type="text"
          name="email"
          handleChange={handleChange}
          value={values.email}
          labelText="Email:"
        />
        <FormRow
          type="password"
          name="password"
          handleChange={handleChange}
          value={values.password}
          labelText="Password:"
        />
        {isLoading && (
          <button className="member-btn" disabled>
            Logging...
          </button>
        )}
        {alert && <div className="btn-danger">{error}</div>}
        {/* {inputError !== "" && <div className="btn-danger">{inputError}</div>} */}
        {!isLoading && (
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-block"
          >
            Login
          </button>
        )}
        <div className="login-icon">
          <button
            type="button"
            onClick={handleGoogleLogin}
            class="btn social-btn"
          >
            <i class="fa fa-google fa-fw"></i> Google
          </button>
          <button
            type="button"
            onClick={handleFacebookLogin}
            class="btn social-btn"
          >
            <i class="fa fa-facebook fa-fw"></i> Facebook
          </button>
        </div>
        <p>
        Have not a account?
        <Link to="/register" className="member-btn">
          Register
        </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
