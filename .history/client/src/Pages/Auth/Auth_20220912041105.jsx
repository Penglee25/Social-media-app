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


export default Auth;
