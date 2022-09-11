import mongoose from "mongoose";

const postSchema = mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		likes: [],
		profilePicture: String,
	},
	{ timestamps: true }
);

const userModel = mongoose.model("users", UserSchema);

export default userModel;
