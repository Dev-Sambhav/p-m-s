import main from "../../assets/images/welcome.svg"
import { Link } from "react-router-dom";
import { Logo } from "../../components";
import Wrapper from "../../assets/wrappers/LandingPage"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Project <span>Management</span> Site
          </h1>
          <p>
          Welcome to our project management website! Our site is dedicated to helping individuals and organizations effectively manage their projects from start to finish. We offer a range of resources, tools, and services designed to help you plan, execute, and monitor your projects with ease.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        {/* image */}
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
