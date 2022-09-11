import express from "express";
import { createPost, getPost } from "../Controllers/PostController.js";
const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);
router.put("/:id/");
router.delete("/:id");

export default router;
