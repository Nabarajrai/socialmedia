import logo from "../../assets/avator.jpeg";
import ButtonComponent from "../button/Button.component";
import { useNavigate } from "react-router-dom";

const FriendsRequestCard = () => {
  const navigate = useNavigate();
  return (
    <div className="cards">
      <div className="cards__img">
        <img src={logo} alt="logo" />
      </div>
      <div className="cards__user-name">Nabaraj Rai</div>
      <div className="cards__mutual-friends">
        <div className="cards__mutual-friends--avator">
          <img src={logo} alt="logo" />
        </div>
        <div className="cards__mutual-friends--username">1 mutual friends</div>
      </div>
      <div className="cards__action">
        <ButtonComponent size="sm" varient="primary ">
          Confirm
        </ButtonComponent>
        <ButtonComponent
          size="sm"
          varient="secondary "
          onClick={() => navigate("/")}>
          Delete
        </ButtonComponent>
      </div>
    </div>
  );
};

export default FriendsRequestCard;
