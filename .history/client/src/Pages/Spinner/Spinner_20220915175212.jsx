import React from "react";
import { Spinner } from "reactstrap";

const Spinner = () => {
	return (
		<div className="loadingSpinner">
			<Spinner color="primary" type="grow">
				Loading...
			</Spinner>
			<Spinner color="warning" type="grow">
				Loading...
			</Spinner>
			<Spinner color="success" type="grow">
				Loading...
			</Spinner>
		</div>
	);
};

export default Spinner;
