import bodyParser from "body-parser";
import DotenvConfigOptions from "dotenv";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import AuthRoute from "./Routes/AuthRoute.js";
import PostRoute from "./Routes/PostRoute.js";
import UserRoute from "./Routes/UserRoute.js";

// Routes

const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use

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
