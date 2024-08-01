/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { memo } from "react";
import HeaderComponent from "../components/header/Header.component";
const LayoutComponent = ({ children, type }) => {
  return (
    <>
      <HeaderComponent type={type} />
      <div className="wrapper">{children}</div>
    </>
  );
};

export default memo(LayoutComponent);
