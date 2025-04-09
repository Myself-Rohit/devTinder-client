import React, { useEffect, useRef, useState } from "react";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useSendMessage from "../hooks/useSendMessage.js";
import useGetMessages from "../hooks/useGetMessages.js";
import moment from "moment";
import useGetUserById from "../hooks/useGetUserById.js";

const Chat = () => {
	const user = useSelector((store) => store.user);
	const { receiverId } = useParams();
	const { userData } = useGetUserById(receiverId);
	console.log("receiver:", userData);
	const senderId = user?._id;
	const [message, setMessage] = useState("");
	const { chats, setChats } = useGetMessages(receiverId);
	const { sendMessage } = useSendMessage();
	useEffect(() => {
		const socket = createSocketConnection();
		socket.emit("joinChat", { senderId, receiverId });
		socket.on("messageReceived", ({ senderId, receiverId, message }) => {
			setMessage("");
			setChats((preChats) => [...preChats, { senderId, receiverId, message }]);
		});
		return () => socket.disconnect();
	}, [senderId, receiverId]);

	const handleClick = (e) => {
		e.preventDefault();
		const socket = createSocketConnection();
		socket.emit("sendMessage", { senderId, receiverId, message });
		sendMessage(receiverId, message);
	};
	const latestMessage = useRef();
	useEffect(() => {
		setTimeout(() => {
			latestMessage.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [chats.length]);
	return (
		<div className="sm:w-3/4 bg-base-300 mx-auto border border-gray-600 m-5 h-[80vh] flex flex-col">
			{chats && (
				<>
					<h1 className="p-5 border-b border-gray-600">
						{"Chats with " + userData?.firstName}
					</h1>
					<div className="flex-1 overflow-scroll p-5 bg-slate-300">
						{chats.length &&
							chats?.map((chat) => {
								return (
									<div
										ref={latestMessage}
										key={chat?._id}
										className={`chat ${
											chat?.senderId == user?._id ? "chat-end" : "chat-start"
										}`}
									>
										<div className="chat-image avatar">
											<div className="w-10 rounded-full">
												<img
													alt="user image"
													src={
														chat?.senderId == user?._id
															? user?.photoUrl
															: userData?.photoUrl
													}
												/>
											</div>
										</div>
										<div className="chat-header">
											{chat?.senderId == user?._id
												? user?.firstName
												: userData?.firstName}
											<time className="text-xs opacity-50">
												{moment(chat?.createdAt).format("hh:mm")}
											</time>
										</div>
										<div
											className={`chat-bubble  ${
												chat?.senderId == user?._id
													? "bg-blue-300"
													: "bg-base-300"
											}`}
										>
											{chat?.message}
										</div>
									</div>
								);
							})}
					</div>
				</>
			)}
			<form
				onSubmit={handleClick}
				className="p-5 border-t border-gray-600 flex items-center gap-2"
			>
				<input
					placeholder="Type your message..."
					value={message}
					className="flex-1 border border-gray-500 rounded p-2"
					onChange={(e) => setMessage(e.target.value)}
				></input>
				<button type="submit" className="btn btn-secondary">
					Send
				</button>
			</form>
		</div>
	);
};

export default Chat;
