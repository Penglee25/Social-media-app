import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePost } from "../../../Actions/PostsAction";
import Spinners from "../../../Pages/Spinner/Spinners";
import "./Post.css";
import PostCollections from "./PostCollections";

const Post = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.authReducers.authData);
	const { posts, loading } = useSelector((state) => state.postReducer);

	useEffect(() => {
		dispatch(getTimelinePost(user._id));
	}, []);

	return (
		<div className="mt-3">
		{
			loading
			? <Spinners/>
			: posts.map((post, id) => {
				return <PostCollections data={post} id={id} />;
			})}
		</div>
	);
};

export default Post;
