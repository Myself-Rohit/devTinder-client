import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constants.js";
import { toast } from "react-toastify";
import { addUser } from "../slice/userSlice.js";
import { useDispatch } from "react-redux";

const useProfileEdit = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const profileEdit = async (user) => {
		try {
			setLoading(true);
			const res = await axios.patch(`${BASE_URL}/api/profile/edit`, user, {
				withCredentials: true,
			});
			if (res.data) {
				toast.success("Updated successfully!");
				dispatch(addUser(res.data));
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
