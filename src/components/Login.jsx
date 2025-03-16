import React, { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
	const { loading, login } = useLogin();
	const [formData, setFormData] = useState({});
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = () => {
		login(formData);
	};

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
					<input
						onChange={(e) => handleChange(e)}
						name="password"
						type="text"
						className="input"
						placeholder=""
					/>
				</fieldset>
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
