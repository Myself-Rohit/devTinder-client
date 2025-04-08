import React from "react";
import useSendRequest from "../hooks/useSendRequest.js";
import { useSelector } from "react-redux";

const UserCard = ({ data }) => {
	const { loading, sendRequest } = useSendRequest();
	const user = useSelector((store) => store.user);
	const handleRequest = (status, receiverId) => {
		sendRequest(status, receiverId);
	};
	if (loading) {
		return <div className="loading loading-spinner text-primary"></div>;
	}
	return (
		<div className="card bg-base-100 max-w-96 shadow-sm">
			<figure>
				<img
					className="w-2/3"
					src={
						typeof data?.photoUrl === "string" ? data?.photoUrl : user?.photoUrl
					}
					alt="profile-image"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{data?.firstName} {data?.lastName}
				</h2>
				<p>{data?.age + ", " + data?.gender}</p>
				<p>{data?.about}</p>

				<div className="card-actions justify-end">
					<button
						onClick={() => handleRequest("ignored", data?._id)}
						className="btn btn-active btn-primary"
					>
						Ignore
					</button>
					<button
						onClick={() => handleRequest("interested", data?._id)}
						className="btn btn-active btn-secondary"
					>
						Interested
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
