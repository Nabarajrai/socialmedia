/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CiSearch } from "react-icons/ci";

const CustomInputComponent = ({
  title,
  inputType,
  value,
  handleChange,
  size = "",
  name,
  label,
  ...rest
}) => {
  return (
    <div className="custom-input">
      {label && <label className="input-label">{label}</label>}
      <div className={`input-group ${size}`}>
        <div className="input-group__icon">
          {inputType === "search" && <CiSearch />}
        </div>
        <input
          type={inputType}
          id="input"
          name={name}
          placeholder={title}
          onChange={handleChange}
          value={value}
          {...rest}
        />
      </div>
    </div>
  );
};

export default CustomInputComponent;
