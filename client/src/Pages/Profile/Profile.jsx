import React from "react";
import Post from "../../Components/PostComponent/Post/Post";
import PostShare from "../../Components/PostComponent/PostShare/PostShare";
import ProfileCard from "../../Components/ProfileComponent/ProfileCard/ProfileCard";
import ProfileLeft from "../../Components/ProfileComponent/ProfileLeft/ProfileLeft";
import RightSideMain from "../../Components/RightSideComponent/RightSideMain";

const Profile = () => {
	return (
		<div className="Profile">
			<div className="row">
				<div className="col-lg-3 col-sm">
					<ProfileLeft/>
				</div>
				<div className="col-lg-6 col-sm">
					<ProfileCard/>
                    <PostShare/>
					<Post/>
				</div>
				<div className="col-lg col-sm">
					<RightSideMain/>
				</div>
			</div>
		</div>
	);
};

export default Profile;
