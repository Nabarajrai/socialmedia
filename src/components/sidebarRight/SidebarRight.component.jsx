import { useContext, useEffect, useState } from "react";
import { AllDataContext } from "../../context";
import { useLocation } from "react-router-dom";
import { api, APIS } from "../../config/Api.config";
import ButtonComponent from "../button/Button.component";
import { SlUserFollow } from "react-icons/sl";

const SidebarRightomponent = () => {
  const { currentUser } = useContext(AllDataContext);
  const [suggestionFriends, setSuggestionFriends] = useState([]);
  const [relationship, setRelationship] = useState(null);
  const location = useLocation();

  const getSuggestionsFriends = async () => {
    try {
      const res = await api(APIS.getSuggestions, "GET");
      if (res.status === 200) {
        setSuggestionFriends(res?.data);
      } else {
        console.log("suggestions", res);
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  const getRelationshipsData = async (userId) => {
    try {
      const res = await api(`${APIS.getRelationship}?followerId=${userId}`);
      if (res.status === 200) {
        setRelationship(res?.data);
      } else {
        console.log("relationship data", res);
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  const addRelationships = async (userId) => {
    try {
      const res = await api(
        `${APIS.addRelationship}?followedId=${userId}`,
        "POST"
      );
      if (res.status === 200) {
        console.log("res", res);
        getRelationshipsData(currentUser?.data?.id);
      } else {
        console.log("res", res);
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  const removeRelationships = async (userId) => {
    try {
      const res = await api(
        `${APIS.deleteRelationship}?followedId=${userId}`,
        "DELETE"
      );
      if (res.status === 200) {
        getRelationshipsData(currentUser?.data?.id);
        console.log("res", res);
      } else {
        console.log("res", res);
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  useEffect(() => {
    getSuggestionsFriends();
    getRelationshipsData(currentUser?.data?.id);
  }, [currentUser]);

  return (
    <div className="right-sidebar-container">
      <div className="right-section-suggestion">
        <h3>Suggestion For you</h3>
        {suggestionFriends?.map((data) => {
          return (
            <div className="rightSidebar-suggestion" key={data.id}>
              <div className="rightSidebar-suggestion-section">
                <div className="rightSidebar-suggestion-section__img">
                  <img src={data?.profilePic} alt="logo" />
                </div>
                <div className="rightSidebar-suggestion__name">
                  <span>{data?.username}</span>
                </div>
              </div>
              <div className="rightSidebar-suggestion-right">
                {relationship && relationship.includes(data?.id) ? (
                  <ButtonComponent
                    size="sm"
                    varient="primary"
                    onClick={() => removeRelationships(data?.id)}>
                    <div className="follow-icon">
                      <SlUserFollow />
                    </div>
                    Unfollow
                  </ButtonComponent>
                ) : (
                  <ButtonComponent
                    size="sm"
                    varient="primary"
                    onClick={() => addRelationships(data?.id)}>
                    <div className="follow-icon">
                      <SlUserFollow />
                    </div>
                    Followed
                  </ButtonComponent>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="righsidebar-online">
        <div className="rightsidebar-online-section">
          <h3>Online Friends</h3>
          <div className="righsidebar-online-friendlist">
            <div className="righsidebar-online-friendlist__img">
              <img src="https://i.pravatar.cc/100?img=14" alt="logo" />
            </div>
            <div className="righsidebar-online-friendlist__name">
              <span>nabaraj Rai</span>
            </div>
          </div>
          <div className="righsidebar-online-friendlist">
            <div className="righsidebar-online-friendlist__img">
              <img src="https://i.pravatar.cc/100?img=14" alt="logo" />
            </div>
            <div className="righsidebar-online-friendlist__name">
              <span>nabaraj Rai</span>
            </div>
          </div>
          <div className="righsidebar-online-friendlist">
            <div className="righsidebar-online-friendlist__img">
              <img src="https://i.pravatar.cc/100?img=14" alt="logo" />
            </div>
            <div className="righsidebar-online-friendlist__name">
              <span>nabaraj Rai</span>
            </div>
          </div>
          <div className="righsidebar-online-friendlist">
            <div className="righsidebar-online-friendlist__img">
              <img src="https://i.pravatar.cc/100?img=14" alt="logo" />
            </div>
            <div className="righsidebar-online-friendlist__name">
              <span>nabaraj Rai</span>
            </div>
          </div>
          <div className="righsidebar-online-friendlist">
            <div className="righsidebar-online-friendlist__img">
              <img src="https://i.pravatar.cc/100?img=14" alt="logo" />
            </div>
            <div className="righsidebar-online-friendlist__name">
              <span>nabaraj Rai</span>
            </div>
          </div>
          <div className="righsidebar-online-friendlist">
            <div className="righsidebar-online-friendlist__img">
              <img src="https://i.pravatar.cc/100?img=14" alt="logo" />
            </div>
            <div className="righsidebar-online-friendlist__name">
              <span>nabaraj Rai</span>
            </div>
          </div>
          <div className="righsidebar-online-friendlist">
            <div className="righsidebar-online-friendlist__img">
              <img src="https://i.pravatar.cc/100?img=14" alt="logo" />
            </div>
            <div className="righsidebar-online-friendlist__name">
              <span>nabaraj Rai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarRightomponent;
