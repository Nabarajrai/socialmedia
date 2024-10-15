import { Link } from "react-router-dom";
import ButtonComponent from "../../components/button/Button.component";
import CustomInputComponent from "../../components/input/CustomInput.component";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register">
        <h3>Register Here</h3>
        <form action="">
          <div className="username">
            <CustomInputComponent
              inputType="text"
              size="lg"
              name="email"
              label="Username"
            />
          </div>
          <div className="password">
            <CustomInputComponent
              inputType="password"
              size="lg"
              name="password"
              label="Password"
            />
          </div>
          <div className="confirmPassword">
            <CustomInputComponent
              inputType="password"
              size="lg"
              name="confirmpassword"
              label="Confirm Password"
            />
          </div>
          <div className="register-action">
            <div className="btn">
              <ButtonComponent>Register</ButtonComponent>
            </div>
            <div className="already-ac">
              <Link to="/login">Already exists account?</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
