import express from "express";
import { createPost } from "../Controllers/PostController.js";
const router = express.Router();

router.post("/", createPost);
router.put("/:id");
router.delete("/:id");
router.put("/:id/follow");
router.put("/:id/unfollow");

export default router;
