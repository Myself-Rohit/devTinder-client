import React from "react";
import useConnections from "../hooks/useConnections.js";
import { Link } from "react-router-dom";

const Connections = () => {
	const { loading, data } = useConnections();
	if (loading) {
		return <div className="loading loading-spinner text-primary"></div>;
	}
	if (data?.length == 0) {
		return (
			<div className="text-center font-semibold mb-4">No Connection found</div>
		);
	}
	return (
		<div>
			<h1 className="text-center font-semibold mb-4">Connections</h1>
			{data && (
				<ul className="list bg-base-100 rounded-box shadow-md">
					{data.map((user) => {
						return (
							<li key={user?._id} className="list-row">
								<div>
									<img
										className="size-10 rounded-full"
										src={user?.photoUrl}
										alt="profile-photo"
									/>
								</div>
								<div>
									<div>{user?.firstName + " " + user?.lastName}</div>
									<div className="text-xs uppercase font-semibold opacity-60">
										{user?.age + ", " + user?.gender}
									</div>
								</div>
								<p className="list-col-wrap text-xs">{user?.about}</p>

								<Link to={`/chat/${user._id}`}>
									<img
										title="chat"
										className="w-10 hover:w-12 duration-300"
										src="https://img.icons8.com/?size=48&id=A5fttVWGxaUw&format=png"
										alt="chat"
									/>
								</Link>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default Connections;
