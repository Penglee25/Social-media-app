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


const post = mongoose.model("posts", UserSchema);

export default postSchema;
