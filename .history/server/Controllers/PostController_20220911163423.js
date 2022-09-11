import mongoose from "mongoose";
import { default as postModel } from "../Models/postModel.js";
import userModel from "../Models/userModel.js";

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

// delete Post
export const deletePost = async (req, res) => {
	const postId = req.params.id;
	const { userId } = req.body;

	try {
		const post = await postModel.findById(postId);
		if (post.userId === userId) {
			await post.deleteOne();
			res.status(200).json("Post deleted successfully");
		} else {
			res.status(403).json("Action Forbidden");
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

// like and unlike post
export const likePost = async (req, res) => {
	const postId = req.params.id;
	const { userId } = req.body;

	try {
		const post = await postModel.findById(postId);
		if (!post.likes.includes(userId)) {
			await post.updateOne({ $push: { likes: userId } });
			res.status(200).json("Post liked");
		} else {
			await post.updateOne({ $pull: { likes: userId } });
			res.status(200).json("Post Unliked");
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

// Get Timeline Post

export const getTimelinePosts = async (req, res) => {
	const userId = req.params.id;

	try {
		const currentUserPosts = await postModel.findById({ userId: userId });
        const followingPosts = await userModel.aggregate([
            {
                $match:{
                    _id : new mongoose.Types.ObjectId(userId)
                }
            },
            {
                $lookup: {
                    from: 'posts',
                    localField: 'following',
                    foreignField: 
                }
            }
        ])
	} catch (error) {
		res.status(500).json(error);
	}
};
