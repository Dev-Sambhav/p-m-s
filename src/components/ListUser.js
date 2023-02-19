import { Outlet } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
const ListUser = ({ isUserIcon, handleClick }) => {
  const { documents: users, error, isLoading } = useCollection("users");
  return (
    <div className="dashboard-page">
      <div className={!isUserIcon ? "user-list" : "no-user-list"}>
        <h2 className="title">All Users</h2>
        <div className="user-content">
          {users &&
            users.map((user) => (
              <div key={user.id} className="user-list-item">
                {user.online && <span className="online-user"></span>}
                <span>{user.displayName}</span>
                <img src={user.photoURL} className="user-logo" alt="user-logo" />
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
      <Outlet />
    </div>
  );
};
export default ListUser;
