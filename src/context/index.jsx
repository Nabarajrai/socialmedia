/* eslint-disable react/prop-types */
import { createContext, useCallback, useEffect, useState } from "react";
import { api, APIS } from "../config/Api.config";

// Create the context
export const AllDataContext = createContext({});

const DataContextProvider = ({ children }) => {
  const [story, setStory] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("users")) || null
  );

  const handleUploadStory = useCallback(
    (data) => {
      setStory((prevStories) => [...prevStories, data]);
    },
    [] // Dependency array only includes what it actually depends on
  );

  const login = async (body) => {
    try {
      const res = await api(APIS.login, "POST", body); // Pass the body directly
      setCurrentUser(res?.data); // Access res.data to get the actual response data
      return res;
    } catch (error) {
      console.log("Login failed:", error);
      throw error;
    }
  };

  const values = {
    story,
    handleUploadStory,
    login,
    currentUser,
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("users", JSON.stringify(currentUser)); // Only save if currentUser exists
    }
  }, [currentUser]);

  return (
    <AllDataContext.Provider value={values}>{children}</AllDataContext.Provider>
  );
};

export default DataContextProvider;
