/* eslint-disable react-refresh/only-export-components */
import { useCallback, useState } from "react";
import CreateRightSidebar from "../../components/createRightSidebar/CreateRightSidebar";
import LeftSideBar from "../../components/leftRighSidebar/LeftSideBar";
import { memo } from "react";
const StoryPage = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("simple");
  const [bgColors, setBgColors] = useState(1);
  const [file, setFile] = useState(null);
  const [openText, setOpenText] = useState(false);
  const [text, setText] = useState("");
  const handleFile = useCallback((newFile) => {
    setFile(newFile);
  }, []);
  const handleTextOpen = useCallback(() => {
    setOpenText(true);
  }, [setOpenText]);
  const handleText = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );
  const handleBgColor = useCallback(
    (numberType) => {
      setBgColors(numberType);
    },
    [setBgColors]
  );
  const handleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  });
  const handleOptions = useCallback(
    (option) => {
      handleOpen();
      setType(option);
    },
    [handleOpen, setType]
  );
  return (
    <div className="story-create">
      <div className="story-wrapper">
        <div className="story-wrapper__right">
          <CreateRightSidebar
            file={file}
            openText={openText}
            text={text}
            handleText={handleText}
            bgColors={bgColors}
            handleBgColor={handleBgColor}
            handleOpen={handleOpen}
            handleOptions={handleOptions}
            open={open}
            type={type}
          />
        </div>
        <div className="story-wrapper__left">
          <LeftSideBar
            file={file}
            handleFile={handleFile}
            openText={openText}
            handleTextOpen={handleTextOpen}
            text={text}
            bgColorsNumber={bgColors}
            type={type}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(StoryPage);
