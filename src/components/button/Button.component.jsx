/* eslint-disable react/prop-types */
const ButtonComponent = ({ file, des, children }) => {
  //   const BUTTON_CLASS_TYPES = {
  //     primary: "primary",
  //     secondary: "secondary",
  //   };

  return (
    <button className="btn" disabled={file === null && des === ""}>
      {children}
    </button>
  );
};

export default ButtonComponent;
