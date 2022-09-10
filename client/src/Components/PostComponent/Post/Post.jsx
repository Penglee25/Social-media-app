import React from "react";
import { PostData } from "../../../Data/PostData";
import PostCollections from "./PostCollections";
import "./Post.css";

const Post = () => {
	return (
		<div className="mt-3">
			{PostData.map((post, id) => {
				return <PostCollections data = {post} />;
			})}
		</div>
	);
};

export default Post;
