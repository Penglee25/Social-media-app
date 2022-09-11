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
		const post = await postModel.findById(id);
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json(error);
	}
};

// Update a Post
export const updatePost = async (req, res) => {
	const postId = req.params.id;
	const { userId } = req.body;

	try {
		const post = await postModel.findById(postId);
		if (post.userId === userId) {
			await post.updateOne({ $set: req.body });
			res.status(200).json("Post Updated");
		} else {
			res.status(403).json("Action Forbidden");
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

// delete User

export const deleteUser = async (req, res) => {
	const id = req.params.id;

	const { currentUserId, currentUserAdminStatus } = req.body;

	if (id === currentUserId || currentUserAdminStatus) {
		try {
			await userModel.findByIdAndDelete(id);
			res.status(200).json("user deleted successfully");
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json(
			"Access Denied! You can only delete your own profile"
		);
	}
};