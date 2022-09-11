import mongoose from "mongoose";

const postSchema = mongoose.Model(
	{
		userId: {
			type: String,
			required: true,
		},
		likes: [],
		image: String,
	},
	{ timestamps: true }
);


const postModel = mongoose.model("posts", postSchema);

export default postModel;
