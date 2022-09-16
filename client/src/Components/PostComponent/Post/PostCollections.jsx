import React, { useState } from "react";
import { useSelector } from "react-redux";
import { likePost } from "../../../Api/PostsRequests";
import Comment from "../../../Img/comment.png";
import Like from "../../../Img/like.png";
import Share from "../../../Img/share.png";
import Unlike from "../../../Img/unlike.png";

const PostCollections = ({ data }) => {
	const { user } = useSelector((state) => state.authReducers.authData);

	const [liked, setLiked] = useState(data.likes.includes(user._id));
	const [likes, setLikes] = useState(data.likes.length);

	const handleLike = () => {
		setLiked((prev) => !prev);
		likePost(data._id, user._id);
		liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
	};

	return (
		<div className="Post">
			<img
				src={
					data.image
						? process.env.REACT_APP_PUBLIC_FOLDER + data.image
						: ""
				}
			/>
			<div className="postReact">
				<img
					src={liked ? Like : Unlike}
					alt=""
					style={{ cursor: "pointer" }}
					onClick={handleLike}
				/>
				<img src={Comment} alt="" style={{ cursor: "pointer" }} />
				<img src={Share} alt="" style={{ cursor: "pointer" }} />
			</div>
			<span style={{ color: "var(--gray)", fontSize: "12px" }}>
				{likes} likes
			</span>
			<div className="detail">
				<span>
					<b>{data.name}</b>{" "}
				</span>
				<span>{data.desc}</span>
			</div>
		</div>
	);
};

export default PostCollections;
