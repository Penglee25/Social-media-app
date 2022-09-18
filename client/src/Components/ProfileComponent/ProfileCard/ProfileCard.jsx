import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import Spinners from "../../../Pages/Spinner/Spinners";
import "./ProfileCard.css";

const ProfileCard = ({ location }) => {
	const { user } = useSelector((state) => state.authReducers.authData);
	const posts = useSelector((state) => state.postReducer.posts);
	const _PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
	const loading = useSelector((state) => state.authReducers.updateLoading);

	const ProfilePage = false;

	return (
		<Card className="ProfileCard mt-2">
			{loading && <Spinners />}
			<div className="ProfileImage">
				<img
					src={
						user.coverPicture
							? _PUBLIC_FOLDER + user.coverPicture
							: _PUBLIC_FOLDER + "cover.jpg"
					}
					alt=""
				/>
				<img
					src={
						user.profilePicture
							? _PUBLIC_FOLDER + user.profilePicture
							: _PUBLIC_FOLDER + "avatar.png"
					}
					alt=""
				/>
			</div>
			<CardBody className="mt-3 text-center">
				<span
					className="username"
					style={{ fontWeight: "bold", fontSize: "15px" }}
				>
					<p className="mb-0">
						{user.firstname} {user.lastname}
					</p>
				</span>
				<span className="occupation" style={{ fontSize: "12px" }}>
					{user.workAt ? user.workAt : "Write bio"}
				</span>
				<div className="followStatus">
					<hr />
					<div>
						<div className="follow">
							<span>{user.following.length}</span>
							<span>Followings</span>
						</div>
						<div className="vl"></div>
						<div className="follow">
							<span>{user.followers.length}</span>
							<span>Followers</span>
						</div>
						{location !== "profilePage" && (
							<>
								<div className="vl"> </div>
								<div className="follow">
									<span>
										{
											posts.filter(
												(post) =>
													post.userId === user._id
											).length
										}
									</span>
									<span>Post</span>
								</div>
							</>
						)}
					</div>
					<hr />
				</div>
				<div className="d-flex justify-content-center">
					{location !== "profilePage" ? (
						""
					) : (
						<button className="button fc-button">
							<Link
								style={{
									textDecoration: "none",
									color: "inherit",
								}}
								to={`/profile/${user._id}`}
							>
								My Profile
							</Link>
						</button>
					)}
				</div>
			</CardBody>
		</Card>
	);
};

export default ProfileCard;
