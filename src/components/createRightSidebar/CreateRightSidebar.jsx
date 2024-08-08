/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { GrFormClose } from "react-icons/gr";
import ButtonComponent from "../button/Button.component";
import { memo, useCallback, useMemo, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import classnames from "classnames";
import ModalComponent from "../modal/Modal.component";

const CreateRightSidebar = ({
  file,
  openText,
  text,
  handleText,
  bgColors,
  handleBgColor,
  handleOpen,
  handleOptions,
  open,
  type,
}) => {
  const [popup, setPopup] = useState(false);
  const classOpen = open ? "active" : "";
  const classNames = useMemo(() => {
    return classnames("style-lists", classOpen);
  }, [classOpen]);
  const navigate = useNavigate();

  const handleOpens = useCallback((para) => {
    setPopup(para);
  }, []);
  const handleBack = useCallback(() => {
    navigate("/");
  });

  return (
    <>
      <ModalComponent active={popup} setActive={handleOpens}>
        <div className="close-modal">
          <div className="close-main">
            <div className="header">Discard story?</div>
            <div className="description">
              Are you sure that you want to discard this story? your story
              won&apos;t be saved.
            </div>
          </div>
          <div className="close-action">
            <ButtonComponent
              size="sm"
              varient="secondary "
              onClick={handleBack}>
              Discard
            </ButtonComponent>
            <ButtonComponent size="sm" varient="primary">
              Share to Story
            </ButtonComponent>
          </div>
        </div>
      </ModalComponent>
      <div className="story-create-right">
        <div className="header-section">
          <div className="header">
            <Link className="header__close" onClick={handleOpens}>
              <GrFormClose />
            </Link>
            <div className="header__icon">Social Media</div>
          </div>
          <div className="story-bottom">
            <h3>Your Story</h3>
            <div className="story-avator">
              <div className="story-avator__img">
                <img src={logo} alt="logo" />
              </div>
              <span>Nabaraj Rai</span>
            </div>
          </div>
          {openText && (
            <div className="main-content">
              <div className="text-area">
                <textarea
                  name="text"
                  id="text"
                  placeholder="Start typing ..."
                  value={text}
                  onChange={(e) => handleText(e)}
                />
              </div>
              <div className="story-style">
                <div className="text-style" onClick={handleOpen}>
                  <div className="text-style__left">
                    <span className="low-white">Aa</span>
                    <span>{type}</span>
                  </div>
                  <div className="text-style__righ">
                    <IoMdArrowDropdown />
                  </div>
                </div>
                <div className={classNames}>
                  <span onClick={() => handleOptions("simple")}>Simple</span>
                  <span onClick={() => handleOptions("clean")}>Clean</span>
                  <span onClick={() => handleOptions("casual")}>Casual</span>
                  <span onClick={() => handleOptions("fancy")}>Fancy</span>
                </div>
              </div>
              <div className="bgcolor-story">
                <div className="title">Backgrounds</div>
                <div className="colors-lists">
                  <span
                    className={`bgcolor-1 ${bgColors === 1 && "active"}`}
                    onClick={() => handleBgColor(1)}></span>
                  <span
                    className={`bgcolor-2 ${bgColors === 2 && "active"}`}
                    onClick={() => handleBgColor(2)}></span>
                  <span
                    className={`bgcolor-3 ${bgColors === 3 && "active"}`}
                    onClick={() => handleBgColor(3)}></span>
                  <span
                    className={`bgcolor-4 ${bgColors === 4 && "active"}`}
                    onClick={() => handleBgColor(4)}></span>
                  <span
                    className={`bgcolor-5 ${bgColors === 5 && "active"}`}
                    onClick={() => handleBgColor(5)}></span>
                  <span
                    className={`bgcolor-6 ${bgColors === 6 && "active"}`}
                    onClick={() => handleBgColor(6)}></span>
                  <span
                    className={`bgcolor-7 ${bgColors === 7 && "active"}`}
                    onClick={() => handleBgColor(7)}></span>
                  <span
                    className={`bgcolor-8 ${bgColors === 8 && "active"}`}
                    onClick={() => handleBgColor(8)}></span>
                  <span
                    className={`bgcolor-9 ${bgColors === 9 && "active"}`}
                    onClick={() => handleBgColor(9)}></span>
                  <span
                    className={`bgcolor-10 ${bgColors === 10 && "active"}`}
                    onClick={() => handleBgColor(10)}></span>
                  <span
                    className={`bgcolor-11 ${bgColors === 11 && "active"}`}
                    onClick={() => handleBgColor(11)}></span>
                  <span
                    className={`bgcolor-12 ${bgColors === 12 && "active"}`}
                    onClick={() => handleBgColor(12)}></span>
                  <span
                    className={`bgcolor-13 ${bgColors === 13 && "active"}`}
                    onClick={() => handleBgColor(13)}></span>
                  <span
                    className={`bgcolor-14 ${bgColors === 14 && "active"}`}
                    onClick={() => handleBgColor(14)}></span>
                  <span
                    className={`bgcolor-15 ${bgColors === 15 && "active"}`}
                    onClick={() => handleBgColor(15)}></span>
                  <span
                    className={`bgcolor-16 ${bgColors === 16 && "active"}`}
                    onClick={() => handleBgColor(16)}></span>
                </div>
              </div>
            </div>
          )}
        </div>
        {openText && (
          <div className="story-action">
            <ButtonComponent
              size="sm"
              varient="secondary "
              onClick={() => setPopup(true)}>
              Discard
            </ButtonComponent>
            <ButtonComponent size="sm" varient="primary">
              Share to Story
            </ButtonComponent>
          </div>
        )}
        {file && (
          <div className="story-action">
            <ButtonComponent
              size="sm"
              varient="secondary"
              onClick={() => setPopup(true)}>
              Discard
            </ButtonComponent>
            <ButtonComponent size="sm" varient="primary">
              Share to Story
            </ButtonComponent>
          </div>
        )}
      </div>
    </>
  );
};

export default memo(CreateRightSidebar);
