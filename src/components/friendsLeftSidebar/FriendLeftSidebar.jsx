import { CiSettings } from "react-icons/ci";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbFriends } from "react-icons/tb";
import { IoPersonAddSharp } from "react-icons/io5";
import { GiThreeFriends } from "react-icons/gi";
import { useCallback, useState } from "react";

const FriendLeftSidebar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const handleActiveClass = useCallback((menu) => {
    setActiveMenu(menu);
  }, []);
  return (
    <div className="friends-left-nav">
      <div className="settings">
        <div className="title">Friends</div>
        <div className="icons">
          <CiSettings />
        </div>
      </div>
      <div className="tabs-section">
        <div
          className={`tab ${activeMenu === "home" ? "active" : ""}`}
          onClick={() => handleActiveClass("home")}>
          <div className="icon">
            <BsFillPeopleFill />
          </div>
          <div className="title">Home</div>
        </div>
        <div
          className={`tab ${activeMenu === "friend" ? "active" : ""}`}
          onClick={() => handleActiveClass("friend")}>
          <div className="icon">
            <TbFriends />
          </div>
          <div className="title">Friends</div>
        </div>
        <div
          className={`tab ${activeMenu === "suggestion" ? "active" : ""}`}
          onClick={() => handleActiveClass("suggestion")}>
          <div className="icon">
            <IoPersonAddSharp />
          </div>
          <div className="title">Suggestions</div>
        </div>
        <div
          className={`tab ${activeMenu === "all" ? "active" : ""}`}
          onClick={() => handleActiveClass("all")}>
          <div className="icon">
            <GiThreeFriends />
          </div>
          <div className="title">All friends</div>
        </div>
      </div>
    </div>
  );
};

export default FriendLeftSidebar;
