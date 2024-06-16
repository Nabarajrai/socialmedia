import LayoutComponent from "../../layout/Layout.component";
import "../../styles/pages/_home.scss";
const HomePage = () => {
  return (
    <LayoutComponent>
      <div className="home-page">
        <div className="sidebar-left">left side bar</div>
        <div className="main-content">main</div>
        <div className="sidebar-right">righ bar</div>
      </div>
    </LayoutComponent>
  );
};

export default HomePage;
