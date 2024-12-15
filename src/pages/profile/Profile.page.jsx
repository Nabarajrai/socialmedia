/* eslint-disable react-hooks/exhaustive-deps */
import LayoutComponent from "../../layout/Layout.component";
import logo from "../../assets/1.png";
import ButtonComponent from "../../components/button/Button.component";
import { FaCamera, FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import { SlUserFollow } from "react-icons/sl";
import { useNavigate, useLocation } from "react-router-dom";
import {
  useState,
  useCallback,
  useRef,
  useMemo,
  useContext,
  useEffect,
} from "react";
import classnames from "classnames";
import CreatePostComponent from "../../components/createPost/CreatePost.component";
import PostsComponent from "../../components/posts/Posts.component";
import { AllDataContext } from "../../context";
import { api, APIS } from "../../config/Api.config";

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
  const [relationship, setRelationship] = useState(null);
  const [active, setActive] = useState(false);
  const [userProfiles, setUserProfiles] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const navigate = useNavigate();
  const coverRef = useRef(null);
  const avatorRef = useRef(null);
  const [posts, setPosts] = useState(datas);
  const { currentUser } = useContext(AllDataContext);
  const location = useLocation();

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

  const getUserDetials = async (userId) => {
    try {
      const res = await api(`${APIS.getUser}/${userId}`);
      if (res.status === 200) {
        setUserProfiles(res?.data);
      } else {
        console.log("res", res);
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  const getRelationshipsData = async (userId) => {
    try {
      const res = await api(`${APIS.getRelationship}?followedId=${userId}`);
      if (res.status === 200) {
        setRelationship(res?.data);
      } else {
        console.log("relationship data", res);
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  const addRelationships = async (userId) => {
    try {
      const res = await api(
        `${APIS.addRelationship}?followedId=${userId}`,
        "POST"
      );
      if (res.status === 200) {
        console.log("res", res);
        getRelationshipsData(
          location.pathname.split(".").splice(2, 1).join("")
        );
      } else {
        console.log("res", res);
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  const removeRelationships = async (userId) => {
    try {
      const res = await api(
        `${APIS.deleteRelationship}?followedId=${userId}`,
        "DELETE"
      );
      if (res.status === 200) {
        console.log("res", res);
        getRelationshipsData(
          location.pathname.split(".").splice(2, 1).join("")
        );
      } else {
        console.log("res", res);
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  const getUserPosts = async (userId) => {
    try {
      const res = await api(`${APIS.getUserPosts}/${userId}`);
      if (res.status === 200) {
        setUserPosts(res?.data);
      } else {
        console.log("res", res);
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  console.log(relationship);

  useEffect(() => {
    getUserDetials(location.pathname.split(".").splice(2, 1).join(""));
    getRelationshipsData(location.pathname.split(".").splice(2, 1).join(""));
    getUserPosts(location.pathname.split(".").splice(2, 1).join(""));
  }, [location.pathname]);
  return (
    <div className="profile-page">
      <LayoutComponent>
        <div className="page-avator">
          <div className="cover-section">
            <div className="cover">
              <img src={userProfiles.coverpic} alt="img" />
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
                  <img
                    src={userProfiles.profilePic}
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="user-details">
                  <div className="user-name">{userProfiles?.username}</div>
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
              {userProfiles?.id === currentUser?.data.id ? (
                <>
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
                </>
              ) : (
                <div className="add-action">
                  <div className="add-action__message">
                    <ButtonComponent size="sm" varient="primary">
                      <div className="sms-icon">
                        <FiMessageCircle />
                      </div>
                      Message
                    </ButtonComponent>
                  </div>
                  <div className="add-action__follow">
                    {relationship &&
                    relationship.includes(currentUser?.data?.id) ? (
                      <ButtonComponent
                        size="sm"
                        varient="secondary"
                        onClick={() => removeRelationships(userProfiles?.id)}>
                        <div className="follow-icon">
                          <SlUserFollow />
                        </div>
                        Unfollow
                      </ButtonComponent>
                    ) : (
                      <ButtonComponent
                        size="sm"
                        varient="secondary"
                        onClick={() => addRelationships(userProfiles?.id)}>
                        <div className="follow-icon">
                          <SlUserFollow />
                        </div>
                        Followed
                      </ButtonComponent>
                    )}
                    {/* <ButtonComponent size="sm" varient="secondary">
                      <div className="follow-icon">
                        <SlUserFollow />
                      </div>
                      Follow
                    </ButtonComponent> */}
                  </div>
                </div>
              )}
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
              {userPosts.map((data) => (
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
