import React from "react";
import { Card, CardBody } from "reactstrap";
import { Followers } from "../../../Data/FollowersData";
import "./FollowersCard.css";

const FollowerCard = () => {
	return (
		<div className="FollowersCard mt-2">
			<Card className="ProfileCard">
				<CardBody>
					<span className="text-secondary">Who is following you</span>
					{Followers.map((followers, id) => {
						return (
							<div className="followers mt-1">
								<div className="row">
									<div className="col-auto p-1">
										<img
											src={followers.img}
											className="followerImg"
											alt=""
										/>
									</div>
									<div className="col pl-1 mx-0">
										<div className="name">
											<span>{followers.name}</span>
											<span>@{followers.username}</span>
										</div>
									</div>
									<div className="col-4">
										<button className="button fc-button mt-2">
											Follow
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</CardBody>
			</Card>
		</div>
	);
};

export default FollowerCard;
