import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardBody } from "reactstrap";
import { getAllUser } from "../../../Api/UserRequest";
import User from "../Users/User";
import "./FollowersCard.css";

const FollowerCard = () => {
	const [persons, setPersons] = useState([]);
	const { user } = useSelector((state) => state.authReducers.authData);

	useEffect(() => {
		const fetchPerson = async() => {
			const {data} = await getAllUser();
			setPersons(data);
		}
		fetchPerson();
	},[])

	return (
		<div className="FollowersCard mt-2">
			<Card className="ProfileCard">
				<CardBody>
					<span className="text-secondary">People you may know</span>
					{persons.map((person, id) => {
						if(person._id !== user._id) return <User person = {person} key={id} />
					})}
				</CardBody>
			</Card>
		</div>
	);
};

export default FollowerCard;
