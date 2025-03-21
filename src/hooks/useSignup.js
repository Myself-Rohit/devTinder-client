import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/constants.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../slice/userSlice.js";

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const signup = async (formData) => {
		try {
			setLoading(true);
			const res = await axios.post(`${BASE_URL}/api/auth/signup`, formData, {
				withCredentials: true,
			});
			if (res.data) {
				dispatch(addUser(res.data));
			}
			navigate("/profile");
		} catch (error) {
			toast.error(
				error?.response?.data || error?.message || "Failed to signup!"
			);
		} finally {
			setLoading(false);
		}
	};
	return { loading, signup };
};
export default useSignup;
