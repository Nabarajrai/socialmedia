import LayoutComponent from "../../layout/Layout.component";
import SideNavbar from "../../components/sidenavbar/SideNavbar";
import SidebarRightomponent from "../../components/sidebarRight/SidebarRight.component";
import StoryComponent from "../../components/story/Story.component";
import CreatePostComponent from "../../components/createPost/CreatePost.component";
import PostsComponent from "../../components/posts/Posts.component";
import { useState } from "react";

const datas = [];
const HomePage = () => {
  const [posts, setPosts] = useState(datas);
  // console.log("posts: ", posts);
  // const sortPosts = [...posts].sort(
  //   (a, b) => new Date(a.time) - new Date(b.time)
  // );
  // const mostRecentPosts = sortPosts[0];
  console.log("Posts", posts);
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
              <CreatePostComponent setPosts={setPosts} posts={posts} />
            </div>
            <div className="main-content__post">
              {posts.map((data) => (
                <PostsComponent data={data} key={data.id} />
              ))}
            </div>
            <div className="main-content__loadmore">Loading...</div>
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
