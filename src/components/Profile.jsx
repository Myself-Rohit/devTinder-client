import React, { useState } from "react";
import UserCard from "./userCard";
import { useDispatch, useSelector } from "react-redux";
import useProfileEdit from "../hooks/useProfileEdit.js";
import { addUser } from "../slice/userSlice.js";

const Profile = () => {
	const user = useSelector((state) => state.user);

	const [formData, setFormData] = useState({
		firstName: user?.firstName,
		lastName: user?.lastName,
		email: user?.email,
		age: user?.age,
		gender: user?.gender,
		about: user?.about,
	});
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const { loading, profileEdit } = useProfileEdit();
	const dispatch = useDispatch();
	const saveInfo = () => {
		profileEdit(formData);
		dispatch(addUser(formData));
	};
	if (loading) {
		return <span className="loading loading-spinner text-primary"></span>;
	}
	return (
		<div className="flex flex-col sm:flex-row bg-base-300 items-center sm:items-start sm:justify-center sm:mt-10 p-5 gap-5">
			<div className="flex flex-col gap-3 min-w-1/2">
				<div>
					<label className="input validator">
						<svg
							className="h-[1em] opacity-50"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<g
								strokeLinejoin="round"
								strokeLinecap="round"
								strokeWidth="2.5"
								fill="none"
								stroke="currentColor"
							>
								<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</g>
						</svg>
						<input
							type="input"
							required
							placeholder="FirstName"
							pattern="[A-Za-z][A-Za-z0-9\-]*"
							minLength="3"
							maxLength="30"
							title="Only letters, numbers or dash"
							name="firstName"
							value={formData?.firstName}
							onChange={handleChange}
						/>
					</label>
				</div>

				<div>
					<label className="input validator">
						<svg
							className="h-[1em] opacity-50"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<g
								strokeLinejoin="round"
								strokeLinecap="round"
								strokeWidth="2.5"
								fill="none"
								stroke="currentColor"
							>
								<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</g>
						</svg>
						<input
							type="input"
							required
							placeholder="LastName"
							pattern="[A-Za-z][A-Za-z0-9\-]*"
							minLength="3"
							maxLength="30"
							title="Only letters, numbers or dash"
							name="lastName"
							value={formData?.lastName}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<label className="input validator">
						<svg
							className="h-[1em] opacity-50"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<g
								strokeLinejoin="round"
								strokeLinecap="round"
								strokeWidth="2.5"
								fill="none"
								stroke="currentColor"
							>
								<rect width="20" height="16" x="2" y="4" rx="2"></rect>
								<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
							</g>
						</svg>
						<input
							type="email"
							placeholder="mail@site.com"
							required
							name="email"
							value={formData?.email}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<input
						type="number"
						className="input validator"
						required
						placeholder="Enter your age"
						name="age"
						value={formData?.age}
						onChange={handleChange}
					/>
				</div>

				<div>
					<select
						className="select"
						name="gender"
						selected={formData?.gender}
						onChange={(e) =>
							setFormData({ ...formData, gender: e.target.value.toLowerCase() })
						}
					>
						<option disabled={true}>Choose your gender</option>
						<option>Male</option>
						<option>Female</option>
						<option>Other</option>
					</select>
				</div>
				<div>
					<textarea
						className="textarea"
						placeholder="About"
						name="about"
						value={formData?.about}
						onChange={handleChange}
					></textarea>
				</div>
				<button onClick={saveInfo} className="btn btn-primary self-start">
					Save
				</button>
			</div>
			<UserCard data={formData} />
		</div>
	);
};

export default Profile;
