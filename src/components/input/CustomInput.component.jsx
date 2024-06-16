/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../../styles/components/_input.scss";
import { CiSearch } from "react-icons/ci";

const CustomInputComponent = ({
  title,
  inputType,
  value,
  handleChange,
  ...rest
}) => {
  return (
    <div className="input-group">
      <div className="input-group__icon">
        <CiSearch />
      </div>
      <input
        type="text"
        id="input"
        placeholder={title}
        onChange={handleChange}
        value={value}
        {...rest}
      />
    </div>
  );
};

export default CustomInputComponent;
