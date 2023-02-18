import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";

// styles
import "./OnlineUsers.css";

// component
import { Avatar } from "./";
import { FiToggleLeft } from "react-icons/fi";
import { FiToggleRight } from "react-icons/fi";

const OnlineUsers = () => {
  const { documents: users, error, isLoading } = useCollection("users");
  const { toggleUser, handleToggleUser } = useAuthContext();
  return (
    <>
      {toggleUser && (
        <button
          className="miniUser-toggle-btn"
          onClick={handleToggleUser}
        >
          <FiToggleRight />
        </button>
      )}
      <div className={toggleUser ? "user-list no-user" : "user-list"}>
        <button
          className="maxiUser-toggle-btn"
          onClick={handleToggleUser}
        >
          {!toggleUser && <FiToggleLeft />}
        </button>
        <h2>All Users</h2>
        {isLoading && <div>Loading users...</div>}
        {error && <div className="error">{error}</div>}
        {users &&
          users.map((user) => (
            <div key={user.id} className="user-list-item">
              {user.online && <span className="online-user"></span>}
              <span>{user.displayName}</span>
              <Avatar src={user.photoURL} />
            </div>
          ))}
      </div>
    </>
  );
};

export default OnlineUsers;
