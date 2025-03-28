import axios from "axios";
import { BASE_URL } from "../utils/constants.js";
import { toast } from "react-toastify";
import { useState } from "react";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const sendMessage = async (receiverId, message) => {
		try {
			setLoading(true);
			const res = await axios.post(
				`${BASE_URL}/api/chat/send/${receiverId}`,
				{
					message,
				},
				{ withCredentials: true }
			);
			if (res.data) {
				console.log(res.data);
			}
		} catch (error) {
			toast.error(
				error?.response?.data || error?.message || "Something went wrong!"
			);
		} finally {
			setLoading(false);
		}
	};
	return { loading, sendMessage };
};
export default useSendMessage;
