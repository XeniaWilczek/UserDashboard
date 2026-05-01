import type { ChangeEvent } from "react";

function DateInput({
  text,
  date,
  onChange,
}: {
  text: string;
  date: string | number;

  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}) {
  return (
    <label className="input-container__label">
      {text + ":"}
      <input
        type="date"
        value={date}
        className="input-container__input"
        onChange={onChange}
      ></input>
    </label>
  );
}
export default DateInput;
