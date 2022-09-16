import bodyParser from "body-parser";
import cors from "cors";
import DotenvConfigOptions from "dotenv";
import express from "express";
import mongoose from "mongoose";
import AuthRoute from "./Routes/AuthRoute.js";
import PostRoute from "./Routes/PostRoute.js";
import UploadRoute from "./Routes/UploadRoute.js";
import UserRoute from "./Routes/UserRoute.js";

// Routes

const app = express();

// Config for public image
app.use(express.static('Public')); //<----------- public folder
app.use('/images', express.static('images'))

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); // this allows port 3000 send data to port 5000

DotenvConfigOptions.config();
mongoose
	.connect(process.env.MONGO_DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(process.env.PORT, () =>
			console.log(`Listening at ${process.env.PORT}`)
		)
	)
	.catch((error) => console.log(error));

// Usage of routes
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use("/upload", UploadRoute);
