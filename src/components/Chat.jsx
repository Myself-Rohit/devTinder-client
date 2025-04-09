import React, { useEffect, useState } from "react";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useSendMessage from "../hooks/useSendMessage.js";
import useGetMessages from "../hooks/useGetMessages.js";
import moment from "moment";

const Chat = () => {
	const user = useSelector((store) => store.user);
	const { receiverId } = useParams();
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

	const handleClick = () => {
		const socket = createSocketConnection();
		socket.emit("sendMessage", { senderId, receiverId, message });
		sendMessage(receiverId, message);
	};
	return (
		<div className="sm:w-3/4 bg-base-300 mx-auto border border-gray-600 m-5 h-[80vh] flex flex-col">
			{chats && (
				<>
					<h1 className="p-5 border-b border-gray-600">
						{+chats[0]?.receiverId
							? "Chats with " + chats[0]?.receiverId?.firstName
							: "Start Your chats now"}
					</h1>
					<div className="flex-1 overflow-scroll p-5 bg-slate-500">
						{chats.length &&
							chats?.map((chat) => {
								return (
									<div
										key={chat?._id}
										className={`chat ${
											chat?.senderId?._id == user?._id
												? "chat-end"
												: "chat-start"
										}`}
									>
										<div className="chat-image avatar">
											<div className="w-10 rounded-full">
												<img alt="user image" src={chat?.senderId?.photoUrl} />
											</div>
										</div>
										<div className="chat-header">
											{chat?.senderId?.firstName}
											<time className="text-xs opacity-50">
												{moment(chat?.createdAt).format("hh:mm")}
											</time>
										</div>
										<div className="chat-bubble bg-base-200">
											{chat?.message}
										</div>
									</div>
								);
							})}
					</div>
				</>
			)}
			<div className="p-5 border-t border-gray-600 flex items-center gap-2">
				<input
					placeholder="Type your message..."
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
