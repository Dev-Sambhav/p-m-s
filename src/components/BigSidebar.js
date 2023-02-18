import { useAuthContext } from '../hooks/useAuthContext';
import NavLinks from "./NavLinks"
import Logo from "../components/Logo"
import Wrapper from '../assets/wrappers/BigSidebar';
const BigSidebar = () => {
  const {toggleSidebar} = useAuthContext();
  return (
    <Wrapper>
        <div
          className={toggleSidebar ? 'sidebar-container':'sidebar-container show-sidebar'}
        >
          <div className="content">
            <header>
              <Logo/>
            </header>
            <NavLinks/>
          </div>
        </div>
    </Wrapper>
  )
}
export default BigSidebar