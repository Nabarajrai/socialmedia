/* eslint-disable react/prop-types */
import { useCallback, useRef, useContext, useMemo } from "react";
import logo from "../../assets/avator.jpeg";
import vedio from "../../assets/video.png";
import picture from "../../assets/picture.png";
import smile from "../../assets/smile.png";
import ModalComponent from "../modal/Modal.component";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import ButtonComponent from "../button/Button.component";
import { api, APIS } from "../../config/Api.config";
import { AllDataContext } from "../../context";

const CreatePostComponent = ({ fetchPosts }) => {
  const [file, setFile] = useState(null);
  const [popup, setPopup] = useState(false);
  const [des, setDes] = useState("");
  const ref = useRef(null);

  const { currentUser } = useContext(AllDataContext);

  const userAvator = useMemo(() => {
    return currentUser?.data?.profilePic;
  }, [currentUser]);

  const handleFile = () => {
    ref.current.click();
  };

  const handleUploads = useCallback(async () => {
    const formData = new FormData();
    formData.append("img", file);
    if (!file) return;
    try {
      const res = await api(APIS.upload, "POST", formData, { file: true });
      return res.data;
    } catch (e) {
      console.log("e", e);
    }
  }, [file]);

  const handlePost = async () => {
    const imgUrl = await handleUploads();
    const body = {
      desc: des,
      img: imgUrl || "",
    };

    try {
      const res = await api(APIS.add_post, "POST", body);
      if (res.status === 200) {
        fetchPosts();
      }
    } catch (error) {
      console.log("Error creating post:", error);
    }

    setPopup(false);
    setFile(null);
    setDes("");
  };
  const handlePhoto = useCallback((e) => {
    setFile(e.target.files[0]);
    ref.current.value = "";
  }, []);
  return (
    <>
      <ModalComponent active={popup} setActive={setPopup}>
        <div className="create-modal">
          <h2>Create Post</h2>
          <div className="create-modal-cotent">
            <div className="top">
              <div className="avator">
                <img src={logo} alt="avator" />
              </div>
              <div className="description">
                <div className="name">Nabaraj Rai </div>
                <div className="friends">Friends</div>
              </div>
            </div>
            <div className="modal-scroll">
              <div className="text-area">
                <textarea
                  name="text"
                  id="text"
                  height="auto"
                  value={des}
                  onChange={(e) => setDes(e.target.value)}
                  placeholder="What's on your mind, Nabaraj?"></textarea>
              </div>
              {file && (
                <div className="preview-post">
                  <div
                    className="preview-post__icon"
                    onClick={() => setFile(null)}>
                    <MdOutlineDelete />
                  </div>
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Selected img"
                    className="upload-photo"
                  />
                </div>
              )}
            </div>
            <div className="media">
              <div className="upload">Upload from here !</div>
              <div className="icon">
                <button onClick={() => handleFile()}>
                  <img src={picture} alt="logo" />
                </button>
                <input
                  ref={ref}
                  type="file"
                  onChange={handlePhoto}
                  style={{ display: "none" }}
                />
              </div>
              <div className="icon">
                <img src={smile} alt="logo" />
              </div>
            </div>
            <div className="create-btn" onClick={handlePost}>
              <ButtonComponent
                file={file}
                des={des}
                varient="primary"
                size="sm">
                Post
              </ButtonComponent>
            </div>
          </div>
        </div>
      </ModalComponent>
      <div className="newPost-container">
        <div className="newpost-top">
          <div className="newpost-img">
            <img src={userAvator} alt="logo" />
          </div>
          <div className="newpost-input " onClick={() => setPopup(true)}>
            <div className="newpost-input__container">
              <span className="span">What&apos;s on your mind,Nabaraj?</span>
            </div>
          </div>
        </div>
        <div className="newpost-bottom">
          <div className="newpost-bottom__vedio" onClick={() => setPopup(true)}>
            <div className="newpost-bottom__vedio--icon">
              <img src={vedio} alt="vedio" />
            </div>
            <div className="newpost-bottom__vedio--title">Video</div>
          </div>
          <div className="newpost-bottom__photo" onClick={() => setPopup(true)}>
            <div className="newpost-bottom__photo--icon">
              <img src={picture} alt="photo" />
            </div>
            <div className="newpost-bottom__photo--title">Photos</div>
          </div>
          <div
            className="newpost-bottom__feelings"
            onClick={() => setPopup(true)}>
            <div className="newpost-bottom__feelings--icon">
              <img src={smile} alt="feelings" />
            </div>
            <div className="newpost-bottom__feelings--title">Feelings</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePostComponent;
