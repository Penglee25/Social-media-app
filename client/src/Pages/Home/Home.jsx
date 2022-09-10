import React from "react";
import PostMain from "../../Components/PostComponent/PostMain";
import ProfileMain from "../../Components/ProfileComponent/ProfileMain";
import RightSideMain from "../../Components/RightSideComponent/RightSideMain";

const Home = () => {
	return (
		<div className="row">
			<div className="col-lg-3 col-sm">
				<ProfileMain />
			</div>
			<div className="col-lg-6 col-sm">
				<PostMain/>
			</div>
			<div className="col-lg col-sm">
				<RightSideMain/>
			</div>
		</div>
	);
};

export default Home;
