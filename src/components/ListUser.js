import { useCollection } from "../hooks/useCollection";
import Wrapper from "../assets/wrappers/ListUser"
const ListUser = ({ isUserIcon, handleClick }) => {
  const { documents: users } = useCollection("users");
  return (
    <Wrapper>
      <div className={!isUserIcon ? "user-list" : "no-user-list"}>
        <h2 className="title">All Users</h2>
        <div className="user-content">
          {users &&
            users.map((user) => (
              <div key={user.id} className="user-list-item">
                {user.online && <span className="online-user"></span>}
                <span>{user.displayName}</span>
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
            <i class="fa-solid fa-circle-down"></i>
          )}
        </button>
      </div>
    </Wrapper>
  );
};
export default ListUser;
