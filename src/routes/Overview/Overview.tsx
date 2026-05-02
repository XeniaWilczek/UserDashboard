import "./Overview.scss";
import UserCard from "../../components/userCard/UserCard";
import { useUserContext } from "../../context/userContext";

function Overview() {
  const { users } = useUserContext();
  return (
    <div className="user-card-container">
      {users.map((u) => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  );
}
export default Overview;
