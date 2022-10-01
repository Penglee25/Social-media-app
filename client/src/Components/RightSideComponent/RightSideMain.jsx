import React, { useState } from "react";
import { Card, Modal } from "reactstrap";
import PostShare from "../PostComponent/PostShare/PostShare";
import NavIcon from "./NavIcon/NavIcon";
import "./RightSideMain.css";
import Trend from "./Trend/Trend";

const RightSideMain = () => {
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);
	return (
		<Card className="RightSideMain">
			<NavIcon/>
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
