import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../../Actions/UserAction";
import { createChat } from "../../../Api/ChatRequests";

const User = (data) => {
	const dispatch = useDispatch();
	const _PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
	const { person } = data;
	const { user } = useSelector((state) => state.authReducers.authData);

	const initUsersId = {
		senderId: user._id,
		receiverId: person._id,
	};
	const [following, setFollowing] = useState(
		person.followers.includes(user._id)
	);

	const handleFollow = () => { 

		// handle connect message
		createChat(initUsersId);


		following
			? dispatch(unfollowUser(person._id, user))
			: dispatch(followUser(person._id, user));
		setFollowing((prev) => !prev);
	};

	return (
		<div className="followers mt-1">
			<div className="row">
				<div className="col-auto p-1">
					<img
						src={
							person
								? _PUBLIC_FOLDER + person.profilePicture
								: _PUBLIC_FOLDER + "avatar.png"
						}
						className="followerImg"
						alt=""
					/>
				</div>
				<div className="col pl-1 mx-0">
					<div className="name">
						<span>{person.firstname + " " + person.lastname}</span>
						<span>@{person.username}</span>
					</div>
				</div>
				<div className="col-auto">
					<button
						className={
							following
								? "mt-2 UnfollowButton"
								: "button fc-button mt-2"
						}
						onClick={handleFollow}
					>
						{following ? "Unfollow" : "Follow"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default User;
