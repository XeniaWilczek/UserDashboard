import "./Overview.scss";
import { useNavigate } from "react-router-dom";
import UserCard from "../../components/UserCard";
import { useUserContext } from "../../context/userContext";
import type { User } from "../../userType";

function Overview() {
  const { users, dispatch } = useUserContext();
  const navigate = useNavigate();
  const handleEditClick = (user: User) => {
    navigate(`./edit/${user.id}`);
  };
  return (
    <div className="user-card-container">
      {users.map((u) => (
        <UserCard
          key={u.id}
          user={u}
          onDelete={(id) => dispatch({ type: "REMOVE_USER", payload: id })}
          onEdit={handleEditClick}
        />
      ))}
    </div>
  );
}

export default Overview;
