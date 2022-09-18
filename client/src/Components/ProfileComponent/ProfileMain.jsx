import React from "react";
import FollowerCard from "./FollowersCard/FollowersCard";
import LogoSearch from "./LogoSearch/LogoSearch";
import ProfileCard from "./ProfileCard/ProfileCard";

import "./ProfileMain.css";
const ProfileMain = () => {
	return (
		<div className="ProfileMain">
			<LogoSearch />
			<ProfileCard location="profilePage"/>
			<FollowerCard/>
		</div>
	);
};

export default ProfileMain;
