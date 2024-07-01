/* eslint-disable react/prop-types */
import { MdOutlineClose } from "react-icons/md";

const PostModalComponent = ({ active, setActive, children }) => {
  return (
    <div className={`post-modal-wrapper ${active ? "active" : ""}`}>
      <div className="post-modal-bg" onClick={() => setActive(false)}></div>
      <div className="post-modal">
        <div className="post-modal-section">
          <div
            className="post-modal-section__close"
            onClick={() => setActive(false)}>
            <MdOutlineClose />
          </div>
          <div className="post-modal-section__title">Nabaraj&apos;s Post</div>
        </div>
        <div className="post-modal-content">
          <div className="post-modal-content__main">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PostModalComponent;
