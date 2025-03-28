import React, { useEffect, useState } from "react";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useSendMessage from "../hooks/useSendMessage.js";
import useGetMessages from "../hooks/useGetMessages.js";

const Chat = () => {
	const user = useSelector((store) => store.user);
	const { receiverId } = useParams();
	const senderId = user?._id;
	const [message, setMessage] = useState("");

	const { chats, setChats } = useGetMessages(receiverId);
	const { sendMessage } = useSendMessage();
	console.log(chats);
	useEffect(() => {
		const socket = createSocketConnection();
		socket.emit("joinChat", { senderId, receiverId });
		socket.on("messageReceived", ({ senderId, receiverId, message }) => {
			setMessage("");
			setChats((preChats) => [...preChats, { senderId, receiverId, message }]);
		});
		return () => socket.disconnect();
	}, [senderId, receiverId]);

	const handleClick = () => {
		const socket = createSocketConnection();
		socket.emit("sendMessage", { senderId, receiverId, message });
		sendMessage(receiverId, message);
	};
	return (
		<div className="sm:w-3/4 bg-base-300 mx-auto border border-gray-600 m-5 h-[80vh] flex flex-col">
			<h1 className="p-5 border-b border-gray-600">John Doe</h1>
			<div className="flex-1 overflow-scroll p-5">
				{chats &&
					chats?.map((chat) => {
						return (
							<div
								key={chat?._id}
								className={`chat ${
									chat?.senderId == user?._id ? "chat-end" : "chat-start"
								}`}
							>
								<div className="chat-image avatar">
									<div className="w-10 rounded-full">
										<img
											alt="Tailwind CSS chat bubble component"
											src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
										/>
									</div>
								</div>
								<div className="chat-header">
									John Doe
									<time className="text-xs opacity-50">12:45</time>
								</div>
								<div className="chat-bubble bg-base-200">{chat?.message}</div>
							</div>
						);
					})}
			</div>
			<div className="p-5 border-t border-gray-600 flex items-center gap-2">
				<input
					value={message}
					className="flex-1 border border-gray-500 rounded p-2"
					onChange={(e) => setMessage(e.target.value)}
				></input>
				<button onClick={handleClick} className="btn btn-secondary">
					Send
				</button>
			</div>
		</div>
	);
};

export default Chat;
