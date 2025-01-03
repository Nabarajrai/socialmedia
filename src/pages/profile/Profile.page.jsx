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
import Spinner from "../../components/spinner/Spinner";
import ModalComponent from "../../components/modal/Modal.component";
import { MdDelete } from "react-icons/md";

const ProfilePage = () => {
  const [coverFile, setCoverFile] = useState(null);
  const [avatorFile, setAvatorFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [relationship, setRelationship] = useState(null);
  const [active, setActive] = useState(false);
  const [userProfiles, setUserProfiles] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalAvator, setModalAvator] = useState(null);
  const [modalCover, setModalCover] = useState(null);
  const [openAvatorEditModal, setOpenAvatorEditModal] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const coverRef = useRef(null);
  const refProfilePic = useRef(null);
  const avatorParentRef = useRef(null);
  const refCoverPic = useRef(null);
  const refModalProfile = useRef(null);
  const refAvatorEdit = useRef(null);
  const [posts, setPosts] = useState([]);
  const { currentUser } = useContext(AllDataContext);
  const location = useLocation();
  const currentUserCover = useMemo(() => {
    return currentUser?.data?.coverpic?.split("/").pop();
  }, [currentUser?.data?.coverpic]);

  const currentuserAvator = useMemo(() => {
    return currentUser?.data?.profilePic?.split("/").pop();
  }, []);

  const userId = useMemo(() => {
    return location.pathname.split(".").splice(2, 1).join("");
  }, [location.pathname]);

  const handleModalEditProfile = useCallback(() => {
    setOpenModal(!openModal);
  }, []);

  const handleModalCloseButton = useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleCoverFile = useCallback((e) => {
    setCoverFile(e.target.files[0]);
  }, []);

  const handleCover = useCallback(() => {
    coverRef.current.click();
  }, [coverRef]);

  const activeClassProfile = useMemo(() => {
    return active ? "active" : "";
  }, [active]);

  const handleAvatorFile = useCallback(() => {
    setOpenAvatorEditModal(!openAvatorEditModal);
  }, [openAvatorEditModal]);

  const handleCloseOutsideAvator = useCallback(
    (event) => {
      if (active) {
        if (
          avatorParentRef.current &&
          !avatorParentRef.current.contains(event.target) &&
          !refProfilePic.current.contains(event.target)
        ) {
          setActive(false);
        }
      }
    },
    [active]
  );

  const profileClassName = useMemo(() => {
    return classnames("choose-profile", activeClassProfile);
  }, [active]);

  const getUserDetials = useCallback(async () => {
    setLoading(true); //intialize loading
    try {
      const res = await api(`${APIS.getUser}/${userId}`);
      if (res.status === 200) {
        setUserProfiles(res?.data);
      } else {
        console.log("res", res);
      }
    } catch (e) {
      console.log("e", e);
    } finally {
      setLoading(false); //clear loading
    }
  }, [userId]);

  const getRelationshipsData = useCallback(async () => {
    try {
      const res = await api(
        `${APIS.getRelationship}?followerId=${currentUser?.data?.id}`
      );
      if (res.status === 200) {
        setRelationship(res?.data);
      } else {
        console.log("relationship data", res);
      }
    } catch (e) {
      console.log("e", e);
    }
  }, [currentUser]);

  const addRelationships = useCallback(async () => {
    try {
      const res = await api(
        `${APIS.addRelationship}?followedId=${userId}`,
        "POST"
      );
      if (res.status === 200) {
        console.log("res", res);
        getRelationshipsData(currentUser?.data?.id);
      } else {
        console.log("res", res);
      }
    } catch (e) {
      console.log("e", e);
    }
  }, []);

  const removeRelationships = useCallback(async () => {
    try {
      const res = await api(
        `${APIS.deleteRelationship}?followedId=${userId}`,
        "DELETE"
      );
      if (res.status === 200) {
        console.log("res", res);
        getRelationshipsData(currentUser?.data?.id);
      } else {
        console.log("res", res);
      }
    } catch (e) {
      console.log("e", e);
    }
  }, []);

  const getUserPosts = useCallback(async () => {
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
  }, [userId]);

  const handleUploadsAvator = useCallback(async () => {
    const formdata = new FormData();
    formdata.append("img", modalAvator);
    if (!modalAvator) return;
    try {
      const res = await api(APIS.upload, "POST", formdata, { file: true });
      return res.data;
    } catch (e) {
      console.log("e", e);
    }
  }, [modalAvator]);

  const handleRemoveAvator = useCallback(
    async (fileName) => {
      const body = {
        filePath: fileName,
      };
      console.log("body", body);
      if (!fileName) return;
      try {
        const res = await api(APIS.deleteFiles, "DELETE", body);
        console.log("res", res);
      } catch (e) {
        console.log("e", e);
      }
    },
    [modalAvator]
  );

  const handleUploadsCover = useCallback(
    async (data) => {
      const formdata = new FormData();
      formdata.append("img", data);
      if (!data) return;
      try {
        const res = await api(APIS.upload, "POST", formdata, { file: true });
        return res.data;
      } catch (e) {
        console.log("e", e);
      }
    },
    [modalCover]
  );

  const handleRemoveCover = useCallback(
    async (fileName) => {
      const body = {
        filePath: fileName,
      };
      if (!fileName) return;
      try {
        const res = await api(APIS.deleteFiles, "DELETE", body);
        console.log("res", res);
      } catch (e) {
        console.log("e", e);
      }
    },
    [modalAvator]
  );

  const handleActive = useCallback(() => {
    setActive(!active);
  }, [active]);

  const handleChangeModalAvator = useCallback((e) => {
    setModalAvator(e.target.files[0]);
  }, []);

  const handleFileClick = useCallback(() => {
    refCoverPic.current.click();
  }, []);

  const handleModalProfile = useCallback((e) => {
    setModalCover(e.target.files[0]);
  }, []);

  const handleClickModalCover = useCallback(() => {
    refModalProfile.current.click();
  }, []);

  const handleChangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleSubmitUserDetails = useCallback(async () => {
    const avatorLink = await handleUploadsAvator();
    const coverpicLink = await handleUploadsCover(modalCover);
    const body = {
      username: name,
      coverpic: coverpicLink ?? userProfiles?.coverpic,
      profilePic: avatorLink ?? userProfiles?.profilePic,
    };
    try {
      const res = await api(APIS.updateUser, "PUT", body);
      if (res.status === 200) {
        getUserDetials();
        getUserPosts();
        getRelationshipsData();
        handleModalCloseButton();
        setModalAvator(null);
        setModalCover(null);
        console.log("res", res);
      } else {
        if (!avatorLink) return;
        await handleRemoveAvator(avatorLink?.split("/").pop());
        if (!coverpicLink) return;
        await handleRemoveCover(coverpicLink?.split("/").pop());
        console.log("res", res);
      }
    } catch (e) {
      if (!avatorLink) return;
      await handleRemoveAvator(avatorLink?.split("/").pop());
      if (!coverpicLink) return;
      await handleRemoveCover(coverpicLink?.split("/").pop());
      console.log("e", e);
    }
  }, [userProfiles, name, modalAvator, modalCover]);

  const handleDeleteAvator = useCallback(() => {
    setModalAvator(null);
  }, []);

  const handleDeleteCover = useCallback(() => {
    setModalCover(null);
  }, []);

  const handleCloseAvatorModalEdit = useCallback(() => {
    setOpenAvatorEditModal(false);
  }, []);

  const handleSubmitUserCover = useCallback(
    async (userId) => {
      const coverpicLink = await handleUploadsCover(coverFile);
      const body = {
        coverpic: coverpicLink,
      };
      if (!coverFile) return;
      try {
        const res = await api(`${APIS.updateCover}/${userId}`, "PATCH", body);
        if (res.status === 200) {
          await handleRemoveCover(currentUserCover);
          setCoverFile(null);
          getUserDetials();
          console.log("res", res);
        } else {
          await handleRemoveCover(coverpicLink?.split("/").pop());
          console.log("res", res);
        }
      } catch (e) {
        await handleRemoveCover(coverpicLink?.split("/").pop());
        console.log("e", e);
      }
    },
    [coverFile, currentUserCover, handleUploadsCover]
  );

  const handleSubmitEditAvator = useCallback(async () => {
    const avatorLink = await handleUploadsCover(avatorFile);
    const body = {
      profilePic: avatorLink,
    };
    if (!avatorFile) return;
    try {
      const res = await api(`${APIS.updateCover}/${userId}`, "PATCH", body);
      if (res.status === 200) {
        await handleRemoveAvator(currentuserAvator);
        setCoverFile(null);
        getUserDetials();
        setOpenAvatorEditModal(false);
        console.log("res", res);
      } else {
        await handleRemoveAvator(currentuserAvator);
        console.log("res", res);
      }
    } catch (e) {
      await handleRemoveAvator(currentuserAvator);
      console.log("e", e);
    }
  }, [avatorFile, userId, currentUserCover, handleUploadsCover]);

  const handleAvatorChangeFile = useCallback((event) => {
    setAvatorFile(event.target.files[0]);
  }, []);

  const handleAvatorEdit = useCallback(() => {
    refAvatorEdit.current.click();
  }, []);

  const handleDeleteEditAvator = useCallback(() => {
    setAvatorFile(null);
  }, []);

  useEffect(() => {
    if (active) {
      document.addEventListener("mousedown", handleCloseOutsideAvator);
      return () => {
        document.removeEventListener("mousedown", handleCloseOutsideAvator);
      };
    }
  }, [active, handleCloseOutsideAvator]);

  useEffect(() => {
    getUserDetials();
    getUserPosts();
  }, [userId]);

  useEffect(() => {
    getRelationshipsData();
  }, [currentUser]);

  useEffect(() => {
    setName(userProfiles?.username);
  }, [userProfiles.username]);

  useEffect(() => {
    if (avatorFile) {
      setActive(false);
    }
  }, [avatorFile]);

  return (
    <>
      <ModalComponent
        active={openAvatorEditModal}
        setActive={setOpenAvatorEditModal}>
        <div className="avator-edit">
          <div className="avator-edit__title">Avator</div>
          <div className="avator-edit__img">
            {avatorFile ? (
              <div className="avator-edit__img--avator">
                <img
                  src={URL.createObjectURL(avatorFile)}
                  onClick={handleAvatorEdit}
                />
                <div className="icon" onClick={handleDeleteEditAvator}>
                  <MdDelete />
                </div>
              </div>
            ) : (
              userProfiles?.profilePic && (
                <img
                  src={userProfiles?.profilePic}
                  alt="profile"
                  onClick={handleAvatorEdit}
                />
              )
            )}
          </div>
          <div className="avator-edit__file">
            <input
              type="file"
              onChange={handleAvatorChangeFile}
              ref={refAvatorEdit}
            />
          </div>
          <div className="avator-edit-action">
            <div className="avator-edit-action__cancel">
              <ButtonComponent
                size="sm"
                varient="danger"
                onClick={handleCloseAvatorModalEdit}>
                Cancel
              </ButtonComponent>
            </div>
            <div className="avator-edit-action__submit">
              <ButtonComponent
                size="sm"
                varient="primary"
                onClick={handleSubmitEditAvator}>
                Submit
              </ButtonComponent>
            </div>
          </div>
        </div>
      </ModalComponent>
      <ModalComponent active={openModal} setActive={setOpenModal}>
        <div className="edit-profile-container">
          <div className="edit-profile-avator">
            <div className="edit-profile-avator__title">Avator</div>
            <div className="edit-profile-avator__img">
              {modalAvator ? (
                <div className="edit-profile-avator__img--section">
                  <img
                    src={URL.createObjectURL(modalAvator)}
                    onClick={handleFileClick}
                  />
                  <div className="icon" onClick={handleDeleteAvator}>
                    <MdDelete />
                  </div>
                </div>
              ) : (
                userProfiles?.profilePic && (
                  <img
                    src={userProfiles?.profilePic}
                    alt="profile"
                    onClick={handleFileClick}
                  />
                )
              )}

              <div className="edit-profile-avator__img--input">
                <input
                  type="file"
                  ref={refCoverPic}
                  onChange={handleChangeModalAvator}
                />
              </div>
            </div>
          </div>
          <div className="edit-profile-coverpic">
            <div className="edit-profile-coverpic__title">Cover Photo</div>
            <div className="edit-profile-coverpic__img">
              {modalCover ? (
                <div className="edit-profile-coverpic__img--section">
                  <img
                    src={URL.createObjectURL(modalCover)}
                    onClick={handleClickModalCover}
                  />
                  <div className="icon" onClick={handleDeleteCover}>
                    <MdDelete />
                  </div>
                </div>
              ) : (
                userProfiles?.coverpic && (
                  <img
                    src={userProfiles?.coverpic}
                    alt="cover picture"
                    onClick={handleClickModalCover}
                  />
                )
              )}

              <input
                type="file"
                onChange={handleModalProfile}
                ref={refModalProfile}
                className="edit-profile-coverpic__img--input"
              />
            </div>
          </div>
          <div className="edit-profile-name">
            <div className="edit-profile-name__title">User Name</div>
            <div className="edit-profile-name__input">
              <input
                type="text"
                value={name ?? ""}
                onChange={handleChangeName}
              />
            </div>
          </div>
          <div className="edit-profile-action">
            <div className="edit-profile-action__cancel">
              <ButtonComponent
                size="sm"
                varient="danger"
                onClick={handleModalCloseButton}>
                Cancel
              </ButtonComponent>
            </div>
            <div className="edit-profile-action__submit">
              <ButtonComponent
                size="sm"
                varient="primary"
                onClick={handleSubmitUserDetails}>
                Submit
              </ButtonComponent>
            </div>
          </div>
        </div>
      </ModalComponent>
      <div className="profile-page">
        {loading ? (
          <Spinner />
        ) : (
          <LayoutComponent>
            <div className="page-avator">
              <div className="cover-section">
                <div className="cover">
                  {coverFile ? (
                    <>
                      <img src={URL.createObjectURL(coverFile)} alt="img" />
                      <div className="cover-save">
                        <ButtonComponent
                          size="sm"
                          varient="primary"
                          onClick={() =>
                            handleSubmitUserCover(currentUser?.data?.id)
                          }>
                          Save
                        </ButtonComponent>
                      </div>
                    </>
                  ) : (
                    <img src={userProfiles?.coverpic} alt="img" />
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
                  <input
                    type="file"
                    onChange={handleCoverFile}
                    ref={coverRef}
                  />
                </div>
              </div>
              <div className="profile-section">
                <div className="profile-right-section">
                  <div className="profile-right">
                    <div
                      className="profile-logo"
                      onClick={handleActive}
                      ref={refProfilePic}>
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
                  <div
                    className={profileClassName}
                    ref={avatorParentRef}
                    onClick={handleAvatorFile}>
                    <div className="choose-top">
                      <div className="icon">
                        <FaCamera />
                      </div>
                      <div className="choose-title">Choose profile picture</div>
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
                      <div
                        className="edit-profile"
                        onClick={handleModalEditProfile}>
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
                        relationship.includes(userProfiles?.id) ? (
                          <ButtonComponent
                            size="sm"
                            varient="secondary"
                            onClick={() =>
                              removeRelationships(userProfiles?.id)
                            }>
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
                {currentUser?.data?.id === userProfiles?.id && (
                  <div className="create-post">
                    <CreatePostComponent setPosts={setPosts} posts={posts} />
                  </div>
                )}

                <div className="posts">
                  {userPosts.map((data) => (
                    <PostsComponent data={data} key={data.id} />
                  ))}
                </div>
              </div>
            </div>
          </LayoutComponent>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
