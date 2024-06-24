import { useState } from "react";
import { IoHomeOutline, IoApps } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from "../../assets/logo.jpg";
import CustomInputComponent from "../input/CustomInput.component";

const HeaderComponent = () => {
  const [search, setSearch] = useState("");
  const [activeMenu, setActiveMenu] = useState("home");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleActiveClass = (menu) => {
    setActiveMenu(menu);
  };
  return (
    <header className="header-wrapper">
      <nav className="wrapper">
        <div className="header-right">
          <div className="header-logo">
            <span>Social media</span>
          </div>
          <div className="header-right__icons">
            <div
              className={`header-right__icons--home ${
                activeMenu === "home" ? "active" : ""
              }`}
              onClick={() => handleActiveClass("home")}>
              <IoHomeOutline />
            </div>
            <div
              className={`header-right__icons--app ${
                activeMenu === "app" ? "active" : ""
              }`}
              onClick={() => handleActiveClass("app")}>
              <IoApps />
            </div>
          </div>
          <div className="header-right__input">
            <CustomInputComponent
              type="search"
              title="search..."
              handleChange={handleChange}
              value={search}
            />
          </div>
        </div>
        <div className="header-left">
          <div className="header-left__icons">
            <div
              className={`header-left__icons--avatar ${
                activeMenu === "person" ? "active" : ""
              }`}
              onClick={() => handleActiveClass("person")}>
              <RxAvatar />
            </div>
            <div
              className={`header-left__icons--email ${
                activeMenu === "email" ? "active" : ""
              }`}
              onClick={() => handleActiveClass("email")}>
              <MdOutlineEmail />
            </div>
            <div
              className={`header-left__icons--notification ${
                activeMenu === "noti" ? "active" : ""
              }`}
              onClick={() => handleActiveClass("noti")}>
              <IoIosNotificationsOutline />
            </div>
            <div className="header-left__avator">
              <div className="header-left__icons--profile">
                <img src={logo} alt="logo" width={100} height={100} />
              </div>
              <div className="header-left__icons--name">Nabaraj</div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
