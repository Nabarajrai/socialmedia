import { useRef, useEffect, useState } from "react";
import avator from "../../assets/avator.jpeg";

const StoryComponent = () => {
  const ref = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const handleScroll = () => {
    if (ref.current) {
      setCanScrollPrev(ref.current.scrollLeft > 0);
      setCanScrollNext(
        ref.current.scrollLeft <
          ref.current.scrollWidth - ref.current.clientWidth
      );
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
      return () => {
        ref.current.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handlePrev = () => {
    if (ref.current) {
      ref.current.scrollBy({
        top: 0,
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (ref.current) {
      ref.current.scrollBy({
        top: 0,
        left: 200,
        behavior: "smooth",
      });
    }
  };

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
        {[...Array(20)].map((_, index) => (
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
