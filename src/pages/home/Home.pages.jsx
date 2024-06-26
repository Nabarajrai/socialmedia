import LayoutComponent from "../../layout/Layout.component";
import "../../styles/pages/_home.scss";
import SideNavbar from "../../components/sidenavbar/SideNavbar";
import SidebarRightomponent from "../../components/sidebarRight/SidebarRight.component";
import StoryComponent from "../../components/story/Story.component";
import CreatePostComponent from "../../components/createPost/CreatePost.component";
import PostsComponent from "../../components/posts/Posts.component";
import { useState } from "react";

const datas = [
  // {
  //   id: 2,
  //   name: "Alice Smith",
  //   time: "3 days ago",
  //   url: "https://picsum.photos/200/300?random=2",
  //   cover: "https://i.pravatar.cc/100?img=2",
  // },
  // {
  //   id: 3,
  //   name: "John Doe",
  //   time: "1 day ago",
  //   url: "https://picsum.photos/200/300?random=3",
  //   cover: "https://i.pravatar.cc/100?img=3",
  // },
  // {
  //   id: 4,
  //   name: "Jane Doe",
  //   time: "4 hours ago",
  //   url: "https://picsum.photos/200/300?random=4",
  //   cover: "https://i.pravatar.cc/100?img=4",
  // },
  // {
  //   id: 5,
  //   name: "Michael Johnson",
  //   time: "5 days ago",
  //   url: "https://picsum.photos/200/300?random=5",
  //   cover: "https://i.pravatar.cc/100?img=5",
  // },
  // {
  //   id: 6,
  //   name: "Emily Davis",
  //   time: "2 weeks ago",
  //   url: "https://picsum.photos/200/300?random=6",
  //   cover: "https://i.pravatar.cc/100?img=6",
  // },
  // {
  //   id: 7,
  //   name: "Daniel Wilson",
  //   time: "1 month ago",
  //   url: "https://picsum.photos/200/300?random=7",
  //   cover: "https://i.pravatar.cc/100?img=7",
  // },
  // {
  //   id: 8,
  //   name: "Olivia Martinez",
  //   time: "6 hours ago",
  //   url: "https://picsum.photos/200/300?random=8",
  //   cover: "https://i.pravatar.cc/100?img=8",
  // },
  // {
  //   id: 9,
  //   name: "Liam Anderson",
  //   time: "3 weeks ago",
  //   url: "https://picsum.photos/200/300?random=9",
  //   cover: "https://i.pravatar.cc/100?img=9",
  // },
  // {
  //   id: 10,
  //   name: "Emma Thomas",
  //   time: "5 hours ago",
  //   url: "https://picsum.photos/200/300?random=10",
  //   cover: "https://i.pravatar.cc/100?img=10",
  // },
  // {
  //   id: 11,
  //   name: "Noah Jackson",
  //   time: "6 days ago",
  //   url: "https://picsum.photos/200/300?random=11",
  //   cover: "https://i.pravatar.cc/100?img=11",
  // },
  // {
  //   id: 12,
  //   name: "Sophia White",
  //   time: "4 days ago",
  //   url: "https://picsum.photos/200/300?random=12",
  //   cover: "https://i.pravatar.cc/100?img=12",
  // },
  // {
  //   id: 13,
  //   name: "James Harris",
  //   time: "2 hours ago",
  //   url: "https://picsum.photos/200/300?random=13",
  //   cover: "https://i.pravatar.cc/100?img=13",
  // },
  // {
  //   id: 14,
  //   name: "Ava Clark",
  //   time: "3 hours ago",
  //   url: "https://picsum.photos/200/300?random=14",
  //   cover: "https://i.pravatar.cc/100?img=14",
  // },
  // {
  //   id: 15,
  //   name: "Benjamin Rodriguez",
  //   time: "2 days ago",
  //   url: "https://picsum.photos/200/300?random=15",
  //   cover: "https://i.pravatar.cc/100?img=15",
  // },
  // {
  //   id: 16,
  //   name: "Mia Lewis",
  //   time: "5 weeks ago",
  //   url: "https://picsum.photos/200/300?random=16",
  //   cover: "https://i.pravatar.cc/100?img=16",
  // },
  // {
  //   id: 17,
  //   name: "Lucas Lee",
  //   time: "1 week ago",
  //   url: "https://picsum.photos/200/300?random=17",
  //   cover: "https://i.pravatar.cc/100?img=17",
  // },
  // {
  //   id: 18,
  //   name: "Charlotte Walker",
  //   time: "2 months ago",
  //   url: "https://picsum.photos/200/300?random=18",
  //   cover: "https://i.pravatar.cc/100?img=18",
  // },
  // {
  //   id: 19,
  //   name: "Henry Hall",
  //   time: "3 months ago",
  //   url: "https://picsum.photos/200/300?random=19",
  //   cover: "https://i.pravatar.cc/100?img=19",
  // },
  // {
  //   id: 20,
  //   name: "Amelia Allen",
  //   time: "2 hours ago",
  //   url: "https://picsum.photos/200/300?random=20",
  //   cover: "https://i.pravatar.cc/100?img=20",
  // },
  // {
  //   id: 21,
  //   name: "Ethan Young",
  //   time: "1 day ago",
  //   url: "https://picsum.photos/200/300?random=21",
  //   cover: "https://i.pravatar.cc/100?img=21",
  // },
  // {
  //   id: 22,
  //   name: "Harper King",
  //   time: "4 weeks ago",
  //   url: "https://picsum.photos/200/300?random=22",
  //   cover: "https://i.pravatar.cc/100?img=22",
  // },
  // {
  //   id: 23,
  //   name: "Alexander Wright",
  //   time: "5 days ago",
  //   url: "https://picsum.photos/200/300?random=23",
  //   cover: "https://i.pravatar.cc/100?img=23",
  // },
  // {
  //   id: 24,
  //   name: "Isabella Scott",
  //   time: "2 days ago",
  //   url: "https://picsum.photos/200/300?random=24",
  //   cover: "https://i.pravatar.cc/100?img=24",
  // },
  // {
  //   id: 25,
  //   name: "Jack Green",
  //   time: "1 hour ago",
  //   url: "https://picsum.photos/200/300?random=25",
  //   cover: "https://i.pravatar.cc/100?img=25",
  // },
  // {
  //   id: 26,
  //   name: "Evelyn Adams",
  //   time: "4 hours ago",
  //   url: "https://picsum.photos/200/300?random=26",
  //   cover: "https://i.pravatar.cc/100?img=26",
  // },
];
const HomePage = () => {
  const [posts, setPosts] = useState(datas);
  console.log("posts: ", posts);

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
