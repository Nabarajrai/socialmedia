import CustomInputComponent from "../../components/input/CustomInput.component";
import ButtonComponent from "../../components/button/Button.component";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formsValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formsValues, [name]: value });
    },
    [formsValues]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      navigate("/");
    },
    [navigate]
  );

  console.log("form values", formsValues);
  return (
    <div className="login-wrapper">
      <div className="login">
        <h3>Social Media</h3>
        <form action="" onSubmit={handleSubmit}>
          <div className="username">
            <CustomInputComponent
              inputType="text"
              size="lg"
              name="username"
              handleChange={handleChange}
              label="Username"
              autoComplete="off"
            />
          </div>
          <div className="password">
            <CustomInputComponent
              inputType="password"
              size="lg"
              name="password"
              handleChange={handleChange}
              label="Password"
              autoComplete="off"
            />
          </div>
          <div className="action">
            <ButtonComponent size="sm" varient="primary ">
              Login
            </ButtonComponent>
          </div>
          <div className="handle-action">
            <Link to="/forget-password">
              <div className="forget">Forget Password?</div>
            </Link>
            <div className="singup">
              Doesn&apos;t have account ! {""}
              <Link to="/register">
                <span>please register here?</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
