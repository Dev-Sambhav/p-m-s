import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Navbar, BigSidebar, SmallSidebar } from "../../components";
import Wrapper from "../../assets/wrappers/SharedLayout";
import {ListUser} from "../../components"

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
        <div className={!isUserIcon ? "light-dark" : ""}>
          <Navbar />
          <div className="dashboard-page">
          <ListUser isUserIcon={isUserIcon} handleClick={handleClick} />
          <Outlet/>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout;
