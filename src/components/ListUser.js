import { useCollection } from "../hooks/useCollection";
import Wrapper from "../assets/wrappers/ListUser";
import useShortName from "../hooks/useShortName";
const ListUser = ({ isUserIcon, handleClick }) => {
  const { documents: users } = useCollection("users");
  const {shortTheName} = useShortName();
  return (
    <Wrapper>
      <div className={!isUserIcon ? "user-list" : "no-user-list"}>
        <h2 className="title">All Users</h2>
        <div className="user-content">
          {users &&
            users.map((user) => (
              <div key={user.id} className="user-list-item">
                {user.online && <span className="online-user"></span>}
                <span>{shortTheName(user.displayName)}</span>
                <img
                  src={user.photoURL}
                  className="user-logo"
                  alt="Logo"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="user-box">
        <button className="user-icon btn" onClick={handleClick}>
          {isUserIcon ? (
            <i className="fa-sharp fa-lg fa-regular fa-circle-user"></i>
          ) : (
            <i class="fa-regular fa-sharp fa-lg fa-circle-down"></i>
          )}
        </button>
      </div>
    </Wrapper>
  );
};
export default ListUser;
