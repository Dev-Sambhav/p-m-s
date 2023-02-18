import {FaTimes} from "react-icons/fa";
import { useAuthContext } from "../hooks/useAuthContext";
import Logo from "./Logo"
import NavLinks from "./NavLinks";
import Wrapper from "../assets/wrappers/SmallSidebar"

const SmallSidebar = ()=>{
    const {toggleSidebar, handleToggleSidebar} = useAuthContext();
    return(
        <Wrapper>
            <div
                className={toggleSidebar ? "sidebar-container show-sidebar" : "sidebar-container"}
            >
                <div className="content">
                    <button className="close-btn"
                    onClick={handleToggleSidebar}
                    >
                        <FaTimes/>
                    </button>
                    <header>
                        <Logo/>
                    </header>
                    <NavLinks handleToggleSidebar={handleToggleSidebar}/>
                </div>
            </div>
        </Wrapper>
    )
}

export default SmallSidebar;