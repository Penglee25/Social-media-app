import React from "react";
import Post from "./Post/Post";
import "./PostMain.css";
import PostShare from "./PostShare/PostShare";

const PostMain = () => {
	return (
		<div className="PostMain">
			<PostShare />
			<Post/>
		</div>
	);
};

export default PostMain;
