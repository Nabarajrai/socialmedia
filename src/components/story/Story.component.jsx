import "../../styles/components/_story.scss";
import avator from "../../assets/avator.jpeg";

const StoryComponent = () => {
  return (
    <div className="story-container">
      <div className="story-section">
        <div className="story-section-reels">
          <div className="story-section-reels__img">
            <img src={avator} alt="logo" />
          </div>
          <div className="story-section-reels__name">
            <span>Nabaraj Rai</span>
          </div>
        </div>
        <div className="story-section-reels">
          <div className="story-section-reels__img">
            <img src={avator} alt="logo" />
          </div>
          <div className="story-section-reels__name">
            <span>Nabaraj Rai</span>
          </div>
        </div>
        <div className="story-section-reels">
          <div className="story-section-reels__img">
            <img src={avator} alt="logo" />
          </div>
          <div className="story-section-reels__name">
            <span>Nabaraj Rai</span>
          </div>
        </div>
        <div className="story-section-reels">
          <div className="story-section-reels__img">
            <img src={avator} alt="logo" />
          </div>
          <div className="story-section-reels__name">
            <span>Nabaraj Rai</span>
          </div>
        </div>
        <div className="story-section-reels">
          <div className="story-section-reels__img">
            <img src={avator} alt="logo" />
          </div>
          <div className="story-section-reels__name">
            <span>Nabaraj Rai</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryComponent;
