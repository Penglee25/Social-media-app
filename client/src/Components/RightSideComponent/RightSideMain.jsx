import { UilSetting } from "@iconscout/react-unicons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Modal } from "reactstrap";
import Comment from "../../Img/comment.png";
import Home from "../../Img/home.png";
import Notification from "../../Img/notification.png";
import PostShare from "../PostComponent/PostShare/PostShare";
import "./RightSideMain.css";
import Trend from "./Trend/Trend";

const RightSideMain = () => {
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);
	return (
		<Card className="RightSideMain">
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
					<img src={Comment} alt="" />
				</div>
			</div>
			<Trend />
			<button className="button r-button" onClick={toggle}>
				Share
			</button>
			<Modal isOpen={modal} toggle={toggle}>
				<PostShare />
			</Modal>
		</Card>
	);
};

export default RightSideMain;
