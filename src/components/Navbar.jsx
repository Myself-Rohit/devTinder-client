import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout.js";

const Navbar = () => {
	const user = useSelector((state) => state.user);
	const { loading, logout } = useLogout();
	const handleLogout = () => {
		logout();
	};
	return (
		<div className="navbar bg-base-300 shadow-sm sticky top-0 z-10">
			<div className="flex-1">
				<Link to={"/"} className="btn btn-ghost text-xl">
					DevTinder
				</Link>
			</div>
			{user && (
				<div className="flex gap-2">
					<h1 className="mt-2">Welcome, {user?.firstName || "user"}</h1>
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img
									alt="Tailwind CSS Navbar component"
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
						>
							<li>
								<Link to={"/profile"} className="justify-between">
									Profile
									<span className="badge">New</span>
								</Link>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a onClick={handleLogout}>
									{loading ? (
										<span className="loading loading-spinner text-primary"></span>
									) : (
										"Logout"
									)}
								</a>
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
