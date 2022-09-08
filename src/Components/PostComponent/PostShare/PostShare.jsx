import {
    UilLocationPoint,
    UilPlayCircle,
    UilScenery,
    UilSchedule,
    UilTimes
} from "@iconscout/react-unicons";
import React, { useRef, useState } from "react";
import { Card } from "reactstrap";
import ProfileImage from "../../../Img/profileImg.jpg";
import "./PostShare.css";

const PostShare = () => {
	const [image, setImage] = useState(null);
	const imageRef = useRef();

	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			setImage({
				image: URL.createObjectURL(img),
			});
		}
	};

	return (
		<Card className="PostShare">
			<div className="row">
				<div className="col-auto p-image pr-0 ">
					<img src={ProfileImage} alt="" />
				</div>
				<div className="col inputs">
					<input type="text" placeholder="What's happening" />
				</div>
			</div>

			<div className="mb-2 p-2 position-relative">
				{image && (
					<div className="previewImage">
						<UilTimes onClick={() => setImage(null)} />
						<img src={image.image} alt="" />
					</div>
				)}
			</div>

			<div className="d-flex justify-content-around">
				<div
					className="option"
					style={{ color: "var(--photo)", cursor: "pointer" }}
					onClick={() => imageRef.current.click()}
				>
					<UilScenery /> Photo
				</div>
				<div className="option" style={{ color: "var(--video)", cursor: "pointer" }}>
					<UilPlayCircle /> Video
				</div>
				<div className="option" style={{ color: "var(--location)", cursor: "pointer" }}>
					<UilLocationPoint /> Location
				</div>
				<div className="option" style={{ color: "var(--schedule)", cursor: "pointer" }}>
					<UilSchedule /> Schedule
				</div>
			</div>
			<button className="button ps-button mt-3">Share</button>
			<div style={{ display: "none" }}>
				<input
					type="file"
					name="myImage"
					ref={imageRef}
					onChange={onImageChange}
					accept=".jpg,.png,.jfif"
				/>
			</div>
		</Card>

		// <div className="PostShare">
		// 	<img src={ProfileImage} alt="" />
		// 	<div>
		// 		<input type="text" placeholder="What's happening" />
		// 		<div className="postOptions">
		// 			<div className="option" style={{ color: "var(--photo)" }} onClick={() => imageRef.current.click()}>
		// 				<UilScenery /> Photo
		// 			</div>
		// 			<div className="option" style={{ color: "var(--video)" }}>
		// 				<UilPlayCircle /> Video
		// 			</div>
		// 			<div
		// 				className="option"
		// 				style={{ color: "var(--location)" }}
		// 			>
		// 				<UilLocationPoint /> Location
		// 			</div>
		// 			<div
		// 				className="option"
		// 				style={{ color: "var(--schedule)" }}
		// 			>
		// 				<UilSchedule /> Schedule
		// 			</div>
		// 			<button className="button ps-button">Share</button>
		//             <div style={{ display: 'none' }}>
		//                 <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} accept=".jpg,.png,.jfif"/>
		//             </div>
		// 		</div>
		//         {image &&
		//             <div className="previewImage">
		//                 <UilTimes onClick={() => setImage(null)} />
		//                 <img src={image.image} alt="" />
		//             </div>
		//         }
		// 	</div>
		// </div>
	);
};

export default PostShare;
