import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/constants.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../slice/userSlice.js";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const login = async (formData) => {
		try {
			setLoading(true);
			const res = await axios.post(`${BASE_URL}/api/auth/signin`, formData, {
				withCredentials: true,
			});
			if (res.data) {
				dispatch(addUser(res.data));
			}
			navigate("/");
		} catch (error) {
			toast.error(
				error?.response?.data || error?.message || "Failed to signin!"
			);
		} finally {
			setLoading(false);
		}
	};
	return { loading, login };
};
export default useLogin;
