import express from "express";
import { createPost } from "../Controllers/PostController.js";
const router = express.Router();

router.post("/", createPost);
router.get("/:id");
router.delete("/:id");
router.put("/:id/follow");

export default router;
