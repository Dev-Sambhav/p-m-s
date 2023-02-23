import { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { FaAlignLeft, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { useAuthContext } from "../hooks/useAuthContext";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  const { handleToggleSidebar, user } = useAuthContext();
  const [showLogout, setShowLogout] = useState(false);
  const { logout, isLoading } = useLogout();
  // handle logout dropdown view
  const handleDropDown = () => {
    setShowLogout(!showLogout);
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={handleToggleSidebar}>
          <FaAlignLeft />
        </button>

        <div>
          <Logo className="landing-logo" />
          <h3 className="logo-text">Dashboard</h3>
        </div>

        <div className="btn-container">
          <button className="btn" onClick={handleDropDown}>
            <img className="nav-img" src={user.photoURL} alt="avatar" />
            {user.displayName}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            {!isLoading ? (
              <button className="dropdown-btn" onClick={logout}>
                logout
              </button>
            ) : (
              <button className="dropdown-btn" disabled={true}>
                SignOut...
              </button>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
