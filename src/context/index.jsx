/* eslint-disable react/prop-types */
import { createContext, useCallback, useState } from "react";

// Create the context
export const AllDataContext = createContext({});

const DataContextProvider = ({ children }) => {
  const [story, setStory] = useState([]);

  const handleUploadStory = useCallback(
    (data) => {
      setStory((prevStories) => [...prevStories, data]);

      console.log(data);
    },
    [] // Dependency array only includes what it actually depends on
  );

  const values = {
    story,
    handleUploadStory,
  };

  return (
    <AllDataContext.Provider value={values}>{children}</AllDataContext.Provider>
  );
};

export default DataContextProvider;
