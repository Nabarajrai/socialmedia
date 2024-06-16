import LayoutComponent from "../../layout/Layout.component";
import "../../styles/pages/_home.scss";
import SideNavbar from "../../components/sidenavbar/SideNavbar";
const HomePage = () => {
  return (
    <div className="home-page-setion">
    <LayoutComponent>
      <div className="home-page">
        <div className="sidebar-left"><SideNavbar/></div>
        <div className="main-content">main</div>
        <div className="sidebar-right">righ bar</div>
      </div>
    </LayoutComponent>
    </div>
  );
};

export default HomePage;
