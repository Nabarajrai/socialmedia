// helpers/Api.helper.js
import axios from "axios";

export const apiGenerator = ({ baseURL }) => {
  return async function api(url, method = "GET", body = null, apiConfig = {}) {
    const config = {
      method,
      baseURL,
      url,
      headers: {
        Accept: "application/json",
      },
      withCredentials: true,
      ...apiConfig,
    };

    if (body) config.data = body;

    if (body && !(body instanceof FormData)) {
      config.headers["Content-Type"] = "application/json";
    }

    if (apiConfig?.file) {
      delete config.headers["Content-Type"];
    }

    try {
      const response = await axios(config);
      return response;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw errorMessage;
    }
  };
};
