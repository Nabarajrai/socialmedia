/* eslint-disable react/prop-types */
import HeaderComponent from "../components/header/Header.component";
const LayoutComponent = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <div className="wrapper">{children}</div>
    </>
  );
};

export default LayoutComponent;
