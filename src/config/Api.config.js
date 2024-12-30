// API configuration file
// config/Api.config.js
import { apiGenerator } from "../helpers/Api.helper";

// BASE URL for API
const BASE_URL = "http://localhost:8080";
export const api = apiGenerator({ baseURL: BASE_URL });

export const APIS = {
  login: "/api/auth/login",
  logout: "/api/auth/logout",
  register: "/api/auth/register",
  posts: "/api/posts",
  add_post: "/api/addPost", // Make sure the endpoint matches your backend
  upload: "/api/uploads",
  comment: "/api/comments",
  addComment: "/api/addComment",
  like: "/api/likes",
  addLike: "/api/addLikes",
  deleteLike: "/api/deleteLikes",
  getUser: "/api/find",
  getRelationship: "/api/relationships",
  addRelationship: "/api/addRelationship",
  deleteRelationship: "/api/deleteRelationship",
  getUserPosts: "/api/userPosts",
  getSuggestions: "/api/suggestions",
  deletePost: "/api/deletePosts",
  deleteFiles: "/api/deleteFile",
  updateUser: "/api/updateUserDetails",
};
