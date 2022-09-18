import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Form, FormGroup, Input, Label, Modal, ModalBody } from "reactstrap";
import { uploadImage } from "../../../Actions/UploadAction";
import { updateUser } from "../../../Actions/UserAction";

const ProfileModal = (props) => {
	const { show, onClose, data } = props;

	const { password, ...other } = data;
	const [formData, setFormData] = useState(other);
	const [profileImage, setProfileImage] = useState(null);
	const [coverImage, setCoverImage] = useState(null);
	const dispatch = useDispatch();
	const param = useParams();
	const { user } = useSelector((state) => state.authReducers.authData);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
		  let img = event.target.files[0];
		  event.target.name === "profilePicture"
			? setProfileImage(img)
			: setCoverImage(img);
		}
	  };

	const handleSubmit = (e) => {
		e.preventDefault();
		let userData = formData;
		if(profileImage){
			const data = new FormData();
			const filename = Date.now() + "-" + Math.round(Math.random() * 1e9) + profileImage.name;
			data.append("name", filename);
			data.append("file", profileImage);
			userData.profilePicture = filename;
			try {
			  dispatch(uploadImage(data));
			} catch (err) {
			  console.log(err);
			}
		}

		if(coverImage){
			const data = new FormData();
			const filename = Date.now() + "-" + Math.round(Math.random() * 1e9) + coverImage.name;
			data.append("name", filename);
			data.append("file", coverImage);
			userData.coverPicture = filename;
			try {
			  dispatch(uploadImage(data));
			} catch (err) {
			  console.log(err);
			}
		}

		dispatch(updateUser(param.id, userData));
		onClose(true);
	}

	return (
		<Modal isOpen={show} toggle={onClose}>
			<ModalBody>
				<Form>
					<div className="text-center">
						<h4 style={{ fontWeight: "bold" }}>Your Info</h4>

						<div className="row mt-4">
							<div className="col-lg">
								<Input
									id="firstname"
									name="firstname"
									placeholder="First Name"
									type="text"
									onChange={handleChange}
									value={formData.firstname}
								/>
							</div>
							<div className="col-lg">
								<Input
									id="lastname"
									name="lastname"
									placeholder="Last Name"
									type="text"
									onChange={handleChange}
									value={formData.lastname}
								/>
							</div>
						</div>

						<div className="row my-2">
							<div className="col-lg">
								<Input
									id="worksAt"
									name="worksAt"
									placeholder="Works at"
									type="text"
									onChange={handleChange}
									value={formData.worksAt}
								/>
							</div>
						</div>

						<div className="row">
							<div className="col-lg">
								<Input
									id="livesin"
									name="livesin"
									placeholder="Lives In"
									type="text"
									onChange={handleChange}
									value={formData.livesin}
								/>
							</div>
							<div className="col-lg">
								<Input
									id="country"
									name="country"
									placeholder="Country"
									type="text"
									onChange={handleChange}
									value={formData.country}
								/>
							</div>
						</div>

						<div className="row my-2">
							<div className="col-lg">
								<Input
									id="relationship"
									name="relationship"
									placeholder="RelationShip Status"
									type="text"
									onChange={handleChange}
									value={formData.relationship}
								/>
							</div>
						</div>

						<div className="row my-2">
							<div className="col-lg">
								<FormGroup>
									<Label for="profilePicture">
										Profile Image
									</Label>
									<Input
										id="profilePicture"
										name="profilePicture"
										type="file"
										onChange={onImageChange}
									/>
								</FormGroup>
							</div>
							<div className="col-lg">
								<FormGroup>
									<Label for="coverPicture">
										Cover Image
									</Label>
									<Input
										id="coverPicture"
										name="coverPicture"
										type="file"
										onChange={onImageChange}
									/>
								</FormGroup>
							</div>

							<div className="col-lg-12 col-sm-12 d-flex justify-content-end">
								<button className="button" onClick={handleSubmit}>Update</button>
							</div>
						</div>
					</div>
				</Form>
			</ModalBody>
		</Modal>
	);
};

export default ProfileModal;
