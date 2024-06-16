import { useState } from "react";
import { IoHomeOutline, IoApps } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from "../../assets/logo.jpg";
import CustomInputComponent from "../input/CustomInput.component";

const HeaderComponent = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.log("hellow", search);
  return (
    <header className="header-wrapper">
      <nav className="wrapper">
        <div className="header-right">
          <div className="header-logo">
            <span>Social media</span>
          </div>
          <div className="header-right__icons">
            <div className="header-right__icons--home">
              <IoHomeOutline />
            </div>
            <div className="header-right__icons--app">
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
            <div className="header-left__icons--avatar">
              <RxAvatar />
            </div>
            <div className="header-left__icons--email">
              <MdOutlineEmail />
            </div>
            <div className="header-left__icons--notification">
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
