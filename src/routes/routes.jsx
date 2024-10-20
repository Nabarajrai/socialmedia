import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/Home.pages";
import LoginPage from "../pages/login/Login.page";
import RegisterPage from "../pages/register/Register.page";
import NotFounPage from "../pages/notFound/NotFoun.page";
import StoryPage from "../pages/story/Story.page";
import ProfilePage from "../pages/profile/Profile.page";
import FriendsPage from "../pages/friends/Friends.page";
import ForgetPassword from "../pages/forgetPassword/ForgetPassword";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/story/create",
    element: <StoryPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/friends",
    element: <FriendsPage />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/*",
    element: <NotFounPage />,
  },
]);
