import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
	res.send("Post Route");
});

router.get("/", crea);
router.put("/:id");
router.delete("/:id");
router.put("/:id/follow");
router.put("/:id/unfollow");

export default router;
