import FriendsRequestCard from "../friendsRequestCard/FriendsRequestCard";

const FriendsRightSidbar = () => {
  return (
    <div className="friends-request-right-section">
      <div className="requested-friends">
        <h2>Friend Requests</h2>
        <div className="cards-section">
          <FriendsRequestCard />
        </div>
      </div>
      <div className="people-you-may-know">
        <h2>People you may know</h2>
        <div className="cards-section">
          {new Array(5).fill(null).map((_, index) => {
            return <FriendsRequestCard key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FriendsRightSidbar;
