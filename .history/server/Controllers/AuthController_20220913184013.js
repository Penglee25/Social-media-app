import bcrypt from "bcrypt";
import UserModel from "../Models/userModel.js";

// Register new user
export const registerUser = async (req, res) => {
	// encryption hash
	const salt = await bcrypt.genSalt(10);
	const hashedPass = await bcrypt.hash(password, salt);
	req.body.password = hashedPass;
	const newUser = new UserModel(req.body);
	const { username } = req.body;

	try {
		const oldUser = await UserModel.findOne({ username });

		if (oldUser) {
			return res
				.status(400)
				.json({ message: "username is already registered!" });
		}

		await newUser.save();
		res.status(200).json(newUser);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Login user
export const loginUser = async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await UserModel.findOne({ username: username });
		if (user) {
			const validation = await bcrypt.compare(password, user.password);
			validation
				? res.status(200).json(user)
				: res.status(400).json("Wrong Password");
		} else {
			res.status(404).json("User does not exists!");
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
