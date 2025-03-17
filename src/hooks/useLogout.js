import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../slice/userSlice";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../utils/constants.js";

const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);
	const logout = async () => {
		try {
			if (!user) {
				return;
			}
			setLoading(true);
			const res = await axios.get(`${BASE_URL}/api/auth/signout`, {
				withCredentials: true,
			});
			if (res.data) {
				dispatch(removeUser());
				toast.success("logout successfully!");
				navigate("/login");
			}
		} catch (error) {
			toast.error(
				error?.response?.data || error?.message || "Failed to logout!"
			);
		} finally {
			setLoading(false);
		}
	};
	return { loading, logout };
};

export default useLogout;
