import { useRef, useEffect, useState, useCallback, useContext } from "react";
import avator from "../../assets/avator.jpeg";
import { FaPlus } from "react-icons/fa6";
import profile from "../../assets/1.png";
import { Link } from "react-router-dom";
import { AllDataContext } from "../../context";

const StoryComponent = () => {
  const ref = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const handleScroll = useCallback(() => {
    if (ref.current) {
      setCanScrollPrev(ref.current.scrollLeft > 0);
      setCanScrollNext(
        ref.current.scrollLeft <
          ref.current.scrollWidth - ref.current.clientWidth
      );
    }
  }, [ref]);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
      return () => {
        ref?.current?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  const handlePrev = useCallback(() => {
    if (ref.current) {
      ref.current.scrollBy({
        top: 0,
        left: -200,
        behavior: "smooth",
      });
    }
  }, [ref]);
  const handleNext = useCallback(() => {
    if (ref.current) {
      ref.current.scrollBy({
        top: 0,
        left: 200,
        behavior: "smooth",
      });
    }
  }, [ref]);

  const { story } = useContext(AllDataContext);
  console.log("story", story);

  return (
    <div className="story-container">
      <div className="story-top-bar">
        <button
          onClick={handlePrev}
          type="button"
          disabled={!canScrollPrev}
          id="action-button--previous"
          className="action-button--horizontal-scroll">
          <svg
            className="prev"
            width="16"
            height="16"
            fill="currentColor"
            focusable="false"
            viewBox="0 0 24 24">
            <path d="M12.771 7.115a.829.829 0 0 0-1.2 0L3 15.686l1.2 1.2 7.971-7.971 7.972 7.971 1.2-1.2-8.572-8.571Z"></path>
          </svg>
        </button>
        <button
          onClick={handleNext}
          type="button"
          disabled={!canScrollNext}
          id="action-button--next"
          className="action-button--horizontal-scroll">
          <svg
            className="next"
            width="16"
            height="16"
            fill="currentColor"
            focusable="false"
            viewBox="0 0 24 24">
            <path d="M12.771 7.115a.829.829 0 0 0-1.2 0L3 15.686l1.2 1.2 7.971-7.971 7.972 7.971 1.2-1.2-8.572-8.571Z"></path>
          </svg>
        </button>
      </div>
      <div className="story-section" ref={ref}>
        <Link className="story-section-reels" to="/story/create">
          <div className="story-section-reels__des">
            <div className="create-story">
              <img src={profile} alt="logo" />
            </div>
            <div className="create-btm">
              <div className="create-btn">
                <button>
                  <FaPlus />
                </button>
              </div>
              <div className="create-title">Create story</div>
            </div>
          </div>
        </Link>
        {story &&
          story.map((data) => {
            return (
              <>
                <div className="story-section-reels">
                  <div className="story-section-reels__img">
                    {data.image ? (
                      <img src={URL.createObjectURL(data?.image)} alt="img" />
                    ) : (
                      <div
                        className={`preview-img bgcolor-${data.bgNumber}`}
                        style={{ border: "none" }}>
                        <div className="preview-img__section">
                          <p className={data.textStyle}>
                            {data.story.split(" ").slice(0, 40).join(" ") +
                              "..."}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="story-section-reels__name">
                    <span>Nabaraj Rai</span>
                  </div>
                </div>
              </>
            );
          })}

        {[...Array(3)].map((_, index) => (
          <div className="story-section-reels" key={index}>
            <div className="story-section-reels__img">
              <img src={avator} alt="logo" />
            </div>
            <div className="story-section-reels__name">
              <span>Nabaraj Rai</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryComponent;
