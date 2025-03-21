import React from "react";
import useRequests from "../hooks/useRequests.js";
import useResponse from "../hooks/useResponse.js";
import { useSelector } from "react-redux";

const Requests = () => {
	useRequests();
	const data = useSelector((store) => store.request);
	const { loading, response } = useResponse();
	if (loading) {
		return <div className="loading loading-spinner text-primary"></div>;
	}
	if (data?.length == 0)
		return <h1 className="font-semibold text-center mb-4">No Request found</h1>;
	const sendResponse = (status, id) => {
		response(status, id);
	};
	return (
		<div>
			<h1 className="font-semibold text-center mb-4">Friend Requests</h1>
			{data && (
				<ul className="list bg-base-100 rounded-box shadow-md">
					{data.map((user) => {
						return (
							<li
								key={user?.senderId?._id}
								className="sm:list-row justify-self-center pb-4 flex flex-col gap-5 items-center border-b last:border-b-0 sm:border-none m-4 "
							>
								<div>
									<img
										className="size-10 sm:size-16 rounded-full"
										src={user?.senderId?.photoUrl}
										alt="profile-photo"
									/>
								</div>
								<div>
									<div>
										{user?.senderId?.firstName + " " + user?.senderId?.lastName}
									</div>
									<div className="text-xs uppercase font-semibold opacity-60">
										{user?.senderId?.age + ", " + user?.senderId?.gender}
									</div>
								</div>
								<p className="list-col-wrap text-xs">{user?.senderId?.about}</p>
								<div className="flex gap-4">
									<button
										disabled={loading}
										onClick={() => sendResponse("rejected", user._id)}
										className="btn btn-primary "
									>
										Reject
									</button>
									<button
										disabled={loading}
										onClick={() => sendResponse("accepted", user._id)}
										className="btn btn-secondary "
									>
										Accept
									</button>
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default Requests;
