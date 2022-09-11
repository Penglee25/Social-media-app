import express from "express";
import { createPost } from "../Controllers/PostController.js";
const router = express.Router();

router.post("/", createPost);
router.get("/:id", get);
router.delete("/:id");
router.put("/:id/");

export default router;
