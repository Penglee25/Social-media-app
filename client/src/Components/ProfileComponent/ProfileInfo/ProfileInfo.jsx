import { UilPen } from "@iconscout/react-unicons";
import React, { useState } from "react";
import { Card, Form, FormGroup, Input, Label, Modal, ModalBody } from "reactstrap";
import "./ProfileInfo.css";

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
				<Modal isOpen={modal} toggle={toggle}>
					<ModalBody>
						<Form>
							<div className="text-center">
								<h4 style={{ fontWeight: "bold" }}>
									Your Info
								</h4>

								<div className="row mt-4">
									<div className="col-lg">
										<Input
											id="firstname"
											name="firstname"
											placeholder="First Name"
											type="text"
										/>
									</div>
									<div className="col-lg">
										<Input
											id="lastname"
											name="lastname"
											placeholder="Last Name"
											type="text"
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
										/>
									</div>
								</div>

								<div className="row">
									<div className="col-lg">
										<Input
											id="livesIn"
											name="livesIn"
											placeholder="Lives In"
											type="text"
										/>
									</div>
									<div className="col-lg">
										<Input
											id="country"
											name="country"
											placeholder="Country"
											type="text"
										/>
									</div>
								</div>

								<div className="row my-2">
									<div className="col-lg">
										<Input
											id="relationShipStatus"
											name="relationShipStatus"
											placeholder="RelationShip Status"
											type="text"
										/>
									</div>
								</div>

								<div className="row my-2">
									<div className="col-lg">
										<FormGroup>
											<Label for="profileImage">
												Profile Image
											</Label>
											<Input
												id="profileImage"
												name="profileImage"
												type="file"
											/>
										</FormGroup>
									</div>
									<div className="col-lg">
										<FormGroup>
											<Label for="coverImage">
												Cover Image
											</Label>
											<Input
												id="coverImage"
												name="coverImage"
												type="file"
											/>
										</FormGroup>
									</div>

									<div className="col-lg-12 col-sm-12 d-flex justify-content-end">
										<button className="button">Update</button>
									</div>
								</div>
							</div>
						</Form>
					</ModalBody>
				</Modal>
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
