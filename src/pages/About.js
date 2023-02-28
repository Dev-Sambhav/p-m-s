import userInfo from "../utils/UserInfo";
import Wrapper from "../assets/wrappers/About";
const About = () => {
  return (
    <Wrapper>
      <h3 className="title">Team</h3>
      <div className="about-container">
        {userInfo.map((user) => (
          <>
          {/* for web */}
            <div key={user.id} className="about-card">
              {user.leftLogo && (
                <div className="about-left">
                  <img
                    className="about-img"
                    src={user.photoURL}
                    alt="user-img"
                  />
                </div>
              )}
              <div className="about-right">
                <div className="about-right-card">
                  <h5 className="about-title">{user.name}</h5>
                  <span className="about-position">{user.position}</span>
                  <p className="about-description">{user.description}</p>
                </div>
              </div>
              {!user.leftLogo && (
                <div className="about-left">
                  <img
                    className="about-img"
                    src={user.photoURL}
                    alt="user-img"
                  />
                </div>
              )}
            </div>
            {/* for mobile */}
            <div key={user.id} className="mob-about-card">
              <div className="about-left">
                <img className="about-img" src={user.photoURL} alt="user-img" />
              </div>
              <div className="about-right">
                <div className="about-right-card">
                  <h5 className="about-title">{user.name}</h5>
                  <span className="about-position">{user.position}</span>
                  <p className="about-description">{user.description}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </Wrapper>
  );
};
export default About;
