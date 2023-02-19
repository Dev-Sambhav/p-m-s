import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, BigSidebar, SmallSidebar } from "../../components";
import Wrapper from "../../assets/wrappers/SharedLayout"

const SharedLayout = () => {
  const [isUserIcon, setIsUserIcon] = useState(true);
  const handleClick = () => {
    setIsUserIcon(!isUserIcon);
  };
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div className={!isUserIcon && "light-dark"}>
          <Navbar />
          <div className="dashboard-page">
            <div className={!isUserIcon ? "list-user" : "no-list-user"}>
              <div className="title">All Users</div>
            </div>
            <div className="user-box">
              <button className="user-icon btn" onClick={handleClick}>
                {isUserIcon ? (
                  <i className="fa-sharp fa-lg fa-regular fa-circle-user"></i>
                ) : (
                  <i class="fa-solid fa-circle-down"></i>
                )}
              </button>
            </div>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout;
