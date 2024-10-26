import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/button/Button.component";
import CustomInputComponent from "../../components/input/CustomInput.component";
import { useCallback, useEffect, useState } from "react";
import { api, APIS } from "../../config/Api.config";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [data, setData] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const notify = (success) => toast(success);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    },
    [formValues]
  );
  const handleRegister = useCallback(
    async (e) => {
      e.preventDefault();
      if (formValues.password !== formValues.confirmPassword) {
        setErrMsg("Password did not match");
        setShow(true);
        return;
      }
      const body = {
        username: formValues.fullName,
        email: formValues.email,
        password: formValues.password,
      };
      try {
        const res = await api(APIS.register, "POST", body);
        if (res?.status === 200) {
          setData(res?.data?.message);
          notify(res?.data?.message);
          navigate("/login");
        }
      } catch (e) {
        setErrMsg(e);
        setShow(true);
      }
    },
    [
      formValues.password,
      formValues.confirmPassword,
      formValues.email,
      formValues.fullName,
      navigate,
    ]
  );

  setTimeout(() => {
    setShow(false);
  }, 500);
  const focusInput = useCallback(() => {
    setErrMsg("");
  }, []);

  return (
    <div className="register-page">
      <div className="register">
        <h3>Register Here</h3>
        <form action="" onSubmit={handleRegister}>
          <div className="username">
            <CustomInputComponent
              inputType="text"
              size="lg"
              name="fullName"
              label="Full Name"
              handleChange={handleChange}
              onFocus={focusInput}
              required
            />
          </div>
          <div className="username">
            <CustomInputComponent
              inputType="email"
              size="lg"
              name="email"
              label="Email"
              handleChange={handleChange}
              onFocus={focusInput}
              required
            />
          </div>
          <div className="password">
            <CustomInputComponent
              inputType="password"
              size="lg"
              name="password"
              label="Password"
              handleChange={handleChange}
              onFocus={focusInput}
              required
            />
          </div>
          <div className="confirmPassword">
            <CustomInputComponent
              inputType="password"
              size="lg"
              name="confirmPassword"
              label="Confirm Password"
              onFocus={focusInput}
              handleChange={handleChange}
              required
            />
          </div>
          {errMsg && (
            <div className={`register-err ${show && "shakes"} }`}>{errMsg}</div>
          )}
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
