import {
	UilLocationPoint,
	UilPlayCircle,
	UilScenery,
	UilSchedule,
	UilTimes
} from "@iconscout/react-unicons";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "reactstrap";
import { uploadImage, uploadPost } from "../../../Actions/UploadAction";
import ProfileImage from "../../../Img/profileImg.jpg";
import Spinners from "../../../Pages/Spinner/Spinners";
import "./PostShare.css";

const PostShare = () => {
	const dispatch = useDispatch();
	const [image, setImage] = useState(null);
	const imageRef = useRef();
	const { user } = useSelector((state) => state.authReducers.authData);
	const desc = useRef();
	const loading = useSelector((state) => state.postReducer.uploading);
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			setImage(img);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const newPost = {
			userId: user._id,
			desc: desc.current.value,
		};

		if (image) {
			const data = new FormData();
			const filename = Date.now() + "-" + Math.round(Math.random() * 1e9) + image.name;
			data.append("name", filename);
			data.append("file", image);
			newPost.image = filename;
			try {
				dispatch(uploadImage(data));
			} catch (err) {
				console.log(err);
			}
		}
		dispatch(uploadPost(newPost));
		resetShare();
	};
	// Reset Post Share
	const resetShare = () => {
		setImage(null);
		desc.current.value = "";
	};
	return (
		<Card className="PostShare">
		{loading && <Spinners/>}
			<div className="row">
				<div className="col-auto p-image pr-0 ">
					<img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "avatar.png"} alt="" />
				</div>
				<div className="col inputs">
					<input
						ref={desc}
						required
						type="text"
						placeholder="What's happening"
					/>
				</div>
			</div>

			<div className="mb-2 p-2 position-relative">
				{image && (
					<div className="previewImage">
						<UilTimes onClick={() => setImage(null)} />
						<img src={URL.createObjectURL(image)} alt="" />
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
				<div
					className="option"
					style={{ color: "var(--video)", cursor: "pointer" }}
				>
					<UilPlayCircle /> Video
				</div>
				<div
					className="option"
					style={{ color: "var(--location)", cursor: "pointer" }}
				>
					<UilLocationPoint /> Location
				</div>
				<div
					className="option"
					style={{ color: "var(--schedule)", cursor: "pointer" }}
				>
					<UilSchedule /> Schedule
				</div>
			</div>
			<button className="button ps-button mt-3" onClick={handleSubmit}>
				Share
			</button>
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
	);
};

export default PostShare;
