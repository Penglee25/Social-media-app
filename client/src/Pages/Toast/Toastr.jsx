import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';

const Toastr = () => {
	const defaultToaster = () => {
		toast("default toast", {
			position: 'top-right',
			autoClose: 5000,
			draggable: true
		})
	}
	return (
		<div>
			<Button className="btn btn-default" onClick={() => defaultToaster()}></Button>
		</div>
	);
};

export default Toastr;
