import mongoose from "mongoose";

const postSchema = mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		likes: [],
		firstname: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		profilePicture: String,
	},
	{ timestamps: true }
);

const userModel = mongoose.model("users", UserSchema);

export default userModel;