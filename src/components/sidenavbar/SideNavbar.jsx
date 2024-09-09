import logo from "../../assets/logo.jpg";
import friends from "../../assets/friendship.png";
import groups from "../../assets/diversity.png";
import clock from "../../assets/clock.png";
import marketplace from "../../assets/marketplace.png";
import events from "../../assets/banner.png";
import gaming from "../../assets/gaming.png";
import vedios from "../../assets/video.png";
import chat from "../../assets/chat-bubble.png";
import gallery from "../../assets/picture.png";
import { useNavigate } from "react-router-dom";

const SideNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar-left-wrapper">
      <div className="top-sidebar-left">
        <div
          className="top-sidebar-left__profile"
          onClick={() => navigate("/profile")}>
          <div className="top-sidebar-left__profile--image">
            <img src={logo} alt="avatar" width={50} height={50} />
          </div>
          <div className="top-sidebar-left__profile--details">Nabaraj Rai</div>
        </div>
        <div className="top-sidebar-left__profile">
          <div className="top-sidebar-left__profile--image">
            <img src={friends} alt="friends" />
          </div>
          <div className="top-sidebar-left__profile--details">Friends</div>
        </div>
        <div className="top-sidebar-left__profile">
          <div className="top-sidebar-left__profile--image">
            <img src={groups} alt="groups" />
          </div>
          <div className="top-sidebar-left__profile--details">Groups</div>
        </div>
        <div className="top-sidebar-left__profile">
          <div className="top-sidebar-left__profile--image">
            <img src={marketplace} alt="avatar" width={50} height={50} />
          </div>
          <div className="top-sidebar-left__profile--details">Market Place</div>
        </div>
        <div className="top-sidebar-left__profile">
          <div className="top-sidebar-left__profile--image">
            <img src={clock} alt="avatar" width={50} height={50} />
          </div>
          <div className="top-sidebar-left__profile--details">Memories</div>
        </div>
      </div>
      <div className="middle-sidebar-left">
        <div className="middle-sidebar-left__title">
          <span>Your shorcuts</span>
        </div>
        <div className="middle-sidebar-left__profile">
          <div className="middle-sidebar-left__profile--image">
            <img src={events} alt="groups" />
          </div>
          <div className="middle-sidebar-left__profile--details">Events</div>
        </div>
        <div className="middle-sidebar-left__profile">
          <div className="middle-sidebar-left__profile--image">
            <img src={gaming} alt="avatar" width={50} height={50} />
          </div>
          <div className="middle-sidebar-left__profile--details">Gaming</div>
        </div>
        <div className="middle-sidebar-left__profile">
          <div className="middle-sidebar-left__profile--image">
            <img src={gallery} alt="avatar" width={50} height={50} />
          </div>
          <div className="middle-sidebar-left__profile--details">Gallery</div>
        </div>
        <div className="middle-sidebar-left__profile">
          <div className="middle-sidebar-left__profile--image">
            <img src={vedios} alt="avatar" width={50} height={50} />
          </div>
          <div className="middle-sidebar-left__profile--details">Vedios</div>
        </div>
        <div className="middle-sidebar-left__profile">
          <div className="middle-sidebar-left__profile--image">
            <img src={chat} alt="avatar" width={50} height={50} />
          </div>
          <div className="middle-sidebar-left__profile--details">Message</div>
        </div>
      </div>
      <div className="bottom-sidebar-left">
        <div className="bottom-sidebar-left__profile">
          <div className="bottom-sidebar-left__title">
            <span>Others</span>
          </div>
        </div>
        <div className="bottom-sidebar-left__profile">
          <div className="bottom-sidebar-left__profile--image">
            <img src={friends} alt="friends" />
          </div>
          <div className="bottom-sidebar-left__profile--details">Friends</div>
        </div>
        <div className="bottom-sidebar-left__profile">
          <div className="bottom-sidebar-left__profile--image">
            <img src={groups} alt="groups" />
          </div>
          <div className="bottom-sidebar-left__profile--details">Groups</div>
        </div>
        <div className="bottom-sidebar-left__profile">
          <div className="bottom-sidebar-left__profile--image">
            <img src={marketplace} alt="avatar" width={50} height={50} />
          </div>
          <div className="bottom-sidebar-left__profile--details">
            Market Place
          </div>
        </div>
        <div className="bottom-sidebar-left__profile">
          <div className="bottom-sidebar-left__profile--image">
            <img src={clock} alt="avatar" width={50} height={50} />
          </div>
          <div className="bottom-sidebar-left__profile--details">Memories</div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
