import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

const useConnections = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const getConnections = async () => {
		try {
			setLoading(true);
			const res = await axios.get(`${BASE_URL}/api/connection`, {
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
		getConnections();
	}, []);
	return { loading, data };
};

export default useConnections;
