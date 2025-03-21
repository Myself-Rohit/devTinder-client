import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import useProfile from "../hooks/useProfile.js";

const Body = () => {
	const { loading } = useProfile();
	if (loading) {
		return <div className="loading loading-spinner text-primary"></div>;
	}
	return (
		<div>
			<Navbar />
			<div className="min-h-screen relative bg-base-200 p-5 flex justify-center items-start">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Body;
