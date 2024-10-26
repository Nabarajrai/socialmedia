import { useCallback } from "react";
import { toast } from "react-toastify";

export const useToast = () => {
  const showToast = useCallback((message, options = {}) => {
    // Apply a fallback empty object to options and filter out any undefined keys
    const finalOptions = {
      autoClose: 5000,
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options,
    };

    // Ensure finalOptions doesn't include any undefined properties
    for (const key in finalOptions) {
      if (finalOptions[key] === undefined) delete finalOptions[key];
    }

    toast(message, finalOptions);
  }, []);

  return showToast;
};
