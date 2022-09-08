import { UilSetting } from "@iconscout/react-unicons";
import React from "react";
import { Card } from "reactstrap";
import Comment from "../../Img/comment.png";
import Home from "../../Img/home.png";
import Notification from "../../Img/notification.png";
import "./RightSideMain.css";
import Trend from "./Trend/Trend";

const RightSideMain = () => {
	return (
		<Card className="RightSideMain">
			<div className="row text-center">
				<div className="col-lg navIcon">
					<img src={Home} alt="" />
				</div>
				<div className="col-lg navIcon">
					<UilSetting />
				</div>
				<div className="col-lg navIcon">
					<img src={Notification} alt="" />
				</div>
				<div className="col-lg navIcon">
					<img src={Comment} alt="" />
				</div>
			</div>
			<Trend />
			<button className="button r-button">Share</button>
		</Card>
	);
};

export default RightSideMain;
