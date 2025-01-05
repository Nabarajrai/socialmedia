/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { memo } from "react";
import { MdOutlineClose } from "react-icons/md";

const ModalComponent = ({ active, setActive, children }) => {
  return (
    <div className={`modal-wrapper ${active ? "active" : ""}`}>
      <div className="modal-bg" onClick={() => setActive(false)}></div>
      <div className="modal">
        <div className="modal__close" onClick={() => setActive(false)}>
          <MdOutlineClose />
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default memo(ModalComponent);
