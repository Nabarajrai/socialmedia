/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import classnames from "classnames";
import { memo } from "react";
const ButtonComponent = ({
  file,
  des,
  varient,
  size,
  className,
  children,
  ...rest
}) => {
  const sizeClass = size && `btn-${size}`;
  const varientClass = varient && `btn-${varient}`;
  const allClassNames = classnames("btn", sizeClass, varientClass, className);

  return (
    <button
      className={allClassNames}
      disabled={file === null && des === ""}
      {...rest}>
      {children}
    </button>
  );
};

export default memo(ButtonComponent);
