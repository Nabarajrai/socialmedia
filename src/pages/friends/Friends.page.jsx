import LayoutComponent from "../../layout/Layout.component";
import FriendLeftSidebar from "../../components/friendsLeftSidebar/FriendLeftSidebar";
import FriendRightSidebar from "../../components/friendsRightSidebar/FriendsRightSidbar";

const FriendsPage = () => {
  return (
    <div className="friends-page">
      <LayoutComponent>
        <div className="friends-main-section">
          <div className="left-sidebar">
            <FriendLeftSidebar />
          </div>
          <div className="right-sidebar">
            <FriendRightSidebar />
          </div>
        </div>
      </LayoutComponent>
    </div>
  );
};

export default FriendsPage;
