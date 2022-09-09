import { UilPen } from "@iconscout/react-unicons";
import React, { useState } from "react";
import { Card } from "reactstrap";
import "./ProfileInfo.css";
import ProfileModal from "./ProfileModal";

const ProfileInfo = () => {
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);
	return (
		<Card className="ProfileInfo mt-2">
			<div className="d-flex justify-content-between">
				<h4>Your Info</h4>
				<UilPen
					width="2rem"
					height="1.2rem"
					style={{ cursor: "pointer" }}
					onClick={toggle}
				/>
				<ProfileModal modal={modal} toggle={toggle} />
			</div>

			<div className="info">
				<span>
					<b>Status </b>
				</span>
				<span>In a Relationship</span>
			</div>
			<div className="info">
				<span>
					<b>Lives in </b>
				</span>
				<span>Multan</span>
			</div>
			<div className="info">
				<span>
					<b>Works at </b>
				</span>
				<span>Google</span>
			</div>

			<button className="button logout-button">Logout</button>
		</Card>
	);
};

export default ProfileInfo;
