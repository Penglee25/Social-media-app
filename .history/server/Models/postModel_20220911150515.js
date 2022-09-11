import mongoose from "mongoose";

const postSchema = mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		image: String,
		likes: [],
		image: String,
	},
	{ timestamps: true }
);


const postModel = mongoose.model("posts", postSchema);

export default postModel;
