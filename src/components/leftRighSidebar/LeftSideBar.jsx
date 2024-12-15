/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { memo, useCallback, useRef, useState, useEffect } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoApps } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from "../../assets/logo.jpg";
import ColorThief from "colorthief";

const LeftSideBar = ({
  file,
  handleFile,
  openText,
  handleTextOpen,
  text,
  bgColorsNumber,
  type,
}) => {
  const [bgColor, setBgColor] = useState("green");
  const [showNumber, setShowNumber] = useState(30);
  const [show, setShow] = useState(false);
  const ref = useRef();
  const imgRef = useRef(null);
  const heightRef = useRef(null);
  const contentRef = useRef(null);

  const handlePhoto = useCallback(() => {
    ref.current.click();
  }, [ref]);
  const handleFiles = useCallback(
    (e) => {
      handleFile(e.target.files[0]);
    },
    [handleFile]
  );

  const handleImageLoad = useCallback(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0 && img.naturalHeight > 0) {
      const colorThief = new ColorThief();
      const dominantColor = colorThief.getColor(img);
      setBgColor(
        `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`
      );
    }
  }, []);

  const handleShowMore = useCallback(() => {
    setShowNumber(text?.split("  ").length);
    setShow(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setShowNumber]);
  const handleShowLess = useCallback(() => {
    setShowNumber(30);
    setShow(false);
  }, [setShowNumber]);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      img.addEventListener("load", handleImageLoad);
      if (img.complete) {
        handleImageLoad();
      }
    }
    return () => {
      if (img) {
        img.removeEventListener("load", handleImageLoad);
      }
    };
  }, [handleImageLoad, file]);

  return (
    <div className="left-story">
      <div className="header">
        <div className="header_icon">
          <IoApps />
        </div>
        <div className="header_notification">
          <IoIosNotificationsOutline />
        </div>
        <div className="header_avator">
          <div className="header_avator__profile">
            <img src={logo} alt="logo" />
          </div>
          <div className="header_avator__title">Nabaraj</div>
        </div>
      </div>
      {openText && (
        <div className="preview-container">
          <div className="story_preview">
            <span>Preview</span>
            <div className="preview-section">
              <div
                className={`preview-img bgcolor-${bgColorsNumber}`}
                style={{ border: "none" }}>
                <div className="preview-img__section" ref={heightRef}>
                  <p className={type} ref={contentRef}>
                    {text
                      ? showNumber === 30
                        ? text.split(" ").slice(0, 30).join(" ") + "..."
                        : text
                            .split(" ")
                            .slice(0, text.split(" ").length)
                            .join("  ")
                      : "Start typing..."}
                  </p>
                </div>
                {text.length > showNumber && (
                  <>
                    {show ? (
                      <h2 className="seeContent" onClick={handleShowLess}>
                        See less
                      </h2>
                    ) : (
                      <h2 className="seeContent" onClick={handleShowMore}>
                        See more
                      </h2>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {file ? (
        <div className="preview-container">
          <div className="story_preview">
            <span>Preview</span>
            <div className="preview-section">
              <div className="preview-img" style={{ backgroundColor: bgColor }}>
                <div className="blur-background"></div>
                <div className="preview-img__section">
                  <img src={URL.createObjectURL(file)} alt="" ref={imgRef} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="create-story-sections">
          <div className="create-story-section" onClick={handlePhoto}>
            <div className="card">
              <MdAddPhotoAlternate />
            </div>
            <div className="title">Create a photo story</div>
            <input type="file" ref={ref} onChange={handleFiles} />
          </div>
          <div className="create-story-section-text" onClick={handleTextOpen}>
            <div className="card">Aa</div>
            <div className="title">Create a text story</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(LeftSideBar);
