import "../../styles/components/_createPost.scss";
import logo from "../../assets/avator.jpeg";
import vedio from "../../assets/video.png";
import picture from "../../assets/picture.png";
import smile from "../../assets/smile.png";
const CreatePostComponent = () => {
  return (
    <div className="newPost-container">
      <div className="newpost-top">
        <div className="newpost-img">
          <img src={logo} alt="logo" />
        </div>
        <div className="newpost-input">
          <div className="newpost-input__container">
            <span className="span">What&apos;s on your mind,Nabaraj?</span>
          </div>
        </div>
      </div>
      <div className="newpost-bottom">
        <div className="newpost-bottom__vedio">
          <div className="newpost-bottom__vedio--icon">
            <img src={vedio} alt="vedio" />
          </div>
          <div className="newpost-bottom__vedio--title">Video</div>
        </div>
        <div className="newpost-bottom__photo">
          <div className="newpost-bottom__photo--icon">
            <img src={picture} alt="photo" />
          </div>
          <div className="newpost-bottom__photo--title">Photos</div>
        </div>
        <div className="newpost-bottom__feelings">
          <div className="newpost-bottom__feelings--icon">
            <img src={smile} alt="feelings" />
          </div>
          <div className="newpost-bottom__feelings--title">Feelings</div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostComponent;
