import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../slice/userSlice";

const useProfile = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const getProfile = async () => {
		try {
			setLoading(true);
			const res = await axios.get(`${BASE_URL}/api/profile`, {
				withCredentials: true,
			});
			if (res.data) {
				setData(res.data);
				dispatch(addUser(res.data));
			}
		} catch (error) {
			navigate("/login");
			// toast.error(
			// 	error?.response?.data || error?.message || "Failed to fetch user!"
			// );
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		if (!data) {
			getProfile();
		}
	}, []);
	return { loading, data };
};

export default useProfile;
