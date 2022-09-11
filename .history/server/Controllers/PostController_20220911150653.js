import { default as postModel } from "../Models/postModel.js";

// Create a new Post
export const createPost = async (req, res) => {
	const newPost = new postModel(req.body);

	try {
		await newPost.save();
		res.status(200).json("Post created!");
	} catch (error) {
		res.status(500).json(error);
	}
};

// get a Post