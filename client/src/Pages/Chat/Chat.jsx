import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { io } from "socket.io-client";
import { userChats } from "../../Api/ChatRequests";
import Conversation from "../../Components/Chatbox/Conversation/Conversation";
import Message from "../../Components/Chatbox/Messages/Message";
import LogoSearch from "../../Components/ProfileComponent/LogoSearch/LogoSearch";
import NavIcon from "../../Components/RightSideComponent/NavIcon/NavIcon";
import "./Chat.css";

const Chat = () => {
	const socket = useRef();
	const { user } = useSelector((state) => state.authReducers.authData);

	const [chats, setChats] = useState([]);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const [currentChat, setCurrentChat] = useState(null);
	const [sendMessage, setSendMessage] = useState(null);
	const [receivedMessage, setReceivedMessage] = useState(null);

	console.log(chats);

	// Connect to Socket.io
	useEffect(() => {
		socket.current = io("ws://localhost:8800");
		socket.current.emit("new-user-add", user._id);
		socket.current.on("get-users", (users) => {
			setOnlineUsers(users);
		});
	}, [user]);

	// Get the chat in chat section
	useEffect(() => {
		const getChats = async () => {
			try {
				const { data } = await userChats(user._id);
				setChats(data);
			} catch (error) {
				console.log(error);
			}
		};
		getChats();
	}, [user._id]);

	// Send Message to socket server
	useEffect(() => {
		if (sendMessage !== null) {
			socket.current.emit("send-message", sendMessage);
		}
	}, [sendMessage]);

	// Get the message from socket server
	useEffect(() => {
		socket.current.on("recieve-message", (data) => {
			console.log(data);
			setReceivedMessage(data);
		});
	}, []);

	const checkOnlineStatus = (chat) => {
		const chatMember = chat.members.find((member) => member !== user._id);
		const online = onlineUsers.find((user) => user.userId === chatMember);
		return online ? true : false;
	};

	return (
		<div className="Chat">
			{/* Left Side */}
			<div className="Left-side-chat">
				<LogoSearch />
				<div className="Chat-container">
					<h2>Chats</h2>
					<div className="Chat-list">
						{chats.map((chat) => (
							<div
								onClick={() => {
									setCurrentChat(chat);
								}}
							>
								<Conversation
									data={chat}
									currentUser={user._id}
									online={checkOnlineStatus(chat)}
								/>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Right Side */}

			<div className="Right-side-chat">
				<div style={{ width: "20rem", alignSelf: "flex-end" }}>
					<NavIcon />
				</div>
				<Message
					chat={currentChat}
					currentUser={user._id}
					setSendMessage={setSendMessage}
					receivedMessage={receivedMessage}
				/>
			</div>
		</div>
	);
};

export default Chat;
