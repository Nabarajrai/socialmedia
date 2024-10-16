import { Link } from "react-router-dom";
import ButtonComponent from "../../components/button/Button.component";
import CustomInputComponent from "../../components/input/CustomInput.component";
import { useCallback, useState } from "react";

const RegisterPage = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    },
    [formValues]
  );

  console.log("RegisterPage", formValues);

  return (
    <div className="register-page">
      <div className="register">
        <h3>Register Here</h3>
        <form action="">
          <div className="username">
            <CustomInputComponent
              inputType="email"
              size="lg"
              name="email"
              label="Email"
              handleChange={handleChange}
              autocomplete="off"
            />
          </div>
          <div className="password">
            <CustomInputComponent
              inputType="password"
              size="lg"
              name="password"
              label="Password"
              handleChange={handleChange}
              autocomplete="off"
            />
          </div>
          <div className="confirmPassword">
            <CustomInputComponent
              inputType="password"
              size="lg"
              name="confirmPassword"
              label="Confirm Password"
              handleChange={handleChange}
              autocomplete="off"
            />
          </div>
          <div className="register-action">
            <div className="btn">
              <ButtonComponent>Register</ButtonComponent>
            </div>
            <div className="already-ac">
              <Link to="/login">
                <span>Already exists account?</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
