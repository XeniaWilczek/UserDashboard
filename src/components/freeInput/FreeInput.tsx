import type { ChangeEvent } from "react";

function FreeInput({
  text,
  placeholder,
  inputValue,
  onChange,
}: {
  text: string;
  placeholder: string;
  inputValue: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}) {
  return (
    <label className="input-container__label">
      {text + ":"}
      <input
        type="text"
        placeholder={placeholder}
        className="input-container__input"
        value={inputValue}
        onChange={onChange}
      ></input>
    </label>
  );
}
export default FreeInput;
