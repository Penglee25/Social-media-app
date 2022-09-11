import bcrypt from "bcrypt";
import {
	default as userModel,
	default as UserModel
} from "../Models/userModel.js";

// get a User
export const getUser = async (req, res) => {
	const id = req.params.id;

	try {
		const user = await UserModel.findById(id);
		if (user) {
			// remove password when fetching
			const { password, ...otherDetails } = user._doc;
			res.status(200).json(otherDetails);
		} else {
			res.status(404).json("No such user exists!");
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

// Update a User
export const updateUser = async (req, res) => {
	const id = req.params.id;
	const { currentUserId, currentUserAdminStatus, password } = req.body;

	if (id === currentUserId || currentUserAdminStatus) {
		try {
			if (password) {
				const salt = await bcrypt.genSalt(10);
				req.body.password = await bcrypt.hash(password, salt);
			}
			const user = await UserModel.findByIdAndUpdate(id, req.body, {
				new: true,
			});
			res.status(200).json(user);
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json(
			"Access Denied! You can only update your own profile"
		);
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

// Follow a User
export const followUser = async (req, res) => {
	const id = req.params.id;
	const { currentUserId } = req.body;

	if (currentUserId === id) {
		res.status(403).json("Action forbidden");
	} else {
		try {
			const followUser = userModel.findById(id);
			const followingUser = userModel.findById(currentUserId);

			if(!followUser.followers.include(currentUserId)){
				await followUser.updateOne({$push: {followers: currentUserId}})
				await followingUser.updateOne({$push: {following: id}})
				res.status(200).json("User followed!");
			}
		} catch (error) {
			res.status(500).json(error);
		}
	}
};
