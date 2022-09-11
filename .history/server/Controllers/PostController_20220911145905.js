import bcrypt from "bcrypt";
import { default as postModel } from "../Models/postModel.js";

// Create a new Post
export const createPost = async (req, res) => {
    const newPost = new postModel(req.body)

    try {
        await newPost.save();
        req.status(200).json
    } catch (error) {
        
    }
};
