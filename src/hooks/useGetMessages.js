import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants.js";
import { toast } from "react-toastify";
import axios from "axios";

const useGetMessages = (receiverId) => {
	const [loading, setLoading] = useState(false);
	const [chats, setChats] = useState([]);
	const getMessages = async () => {
		try {
			setLoading(true);
			const res = await axios.get(
				`${BASE_URL}/api/chat/${receiverId}`,

				{ withCredentials: true }
			);
			if (res.data) {
				setChats(res.data);
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
		getMessages();
	}, []);
	return { loading, chats, setChats };
};
export default useGetMessages;
