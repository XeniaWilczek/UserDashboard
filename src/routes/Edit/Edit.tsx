import "../Create/Create.scss";
import FreeInput from "../../components/FreeInput";
import SelectInput from "../../components/SelectInput";
import DateInput from "../../components/DateInput";
import Button from "../../components/Button";
import { useInputValue } from "../../hooks/useInputValue";
import { useUserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import type { User } from "../../types/user.type";
import { useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const { users, dispatch } = useUserContext();
  const navigate = useNavigate();
  const userToEdit = users.find((u) => u.id === Number(id));
  const userTemplate: User = {
    username: "",
    email: "",
    id: 0,
    address: "",
    dateOfBirth: "0",
    gender: "",
    phoneNumber: 0,
    website: "",
  };

  const data = userToEdit || userTemplate;

  const userName = useInputValue(data.username);
  const dateOfBirth = useInputValue(data.dateOfBirth);
  const gender = useInputValue(data.gender);
  const address = useInputValue(data.address);
  const email = useInputValue(data.email);
  const phoneNumber = useInputValue(data.phoneNumber);
  const website = useInputValue(data.website);

  function handleUpdateClick() {
    const values = [
      userName.inputValue,
      dateOfBirth.inputValue,
      gender.inputValue,
      address.inputValue,
      email.inputValue,
      phoneNumber.inputValue,
      website.inputValue,
    ];

    const isEmpty = values.some((val) => val.toString().trim() === "");

    if (isEmpty) {
      alert("Bitte alle Felder ausfüllen!");
      return;
    }
    //Typabsicherung (wurden als string oder number definiert)
    const updatedUser: User = {
      ...data,
      username: String(userName.inputValue),
      dateOfBirth: String(dateOfBirth.inputValue),
      gender: String(gender.inputValue),
      address: String(address.inputValue),
      email: String(email.inputValue),
      phoneNumber: Number(phoneNumber.inputValue),
      website: String(website.inputValue),
    };

    dispatch({ type: "UPDATE_USER", payload: updatedUser });
    navigate("../");
  }

  return (
    <div className="input-container">
      <FreeInput
        text={"Nutzername"}
        inputValue={userName.inputValue}
        placeholder={""}
        onChange={userName.handleInputChangeEvent}
      />
      <DateInput
        text={"Geburtsdatum"}
        date={dateOfBirth.inputValue}
        onChange={dateOfBirth.handleInputChangeEvent}
      />
      <SelectInput
        heading={"Geschlecht"}
        inputValue={String(gender.inputValue)}
        onChange={gender.handleInputChangeEvent}
      />
      <FreeInput
        text={"Anschrift"}
        inputValue={address.inputValue}
        placeholder={""}
        onChange={address.handleInputChangeEvent}
      />
      <FreeInput
        text={"E-Mail"}
        inputValue={email.inputValue}
        placeholder={""}
        onChange={email.handleInputChangeEvent}
      />
      <FreeInput
        text={"Telefonnummer"}
        inputValue={phoneNumber.inputValue}
        placeholder={""}
        onChange={phoneNumber.handleInputChangeEvent}
      />
      <FreeInput
        text={"Website"}
        inputValue={website.inputValue}
        placeholder={""}
        onChange={website.handleInputChangeEvent}
      />
      <p className="input-container__alert">
        *Alle Eingabefelder müssen ausgefüllt sein!
      </p>
      <Button
        onClick={handleUpdateClick}
        text={"Änderungen speichern"}
      ></Button>
    </div>
  );
}

export default Edit;
