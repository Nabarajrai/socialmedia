import LayoutComponent from "../../layout/Layout.component";
import "../../styles/pages/_home.scss";
import SideNavbar from "../../components/sidenavbar/SideNavbar";
import SidebarRightomponent from "../../components/sidebarRight/SidebarRight.component";
import StoryComponent from "../../components/story/Story.component";

const HomePage = () => {
  return (
    <div className="home-page-setion">
      <LayoutComponent>
        <div className="home-page">
          <div className="sidebar-left">
            <SideNavbar />
          </div>
          <div className="main-content">
            <StoryComponent />
          </div>
          <div className="sidebar-right">
            <SidebarRightomponent />
          </div>
        </div>
      </LayoutComponent>
    </div>
  );
};

export default HomePage;
