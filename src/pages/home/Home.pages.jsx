// components
import LayoutComponent from "../../layout/Layout.component";
import SideNavbar from "../../components/sidenavbar/SideNavbar";
import SidebarRightomponent from "../../components/sidebarRight/SidebarRight.component";
import StoryComponent from "../../components/story/Story.component";
import CreatePostComponent from "../../components/createPost/CreatePost.component";
import PostsComponent from "../../components/posts/Posts.component";
import Spinner from "../../components/spinner/Spinner";
//hooks
import { usePosts } from "../../hooks/usePosts";
const HomePage = () => {
  const { isLoading, error, data } = usePosts();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log("HomePage");
  return (
    <div className="home-page-setion">
      <LayoutComponent>
        <div className="home-page">
          <div className="sidebar-left">
            <SideNavbar />
          </div>
          <div className="main-content">
            <div className="main-content__story">
              <StoryComponent />
            </div>
            <div className="main-content__newPost">
              <CreatePostComponent />
            </div>
            <div className="main-content__post">
              {data?.map((data) => (
                <PostsComponent data={data} key={data.id} />
              ))}
            </div>
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
