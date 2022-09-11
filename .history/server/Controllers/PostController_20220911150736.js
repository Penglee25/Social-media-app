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
export const getPost = async (req, res) => {
	const id = req.params.id;

	try {
		const user = await UserModel.findById(id);
		if (user) {
			// remove password when fetching
			const { password, ...otherDetails } = user._doc;
			res.status(200).json(otherDetails);
		} else {
			res.status(404).json("No such user exists!");
		}
	} catch (error) {
		res.status(500).json(error);
	}
};