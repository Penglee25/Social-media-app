import React, { useState } from "react";
import { Card, CardBody, Form, Input } from "reactstrap";
import "./Auth.css";

const Auth = () => {
	const [isSignedUp, setIsSignedUp] = useState(false);

	return (
		<div
			className="container"
			style={{ width: "50%", margin: "10% 0 20% 25%" }}
		>
			<div className="d-flex justify-content-center">
				<Card className="Auth">
					<CardBody>
						<div className="text-center mb-3">
							<span
								style={{ fontWeight: "bold", fontSize: "29px" }}
							>
								{isSignedUp ? "Sign Up" : "Log In"}
							</span>
						</div>

						{ is}

						<Login />
					</CardBody>
				</Card>
			</div>
		</div>
	);
};

const Login = () => {
	return (
		<Form>
			<div className="form-group">
				<div className="row mt-2">
					<div className="col-lg-12">
						<Input
							id="username"
							name="username"
							placeholder="Username"
							type="text"
						/>
					</div>
				</div>

				<div className="row mt-2">
					<div className="col-lg-12">
						<Input
							id="password"
							name="password"
							placeholder="Password"
							type="password"
						/>
					</div>
				</div>

				<div className="row justify-content-between mt-3">
					<div className="col-lg-auto">
						<a href="#">Don't have an account?</a>
					</div>
					<div className="col-lg-auto">
						<button className="button signup">Login</button>
					</div>
				</div>
			</div>
		</Form>
	);
};
const SignUp = () => {
	return (
		<Form>
			<div className="form-group">
				<div className="row">
					<div className="col-lg-6">
						<Input
							id="firstname"
							name="firstname"
							placeholder="First Name"
							type="text"
						/>
					</div>
					<div className="col-lg-6">
						<Input
							id="lastname"
							name="lastname"
							placeholder="Last Name"
							type="text"
						/>
					</div>
				</div>

				<div className="row mt-2">
					<div className="col-lg-12">
						<Input
							id="username"
							name="username"
							placeholder="Username"
							type="text"
						/>
					</div>
				</div>

				<div className="row mt-2">
					<div className="col-lg-6">
						<Input
							id="password"
							name="password"
							placeholder="Password"
							type="password"
						/>
					</div>
					<div className="col-lg-6">
						<Input
							id="cpassword"
							name="cpassword"
							placeholder="Confirm Password"
							type="password"
						/>
					</div>
				</div>

				<div className="row justify-content-between mt-3">
					<div className="col-lg-auto">
						<a href="#">Already have an account?</a>
					</div>
					<div className="col-lg-auto">
						<button className="button signup">Sign Up</button>
					</div>
				</div>
			</div>
		</Form>
	);
};

export default Auth;
