import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constants.js";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { removeRequest } from "../slice/requestSlice.js";

const useResponse = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const response = async (status, connectionId) => {
		try {
			setLoading(true);
			const res = await axios.post(
				`${BASE_URL}/api/connection/response/${status}/${connectionId}`,
				{},
				{
					withCredentials: true,
				}
			);
			if (res.data) {
				dispatch(removeRequest(connectionId));
				toast.success("Request " + status);
			}
		} catch (error) {
			toast.error(
				error?.response?.data || error?.message || "Something went wrong!"
			);
		} finally {
			setLoading(false);
		}
	};
	return { loading, response };
};

export default useResponse;
