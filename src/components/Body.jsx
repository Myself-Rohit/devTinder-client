import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Body = () => {
	return (
		<div>
			<Navbar />
			<div className="min-h-screen bg-base-200">
				<Outlet />
			</div>
		</div>
	);
};

export default Body;
