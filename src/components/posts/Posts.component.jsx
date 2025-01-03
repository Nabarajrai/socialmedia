/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import avator from "../../assets/avator.jpeg";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { ImCopy } from "react-icons/im";
import { IoIosShareAlt } from "react-icons/io";
import { useState, useEffect, useCallback, useMemo } from "react";
import { BiSolidLike } from "react-icons/bi";
import moment from "moment";
import PostModalComponent from "../postModal/PostModalComponent";
import { IoSendSharp } from "react-icons/io5";
import { api, APIS } from "../../config/Api.config";
import { useContext } from "react";
import { AllDataContext } from "../../context";
import { useNavigate, useLocation } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import classnames from "classnames";
import { useRef, memo } from "react";

// eslint-disable-next-line no-unused-vars
const PostsComponent = ({ data }) => {
  const [comment, setComment] = useState("");
  const [newComment, setNewComment] = useState([]);
  const [popup, setPopup] = useState(false);
  const [like, setLike] = useState([]);
  const { id, username, time, img, desc, userId, profilePic } = data;
  const [timeAgo, setTimeAgo] = useState(moment(time).fromNow());
  const { currentUser } = useContext(AllDataContext);
  const [relationship, setRelationship] = useState([]);
  const [visible, setVisible] = useState(false);
  const editRef = useRef(null);
  const listEditRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const toggleClassName = visible ? "block" : "none";
  const combineClassName = useMemo(() => {
    return classnames("post-header-action__app--modal", toggleClassName);
  }, [toggleClassName]);
  const handleCloseOutside = useCallback(
    (event) => {
      if (visible) {
        if (
          editRef.current &&
          !editRef.current.contains(event.target) &&
          !listEditRef.current.contains(event.target)
        ) {
          setVisible(false);
        }
      }
    },
    [visible]
  );

  const handleToggleClassName = useCallback(() => {
    setVisible(!visible);
  }, [visible]);
  const followingStatus = relationship?.includes(userId)
    ? "Following"
    : "Follow";
  const relationShipStatus =
    currentUser?.data?.id === userId ? "" : followingStatus;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(moment(time).fromNow());
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  const handleLike = async (postId) => {
    try {
      const hasUser = like.some(
        (obj) => obj.likeUserId === currentUser.data.id
      );
      if (hasUser) {
        const res = await api(
          `${APIS.deleteLike}?likeUserId=${currentUser.data.id}`,
          "DELETE"
        );
        console.log("delete likes", res);
      } else {
        const body = {
          likeUserId: currentUser.data.id,
        };
        const res = await api(
          `${APIS.addLike}?likePostId=${postId}`,
          "POST",
          body
        );
        console.log("add likes", res);
      }
      getLikes(postId);
    } catch (e) {
      console.log("e", e);
    }
  };
  const handleComment = async (postId) => {
    try {
      const body = {
        desc: comment,
        commentUserId: currentUser.data.id,
        postId: postId,
      };
      const res = await api(APIS.addComment, "POST", body);
      if (res.status === 200) {
        getComments(postId);
        console.log("res", res);
      } else {
        console.log(res);
      }
      setComment("");
    } catch (e) {
      console.log("e", e);
    }
  };
  const getComments = async (postId) => {
    try {
      const res = await api(`${APIS.comment}?postId=${postId}`);
      if (res.status === 200) {
        setNewComment(res.data);
      } else {
        console.log("res", res);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getLikes = async (postId) => {
    try {
      const res = await api(`${APIS.like}?likePostId=${postId}`);
      if (res.status === 200) {
        setLike(res.data);
      } else {
        console.log("res", res);
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  const navigateToProfile = useCallback(
    (userName, id) => {
      const userNameId = `${userName} ${id}`;
      const userRouteId = location.pathname.split(".").pop();
      if (id !== Number(userRouteId)) {
        navigate(userNameId.split(" ").join(".").toLowerCase());
      }
    },
    [navigate, location.pathname]
  );
  const getRelationshipsData = async (userId) => {
    try {
      const res = await api(`${APIS.getRelationship}?followerId=${userId}`);
      if (res.status === 200) {
        setRelationship(res?.data);
      } else {
        console.log("relationship data", res);
      }
    } catch (e) {
      console.log("e", e);
    }
  };
  const handleDeleteFile = useCallback(async (imgName) => {
    const body = {
      filePath: imgName,
    };
    if (!imgName) return;
    try {
      const res = await api(APIS.deleteFiles, "DELETE", body);
      console.log("delete file", res);
    } catch (e) {
      console.log(e);
    }
  }, []);
  const handleDeletePost = useCallback(
    async (postId, imgPath) => {
      try {
        const res = await api(`${APIS.deletePost}/${postId}`, "DELETE");
        if (res.status === 200) {
          handleDeleteFile(imgPath.split("/").pop());
          console.log("delete post", imgPath.split("/").pop());
        }
      } catch (e) {
        console.log("e", e);
      }
    },
    [handleDeleteFile]
  );

  useEffect(() => {
    getComments(id);
    getLikes(id);
  }, [id]);

  useEffect(() => {
    getRelationshipsData(currentUser?.data?.id);
  }, [currentUser]);
  useEffect(() => {
    document.addEventListener("mousedown", handleCloseOutside);
    return () => {
      document.removeEventListener("mousedown", handleCloseOutside);
    };
  }, [handleCloseOutside]);
  return (
    <>
      <PostModalComponent active={popup} setActive={setPopup}>
        <div className="post-container" key={id}>
          <div className="post-header">
            <div className="post-header-avator">
              <img src={profilePic} alt="avator" />
            </div>
            <div className="post-header-description">
              <div className="post-header-description__title">
                {username}
                <span>{relationShipStatus}</span>
              </div>
              <div className="post-header-description__time">{timeAgo}</div>
            </div>
            <div className="post-header-action">
              <div className="post-header-action__app">
                <BsThreeDots />
              </div>
              {currentUser?.data?.id === userId && (
                <div className="post-header-action__delete">
                  <MdOutlineDelete />
                </div>
              )}
            </div>
          </div>
          {desc && (
            <div className="post-description">
              <p>{desc}</p>
            </div>
          )}

          {img && (
            <div className="post-image">
              <img src={img || avator} alt="avator" />
            </div>
          )}
          <div className="post-footer">
            <div className="post-footer-top">
              <div className="post-footer-top__like">
                <span>{like ? like.length : "No"} Likes</span>
              </div>
              <div className="post-footer-top__right">
                <div
                  className="post-footer-top__right--comment"
                  onClick={() => setPopup(true)}>
                  <span>{newComment?.length} Comments</span>{" "}
                </div>
                <div className="post-footer-top__right--share">
                  <span>10 shares</span>
                </div>
              </div>
            </div>
            <div className="post-footer-bottom">
              <div
                className="post-footer-bottom-like"
                onClick={() => handleLike(id)}>
                <div className="post-footer-bottom-like__icon">
                  {like ? <BiSolidLike /> : <BiLike />}
                </div>
                <div className="post-footer-bottom-like__like">Like</div>
              </div>
              <div className="post-footer-bottom-comment">
                <div className="post-footer-bottom-comment__icon">
                  <FaRegComment />
                </div>
                <div className="post-footer-bottom-comment__title">Comment</div>
              </div>
              <div className="post-footer-bottom-copy">
                <div className="post-footer-bottom-copy__icon">
                  <ImCopy />
                </div>
                <div className="post-footer-bottom-copy__title">Copy</div>
              </div>
              <div className="post-footer-bottom-share">
                <div className="post-footer-bottom-share__icon">
                  <IoIosShareAlt />
                </div>
                <div className="post-footer-bottom-shre__title">Share</div>
              </div>
            </div>
            <div className="modal-reply">
              {newComment.map((data) => {
                return (
                  <div key={data.id}>
                    <div className="modal-reply-section" key={data.id}>
                      <div className="modal-reply-section__img">
                        <img src={avator} alt="avator" />
                      </div>
                      <div className="modal-reply-section__des">
                        <span>{data.username}</span>
                        <p>{data.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <div className="modal-reply-section">
                <div className="modal-reply-section__img">
                  <img src={avator} alt="avator" />
                </div>
                <div className="modal-reply-section__des">
                  <span>Nabaraj Rai</span>
                  <p>looking nic sf asd fdsaf sadfe</p>
                </div>
              </div>
              <div className="modal-reply-section">
                <div className="modal-reply-section__img">
                  <img src={avator} alt="avator" />
                </div>
                <div className="modal-reply-section__des">
                  <span>Nabaraj Rai</span>
                  <p>looking nic sf asd fdsaf sadfe</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="post-modal-footer">
          <div className="comment-area">
            <div className="comment-area__img">
              <img src={avator} alt="" />
            </div>
            <div className="comment-area-text">
              <div className="comment-area-text__des">
                <textarea
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                />
              </div>
              <div
                className="comment-area-text__icon"
                onClick={() => handleComment(id)}>
                <IoSendSharp />
              </div>
            </div>
          </div>
        </div>
      </PostModalComponent>
      <div className="post-container" key={id}>
        <div className="post-header">
          <div
            className="post-top"
            onClick={() => navigateToProfile(username, userId)}>
            <div className="post-header-avator">
              <img src={profilePic} alt="avator" />
            </div>
            <div className="post-header-description">
              <div className="post-header-description__title">
                {username}
                <span>{relationShipStatus}</span>
              </div>
              <div className="post-header-description__time">{timeAgo}</div>
            </div>
          </div>

          <div className="post-header-action">
            <div className="post-header-action__app">
              <div
                className="post-header-action__app--icon"
                onClick={handleToggleClassName}
                ref={editRef}>
                <BsThreeDots />
              </div>
              <div className={combineClassName} ref={listEditRef}>
                <div className="edit-section">
                  <div className="icon">
                    <FaEdit />
                  </div>
                  {currentUser?.data?.id === userId ? (
                    <div
                      className="editPost"
                      onClick={() => navigateToProfile(username, userId)}>
                      Edit
                    </div>
                  ) : (
                    <div
                      className="managePost"
                      onClick={() => navigateToProfile(username, userId)}>
                      Manage Post
                    </div>
                  )}
                </div>
              </div>
            </div>
            {currentUser?.data?.id === userId && (
              <div
                className="post-header-action__delete"
                onClick={() => handleDeletePost(id, img)}>
                <MdOutlineDelete />
              </div>
            )}
          </div>
        </div>
        {desc && (
          <div className="post-description">
            <p>{desc}</p>
          </div>
        )}

        {img && (
          <div className="post-image">
            <img src={img || avator} alt="avator" />
          </div>
        )}
        <div className="post-footer">
          <div className="post-footer-top">
            <div className="post-footer-top__like">
              <span>{like.length === 0 ? "No" : like.length} Likes</span>
            </div>
            <div className="post-footer-top__right">
              <div
                className="post-footer-top__right--comment"
                onClick={() => setPopup(true)}>
                <span>{newComment?.length} Comments</span>
              </div>
              <div className="post-footer-top__right--share">
                <span>10 shares</span>
              </div>
            </div>
          </div>
          <div className="post-footer-bottom">
            <div
              className="post-footer-bottom-like"
              onClick={() => handleLike(id)}>
              <div className="post-footer-bottom-like__icon">
                {like ? <BiSolidLike /> : <BiLike />}
              </div>
              <div className="post-footer-bottom-like__like">Like</div>
            </div>
            <div
              className="post-footer-bottom-comment"
              onClick={() => setPopup(true)}>
              <div className="post-footer-bottom-comment__icon">
                <FaRegComment />
              </div>
              <div className="post-footer-bottom-comment__title">Comment</div>
            </div>
            <div className="post-footer-bottom-copy">
              <div className="post-footer-bottom-copy__icon">
                <ImCopy />
              </div>
              <div className="post-footer-bottom-copy__title">Copy</div>
            </div>
            <div className="post-footer-bottom-share">
              <div className="post-footer-bottom-share__icon">
                <IoIosShareAlt />
              </div>
              <div className="post-footer-bottom-shre__title">Share</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(PostsComponent);
