import { UilPen } from "@iconscout/react-unicons";
import React, { useEffect, useState } from "react";
import { Card } from "reactstrap";
import "./ProfileInfo.css";
import ProfileModal from "./ProfileModal";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { logOut } from "../../../Actions/AuthAction";
import * as UserApi from "../../../Api/UserRequest.js";

const ProfileInfo = () => {
	const [modal, setModal] = useState(false);
	const handleShowModal = () => setModal(true);
	const handleCloseModal = () => setModal(false);

	const dispatch = useDispatch();
	const params = useParams();
	const profileUserId = params.id;
	const [profileUser, setProfileUser] = useState({});

	const { user } = useSelector((state) => state.authReducers.authData);
	useEffect(() => {
		const fetchProfileUser = async () => {
			if (profileUserId === user._id) {
				setProfileUser(user);
			} else {
				const profileUser = await UserApi.getUser(profileUserId);
				setProfileUser(profileUser);
			}
		};
		fetchProfileUser();
	}, [user]);

	const handleLogout = () => {
		dispatch(logOut());
	};

	return (
		<Card className="ProfileInfo mt-2">
			<div className="d-flex justify-content-between">
				<h4>Profile Info</h4>
				{user._id === profileUserId ? (
					<>
						<UilPen
							width="2rem"
							height="1.2rem"
							style={{ cursor: "pointer" }}
							onClick={handleShowModal}
						/>
						<ProfileModal show={modal} onClose={handleCloseModal} data = {user} />
					</>
				) : (
					""
				)}
			</div>

			<div className="info">
				<span>
					<b>Status </b>
				</span>
				<span>{profileUser.relationship}</span>
			</div>
			<div className="info">
				<span>
					<b>Lives in </b>
				</span>
				<span>{profileUser.livesin}</span>
			</div>
			<div className="info">
				<span>
					<b>Works at </b>
				</span>
				<span>{profileUser.worksAt}</span>
			</div>

			<button className="button logout-button" onClick={handleLogout}>
				Logout
			</button>
		</Card>
	);
};

export default ProfileInfo;
