import bcrypt from "bcrypt";
import { default as postModel } from "../Models/postModel.js";

// Create a new Post
export const createPost = async (req, res) => {
    const newPost = new postModel(req.body)

    try {
        
    } catch (error) {
        
    }
};
