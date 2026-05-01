import "./UserCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faCakeCandles,
  faEnvelope,
  faGlobe,
  faPhone,
  faTrash,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import type { User } from "../types/user.type";

interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
  onEdit: (user: User) => void;
}

function UserCard({ user, onDelete, onEdit }: UserCardProps) {
  return (
    <div className="user-card" onClick={() => onEdit(user)}>
      <div className="user-card__left-container">
        <img
          className="user-card__image"
          src="/User-Uebersicht/images/user.jpg"
          alt="user"
        />
      </div>
      <div className="user-card__right-container">
        <div className="upper-div">
          <span className="upper-div__username">{user.username}</span>

          <button
            className="upper-div__delete-button"
            onClick={(e) => {
              //onEdit soll nicht beim Anklicken des Delete-Buttons ausgelöst werden
              e.stopPropagation();
              onDelete(user.id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>

        <div className="lower-div">
          <span className="lower-div__user-attributes">
            <FontAwesomeIcon icon={faCakeCandles} />
            {new Date(user.dateOfBirth).toLocaleDateString("de-DE", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </span>
          <span className="lower-div__user-attributes">
            <FontAwesomeIcon icon={faVenusMars} />
            {user.gender}
          </span>
          <span className="lower-div__user-attributes">
            <FontAwesomeIcon icon={faAddressBook} />
            {user.address}
          </span>
          <span className="lower-div__user-attributes">
            <FontAwesomeIcon icon={faEnvelope} />
            {user.email}
          </span>
          <span className="lower-div__user-attributes">
            <FontAwesomeIcon icon={faPhone} />
            {user.phoneNumber}
          </span>
          <span className="lower-div__user-attributes">
            <FontAwesomeIcon icon={faGlobe} />
            {user.website}
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
