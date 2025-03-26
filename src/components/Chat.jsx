import React from "react";

const Chat = () => {
	return (
		<div className="sm:w-3/4 bg-base-300 mx-auto border border-gray-600 m-5 h-[80vh] flex flex-col">
			<h1 className="p-5 border-b border-gray-600">Chat</h1>
			<div className="flex-1 overflow-scroll p-5">
				<div className="chat chat-start">
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
					<div className="chat-bubble">You were the Chosen One!</div>
				</div>
			</div>
			<div className="p-5 border-t border-gray-600 flex items-center gap-2">
				<input className="flex-1 border border-gray-500 text-white rounded p-2"></input>
				<button className="btn btn-secondary">Send</button>
			</div>
		</div>
	);
};

export default Chat;
