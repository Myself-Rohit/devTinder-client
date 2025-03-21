import React, { useState } from "react";
import useLogin from "../hooks/useLogin.js";
import { Link } from "react-router-dom";

const Login = () => {
	const { loading, login } = useLogin();
	const [formData, setFormData] = useState({});
	const [showPassword, setShowPassword] = useState(false);
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = () => {
		login(formData);
	};
	if (loading) {
		return <div className="loading loading-spinner text-primary"></div>;
	}

	return (
		<div className="card bg-base-300 w-96 shadow-sm">
			<div className="card-body ">
				<h2 className="card-title">Login Your Account</h2>
				<fieldset className="fieldset">
					<legend className="fieldset-legend">Email:</legend>
					<input
						onChange={(e) => handleChange(e)}
						name="email"
						type="text"
						className="input"
						placeholder=""
					/>
				</fieldset>
				<fieldset className="fieldset">
					<legend className="fieldset-legend">Password:</legend>
					<div className="relative">
						<input
							onChange={(e) => handleChange(e)}
							name="password"
							type={showPassword ? "text" : "password"}
							className="input"
							placeholder=""
						/>
						<span
							className="absolute right-[7%] top-1/2 -translate-y-1/2 w-5 cursor-pointer"
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? (
								<img src="https://cdn0.iconfinder.com/data/icons/e-commerce-297/3600/46-64.png" />
							) : (
								<img src="https://cdn1.iconfinder.com/data/icons/user-interface-5-basic-outline/24/close_eye__eye_close_eye_password_hidden-64.png" />
							)}
						</span>
					</div>
				</fieldset>
				<Link to={"/signup"} className="text-indigo-600 max-w-max">
					New user? Signup
				</Link>
				<div className="card-actions">
					<button onClick={handleSubmit} className="btn btn-primary">
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
