import { UilSetting } from "@iconscout/react-unicons";
import React from "react";
import { Link } from "react-router-dom";
import Comment from "../../../Img/comment.png";
import Home from "../../../Img/home.png";
import Notification from "../../../Img/notification.png";

const NavIcon = () => {
	return (
		<div>
			<div className="row text-center">
				<div className="col-lg navIcon">
					<Link to="../home">
						<img src={Home} alt="" />
					</Link>
				</div>
				<div className="col-lg navIcon">
					<UilSetting />
				</div>
				<div className="col-lg navIcon">
					<img src={Notification} alt="" />
				</div>
				<div className="col-lg navIcon">
					<Link to="../chat">
					<img src={Comment} alt="" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavIcon;
