import { UilSetting } from "@iconscout/react-unicons";
import React, { useState } from "react";
import { Card } from "reactstrap";
import Comment from "../../Img/comment.png";
import Home from "../../Img/home.png";
import Notification from "../../Img/notification.png";
import "./RightSideMain.css";
import Trend from "./Trend/Trend";
import { Form, FormGroup, Input, Label, Modal, ModalBody } from "reactstrap";
import PostShare from "../PostComponent/PostShare/PostShare";

const RightSideMain = () => {
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);
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
