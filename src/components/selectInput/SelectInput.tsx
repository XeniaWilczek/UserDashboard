import type { ChangeEvent } from "react";

function SelectInput({
  heading,
  onChange,
  inputValue,
}: {
  heading: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  inputValue?: string;
}) {
  return (
    <label htmlFor="selectInput" className="input-container__label">
      {heading + ":"}

      <select
        className="input-container__input"
        id="selectInput"
        onChange={onChange}
      >
        <option value="">--Wählen Sie eine Option--</option>
        <option value="männlich" selected={inputValue === "männlich"}>
          männlich
        </option>
        <option value="weiblich" selected={inputValue === "weiblich"}>
          weiblich
        </option>
        <option value="divers" selected={inputValue === "divers"}>
          divers
        </option>
      </select>
    </label>
  );
}
export default SelectInput;
