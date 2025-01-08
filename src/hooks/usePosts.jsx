import { useQuery } from "react-query";
//config
import { api, APIS } from "../config/Api.config";

export const usePosts = () => {
  const fetchPosts = async () => {
    const res = await api(APIS.posts);
    return res?.data;
  };

  const { isLoading, error, data } = useQuery("posts", fetchPosts);
  return { isLoading, error, data };
};
