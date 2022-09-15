import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, Form, Input, Spinner } from "reactstrap";
import { logIn, signUp } from "../../Actions/AuthAction";
import Spinners from '../Spinner/Spinner';
import "./Auth.css";

const Auth = () => {
	const initialState = {
		firstname: "",
		lastname: "",
		password: "",
		cpassword: "",
		username: "",
	};

	const loading = useSelector((state) => state.authReducers.loading);
	const dispatch = useDispatch();
	const [isSignUp, setIsSignUp] = useState(false);

	const [data, setData] = useState(initialState);
	const [confirmPass, setConfirmPass] = useState(true);

	const resetForm = () => {
		setData(initialState);
		setConfirmPass(confirmPass);
	};

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		setConfirmPass(true);
		e.preventDefault();

		if (isSignUp) {
			return data.password === data.cpassword
				? dispatch(signUp(data))
				: setConfirmPass(false);
		}
		return dispatch(logIn(data));
	};

	return (
		<div
			className="container"
			style={{ width: "50%", margin: "10% 0 20% 25%" }}
		>
			<Loading/>
			<div className="d-flex justify-content-center">
				<Card className="Auth">
					<CardBody>
						<div className="text-center mb-3">
							<span
								style={{ fontWeight: "bold", fontSize: "29px" }}
							>
								{isSignUp ? "Sign Up" : "Log In"}
							</span>
						</div>

						<Form onSubmit={handleSubmit}>
							<div className="form-group">
								{isSignUp && (
									<div className="row">
										<div className="col-lg-6">
											<Input
												id="firstname"
												name="firstname"
												placeholder="First Name"
												type="text"
												onChange={handleChange}
											/>
										</div>
										<div className="col-lg-6">
											<Input
												id="lastname"
												name="lastname"
												placeholder="Last Name"
												type="text"
												onChange={handleChange}
											/>
										</div>
									</div>
								)}

								<div className="row mt-2">
									<div className="col-lg-12">
										<Input
											id="username"
											name="username"
											placeholder="Username"
											type="text"
											onChange={handleChange}
											value={data.username}
										/>
									</div>
								</div>

								<div className="row mt-2">
									<div
										className={
											isSignUp ? "col-lg-6" : "col-lg-12"
										}
									>
										<Input
											id="password"
											name="password"
											placeholder="Password"
											type="password"
											onChange={handleChange}
											value={data.password}
										/>
									</div>
									{isSignUp && (
										<div className="col-lg-6">
											<Input
												id="cpassword"
												name="cpassword"
												placeholder="Confirm Password"
												type="password"
												onChange={handleChange}
												value={data.cpassword}
											/>
										</div>
									)}
								</div>
								{isSignUp && (
									<div
										className="text-center"
										style={{
											display: confirmPass
												? "none"
												: "block",
										}}
									>
										<span
											className="text-danger"
											style={{ fontSize: "12px" }}
										>
											* Confirm Password is not the same
											as Password
										</span>
									</div>
								)}

								<div className="row justify-content-between mt-3">
									<div className="col-lg-auto">
										<span
											style={{ cursor: "pointer" }}
											onClick={() => {
												resetForm();
												setIsSignUp((prev) => !prev);
											}}
										>
											{isSignUp
												? "Already have an account?"
												: "Don't have an account?"}
										</span>
									</div>
									<div className="col-lg-auto">
										<button
											className="button signup"
											disabled={loading}
										>
											<Spinner
												className={
													!loading ? "d-none" : ""
												}
												size="sm"
											></Spinner>
											{loading
												? "Loading..."
												: isSignUp
												? "Sign Up"
												: "Log In"}
										</button>
									</div>
								</div>
							</div>
						</Form>
					</CardBody>
				</Card>
			</div>
		</div>
	);
};

export default Auth;
