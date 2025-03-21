import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants.js";
import { addFeed } from "../slice/feedSlice.js";
import { toast } from "react-toastify";

const useFeed = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const getFeed = async () => {
		try {
			setLoading(true);
			const res = await axios.get(`${BASE_URL}/api/user/feed`, {
				withCredentials: true,
			});
			if (res.data) {
				dispatch(addFeed(res.data));
			}
		} catch (error) {
			// toast.error(
			// 	error?.response?.data || error?.message || "Failed to get feed!"
			// );
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getFeed();
	}, []);
	return { loading };
};

export default useFeed;
