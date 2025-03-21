import React, { useState } from "react";
import useSignup from "../hooks/useSignup.js";
import { Link } from "react-router-dom";

const Signup = () => {
	const [formData, setFormData] = useState({});
	const [showPassword, setShowPassword] = useState(false);
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const { loading, signup } = useSignup();
	const handleSignup = () => {
		signup(formData);
	};
	if (loading) {
		return <span className="loading loading-spinner text-primary"></span>;
	}
	return (
		<div className="card bg-base-300 w-96 shadow-sm">
			<div className="card-body ">
				<h2 className="card-title">Create Your Account</h2>
				<fieldset className="fieldset">
					<legend className="fieldset-legend">FirsName:</legend>
					<input
						onChange={(e) => handleChange(e)}
						name="firstName"
						type="text"
						className="input"
						placeholder=""
					/>
				</fieldset>
				<fieldset className="fieldset">
					<legend className="fieldset-legend">LastName:</legend>
					<input
						onChange={(e) => handleChange(e)}
						name="lastName"
						type="text"
						className="input"
						placeholder=""
					/>
				</fieldset>
				<fieldset className="fieldset">
					<legend className="fieldset-legend">Gender:</legend>
					<select
						className="select"
						name="gender"
						onChange={(e) =>
							setFormData({
								...formData,
								gender: e.target.value.toLowerCase(),
							})
						}
					>
						<option selected disabled={true}>
							Choose your gender
						</option>
						<option value={"male"}>Male</option>
						<option value={"female"}>Female</option>
						<option value={"other"}>Other</option>
					</select>
				</fieldset>
				<fieldset className="fieldset">
					<legend className="fieldset-legend">Email:</legend>
					<input
						onChange={(e) => handleChange(e)}
						name="email"
						type="email"
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
				<Link to={"/login"} className="text-indigo-600 max-w-max">
					Already a user? Signin
				</Link>
				<div className="card-actions">
					<button onClick={handleSignup} className="btn btn-primary">
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
};

export default Signup;
