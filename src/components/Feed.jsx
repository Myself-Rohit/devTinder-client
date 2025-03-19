import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";
import useFeed from "../hooks/useFeed.js";

const Feed = () => {
	const { loading, data } = useFeed();
	const feed = useSelector((store) => store.feed);
	if (loading) {
		return <span className="loading loading-spinner text-primary"></span>;
	}
	if (data && data.length == 0) return <div>No feed to show</div>;
	return (
		feed && (
			<div>
				<UserCard data={feed[0]} />
			</div>
		)
	);
};

export default Feed;
