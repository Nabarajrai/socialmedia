import { useContext } from "react";
import { AllDataContext } from "../../context";

const SidebarRightomponent = () => {
  const { currentUser } = useContext(AllDataContext);
  return (
    <div className="right-sidebar-container">
      <div className="right-section-suggestion">
        <h3>Suggestion For you</h3>
        <div className="rightSidebar-suggestion">
          <div className="rightSidebar-suggestion-section">
            <div className="rightSidebar-suggestion-section__img">
              <img src="https://i.pravatar.cc/100?img=14" alt="logo" />
            </div>
            <div className="rightSidebar-suggestion__name">
              <span>{currentUser?.data?.username}</span>
            </div>
          </div>
          <div className="rightSidebar-suggestion-right">
            <span
              className="rightSidebar-follow"
              onClick={() => alert("hellow nabaraj")}>
              Follow
            </span>
            <span className="rightSidebar-dismiss">Dissmiss</span>
          </div>
        </div>
        <div className="rightSidebar-suggestion">
          <div className="rightSidebar-suggestion-section">
            <div className="rightSidebar-suggestion-section__img">
              <img src="https://i.pravatar.cc/100?img=14" alt="logo" />
            </div>
            <div className="rightSidebar-suggestion__name">
              <span>nabaraj Rai</span>
            </div>
          </div>
          <div className="rightSidebar-suggestion-right">
            <span className="rightSidebar-follow">Follow</span>
            <span className="rightSidebar-dismiss">Dissmiss</span>
          </div>
        </div>
        <div className="rightSidebar-suggestion">
          <div className="rightSidebar-suggestion-section">
            <div className="rightSidebar-suggestion-section__img">
              <img src="https://i.pravatar.cc/100?img=14" alt="logo" />
            </div>
            <div className="rightSidebar-suggestion__name">
              <span>nabaraj Rai</span>
            </div>
          </div>
          <div className="rightSidebar-suggestion-right">
            <span className="rightSidebar-follow">Follow</span>
            <span className="rightSidebar-dismiss">Dissmiss</span>
          </div>
        </div>
      </div>
      <div className="righsidebar-online">
        <div className="rightsidebar-online-section">
          <h3>Online Friends</h3>
          <div className="righsidebar-online-friendlist">
            <div className="righsidebar-online-friendlist__img">
              <img src="https://i.pravatar.cc/100?img=14" alt="logo" />
            </div>
            <div className="righsidebar-online-friendlist__name">
              <span>nabaraj Rai</span>
            </div>
          </div>
          <div className="righsidebar-online-friendlist">
            <div className="righsidebar-online-friendlist__img">
              <img src="https://i.pravatar.cc/100?img=14" alt="logo" />
            </div>
            <div className="righsidebar-online-friendlist__name">
              <span>nabaraj Rai</span>
            </div>
          </div>
          <div className="righsidebar-online-friendlist">
            <div className="righsidebar-online-friendlist__img">
              <img src="https://i.pravatar.cc/100?img=14" alt="logo" />
            </div>
            <div className="righsidebar-online-friendlist__name">
              <span>nabaraj Rai</span>
            </div>
          </div>
          <div className="righsidebar-online-friendlist">
            <div className="righsidebar-online-friendlist__img">
              <img src="https://i.pravatar.cc/100?img=14" alt="logo" />
            </div>
            <div className="righsidebar-online-friendlist__name">
              <span>nabaraj Rai</span>
            </div>
          </div>
          <div className="righsidebar-online-friendlist">
            <div className="righsidebar-online-friendlist__img">
              <img src="https://i.pravatar.cc/100?img=14" alt="logo" />
            </div>
            <div className="righsidebar-online-friendlist__name">
              <span>nabaraj Rai</span>
            </div>
          </div>
          <div className="righsidebar-online-friendlist">
            <div className="righsidebar-online-friendlist__img">
              <img src="https://i.pravatar.cc/100?img=14" alt="logo" />
            </div>
            <div className="righsidebar-online-friendlist__name">
              <span>nabaraj Rai</span>
            </div>
          </div>
          <div className="righsidebar-online-friendlist">
            <div className="righsidebar-online-friendlist__img">
              <img src="https://i.pravatar.cc/100?img=14" alt="logo" />
            </div>
            <div className="righsidebar-online-friendlist__name">
              <span>nabaraj Rai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarRightomponent;
