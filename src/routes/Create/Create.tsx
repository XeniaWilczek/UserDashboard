import "./Create.scss";
import FreeInput from "../../components/FreeInput";
import SelectInput from "../../components/SelectInput";
import DateInput from "../../components/DateInput";
import { useInputValue } from "../../hooks/useInputValue";
import { useUserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../components/Button";

function Create() {
  const { dispatch } = useUserContext();
  const navigate = useNavigate();
  //leere Startwerte für Input-Felder setzen
  const userName = useInputValue("");
  const dateOfBirth = useInputValue("");
  const gender = useInputValue("");
  const address = useInputValue("");
  const email = useInputValue("");
  const phoneNumber = useInputValue("");
  const website = useInputValue("");

  //Hinzufügen des User-Objekts zum Array
  function handleCreateClick() {
    const values = [
      userName.inputValue,
      dateOfBirth.inputValue,
      gender.inputValue,
      address.inputValue,
      email.inputValue,
      phoneNumber.inputValue,
      website.inputValue,
    ];

    //Prüfung, ob alle Werte vorhanden sind
    if (values.some((val) => val.toString().trim() === "")) {
      alert("Bitte alle Felder ausfüllen!");
      return;
    }

    //Prüfung, ob beim Number-Feld nur Ziffern eingegeben werden
    const phoneNumberType = Number(phoneNumber.inputValue);

    if (isNaN(phoneNumberType)) {
      alert("Bitte für Telefon nur Ziffern eingeben!");
      return;
    }

    // Erstellung eines User-Objekts
    const newUser = {
      username: String(userName.inputValue),
      dateOfBirth: String(dateOfBirth.inputValue),
      gender: String(gender.inputValue),
      address: String(address.inputValue),
      email: String(email.inputValue),
      phoneNumber: phoneNumberType,
      website: String(website.inputValue),
      id: Date.now(),
    };

    dispatch({ type: "ADD_USER", payload: newUser });
    navigate("/");
  }

  return (
    <div className="input-container">
      <FreeInput
        text={"Nutzername"}
        inputValue={userName.inputValue}
        placeholder={"Bitte Nutzernamen eingeben..."}
        onChange={userName.handleInputChangeEvent}
      />
      <DateInput
        text={"Geburtsdatum"}
        date={dateOfBirth.inputValue}
        onChange={dateOfBirth.handleInputChangeEvent}
      />
      <SelectInput
        heading={"Geschlecht"}
        onChange={gender.handleInputChangeEvent}
      />
      <FreeInput
        text={"Anschrift"}
        inputValue={address.inputValue}
        placeholder={"Bitte Anschrift eingeben..."}
        onChange={address.handleInputChangeEvent}
      />
      <FreeInput
        text={"E-Mail"}
        inputValue={email.inputValue}
        placeholder={"Bitte E-Mail-Adresse eingeben..."}
        onChange={email.handleInputChangeEvent}
      />
      <FreeInput
        text={"Telefonnummer"}
        inputValue={phoneNumber.inputValue}
        placeholder={"Bitte Telefonnummer eingeben..."}
        onChange={phoneNumber.handleInputChangeEvent}
      />
      <FreeInput
        text={"Website"}
        inputValue={website.inputValue}
        placeholder={"Bitte Website eingeben..."}
        onChange={website.handleInputChangeEvent}
      />
      <p className="input-container__alert">
        *Alle Eingabefelder müssen ausgefüllt sein!
      </p>

      <SubmitButton onClick={handleCreateClick} text={"Abschicken"} />
    </div>
  );
}

export default Create;
