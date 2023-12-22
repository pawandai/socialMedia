import Post from "../models/post.model.js";

export const getPosts = (req, res) => {
  res.send("This Works!");
};

export const createPost = (req, res) => {
  res.send("This Also Works!");
};
