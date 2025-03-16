import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const login = async (formData) => {
		try {
			setLoading(true);
			const res = await axios.post(
				`${BASE_URL}/api/auth/signin`,
				{ formData },
				{ withCredentials: true }
			);
		} catch (error) {
			toast.error(error.message || "Failed to signin!");
		} finally {
			setLoading(false);
		}
	};
	return { loading, login };
};
export default useLogin;
