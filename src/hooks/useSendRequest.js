import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constants.js";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { removeFeed } from "../slice/feedSlice.js";

const useSendRequest = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const sendRequest = async (status, receiverId) => {
		try {
			setLoading(true);
			const res = await axios.post(
				`${BASE_URL}/api/connection/send/${status}/${receiverId}`,
				{},
				{
					withCredentials: true,
				}
			);
			if (res.data) {
				toast.success("Request " + status);
				dispatch(removeFeed(receiverId));
			}
		} catch (error) {
			toast.error(
				error?.response?.data || error?.message || "Something went wrong!"
			);
		} finally {
			setLoading(false);
		}
	};
	return { loading, sendRequest };
};

export default useSendRequest;
