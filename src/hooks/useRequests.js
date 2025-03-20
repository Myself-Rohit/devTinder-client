import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants.js";

const useRequests = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const getRequests = async () => {
		try {
			setLoading(true);
			const res = await axios.get(`${BASE_URL}/api/connection/pending`, {
				withCredentials: true,
			});
			if (res.data) {
				setData(res.data);
			}
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getRequests();
	}, [data]);
	return { loading, data };
};

export default useRequests;
