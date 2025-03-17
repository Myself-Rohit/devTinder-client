import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./userCard";

const Feed = () => {
	const user = useSelector((state) => state.user);

	return (
		<div>
			<UserCard data={user} />
		</div>
	);
};

export default Feed;
