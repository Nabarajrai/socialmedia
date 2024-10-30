/* eslint-disable react/prop-types */
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import avator from "../../assets/avator.jpeg";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { ImCopy } from "react-icons/im";
import { IoIosShareAlt } from "react-icons/io";
import { useState, useEffect } from "react";
import { BiSolidLike } from "react-icons/bi";
import moment from "moment";
import PostModalComponent from "../postModal/PostModalComponent";
import { IoSendSharp } from "react-icons/io5";

// eslint-disable-next-line no-unused-vars
const PostsComponent = ({ data }) => {
  const [comment, setComment] = useState("");
  const [newComment, setNewComment] = useState([]);
  const [popup, setPopup] = useState(false);
  const [like, setLike] = useState(false);
  const { id, username, time, img, cover, description } = data;
  const [timeAgo, setTimeAgo] = useState(moment(time).fromNow());
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(moment(time).fromNow());
    }, 1000);
    return () => clearInterval(interval);
  });
  const handleLike = () => {
    setLike(!like);
  };
  const handleComment = () => {
    const newcomment = {
      newcomment: comment,
    };
    setNewComment([...newComment, newcomment]);
    setComment("");
  };
  return (
    <>
      <PostModalComponent active={popup} setActive={setPopup}>
        <div className="post-container" key={id}>
          <div className="post-header">
            <div className="post-header-avator">
              <img src={cover || avator} alt="avator" />
            </div>
            <div className="post-header-description">
              <div className="post-header-description__title">
                {username} <span>Follow</span>
              </div>
              <div className="post-header-description__time">{timeAgo}</div>
            </div>
            <div className="post-header-action">
              <div className="post-header-action__app">
                <BsThreeDots />
              </div>
              <div className="post-header-action__delete">
                <MdOutlineDelete />
              </div>
            </div>
          </div>
          {description && (
            <div className="post-description">
              <p>{description}</p>
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
                <span>{like ? 1 : "No"} Likes</span>
              </div>
              <div className="post-footer-top__right">
                <div
                  className="post-footer-top__right--comment"
                  onClick={() => setPopup(true)}>
                  <span>99 comments</span>
                </div>
                <div className="post-footer-top__right--share">
                  <span>10 shares</span>
                </div>
              </div>
            </div>
            <div className="post-footer-bottom">
              <div className="post-footer-bottom-like" onClick={handleLike}>
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
                  <>
                    <div className="modal-reply-section">
                      <div className="modal-reply-section__img">
                        <img src={avator} alt="avator" />
                      </div>
                      <div className="modal-reply-section__des">
                        <span>Nabaraj Rai</span>
                        <p>{data.newcomment}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <div className="modal-reply-section">
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
              </div>
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
              <div className="comment-area-text__icon" onClick={handleComment}>
                <IoSendSharp />
              </div>
            </div>
          </div>
        </div>
      </PostModalComponent>
      <div className="post-container" key={id}>
        <div className="post-header">
          <div className="post-header-avator">
            <img src={cover || avator} alt="avator" />
          </div>
          <div className="post-header-description">
            <div className="post-header-description__title">
              {username} <span>Follow</span>
            </div>
            <div className="post-header-description__time">{timeAgo}</div>
          </div>
          <div className="post-header-action">
            <div className="post-header-action__app">
              <BsThreeDots />
            </div>
            <div className="post-header-action__delete">
              <MdOutlineDelete />
            </div>
          </div>
        </div>
        {description && (
          <div className="post-description">
            <p>{description}</p>
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
              <span>{like ? 1 : "No"} Likes</span>
            </div>
            <div className="post-footer-top__right">
              <div
                className="post-footer-top__right--comment"
                onClick={() => setPopup(true)}>
                <span>99 comments</span>
              </div>
              <div className="post-footer-top__right--share">
                <span>10 shares</span>
              </div>
            </div>
          </div>
          <div className="post-footer-bottom">
            <div className="post-footer-bottom-like" onClick={handleLike}>
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

export default PostsComponent;
