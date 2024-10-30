import LayoutComponent from "../../layout/Layout.component";
import SideNavbar from "../../components/sidenavbar/SideNavbar";
import SidebarRightomponent from "../../components/sidebarRight/SidebarRight.component";
import StoryComponent from "../../components/story/Story.component";
import CreatePostComponent from "../../components/createPost/CreatePost.component";
import PostsComponent from "../../components/posts/Posts.component";
import { useCallback, useEffect, useState } from "react";
import { api, APIS } from "../../config/Api.config";

const datas = [];
const HomePage = () => {
  const [posts, setPosts] = useState(datas);
  // console.log("posts: ", posts);
  // const sortPosts = [...posts].sort(
  //   (a, b) => new Date(a.time) - new Date(b.time)
  // );
  // const mostRecentPosts = sortPosts[0];
  const fetchPosts = useCallback(async () => {
    try {
      const res = await api(APIS.posts);
      if (res.status === 200) {
        setPosts(res?.data);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
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
