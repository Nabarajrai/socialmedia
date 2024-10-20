import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OtpInputComponent = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const navigate = useNavigate();

  // Handle input value change
  const handleChangeValue = useCallback(
    (element, index) => {
      const value = element.value;
      if (/^\d$/.test(value)) {
        const otpCopy = [...otp];
        otpCopy[index] = value;
        setOtp(otpCopy);

        // Move to the next input if available
        if (element.nextSibling) {
          element.nextSibling.focus();
        }
      }
    },
    [otp]
  );

  // Handle backspace and focus shift
  const handleKeyDown = useCallback(
    (element, index, e) => {
      if (e.key === "Backspace") {
        if (element.value) {
          const otpCopy = [...otp];
          otpCopy[index] = "";
          setOtp(otpCopy);
        } else if (element.previousSibling) {
          // Move to the previous input if available
          element.previousSibling.focus();
        }
      }
    },
    [otp]
  );

  // When OTP is fully filled, trigger the effect
  useEffect(() => {
    const otpValue = otp.join("");
    if (otpValue.length === 4) {
      navigate("/login");
    }
  }, [navigate, otp]);

  return (
    <div className="otp-wrapper">
      <div className="otp-main">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleChangeValue(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e.target, index, e)}
          />
        ))}
      </div>
    </div>
  );
};

export default OtpInputComponent;
