/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  useState,
  memo,
  useCallback,
  useEffect,
  useRef,
  useMemo,
  useContext,
} from "react";
import { IoHomeOutline, IoApps, IoPeopleCircleSharp } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import logo from "../../assets/logo.jpg";
import CustomInputComponent from "../input/CustomInput.component";
import classnames from "classnames";
import ButtonComponent from "../button/Button.component";
import { useNavigate } from "react-router-dom";
import { api, APIS } from "../../config/Api.config";
import { toast } from "react-toastify";
import { AllDataContext } from "../../context";

const HeaderComponent = ({ type }) => {
  const [search, setSearch] = useState("");
  const [activeMenu, setActiveMenu] = useState("home");
  const [visible, setVisible] = useState(false);
  const dropRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useContext(AllDataContext);
  const userNameId = currentUser.data.username + " " + currentUser.data.id;

  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  const handleActiveClass = useCallback((menu) => {
    setActiveMenu(menu);
  }, []);

  const handleDropdown = useCallback(() => {
    setVisible((prevVisible) => !prevVisible);
  }, []);
  const notify = (message) => toast(message);
  const handleCloseOut = useCallback((event) => {
    if (
      dropRef.current &&
      !dropRef.current.contains(event.target) &&
      !listRef.current.contains(event.target)
    ) {
      setVisible(false);
    }
  }, []);
  const handleSubmitLogout = useCallback(async () => {
    try {
      const res = await api(APIS.logout, "POST");
      if (res?.status === 200) {
        localStorage.removeItem("users");
        notify(res?.data?.message);
        navigate("/login"); // Redirects to login without reload
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
      notify(err);
    }
  }, [navigate]);

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseOut);
    return () => {
      document.removeEventListener("mousedown", handleCloseOut);
    };
  }, [handleCloseOut]);

  const className = visible ? "fadeIn" : "hide";
  const conditionClass = useMemo(() => {
    return classnames("dropdown none ", className);
  }, [className]);

  const handleMenu = () => {
    handleActiveClass("home");
    navigate("/");
  };

  useEffect(() => {
    if (visible) {
      if (listRef.current && listRef.current.classList.contains("none")) {
        listRef.current.classList.remove("none");
      }
    }
  }, [visible]);

  return (
    <header className="header-wrapper">
      <div className="wrapper">
        <div className="header-container">
          <nav>
            <div className="header-right">
              <div className="header-logo">
                <span>Social media</span>
              </div>
              <div className="header-right__icons">
                <div
                  className={`header-right__icons--home ${
                    activeMenu === "home" ? "active" : ""
                  }`}
                  onClick={handleMenu}>
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
                {type !== "story" && (
                  <CustomInputComponent
                    type="search"
                    title="search..."
                    handleChange={handleChange}
                    value={search}
                  />
                )}
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
                <div
                  className="header-left__avator"
                  onClick={handleDropdown}
                  ref={dropRef}>
                  <div className="header-left__icons--profile">
                    <img src={logo} alt="logo" width={100} height={100} />
                  </div>
                  <div className="header-left__icons--name">
                    {currentUser?.data?.username.split(" ").slice(0, 1)}
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className={conditionClass} ref={listRef}>
            <div className="lists">
              <div className="icons">
                <IoPeopleCircleSharp />
              </div>
              <div
                className="title"
                onClick={() =>
                  navigate(
                    `/${userNameId.split(" ").join(".").toLocaleLowerCase()}`
                  )
                }>
                Profile
              </div>
            </div>
            <div className="lists">
              <div className="icons">
                <CiSettings />
              </div>
              <div className="title">Settings</div>
            </div>
            <div className="action">
              <ButtonComponent
                varient="primary"
                size="sm"
                onClick={handleSubmitLogout}>
                Logout
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(HeaderComponent);
