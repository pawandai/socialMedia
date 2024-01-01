import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/create", auth, createPost);
router.patch("/update/:id", auth, updatePost);
router.delete("/delete/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
