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


const po = mongoose.model("posts", UserSchema);

export default postSchema;
