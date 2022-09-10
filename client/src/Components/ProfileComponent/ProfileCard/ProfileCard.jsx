import React from "react";
import { Card, CardBody } from "reactstrap";
import Cover from "../../../Img/cover.jpg";
import Profile from "../../../Img/profileImg.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
	const ProfilePage = true;

	return (
		<Card className="ProfileCard mt-2">
			<div className="ProfileImage">
				<img src={Cover} alt="" />
				<img src={Profile} alt="" />
			</div>
			<CardBody className="mt-3 text-center">
				<div className="followStatus">
					<hr />
					<div>
						<div className="follow">
							<span>6,809</span>
							<span>Followings</span>
						</div>
						<div className="vl"></div>
						<div className="follow">
							<span>1</span>
							<span>Followers</span>
						</div>
						{ProfilePage && (
							<>
								<div className="vl"> </div>
								<div className="follow">
									<span>3</span>
									<span>Post</span>
								</div>
							</>
						)}
					</div>
					<hr />
				</div>
				<div className="d-flex justify-content-center">
					{ProfilePage ? (
						""
					) : (
						<button className="button fc-button">My Profile</button>
					)}
				</div>
			</CardBody>
		</Card>

		// <div className="ProfileCard">
		// 	<div className="ProfileImage">
		// 		<img src={Cover} alt="" />
		// 		<img src={Profile} alt="" />
		// 	</div>

		// 	<div className="ProfileName">
		// 		<span>Zanya Lopez</span>
		// 		<span>Fashion Model | GMA Artist</span>
		// 	</div>

		// 	<div className="followStatus">
		// 		<hr />
		// 		<div>
		// 			<div className="follow">
		// 				<span>6,809</span>
		// 				<span>Followings</span>
		// 			</div>
		// 			<div className="vl"></div>
		// 			<div className="follow">
		// 				<span>1</span>
		// 				<span>Followers</span>
		// 			</div>

		// 			{ProfilePage && (
		// 				<>
		// 					<div className="vl"> </div>
		// 					<div className="follow">
		// 						<span>3</span>
		// 						<span>Post</span>
		// 					</div>
		// 				</>
		// 			)}
		// 		</div>
		// 		<hr />
		// 	</div>

		// 	{ProfilePage ? "" : <span>My Profile</span>}
		// </div>
	);
};

export default ProfileCard;
