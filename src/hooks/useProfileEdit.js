import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/constants.js";
import { toast } from "react-toastify";

const useProfileEdit = () => {
	const [loading, setLoading] = useState(false);
	const profileEdit = async (user) => {
		try {
			setLoading(true);
			const res = await axios.patch(`${BASE_URL}/api/profile/edit`, user, {
				withCredentials: true,
			});
			if (res.data) {
				toast.success("Updated successfully!");
			}
		} catch (error) {
			toast.error(
				error?.response?.data || error?.message || "Failed to save user!"
			);
		} finally {
			setLoading(false);
		}
	};
	return { loading, profileEdit };
};

export default useProfileEdit;
