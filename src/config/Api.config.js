import { apiGenerator } from "../helpers/Api.helper";

//BASE URL for API
const BASE_URL = "http://localhost:8080";

export const api = apiGenerator({ baseURL: BASE_URL });

export const APIS = {
  login: "/api/auth/login",
  logout: "/api/auth/logout",
  register: "/api/auth/register",
  posts: "/api/posts",
};
