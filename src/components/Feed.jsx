import React from "react";
import { useSelector } from "react-redux";

const Feed = () => {
	const user = useSelector((state) => state.user);

	return <div>Feed {user?.firstName}</div>;
};

export default Feed;
