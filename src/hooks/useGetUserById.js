import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants.js";
import { toast } from "react-toastify";
import axios from "axios";

const useGetUserById = (userId) => {
	const [loading, setLoading] = useState(false);
	const [userData, setUserData] = useState(null);
	const getUser = async () => {
		try {
			setLoading(true);
			const res = await axios.get(`${BASE_URL}/api/user/get/${userId}`, {
				withCredentials: true,
			});
			if (res.data) {
				setUserData(res.data);
			}
		} catch (error) {
			toast.error(
				error?.response?.data || error?.message || "Something went wrong!"
			);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getUser();
	}, []);
	return { loading, userData, setUserData };
};
export default useGetUserById;
