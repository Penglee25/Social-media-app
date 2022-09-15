import React, { useState } from "react";
import { Card, CardBody, Form, Input } from "reactstrap";
import "./Auth.css";

const Auth = () => {
	const [isSignUp, setIsSignUp] = useState(false);

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
								{isSignUp ? "Sign Up" : "Log In"}
							</span>
						</div>

						{ isSignUp ? <SignUp/> : <Login /> }

						
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
						<a href="" role="button" onClick={setIsSignUp((prev) => !prev)}>Don't have an account?</a>
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
		
	);
};

export default Auth;
