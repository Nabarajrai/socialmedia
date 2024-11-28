/* eslint-disable react-hooks/exhaustive-deps */
import LayoutComponent from "../../layout/Layout.component";
import logo from "../../assets/1.png";
import ButtonComponent from "../../components/button/Button.component";
import { FaCamera, FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState, useCallback, useRef, useMemo, useContext } from "react";
import classnames from "classnames";
import CreatePostComponent from "../../components/createPost/CreatePost.component";
import PostsComponent from "../../components/posts/Posts.component";
import { AllDataContext } from "../../context";

const datas = [
  {
    id: 8.493956415926432,
    name: "Nabaraj Rai",
    time: "2024-09-09T12:42:53.780Z",
    url: "",
    cover: "https://i.pravatar.cc/100?img=26",
    description: "fsadfsd",
  },
  {
    id: 2.3664277828817903,
    name: "Nabaraj Rai",
    time: "2024-09-09T12:43:03.237Z",
    url: "",
    cover: "https://i.pravatar.cc/100?img=26",
    description: "fsaf",
  },
  {
    id: 2.8648861343801357,
    name: "Nabaraj Rai",
    time: "2024-09-09T12:43:10.797Z",
    url: "",
    cover: "https://i.pravatar.cc/100?img=26",
    description: "fsadf",
  },
];
const ProfilePage = () => {
  const [coverFile, setCoverFile] = useState(null);
  const [avatorFile, setAvatorFile] = useState(null);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const coverRef = useRef(null);
  const avatorRef = useRef(null);
  const [posts, setPosts] = useState(datas);
  const { currentUser } = useContext(AllDataContext);

  const handleCoverFile = useCallback((e) => {
    setCoverFile(e.target.files[0]);
  }, []);
  const handleAvator = useCallback((e) => {
    setAvatorFile(e.target.files[0]);
  }, []);

  const handleCover = useCallback(() => {
    coverRef.current.click();
  }, [coverRef]);

  const activeClassProfile = useMemo(() => {
    return active ? "active" : "";
  }, [active]);
  const handleAvatorFile = useCallback(() => {
    avatorRef.current.click();
  }, []);
  const profileClassName = classnames("choose-profile", activeClassProfile);
  console.log("currentUser", currentUser);
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
                <div
                  className="profile-logo"
                  onClick={() => setActive(!active)}>
                  {avatorFile ? (
                    <img src={URL.createObjectURL(avatorFile)} alt="img" />
                  ) : (
                    <img src={logo} alt="logo" width={100} height={100} />
                  )}
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
              <div className={profileClassName}>
                <div className="choose-top" onClick={handleAvatorFile}>
                  <div className="icon">
                    <FaCamera />
                  </div>
                  <div className="choose-title">Choose profile picture</div>
                </div>
                <div className="choose-bottom">
                  <input type="file" ref={avatorRef} onChange={handleAvator} />
                </div>
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
        <div className="main-content-profile">
          <div className="left-content">
            <div className="create-bio">
              <textarea name="bio" id="bio" />
              <div className="action">
                <ButtonComponent size="sm" varient="primary">
                  Add BIO
                </ButtonComponent>
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="create-post">
              <CreatePostComponent setPosts={setPosts} posts={posts} />
            </div>
            <div className="posts">
              {posts.map((data) => (
                <PostsComponent data={data} key={data.id} />
              ))}
            </div>
          </div>
        </div>
      </LayoutComponent>
    </div>
  );
};

export default ProfilePage;
