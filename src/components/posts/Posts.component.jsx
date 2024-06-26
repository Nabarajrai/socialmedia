/* eslint-disable react/prop-types */
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import avator from "../../assets/avator.jpeg";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { ImCopy } from "react-icons/im";
import { IoIosShareAlt } from "react-icons/io";
import { useState, useEffect } from "react";
import moment from "moment";

// eslint-disable-next-line no-unused-vars
const PostsComponent = ({ data }) => {
  const { id, name, time, url, cover, description } = data;
  const [timeAgo, setTimeAgo] = useState(moment(time).fromNow());
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(moment(time).fromNow());
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="post-container" key={id}>
      <div className="post-header">
        <div className="post-header-avator">
          <img src={cover || avator} alt="avator" />
        </div>
        <div className="post-header-description">
          <div className="post-header-description__title">
            {name} <span>Follow</span>
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
      <div className="post-description">
        <p>{description}</p>
      </div>
      <div className="post-image">
        <img src={URL.createObjectURL(url) || avator} alt="avator" />
      </div>
      <div className="post-footer">
        <div className="post-footer-top">
          <div className="post-footer-top__like">
            <span>25 Likes</span>
          </div>
          <div className="post-footer-top__right">
            <div className="post-footer-top__right--comment">
              <span>99 comments</span>
            </div>
            <div className="post-footer-top__right--share">
              <span>10 shares</span>
            </div>
          </div>
        </div>
        <div className="post-footer-bottom">
          <div className="post-footer-bottom-like">
            <div className="post-footer-bottom-like__icon">
              <FcLike />
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
      </div>
    </div>
  );
};

export default PostsComponent;
