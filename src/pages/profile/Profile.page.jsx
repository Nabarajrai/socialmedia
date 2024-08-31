import LayoutComponent from "../../layout/Layout.component";
import logo from "../../assets/1.png";
import ButtonComponent from "../../components/button/Button.component";
import { FaCamera, FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState, useCallback, useRef } from "react";
import { IoCameraOutline } from "react-icons/io5";

const ProfilePage = () => {
  const [coverFile, setCoverFile] = useState(null);
  const navigate = useNavigate();
  const coverRef = useRef(null);
  const handleCoverFile = useCallback((e) => {
    setCoverFile(e.target.files[0]);
  }, []);
  const handleCover = useCallback(() => {
    coverRef.current.click();
  }, [coverRef]);
  console.log("coverFile", coverFile);
  return (
    <div className="profile-page">
      <LayoutComponent>
        <div className="page-avator">
          <div className="cover-section">
            <div className="cover">
              {coverFile && (
                <img src={URL.createObjectURL(coverFile)} alt="img" />
              )}
            </div>
            <div className="action">
              <ButtonComponent
                size="sm"
                varient="default"
                onClick={handleCover}>
                <div className="camera">
                  <FaCamera />
                </div>
                Add Cover Photo
              </ButtonComponent>
              <input type="file" onChange={handleCoverFile} ref={coverRef} />
            </div>
          </div>
          <div className="profile-section">
            <div className="profile-right-section">
              <div className="profile-right">
                <div className="profile-logo">
                  <img src={logo} alt="logo" width={100} height={100} />
                </div>
                <div className="user-details">
                  <div className="user-name">nabaraj Rai</div>
                  <div className="user-friends">24 friends</div>
                  <div className="friends-avator">
                    <div className="avator">
                      <img src={logo} alt="logo" width={100} height={100} />
                    </div>
                    <div className="avator">
                      <img src={logo} alt="logo" width={100} height={100} />
                    </div>
                    <div className="avator">
                      <img src={logo} alt="logo" width={100} height={100} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="choose-profile">
                <div className="choose-top">
                  <div className="icon">
                    <FaCamera />
                  </div>
                  <div className="choose-title">Choose profile picture</div>
                </div>
                <div className="choose-bottom"></div>
              </div>
            </div>

            <div className="profile-left">
              <div className="add-story">
                <ButtonComponent
                  size="sm"
                  varient="primary"
                  onClick={() => navigate("/story/create")}>
                  <div className="plus">
                    <FaPlus />
                  </div>
                  Add Story
                </ButtonComponent>
              </div>
              <div className="edit-profile">
                <ButtonComponent size="sm" varient="secondary">
                  <div className="edit">
                    <MdEdit />
                  </div>
                  Edit Profile
                </ButtonComponent>
              </div>
            </div>
          </div>
        </div>
      </LayoutComponent>
    </div>
  );
};

export default ProfilePage;
