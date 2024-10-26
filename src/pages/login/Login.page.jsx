/* eslint-disable react/prop-types */
import CustomInputComponent from "../../components/input/CustomInput.component";
import ButtonComponent from "../../components/button/Button.component";
import { useCallback, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Uncomment useNavigate
import { AllDataContext } from "../../context";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [error, setError] = useState("");
  const [formsValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const { login } = useContext(AllDataContext);
  const navigate = useNavigate(); // Use navigate for redirect
  const notify = (success) => toast(success);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    },
    [] // Empty dependency array
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const body = {
        email: formsValues.username,
        password: formsValues.password,
      };
      try {
        const res = await login(body);
        if (res?.status === 200) {
          notify(res?.data?.message);
        }
        // navigate("/"); // Navigate to home page after successful login
      } catch (e) {
        setError(e);
      }
    },
    [login, formsValues.password, formsValues.username]
  );

  const handleOnFocus = useCallback(() => {
    setError("");
  }, []);
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
              onFocus={handleOnFocus}
              required
            />
          </div>
          <div className="password">
            <CustomInputComponent
              inputType="password"
              size="lg"
              name="password"
              handleChange={handleChange}
              label="Password"
              onFocus={handleOnFocus}
              required
            />
          </div>
          {error && <div className="login-err">{error}</div>}
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
