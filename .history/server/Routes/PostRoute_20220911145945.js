import express from "express";
import { createPost } from "../Controllers/PostController";
const router = express.Router();

router.get("/", async (req, res) => {
	res.send("Post Route");
});

router.get("/", createPost);
router.put("/:id");
router.delete("/:id");
router.put("/:id/follow");
router.put("/:id/unfollow");

export default router;
