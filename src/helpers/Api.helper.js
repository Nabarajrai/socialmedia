import axios from "axios";

export const apiGenerator = ({ baseURL }) => {
  return async function api(url, method = "GET", body = null, apiConfig = {}) {
    const config = {
      method,
      baseURL,
      url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      ...apiConfig,
    };

    if (body) config.data = body;

    if (apiConfig?.file) {
      config.headers["Content-Type"] = "multipart/form-data";
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
