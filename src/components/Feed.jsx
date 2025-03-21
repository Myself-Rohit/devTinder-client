import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";
import useFeed from "../hooks/useFeed.js";

const Feed = () => {
	const { loading } = useFeed();
	const feed = useSelector((store) => store.feed);
	if (loading) {
		return <span className="loading loading-spinner text-primary"></span>;
	}
	if (feed && feed.length == 0)
		return <div className="text-center font-semibold">No feed to show</div>;
	return (
		feed && (
			<div className="flex items-center justify-center">
				<UserCard data={feed[0]} />
			</div>
		)
	);
};

export default Feed;
