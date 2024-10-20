import { useCallback, useState } from "react";
import ButtonComponent from "../../components/button/Button.component";
import CustomInputComponent from "../../components/input/CustomInput.component";
import { Link } from "react-router-dom";
import OtpInputComponent from "../../components/otpInput/OtpInput.component";

const ForgetPassword = () => {
  const [show, setShow] = useState(false);
  const submitOtp = useCallback((e) => {
    e.preventDefault();
    setShow(true);
  }, []);
  const handleGoBack = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <div className="forget-wrapper">
      {show ? (
        <div className="otp-section">
          <div className="otp">
            <OtpInputComponent />
            <div className="back" onClick={handleGoBack}>
              Go Back
            </div>
          </div>
        </div>
      ) : (
        <div className="forget-section">
          <h2>Forget Password!</h2>
          <form action="" onSubmit={submitOtp}>
            <CustomInputComponent
              inputType="email"
              size="lg"
              name="email"
              label="Email"
            />
            <ButtonComponent size="sm" varient="primary">
              Forget Password
            </ButtonComponent>
          </form>
          <Link to="/login">
            <div className="back">Go Back</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;
